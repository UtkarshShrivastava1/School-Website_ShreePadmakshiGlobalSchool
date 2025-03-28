import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "./utils";
import api from "../services/api";

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await api.get("/posts");
        console.log(data.data)
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

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-orange-500 px-6">
          Our<span className="text-orange-500"> Gallery</span>
        </h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>

             
      <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative ">
        {loading ? (
          <p className="text-center text-gray-500 bg-amber-400">Loading images...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          images.map((card,i) => (
            <div key={i} className="relative overflow-hidden bg-amber-600">
              <motion.div
                onClick={() => handleClick(card)}
                className={cn(
                  "relative overflow-hidden bg-white rounded-xl cursor-pointer",
                  selected?._id === card._id && "z-50"
                )}
                layoutId={`card-${card._id}`}
              >
                
                {selected?._id === card._id && <SelectedCard selected={selected} />}
                <ImageComponent card={card} />
               
              </motion.div>
            </div>
          ))
        )}

        <motion.div
          onClick={handleOutsideClick}
          className="absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10"
          animate={{ opacity: selected?._id ? 0.3 : 0 }}
        />
      </div>
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <>
     <motion.img
      layoutId={`image-${card._id}-image`}
      src={card.image?.url}
      height="500"
      width="500"
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-200 "
      alt={card?.title || "thumbnail"}
    />
      {console.log(card.image?.url)}
    </>
   
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?._id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold tracking-wide drop-shadow-lg">
          {selected?.title}
        </h3>
        <p className="text-black text-lg md:text-xl lg:text-2xl mt-2 leading-relaxed opacity-90">
          {selected?.content}
        </p>
      </motion.div>
    </div>
  );
};

export default Gallery;
