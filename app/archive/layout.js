export default function NewsLayoutPage({ archive, latest }) {
  return (
    <>
      <h1>Latest News Page</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </>
  );
}
