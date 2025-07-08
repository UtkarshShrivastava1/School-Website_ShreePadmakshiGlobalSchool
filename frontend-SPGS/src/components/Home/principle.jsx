import { Link } from "react-router-dom";
import image4 from "../../assets/principal (2).jpeg";

const PrincipalWelcome = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 text-center lg:text-left">
            <div className="border-l-4 border-orange-500 pl-4 mb-4">
              <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm">
                Welcome Message
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-1">
                From the Principal
              </h1>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Mrs. Sweta Singh
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
                On behalf of the SPGS community, I warmly welcome all our new
                families. SPGS is a place where each student is nurtured and
                inspired to thrive academically and personally...
              </p>

              <div className="mt-6">
                <Link
                  to="/principal-message"
                  className="group inline-flex items-center text-gray-800 border border-gray-800 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  READ MORE
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[250px] overflow-hidden rounded-3xl shadow-lg group">
              <img
                src={image4}
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
