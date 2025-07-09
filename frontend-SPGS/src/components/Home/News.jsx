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
