import React from "react";

export const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers?.map((x) => (
          <th className="text-capitalise">{x}</th>
        ))}
      </tr>
    </thead>
  );
};
