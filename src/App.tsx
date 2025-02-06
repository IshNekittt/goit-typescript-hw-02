import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import fetchResult from "./api_management/fetchResult";

import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";

import { Item } from "./types/Item";

import "./App.css";

function App() {
  const [data, setData] = useState<Array<object>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentElem, setCurrentElem] = useState<Item | null>(null);

  useEffect(() => {
    if (!query) return;

    const handleFetch = async (query: string): Promise<void> => {
      try {
        setError(false);
        setIsLoading(true);
        const { results, total_pages } = await fetchResult(query, page);

        setTotalPages(total_pages as number);
        setData((prev) => {
          return [...prev, ...(results as Array<Item>)];
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch(query);
  }, [query, page]);

  const handleChangeQuery = (value: string): void => {
    if (value === query) {
      toast.error("Please change the query");
      return;
    }
    setQuery(value);
    setData([]);
    setPage(1);
    setTotalPages(0);
  };

  const handleFetchPage = (): void => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handleModalOpen = (elem: Record<string, unknown>): void => {
    if (isModalOpen) return;
    setCurrentElem(elem);
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setCurrentElem(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleChangeQuery} />
      {data.length > 0 && (
        <ImageGallery items={data} onModalOpen={handleModalOpen} />
      )}
      {page < totalPages && <LoadMoreBtn onClick={handleFetchPage} />}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageModal
        isOpen={isModalOpen}
        current={currentElem}
        onClose={handleModalClose}
      />
    </>
  );
}

export default App;
