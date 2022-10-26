import React from "react";

export const InterviewIntro = ({ handleStartInterview }) => {
  return (
    <div className="bg-light w-50 w-md-100  h-100 p-2">
      <div className="d-flex flex-column gap-3 align-items-center justify-content-between  p-3 bg-white h-100">
        <div>
          <h4 className="mb-3 text-center">Introduction</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            magnam eveniet earum labore ab, asperiores corrupti eaque quia
            laudantium dolore doloribus quisquam aspernatur eum velit dolores
            aliquam consequuntur, expedita nam.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            error maiores animi non commodi nam! Dolor illum eum repellat ab
            porro incidunt cupiditate. Pariatur, itaque fugit ipsa tempore
            adipisci perferendis.
          </p>
        </div>

        <button className="btn btn-primary" onClick={handleStartInterview}>
          Start
        </button>
      </div>
    </div>
  );
};
