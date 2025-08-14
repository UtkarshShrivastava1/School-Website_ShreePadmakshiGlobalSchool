import { Link } from "react-router-dom";


const PrincipalWelcome = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 text-center lg:text-left flex flex-col justify-center">
            <div className="border-l-4 border-orange-500 pl-3 sm:pl-4 mb-4 sm:mb-6">
              <p className="text-orange-500 font-semibold uppercase tracking-wide text-xs sm:text-sm">
                Welcome Message
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-1">
                From the Principal
              </h1>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Mrs. Sweta Singh
              </h2>
              <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                On behalf of the SPGS community, I warmly welcome all our new families. 
                SPGS is a place where each student is nurtured and inspired to thrive 
                academically and personally...
              </p>

              <div className="mt-5 sm:mt-6 flex justify-center lg:justify-start">
                <Link
                  to="/principal-message"
                  className="group inline-flex items-center text-gray-800 border border-gray-800 px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  READ MORE
                  <svg
                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 flex justify-center lg:justify-center p-4 sm:p-6 lg:p-8">
            <div className="relative w-3/4 sm:w-2/3 md:w-1/2 xl:max-w-[350px] overflow-hidden rounded-3xl shadow-lg group">
              <img
                src='../principal.JPG'
                alt="Principal portrait"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalWelcome;
