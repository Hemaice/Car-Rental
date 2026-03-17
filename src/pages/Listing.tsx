import { useState, useEffect } from "react";
import { Users, DollarSign } from "lucide-react";
import { Vehicle, vehiclesData } from "../data/vehicles";

interface ListingProps {
  onBookVehicle: (vehicle: Vehicle) => void;
}

export default function Listing({ onBookVehicle }: ListingProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSeater, setSelectedSeater] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  // ✅ SAME gradient as Contact page
  const classyRedGradient = {
    background: "linear-gradient(135deg, #7a1c1c 0%, #a52a2a 50%, #6b0f0f 100%)",
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    filterVehicles();
  }, [vehicles, selectedSeater, selectedType]);

  const fetchVehicles = () => {
    setVehicles(vehiclesData);
    setLoading(false);
  };

  const filterVehicles = () => {
    let filtered = [...vehicles];

    if (selectedSeater !== "all") {
      filtered = filtered.filter(
        (v) => v.seater_capacity === parseInt(selectedSeater)
      );
    }

    if (selectedType !== "all") {
      filtered = filtered.filter((v) => v.type === selectedType);
    }

    setFilteredVehicles(filtered);
  };

  const uniqueSeaters = Array.from(
    new Set(vehicles.map((v) => v.seater_capacity))
  ).sort();

  const uniqueTypes = Array.from(
    new Set(vehicles.map((v) => v.type))
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">
          Loading vehicles...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <div
        className="text-white py-12"
        style={classyRedGradient}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Our Fleet</h1>
          <p className="text-gray-200 text-xl">
            Choose the perfect vehicle for your journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Filter Vehicles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Seater */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seating Capacity
              </label>

              <select
                value={selectedSeater}
                onChange={(e) => setSelectedSeater(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="all">All Capacities</option>

                {uniqueSeaters.map((seater) => (
                  <option key={seater} value={seater}>
                    {seater} Seater
                  </option>
                ))}
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="all">All Types</option>

                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Cards */}
        {filteredVehicles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No vehicles match your filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredVehicles.map((vehicle) => (

              <div
                key={vehicle.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >

                <div className="h-48 w-full flex items-center justify-center bg-gray-100">
                  <img
                    src={vehicle.image_url}
                    alt={vehicle.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-6">

                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {vehicle.name}
                    </h3>

                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                      {vehicle.type}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {vehicle.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-1" />
                      <span>{vehicle.seater_capacity} Seater</span>
                    </div>
                  </div>

                  {/* ✅ Gradient Button */}
                  <button
                    onClick={() => onBookVehicle(vehicle)}
                    className="w-full text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                    style={classyRedGradient}
                  >
                    Book Now
                  </button>

                </div>
              </div>

            ))}

          </div>
        )}
      </div>
    </div>
  );
}