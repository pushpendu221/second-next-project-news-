import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function NewsYears({ params }) {
  const getYear = params.year;
  const getNews = getNewsForYear(getYear);
  return (
    <>
      <NewsList news={getNews} />
    </>
  );
}
