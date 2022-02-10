import { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

const FetchAPI = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const posts = await response.json();
    setPosts(posts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul>
      <h1>Fetch de données</h1>
      {posts.map((post) => {
        const { id, name, email, body } = post;
        return (
          <li key={id}>
            <h4>nom: {name}</h4>
            <p>email: {email}</p>
            <p>texte: {body}</p>
            <p>id: {id}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FetchAPI;
