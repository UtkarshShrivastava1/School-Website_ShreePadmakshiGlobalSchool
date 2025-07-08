import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "./utils";
import api from "../services/api";
import PropTypes from "prop-types";

export default function ValuesInActionPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await api.get("/posts?limit=3");
        setImages(data.data || []);
      } catch (error) {
        console.error(error);
        setError("Unable to load images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const cards = images.map((image, index) => ({
    id: image._id || index,
    thumbnail:
      image.image?.url || image.thumbnail || "/api/placeholder/400/300",
    className: "col-span-1",
    content: (
      <div className="text-white">
        <h3 className="text-3xl font-bold mb-3">
          {image.title || `Value ${index + 1}`}
        </h3>
        <p className="text-lg">
          {image.content || "School value description goes here."}
        </p>
      </div>
    ),
  }));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 text-xl font-semibold text-gray-700">
        Loading values...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96 text-red-500 font-semibold text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center mb-8">
        <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6 text-center">
          Our Gallery
        </h2>
        <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
      </div>

      <h1 className="text-4xl font-extrabold text-center my-10 text-gray-800">
        Our School Values in Action
      </h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600">
        Discover how our core values shape our school community and guide our
        students toward excellence.
      </p>

      <LayoutGrid cards={cards} />
    </div>
  );
}

const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="relative w-full h-[800px] p-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className)}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden transition-all duration-300 ease-in-out shadow-lg cursor-pointer",
              selected?.id === card.id
                ? "rounded-2xl absolute inset-0 md:w-[90%] md:h-[90%] m-auto z-50 flex justify-center items-center flex-col bg-amber-950"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-2xl h-full w-full"
                : "bg-white rounded-2xl h-full w-full hover:scale-[1.02]"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id ? (
              <SelectedCard selected={selected} />
            ) : (
              <ImageComponent card={card} />
            )}
          </motion.div>
        </div>
      ))}

      {/* Overlay backdrop with AnimatePresence */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            onClick={handleOutsideClick}
            className="absolute inset-0 bg-black bg-opacity-40 z-[45]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

LayoutGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      thumbnail: PropTypes.string.isRequired,
      className: PropTypes.string,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

const ImageComponent = ({ card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className="object-cover object-center w-full h-full rounded-2xl aspect-video"
      alt="School Value"
    />
  );
};

ImageComponent.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    thumbnail: PropTypes.string.isRequired,
    className: PropTypes.string,
  }).isRequired,
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-2xl shadow-2xl relative z-[60]">
      <motion.img
        layoutId={`image-${selected.id}-image`}
        src={selected.thumbnail}
        className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
        alt="School Value Full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-6 z-[70] text-white"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

SelectedCard.propTypes = {
  selected: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    thumbnail: PropTypes.string,
    content: PropTypes.node.isRequired,
  }).isRequired,
};
