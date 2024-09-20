import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

//since we have same content for both page.js and default.js we can remove page.js
export default function LatestNewsPage() {
  const latestnews = getLatestNews();
  return (
    <>
      <h2>Latest News </h2>
      <NewsList news={latestnews} />
    </>
  );
}
