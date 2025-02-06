import s from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={s.loadBtn} type="button" onClick={onClick}>
      Load more
    </button>
  );
}
