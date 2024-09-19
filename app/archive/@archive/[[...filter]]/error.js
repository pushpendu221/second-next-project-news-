"use client";
export default function ErrorPage({ error }) {
  return (
    <div className="error">
      <h1>Error Page</h1>
      <p>{error.message}</p>
    </div>
  );
}
