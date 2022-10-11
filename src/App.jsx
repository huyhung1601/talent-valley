import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Header } from "./components";
import { AuthRoute } from "./components/routes/AuthRoute";
import Profile from "./pages/Profile";
import Company from "./pages/Company";
import MyJobs from "./pages/MyJobs";
import Apply from "./pages/Apply";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        jobs: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(window.localStorage.getItem("user"))?.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const App = () => {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });

  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container" style={{ height: "calc(100vh - 75px)" }}>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route
                path="/login"
                element={
                  <AuthRoute check={!user}>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <AuthRoute check={!user}>
                    <Register />
                  </AuthRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <AuthRoute check={user}>
                    <Profile />
                  </AuthRoute>
                }
              />
              <Route
                path="/myjobs/*"
                element={
                  <AuthRoute check={user}>
                    <MyJobs />
                  </AuthRoute>
                }
              />
              <Route
                path="/apply/:id/form/*"
                element={
                  <AuthRoute check={user}>
                    <Apply />
                  </AuthRoute>
                }
              />
              <Route path="/company/*" element={<Company />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
