import s from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <button className={s.loadBtn} type="button" onClick={onClick}>
      Load more
    </button>
  );
}
