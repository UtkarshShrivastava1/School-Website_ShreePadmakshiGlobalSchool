import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "./utils";
import api from "../services/api";


export default function ValuesInActionPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await api.get("/posts");
        // console.log("Fetched images:", data.data);
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

  
  // Generate cards from fetched images
  const cards = images.map((image, index) => ({
    id: image._id || index,
    thumbnail: image.image?.url || image.thumbnail || "/api/placeholder/400/300",
    className: "col-span-1",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-2">{image.title || `Value ${index + 1}`}
         
        </h3>
        <p>{image.content || "School value description goes here."}
       
        </p>
      </div>
    )
  }));

  // console.log("Cards details:", cards);
  
  if (loading) {
    return <div className="flex justify-center items-center h-96">Loading values...</div>;
  }
  
  if (error) {
    return <div className="flex justify-center items-center h-96 text-red-500">{error}</div>;
  }
  
  return (
    <div className="container mx-auto">
        <div className="flex items-center justify-center mb-8 md:mb-10">
      <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-orange-700 px-3 md:px-6 text-center">
        Our Gallery
      </h2>
      <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
    </div>
    
      <h1 className="text-4xl font-bold text-center my-10">Our School Values in Action</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-10">
        Discover how our core values shape our school community and guide our students toward excellence.
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
    <div className="w-full h-[800px] p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col bg-amber-950"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
         
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />

  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};