import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UPDATE_RESUME } from "../graphql/mutations/userMutations";
import { MY_PROFILE } from "../graphql/queries/userQueries";

export const useUpdateResume = () => {
  const [file, setFile] = useState(null);
  const [objectUrl, setObjectUrl] = useState(null);

  const [updateResume, { loading }] = useMutation(UPDATE_RESUME, {
    variables: { fileName: file?.name },
    update: (cache, { data: { updateResume } }) => {
      const { myProfile } = cache.readQuery({ query: MY_PROFILE });
      //update cache
      cache.writeQuery({
        query: MY_PROFILE,
        data: {
          myProfile: { ...myProfile, resume: updateResume.url.split("?")[0] },
        },
      });

      //uploade file to S3
      const uploadResumeToS3 = async () => {
        try {
          await fetch(updateResume?.url, {
            method: "PUT",
            headers: {
              "Content-Type": file.type,
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: file,
          });
          toast("Upload Resume successfully!");
        } catch (err) {
          toast("Something went wrong!");
        }
      };
      uploadResumeToS3();
    },
    onError(err) {
      toast("Something went wrong!");
    },
  });

  const handleUploadResume = (e) => {
    const file = e.target?.files[0];
    setObjectUrl(URL.createObjectURL(file));
    setFile(file);
  };

  useEffect(() => {
    if (file) {
      updateResume();
    }
  }, [file, updateResume]);

  return { loading, handleUploadResume, objectUrl };
};
