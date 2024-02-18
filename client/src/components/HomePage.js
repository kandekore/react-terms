import React from "react";
import { Link } from "react-router-dom";

// Assuming this JSON data is imported or defined somewhere in your project
import categoriesData from "./terms.json";

function HomePage() {
  // Function to split categories into three equal parts for the columns
  const splitCategories = (categories) => {
    let size = Math.ceil(categories.length / 3);
    return [0, 1, 2].map((_, i) => categories.slice(i * size, i * size + size));
  };

  const categoryColumns = splitCategories(categoriesData.categories);

  return (
    <div>
      <h1 className="heading">React Reference Resource</h1>
      <p>Welcome to our React Reference Resource, the ultimate guide for developers looking to master React, the powerful JavaScript library for building user interfaces. Whether you're a beginner eager to dive into the world of React or an experienced developer seeking to polish your skills, our comprehensive resource provides clear, concise, and up-to-date information to support your learning journey.</p>

      <p>React has revolutionised the way we think about web development, offering a component-based architecture that enhances the efficiency and scalability of applications. With its declarative nature, React allows developers to create dynamic and interactive user experiences with ease. Our resource is designed to cover every aspect of React development, from the fundamentals like components, props, and state, to advanced topics including hooks, context, and routing. Each concept is explained with clarity and includes practical code examples to help solidify your understanding.</p>

      <p>We understand the importance of staying current in the fast-paced world of web development. Therefore, our React Reference Resource also delves into the latest features and best practices, ensuring you're well-equipped to tackle modern development challenges. Whether you're building your first React application or optimising a large-scale project, our resource serves as a valuable companion, guiding you through the intricacies of React and helping you to write more efficient, maintainable, and high-quality code.</p>

      <p>Join us as we explore the endless possibilities with React, and take your web development skills to new heights. Our React Reference Resource is more than just a guide; it's your gateway to becoming a more proficient and confident React developer.</p>
     
      <h3 className="heading">Categories & Concepts</h3>
      <div className="flex-container" style={{ display: "flex", justifyContent: "space-between" }}>
        {categoryColumns.map((categories, columnIndex) => (
          <nav key={columnIndex} style={{ width: "32%" }}>
            <ul>
              {categories.map((category) => (
                <li key={category.name}>
                  <Link to={`/${category.name.replace(/\s+/g, "-")}`}>{category.name}</Link>
                  <ul>
                    {category.concepts.map((concept) => (
                      <li key={concept.term}>
                        <Link to={`/concept?query=${encodeURIComponent(concept.term)}`}>{concept.term}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
