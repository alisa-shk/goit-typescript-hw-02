import { useState } from 'react';

import { fetchImages } from "./searchImages-api";
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from "./SearchBar/SearchBar";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (query) => {
    setPage(1);
    setQuery(query);
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImages(query, 1);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    try {
      setLoading(true);
      const data = await fetchImages(query, nextPage);
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />

    </>
  )
}


export default App;
