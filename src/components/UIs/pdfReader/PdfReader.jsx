import React from "react";

export const PdfReader = ({ src, title }) => {
  return <iframe src={src} height="100%" width="100%" title={title} />;
};
