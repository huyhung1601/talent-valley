import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "../../hooks/useForm";
import { ContactForm } from "./ContactForm";
import { ImLocation } from "react-icons/im";
import { FaUser, FaPhone } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useMutation } from "@apollo/client";
import { UPDATE_CONTACT } from "../../graphql/mutations/userMutations";
import { MY_PROFILE } from "../../graphql/queries/userQueries";

export const ContactCard = ({ myProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { values, handleChange } = useForm(myProfile);
  const [updateContact] = useMutation(UPDATE_CONTACT, {
    variables: {
      username: values.username,
      address: values.address,
      number: values.number,
    },
    update: (cache, { data: { updateContact } }) => {
      cache.writeQuery({
        query: MY_PROFILE,
        data: { myProfile: { ...values } },
      });
      toast(updateContact.message);
    },
    onError(err) {
      console.log(err);
    },
  });

  const handleUpdateContact = () => {
    updateContact();
    setIsEditing(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h6>Contact Information</h6>
          {!isEditing && (
            <button
              className="btn btn-light btn-sm"
              onClick={() => setIsEditing(true)}
            >
              <MdEdit />
            </button>
          )}
        </div>
        {isEditing ? (
          <ContactForm
            values={values}
            handleChange={handleChange}
            closeEdit={() => setIsEditing(false)}
            handleUpdateContact={handleUpdateContact}
          />
        ) : (
          <div className="d-flex flex-column gap-1">
            <div className="d-flex align-items-center gap-3">
              <FaUser />
              <p>{myProfile.username || "full name"}</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <ImLocation />
              {myProfile.address || "address"}
            </div>
            <div className="d-flex align-items-center gap-3">
              <FaPhone />
              {myProfile.number || "phone"}{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
