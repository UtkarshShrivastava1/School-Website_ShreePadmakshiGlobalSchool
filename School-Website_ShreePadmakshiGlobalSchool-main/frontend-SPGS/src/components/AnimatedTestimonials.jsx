// "use client";

// import { useEffect, useState } from "react";
// import { IconArrowLeft, IconArrowRight } from "../components/icons-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
//   const [active, setActive] = useState(0);

//   const handleNext = () => {
//     setActive((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   useEffect(() => {
//     if (autoplay) {
//       const interval = setInterval(handleNext, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [autoplay]);

//   return (
//     <div className="max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20">
//       <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
//         {/* Image Section */}
//         <div className="relative h-80 w-full">
//           <AnimatePresence>
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.src}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: active === index ? 1 : 0.5, scale: active === index ? 1 : 0.95 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="absolute inset-0">
//                 <Image
//                   src={testimonial.src}
//                   alt={testimonial.name}
//                   width={500}
//                   height={500}
//                   className="h-full w-full rounded-3xl object-cover" />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* Text Section */}
//         <div className="flex flex-col justify-between py-4">
//           <motion.div
//             key={active}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             transition={{ duration: 0.2, ease: "easeInOut" }}>
//             <h3 className="text-2xl font-bold text-black dark:text-white">
//               {testimonials[active].name}
//             </h3>
//             <p className="text-sm text-gray-500 dark:text-neutral-500">
//               {testimonials[active].designation}
//             </p>
//             <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
//               {testimonials[active].quote.split(" ").map((word, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
//                   animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
//                   transition={{ duration: 0.2, delay: 0.02 * index }}
//                   className="inline-block">
//                   {word}&nbsp;
//                 </motion.span>
//               ))}
//             </motion.p>
//           </motion.div>

//           {/* Navigation Buttons */}
//           <div className="flex gap-4 pt-12 md:pt-0">
//             <button
//               onClick={handlePrev}
//               className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
//               <IconArrowLeft className="h-6 w-6 text-black dark:text-neutral-400" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
//               <IconArrowRight className="h-6 w-6 text-black dark:text-neutral-400" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
