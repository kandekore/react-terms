
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import styles from "./components/concepts/Terms.module.css";
import Links from "./Routes";
import { Helmet } from "react-helmet";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <Router>
        <Header />
        <Helmet>
          <title>React Concepts and Code Examples | By D.Kandekore</title>
          <meta name="description" content="This site is the ultimate React learning platform, tailored for both novices beginning their programming journey and seasoned developers seeking a concise reference or to refresh their knowledge on specific concepts. Our comprehensive guide navigates through the expansive world of React, covering fundamental basics to advanced topics." />
          
        </Helmet>
        <div className="d-flex flex-column min-vh-100">
          <main className={`flex-grow-1 ${styles.body}`}>
            <ApolloProvider client={client}>
              <Links />
                
            </ApolloProvider>
          </main>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;


