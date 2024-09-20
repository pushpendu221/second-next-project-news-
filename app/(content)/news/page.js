"use client";
import NewsList from "@/components/news-list";
export default async function News() {
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new error("Error generating Response");
  }
  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />;
    </>
  );
}
