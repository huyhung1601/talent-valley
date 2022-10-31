import { useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { CompanyReviewEdit } from "./CompanyReviewEdit";
import { toast } from "react-toastify";
import { MY_COMPANY } from "../../../graphql/queries/userQueries";
import { UPDATE_COMPANY_REVIEW } from "../../../graphql/mutations/companyMutations";
import { useForm } from "../../../hooks/useForm";
import { Spinner } from "../../UIs";

const initialValues = {
  website: "",
  industry: "",
  location: "",
  about: "",
};

export const CompanyReview = ({ company, role }) => {
  const [onEdit, setOnEdit] = useState(false);
  const { values, setValues, handleChange, resetValues } =
    useForm(initialValues);
  const [updateCompanyReview, { loading }] = useMutation(
    UPDATE_COMPANY_REVIEW,
    {
      variables: values,
      update: (cache, { data: { updateCompanyReview } }) => {
        const { myCompany } = cache.readQuery({ query: MY_COMPANY });
        cache.writeQuery({
          query: MY_COMPANY,
          data: { myCompany: { ...myCompany, ...values } },
        });
        toast(updateCompanyReview.message);
        resetValues();
        setOnEdit(false);
      },
    }
  );
  const handleEdit = () => {
    setOnEdit(!onEdit);
    setValues({
      website: company?.website,
      industry: company?.industry,
      location: company?.location,
      about: company?.about,
    });
  };

  const handleCancelEdit = () => {
    setOnEdit(false);
    resetValues();
  };

  const handleUpdateCompanyReview = (e) => {
    e.preventDefault();
    updateCompanyReview();
  };

  const companyInfo = ["website", "industry", "location"];

  return (
    <>
      <div className="d-flex flex-column gap-2">
        <div className="d-flex align-items-center gap-3">
          <h4>Company Review</h4>
          {loading && <Spinner />}
          {role === "recruiter" && !onEdit && (
            <button
              className="btn text-primary border border-primary btn-sm"
              onClick={handleEdit}
            >
              <MdEdit />
            </button>
          )}
        </div>
        {onEdit ? (
          <CompanyReviewEdit
            values={values}
            handleChange={handleChange}
            handleCancelEdit={handleCancelEdit}
            handleUpdateCompanyReview={handleUpdateCompanyReview}
          />
        ) : (
          <div>
            {companyInfo.map((x, index) => (
              <div key={index} className="row">
                <div className="col-3 fw-bold text-capitalize">
                  <p>{x}</p>
                </div>
                <div className="col-9">
                  {index === 0 ? (
                    <a
                      className="text-primary mt"
                      href="https://indeed.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {company[x]}
                    </a>
                  ) : (
                    <p>{company[x]} </p>
                  )}
                </div>
                <div className="col-9 "></div>
              </div>
            ))}
            <div className="row mt-3">
              <p>{company.about}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
