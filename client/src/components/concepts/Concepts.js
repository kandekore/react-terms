import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Card from "react-bootstrap/Card";
import styles from "./Terms.module.css";
import { Helmet } from "react-helmet";

// GraphQL query
const GET_CONCEPT_BY_TERM = gql`
  query Query($term: String!) {
    getConceptByTerm(term: $term) {
      description
      code
      category
      term
    }
  }
`;

const Concept = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const term = searchParams.get("query");

  // Fetch data using the query
  const { data, loading, error } = useQuery(GET_CONCEPT_BY_TERM, {
    variables: { term }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
       <Helmet>
        
        <title>{`${data.getConceptByTerm.term} concept for React`}</title>
        <meta name="description" content={data.getConceptByTerm.description} />
        
        <meta property="og:title" content={`${data.getConceptByTerm.term} Concept for React`} />
        <meta property="og:description" content={data.getConceptByTerm.description} />

      </Helmet>
      {data && data.getConceptByTerm ? (
        <Card className="box">
          <Card.Header>
            <h2>{data.getConceptByTerm.term}</h2>
            <Card.Text>
              (Category:{" "}
              <a
                href={`/${data.getConceptByTerm.category.replace(/\+/g, "").replace(/\s+/g, "-")}
                `}
              >
                {data.getConceptByTerm.category}
              </a>
              )
            </Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Text>{data.getConceptByTerm.description}</Card.Text>
            {data.getConceptByTerm.code && (
              <pre className={styles.codeSnippet}>
                <code>{data.getConceptByTerm.code}</code>
              </pre>
            )}
          </Card.Body>
        </Card>
      ) : (
        <p>No concept found for "{term}".</p>
      )}
    </div>
  );
};

export default Concept;