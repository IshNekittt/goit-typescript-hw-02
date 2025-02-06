import toast from "react-hot-toast";
import "./App.css";
import fetchResult from "./api_management/fetchResult";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentElem, setCurrentElem] = useState(null);

  useEffect(() => {
    if (!query) return;

    const handleFetch = async (query) => {
      try {
        setError(false);
        setIsLoading(true);
        const { results, total_pages } = await fetchResult(query, page);

        setTotalPages(total_pages);
        setData((prev) => {
          return [...prev, ...results];
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch(query);
  }, [query, page]);

  const handleChangeQuery = (value) => {
    if (value === query) {
      return toast.error("Please change the query");
    }
    setQuery(value);
    setData([]);
    setPage(1);
    setTotalPages(0);
  };

  const handleFetchPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handleModalOpen = (elem) => {
    if (isModalOpen) return;
    setCurrentElem(elem);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
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
