import { Spinner } from "../../spinner/Spinner";
import { UploadFileBtn } from "../../uploadFileBtn/UploadFileBtn";
import { useUpdateResume } from "../../../hooks/useUpdateResume";

export const StepOne = ({ myProfile }) => {
  const { loading, handleUploadResume, objectUrl } = useUpdateResume();
  return (
    <div>
      <h3 className="mb-3">Resume</h3>
      <div className="d-flex flex-column gap-2">
        <div className="card  ">
          <div className="card-body d-flex flex-column align-items-center gap-2 ">
            {loading ? (
              <Spinner />
            ) : (
              <>
                {myProfile.resume && (
                  <iframe
                    src={objectUrl || myProfile.resume}
                    height="400px"
                    width="260px  "
                    title="resume"
                  ></iframe>
                )}
              </>
            )}

            <UploadFileBtn
              text="Upload Resume "
              color="secondary"
              accept=".pdf"
              handleUploadFile={handleUploadResume}
            />
            {/* <button className="btn btn-secondary">Replace</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
