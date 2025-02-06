import s from "./SearchBar.module.css";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";
export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const processedQuery = query.trim();

    if (!processedQuery) {
      return toast.error("Prompt required");
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
