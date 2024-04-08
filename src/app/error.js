"use client";

import Link from "next/link";

const error = ({ error, reset }) => {
  return (
    <main className="error-page">
      <p className="error-text">There was a problem...</p>
      <h2 className="error-title">{error.message || "Something went wrong"}</h2>
      <p className="error-text">
        Please try again or contact support if the problem persists.
      </p>
      <div className="error-actions">
        <button className="primary-button" onClick={reset}>
          Try again
        </button>
        <Link className="secondary-error-button" href="/">
          Go back to home
        </Link>
      </div>
    </main>
  );
};

export default error;
