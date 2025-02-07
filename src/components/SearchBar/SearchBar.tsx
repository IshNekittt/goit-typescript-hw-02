import s from "./SearchBar.module.css";
import { FormEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";

type Props = {
  onSubmit: (value: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const processedQuery = query.trim();

    if (!processedQuery) {
      toast.error("Prompt required");
      return;
    }
    onSubmit(processedQuery);
    setQuery("");
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(() => e.target.value)}
          className={s.input}
        />
        <button type="submit" className={s.searchButton}>
          <IoIosSearch className={s.searchButtonImage} />
        </button>
      </form>
    </header>
  );
}
