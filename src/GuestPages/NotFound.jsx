import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.subtitle}>Oops! Page not found.</p>
      <Link to="/" style={styles.button}>
        Go back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#000', 
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '8rem',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    background: 'blue',
    color: 'white',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '0.3s',
  }
};
