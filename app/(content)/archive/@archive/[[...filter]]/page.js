import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default function NewsYears({ params }) {
  const getYear = params.filter;
  let links = getAvailableNewsYears();
  const selectedYear = getYear?.[0]; // getYear ? getYear[0] : undefined;
  const selectedMonth = getYear?.[1]; // getYear ? getYear[0] : undefined;

  let getNews;
  if (selectedYear && !selectedMonth) {
    getNews = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    getNews = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }
  // console.log(getNews);
  let newsContent = <p> No News content For the selected Year </p>;
  if (getNews && getNews.length > 0) {
    newsContent = <NewsList news={getNews} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid Filter!!");
  }
  // const getNews = getNewsForYear(getYear);
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
