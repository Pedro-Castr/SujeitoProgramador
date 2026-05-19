import "./error.css";

function Error() {
  return (
    <div className="error-container">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist or may have been removed.
      </p>

      <a href="/">Back to Home</a>
    </div>
  );
}

export default Error;
