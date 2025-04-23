import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data.slice(0, 10)); // Show first 10 posts
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={styles.container}>
      <h2>📰 Latest Posts</h2>
      {error ? (
        <p style={styles.error}>❌ {error}</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id} style={styles.post}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#1e1e1e',
    borderRadius: '12px',
    color: '#fff',
    marginTop: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
  },
  error: {
    color: 'salmon',
    fontStyle: 'italic',
  },
  post: {
    marginBottom: '0.8rem',
    padding: '0.5rem',
    background: '#2a2a2a',
    borderRadius: '6px',
  },
};

export default Posts;
