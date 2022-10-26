import React from "react";
import { MdEdit } from "react-icons/md";

export const CompanyCulture = ({ role }) => {
  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex align-items-center gap-3">
        <h4>Company culture</h4>
        {role === "recruiter" && (
          <button className="btn text-primary border border-primary btn-sm">
            <MdEdit />
          </button>
        )}
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sint
        ipsam tenetur obcaecati vitae voluptates itaque, asperiores, inventore
        aperiam voluptatibus perferendis similique corrupti adipisci qui neque
        quidem veniam voluptas. Voluptatem?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae ex
        nihil obcaecati labore itaque nesciunt perferendis maxime culpa,
        cupiditate atque ipsam voluptate deserunt quod distinctio iste veritatis
        fuga nam.
      </p>
    </div>
  );
};
