import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Spinner } from "../../components/UIs/spinner/Spinner";
import { registerSuccess } from "../../features/auth/authSlice";
import { REGISTER } from "../../graphql/mutations/userMutations";
import { useForm } from "../../hooks/useForm";
import { toast } from "react-toastify";

const initialValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Register = () => {
  const { values, handleChange, resetValues } = useForm(initialValue);
  const [errors, setErrors] = useState({});
  const dispath = useDispatch();

  const [register, { loading }] = useMutation(REGISTER, {
    variables: { registerInput: values },
    update(proxy, { data: { register } }) {
      dispath(registerSuccess({ token: register.token }));
      toast("Register successfully!");
      resetValues();
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.errors);
    },
  });

  useEffect(() => {
    setErrors((p) => ({
      ...p,
      confirmPassword:
        values.password !== values.confirmPassword ? "Password not match!" : "",
    }));
  }, [values.password, values.confirmPassword]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (values.password === values.confirmPassword) {
      register();
      setErrors({});
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
      <form
        className="card rounded p-4 w-50 minW-50 w-md-100 "
        onSubmit={handleRegister}
      >
        <div className="h4 text-center mb-3">Register</div>
        <div className="mb-3">
          <label for="username" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            className="form-control"
            id="username"
            required
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
            id="email"
            required
          />
          {errors?.email && (
            <small className="text-danger">{errors?.email}</small>
          )}
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            name="password"
            require
            className="form-control"
            id="password"
          />
        </div>
        <div className="mb-3">
          <label for="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            require
            className="form-control"
            id="confirmPassword"
          />
          {errors?.confirmPassword && (
            <small className="text-danger">{errors?.confirmPassword}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          {loading ? <Spinner /> : <span>Register</span>}
        </button>
      </form>
    </div>
  );
};
