import React from "react";
import { AiOutlineUpload } from "react-icons/ai";

export const UploadFileBtn = ({ text, accept, handleUploadFile, color }) => {
  return (
    <div className={`btn btn-${color}`} role="button">
      <label role="button" htmlFor="uploadFileBtn" className="shareImg">
        <AiOutlineUpload className="me-2" />
        <span>{text && text}</span>
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        id="uploadFileBtn"
        accept={accept}
        onChange={handleUploadFile}
      />
    </div>
  );
};
