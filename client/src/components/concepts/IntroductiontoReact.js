
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";
import { gql, useQuery } from "@apollo/client";

const GET_CATEGORY_BY_NAME = gql`
  query GetCategoryByName($name: String!) {
    getCategoryByName(name: $name) {
      name
      description
      concepts {
        term
        description
        code
      }
    }
  }
`;

function IntroductionToReact() {
  const { loading, error, data } = useQuery(GET_CATEGORY_BY_NAME, {
    variables: { name: "Introduction to React" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

const categoryData = data.getCategoryByName;

  return (
    <div>
     
      <h2>{categoryData.name}</h2>
      <p>{categoryData.description}</p>

      <Accordion defaultActiveKey="0" className="mb-3">
        {categoryData.concepts.map((concept, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{concept.term}</Accordion.Header>
            <Accordion.Body>
              <p>{concept.description}</p>
              {concept.code && (
                <pre className={styles.codeSnippet}>
                  <code>{concept.code}</code>
                </pre>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default IntroductionToReact;
