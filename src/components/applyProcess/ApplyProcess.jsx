import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "../UIs/spinner/Spinner";
import { ProgressBar } from "./progressBar/ProgressBar";
import { StepOne } from "./stepOne/StepOne";
import { StepThree } from "./stepThree/StepThree";
import { StepTwo } from "./stepTwo/StepTwo";
import { useApplyProcess } from "./useApplyProcess";

export const ApplyProcess = ({ job }) => {
  const {
    loading,
    steps,
    step,
    myProfile,
    handleLastStep,
    handleNextStep,
    handleToStep,
    handleApplyJob,
  } = useApplyProcess({ job });

  return (
    <div className="card minW-75 w-md-100 ">
      {loading ? (
        <Spinner />
      ) : (
        <div className="card-body d-flex flex-column gap-3 ">
          <ProgressBar step={step} steps={steps} lastStep={handleLastStep} />
          <Routes>
            <Route path="resume" element={<StepOne myProfile={myProfile} />} />
            <Route path="contact" element={<StepTwo myProfile={myProfile} />} />
            <Route
              path="review"
              element={
                <StepThree
                  handleToStep={(stepTo) => handleToStep(stepTo)}
                  myProfile={myProfile}
                />
              }
            />
            <Route path="*" element={<Navigate to="resume" replace />} />
          </Routes>
          {step === 2 ? (
            <button
              onClick={handleApplyJob}
              className="btn btn-primary fw-bold w-auto"
            >
              Submit application
            </button>
          ) : (
            <button
              className="btn btn-primary fw-bold w-auto"
              onClick={handleNextStep}
            >
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  );
};
