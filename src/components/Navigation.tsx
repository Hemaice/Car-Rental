import { Car } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {

  const classyRedGradient = {
    background: "linear-gradient(135deg, #7a1c1c 0%, #a52a2a 50%, #6b0f0f 100%)",
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Vehicles", id: "listing" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">

      {/* Main Navigation */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate("home")}
          >

            <div className="relative">

              <div className="absolute inset-0 bg-red-50 rounded-lg blur-sm group-hover:bg-red-100 transition-all"></div>

              <img
                src="/vehicles/logo.jpeg"
                alt="Heaven Brothers Logo"
                className="relative h-14 w-auto object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />

            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-tight">
                Heaven Brothers
              </span>
              <span className="text-xs text-gray-500">
                Premium Car & Van Rentals in Kodaikanal
              </span>
            </div>

          </div>

          {/* Navigation Items */}

          <div className="flex items-center gap-2">

            {navItems.map((item) => (

              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  currentPage === item.id
                    ? "text-red-700 bg-red-50"
                    : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
                }`}
              >

                {item.name}

                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-700 rounded-full"></span>
                )}

              </button>

            ))}

            {/* Book Now Button */}

            <button
              onClick={() => onNavigate("listing")}
              style={classyRedGradient}
              className="ml-4 text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:opacity-90 transition-all flex items-center gap-2"
            >

              <Car className="h-4 w-4" />
              Book Now

            </button>

          </div>

        </div>

      </div>

      {/* Mobile Navigation */}

      <div className="lg:hidden border-t">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex justify-around py-2">

            {navItems.map((item) => (

              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex-1 text-center py-2 text-sm font-medium ${
                  currentPage === item.id
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-gray-600"
                }`}
              >

                {item.name}

              </button>

            ))}

          </div>

        </div>

      </div>

    </nav>
  );
}