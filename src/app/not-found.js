"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="error-page">
      <h1 className="error-title">404 - Page Not Found</h1>;
      <p className="error-text">
        The page you are trying to access does not exist.
      </p>
      <div className="error-actions">
        <Link className="primary-error-button" href="/">
          Go back to home
        </Link>
      </div>
    </main>
  );
}
