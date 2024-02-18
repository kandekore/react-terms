import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Card from "react-bootstrap/Card";
import styles from "./concepts/Terms.module.css";


const SEARCH_CONCEPTS_BY_KEYWORD = gql`
  query SearchConcepts($keyword: String!) {
    searchConceptsByDescription(keyword: $keyword) {
      term
      description
      code
      category
    }
  }
`;

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  // Use the query to fetch data
  const { data, loading, error } = useQuery(SEARCH_CONCEPTS_BY_KEYWORD, {
    variables: { keyword: query }
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {data.searchConceptsByDescription.length > 0 ? (
        <ul>
          {data.searchConceptsByDescription.map((concept) => (
  <Card className="box" key={concept.term}>
    <Card.Header>
      <h3>{concept.term}</h3>{" "}
      <Card.Text>
        
        {concept.category ? (
          <Link to={`/${concept.category.replace(/\s+/g, "-")}`}>
            {concept.category}
          </Link>
        ) : (
          " "
        )}
        
      </Card.Text>
    </Card.Header>

    <Card.Body>
      <Card.Text>{concept.description} </Card.Text>
      {concept.code && (
        <pre className={styles.codeSnippet}>
          <code>{concept.code}</code>
        </pre>
      )}
    </Card.Body>
  </Card>
))}

        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
