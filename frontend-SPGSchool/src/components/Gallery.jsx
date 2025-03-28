"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/components/utils"

const Gallery = ({ cards }) => {
  const [selected, setSelected] = useState(null)
  const [lastSelected, setLastSelected] = useState(null)

  const handleClick = card => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }

  return (
    <div >
       {/* Heading with decorative lines */}
       <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-black px-6">Our<span className="text-red-800"> Gallery</span> </h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>


 <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
      <div className="flex justify-center items-center mt-[100%]"></div>
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
    </div>
   
  )
}

const ImageComponent = ({ card }) => {
  return (
    
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.imageUrl}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  )
}

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 0.6
        }}
        className="absolute inset-0 h-full w-full opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: 100
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="relative px-8 pb-4 z-[70] "
      >
       <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide drop-shadow-lg">
  {selected?.content}
</h3>
<p className="text-white text-lg md:text-xl lg:text-2xl mt-2 leading-relaxed opacity-90">
  {selected?.description}
</p>

      </motion.div>
    </div>
  )
}

export default Gallery