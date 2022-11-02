import { useMutation, useQuery } from "@apollo/client";
import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  COMPLETE_INTERVIEW,
  GET_INTERVIEW_URL,
} from "../../graphql/mutations/interviewMutations";
import { GET_INTERVIEW } from "../../graphql/queries/interviewQueries";
import { Spinner } from "../UIs";
import { InterviewComplete } from "./interviewProcess/interviewComplete/InterviewComplete";
import { InterviewIntro } from "./interviewProcess/interviewIntro/InterviewIntro";
import { InterviewQuestions } from "./interviewProcess/interviewQuestions/InterviewQuestions";
import { InterviewReview } from "./interviewProcess/interviewReview/InterviewReview";

export const InterviewContainer = () => {
  const videoRef = useRef(null);
  const recorderRef = useRef();
  const videos = useRef([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState(1);
  const [isRecording, setIsRecording] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const { interviewId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error, data } = useQuery(GET_INTERVIEW, {
    variables: { interviewId },
  });

  const [getInterviewUrl] = useMutation(GET_INTERVIEW_URL, {
    variables: { fileName: file?.name },
    update: async (cache, { data: { getInterviewUrl } }) => {
      const uploadVideoToS3 = async () => {
        try {
          await fetch(getInterviewUrl?.url, {
            method: "PUT",
            headers: {
              "Content-Type": file.type,
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: file,
          });
          toast("Save video successfully!");
        } catch (err) {
          toast("Cannot save video!");
        }
      };
      await uploadVideoToS3();
      setQuestions(
        questions.map((x, index) =>
          index === question - 1
            ? { ...x, answer: getInterviewUrl?.url.split("?")[0] }
            : x
        )
      );
      handleNext();
      handleClearRecord();
    },
  });

  const [completeInterview] = useMutation(COMPLETE_INTERVIEW, {
    variables: { interviewId, questions },
    update: (cache, { data: { completeInterview } }) => {
      cache.writeQuery({
        query: GET_INTERVIEW,
        variables: { interviewId },
        data: { ...data?.interview, complete: true, questions: questions },
      });
      setIsComplete(true);
      toast(completeInterview.message);
    },
  });

  const getVideo = () => {
    window.navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.muted = true;
        videoRef.current.play();
        console.log("run");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRecord = () => {
    getVideo();
    setIsRecording(true);
    recorderRef.current = new MediaRecorder(videoRef.current.srcObject);
    recorderRef.current.start(500);
    recorderRef.current.ondataavailable = (e) => {
      videos.current.push(e.data);
    };
  };

  const handleStop = () => {
    setIsRecording(false);
    recorderRef.current.stop();
    // const blob = new Blob(videos, {
    //   type: "video/webm",
    // });

    const file = new File(
      videos.current,
      `${interviewId}&question_${question}.webm`,
      {
        type: "video/webm",
      }
    );
    setFile(file);
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
  };

  const handleClearRecord = () => {
    setVideoUrl(null);
    videos.current = [];
    setFile(null);
    getVideo();
  };

  const handleSave = () => {
    if (file) {
      getInterviewUrl();
    }
  };

  const handleNext = () => {
    if (question < data?.interview.questions.length) {
      setQuestion(question + 1);
    } else {
      navigate("review");
    }
  };

  const handleStartInterview = () => {
    navigate("questions");
  };

  const handleSubmit = () => {
    if (questions.every((x) => x.answer !== "")) {
      completeInterview();
    } else {
      console.log("Not answer all questions");
    }
  };

  useEffect(() => {
    if (data?.interview) {
      setQuestions(
        data?.interview.questions.map((x) => ({
          question: x.question,
          answer: x.answer,
        }))
      );
      setIsComplete(data?.interview.complete);
    }
  }, [data?.interview]);

  useEffect(() => {
    if (isComplete) {
      navigate("complete");
    } else {
      navigate(
        location.pathname.split("/").includes("complete")
          ? "introduction"
          : location.pathname
      );
    }
  }, [location.pathname, isComplete, navigate]);

  useEffect(() => {
    if (location.pathname.split("/").includes("questions")) {
      getVideo();
    }
  }, [location.pathname]);

  if (error) return <h6>Something went wrong!</h6>;

  return (
    <div className="d-flex align-items-center justify-content-center minH-75 w-100">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Routes>
            <Route
              path="introduction"
              element={
                <InterviewIntro handleStartInterview={handleStartInterview} />
              }
            />
            <Route
              path="questions"
              element={
                <InterviewQuestions
                  question={question}
                  questions={questions}
                  videoRef={videoRef}
                  videoUrl={videoUrl}
                  isRecording={isRecording}
                  handleClearRecord={handleClearRecord}
                  handleRecord={handleRecord}
                  handleSave={handleSave}
                  handleStop={handleStop}
                  handleNext={handleNext}
                />
              }
            />
            <Route
              path="review"
              element={
                <InterviewReview
                  questions={questions}
                  handleSubmit={handleSubmit}
                />
              }
            />
            <Route
              path="complete"
              element={
                <InterviewComplete updatedAt={data?.interview.updatedAt} />
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
};
