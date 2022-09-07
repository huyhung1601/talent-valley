import React from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations/userMutations";
import { useForm } from "../hooks/useForm";
import { loginSuccess } from "../features/auth/authSlice";
import { Spinner } from "../components/spinner/Spinner";
import { useStorage } from "../hooks/userStorage";

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, handleChange, resetValues } = useForm(initialValue);
  const dispatch = useDispatch();
  const { setStorageData } = useStorage();

  const [login, { loading }] = useMutation(LOGIN, {
    variables: values,
    update: (cache, { data: { login } }) => {
      setStorageData("user", login);
      dispatch(loginSuccess(login));
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    // resetValues();
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <form className="card rounded p-4" onSubmit={handleLogin}>
        <div className="h4 text-center mb-3">Login</div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
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

        <button type="submit" className="btn btn-primary">
          {loading ? <Spinner /> : <span>Submit</span>}
        </button>
      </form>
    </div>
  );
};

export default Login;
