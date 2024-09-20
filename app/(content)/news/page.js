"use client";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";
export default function News() {
  const [error, setError] = useState(false);
  const [loading, isLoading] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      isLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Sorry Response Not Found!!");
        isLoading(false);
      }
      const news = await response.json();
      isLoading(false);
      setNews(news);
    }
    fetchNews();
  }, []);

  if (loading) {
    return <h2>Loading....</h2>;
  }
  if (error) {
    return { error };
  }
  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
