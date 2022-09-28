import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Header } from "./components";
import { AuthRoute } from "./components/routes/AuthRoute";
import Profile from "./pages/Profile";
import Company from "./pages/Company";
import MyJobs from "./pages/MyJobs";

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

const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
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
