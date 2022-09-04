import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Header } from "./components";

const cache = new InMemoryCache({});

const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache,
  });

  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ApolloProvider>
      </Provider>
    </>
  );
};

export default App;
