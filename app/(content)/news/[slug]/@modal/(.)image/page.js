"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function ImagePage({ params }) {
  const newItemSlug = params.slug;
  const router = useRouter();
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newItemSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image" style={{ overflow: "hidden" }}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
