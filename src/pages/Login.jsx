import React from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations/userMutations";
import { useForm } from "../hooks/useForm";
import { loginSuccess } from "../features/auth/authSlice";
import { Spinner } from "../components/spinner/Spinner";
import { useStorage } from "../hooks/useStorage";
import { useState } from "react";

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, handleChange, resetValues } = useForm(initialValue);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const [login, { loading }] = useMutation(LOGIN, {
    variables: values,
    update: (cache, { data: { login } }) => {
      dispatch(loginSuccess(login));
      resetValues();
      setErrors({});
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.errors);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <form
        className="card rounded p-4 minW-50 w-md-100 "
        onSubmit={handleLogin}
      >
        <div className="h4 text-center mb-3">Login</div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
            id="email"
            require="true"
          />
          {errors?.email && (
            <small className="text-danger">{errors?.email}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            name="password"
            className="form-control"
            id="password"
            require="true"
          />
          {errors?.password && (
            <small className="text-danger">{errors?.password}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          {loading ? <Spinner /> : <span>Submit</span>}
        </button>
      </form>
    </div>
  );
};

export default Login;
