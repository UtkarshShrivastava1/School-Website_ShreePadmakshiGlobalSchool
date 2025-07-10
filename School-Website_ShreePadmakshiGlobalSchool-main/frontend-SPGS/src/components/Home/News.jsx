import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import api from "../../services/api"; // Adjust the import path

const NewsSection = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const { data } = await api.get("/latestnews/");
      console.log("Fetched news data:", data);
      setNews(data);

      // Handle structure like [{ data: [...] }]
      // const newsArray = Array.isArray(data) && data[0]?.data ? data[0].data : [];
      // setNews(newsArray);
    } catch (error) {
      console.error("Failed to fetch news:", error.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-orange-700 px-4 text-center">
          Latest News
        </h2>
        <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main News Carousel */}
        <div className="lg:col-span-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            loop={true}
            pagination={{ clickable: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            {news.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-80 md:h-96">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6">
                    <h3 className="text-xl md:text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">{item.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Sidebar - Recent News Stack */}
        <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl shadow-md">
          <h4 className="text-gray-700 font-semibold mb-4 border-b pb-2">RECENT STORIES</h4>
          <div className="space-y-5">
            {news.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start border-b pb-4 last:border-none"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md shadow-sm"
                />
                <div>
                  <div className="font-semibold text-gray-700 hover:text-orange-700 transition duration-150 line-clamp-2">
                    {item.title}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/news-events"
              className="inline-block px-5 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-200 transition rounded-lg"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css";
// import "../../pages/swiper/css/pagination";
// import "../../pages/swiper/css/autoplay";
// import { Autoplay, Pagination } from "swiper/modules";
// import api from "../../services/api"; // Adjust the import path

// const NewsSection = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

 

//   const fetchNews = async () => {
//     try {
//       setLoading(true);
//       // Simulate API call
//        const { data } = await api.get("/latestnews/");
//       console.log("Fetched news data:", data);
// //       setNews(data);
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setNews(data); // Replace with actual API call
//     } catch (error) {
//       console.error("Failed to fetch news:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   // Skeleton loader component
//   const SkeletonLoader = () => (
//     <div className="animate-pulse">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <div className="h-80 md:h-96 bg-gray-300 rounded-xl"></div>
//         </div>
//         <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl">
//           <div className="h-4 bg-gray-300 rounded mb-4"></div>
//           <div className="space-y-4">
//             {[...Array(5)].map((_, i) => (
//               <div key={i} className="flex gap-4">
//                 <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
//                 <div className="flex-1 space-y-2">
//                   <div className="h-3 bg-gray-300 rounded"></div>
//                   <div className="h-3 bg-gray-300 rounded w-3/4"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex items-center justify-center mb-10">
//           <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-orange-700 px-4 text-center">
//             Latest News
//           </h2>
//           <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
//         </div>
//         <SkeletonLoader />
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Enhanced Heading with Animation */}
//       <div className="flex items-center justify-center mb-10 group">
//         <div className="w-1/5 md:w-1/4 h-px bg-gray-300 transition-all duration-500 group-hover:bg-orange-300"></div>
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-orange-700 px-4 text-center transform transition-all duration-300 hover:scale-105">
//           Latest News
//         </h2>
//         <div className="w-1/5 md:w-1/4 h-px bg-gray-300 transition-all duration-500 group-hover:bg-orange-300"></div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Enhanced Main News Carousel */}
//         <div className="lg:col-span-2">
//           <div className="relative group">
//             <Swiper
//               modules={[Autoplay, Pagination]}
//               autoplay={{ delay: 4000 }}
//               loop={true}
//               pagination={{ 
//                 clickable: true,
//                 dynamicBullets: true,
//                 bulletClass: "swiper-pagination-bullet !bg-white !opacity-70 !border-2 !border-orange-500",
//                 bulletActiveClass: "swiper-pagination-bullet-active !bg-orange-500 !opacity-100 !scale-125"
//               }}
//               className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
//             >
//               {news.map((item, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="relative h-80 md:h-96 overflow-hidden group cursor-pointer">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
//                     <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300 group-hover:translate-y-0">
//                       <h3 className="text-xl md:text-3xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:text-orange-200">
//                         {item.title}
//                       </h3>
//                       <p className="text-sm text-gray-200 flex items-center gap-2">
//                         <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
//                         {item.date}
//                       </p>
//                     </div>
//                     {/* Subtle overlay effect */}
//                     <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
            
//             {/* Decorative elements */}
//             <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//         </div>

//         {/* Enhanced Sidebar - Recent News Stack */}
//         <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
//           <div className="flex items-center gap-2 mb-4 border-b pb-3">
//             <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
//             <h4 className="text-gray-700 font-semibold text-sm tracking-wide">RECENT STORIES</h4>
//           </div>
          
//           <div className="space-y-5">
//             {news.slice(0, 5).map((item, index) => (
//               <div
//                 key={index}
//                 className="flex gap-4 items-start border-b pb-4 last:border-none group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-md rounded-lg hover:p-2 hover:-m-2"
//               >
//                 <div className="relative overflow-hidden rounded-md shadow-sm">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-16 h-16 object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                 </div>
                
//                 <div className="flex-1 min-w-0">
//                   <div className="font-semibold text-gray-700 group-hover:text-orange-700 transition-colors duration-300 line-clamp-2 leading-tight">
//                     {item.title}
//                   </div>
//                   <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
//                     <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
//                     {item.date}
//                   </p>
//                 </div>
                
//                 {/* Hover arrow indicator */}
//                 <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-500 text-sm">
//                   →
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 text-center">
//             <button
//               onClick={() => alert('Navigate to news-events page')}
//               className="inline-block px-6 py-3 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:border-orange-300 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 hover:text-orange-700 relative overflow-hidden group"
//             >
//               <span className="relative z-10">VIEW MORE</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsSection;