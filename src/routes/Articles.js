import {useEffect, useState} from "react";

function Articles() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/articles')
      .then((res) => res.json())
      .then((articles) => setArticles(articles))
  }, []);

  return (
    <>
      <h1>Ma super liste d'articles</h1>
      <ul>
        {
          articles.map(({ id, title, content }) => (
          <li key={id}>
            <h2>{ title }</h2>
            <p>{ content }</p>
          </li>
          ))
        }
      </ul>
    </>
  );
}

export default Articles;
