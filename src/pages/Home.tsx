// Home.tsx
import { Car, Shield, Clock, IndianRupee, MapPin, Star, Phone, Mail, Users } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {

  const features = [
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Well-maintained cars and vans perfect for Kodaikanal scenic routes",
    },
    {
      icon: IndianRupee,
      title: "Best Rates",
      description: "Starting from ₹499/hour with transparent pricing",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round the clock service for your travel needs",
    },
    {
      icon: Shield,
      title: "Safe & Insured",
      description: "All vehicles fully insured and serviced",
    },
  ];

  const vehicleCategories = [
    {
      type: "Hatchbacks",
      icon: Car,
      suitable: "Perfect for couples & small families",
      examples: "Swift, i10, WagonR",
    },
    {
      type: "Sedans",
      icon: Car,
      suitable: "Comfortable for 4-5 passengers",
      examples: "Honda City, Ciaz, Verna",
    },
    {
      type: "SUVs",
      icon: Car,
      suitable: "Ideal for hill drives & groups",
      examples: "Creta, Seltos, Scorpio",
    },
    {
      type: "Minivans",
      icon: Car,
      suitable: "Perfect for big groups",
      examples: "Innova, Ertiga, Marazzo",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "Excellent service! The car was clean and well maintained.",
      date: "2 days ago",
    },
    {
      name: "Priya Krishnan",
      rating: 5,
      comment: "Smooth booking process and great rates.",
      date: "1 week ago",
    },
    {
      name: "Arun Kumar",
      rating: 5,
      comment: "Best car rental in Kodaikanal!",
      date: "2 weeks ago",
    },
  ];

  const classyRedGradient = {
    background: "linear-gradient(135deg, #7a1c1c 0%, #a52a2a 50%, #6b0f0f 100%)",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-gray-800">

      {/* HERO SECTION */}
      <div className="relative text-white" style={classyRedGradient}>
        <div className="max-w-7xl mx-auto px-6 py-24">

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Explore the <span className="text-white">Princess of Hill Stations</span>
          </h1>

          <p className="text-gray-200 mb-8 text-lg max-w-2xl">
            Rent quality cars and vans by hour or day and explore Kodaikanal with freedom.
          </p>

          <div className="flex gap-4">

            {/* Browse Button */}
            <button
              onClick={() => onNavigate("listing")}
              className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
            >
              <Car size={18} />
              Browse Vehicles
            </button>

            {/* Contact Button */}
            <button
              onClick={() => onNavigate("contact")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-all"
            >
              Contact Us
            </button>

          </div>

          <div className="flex gap-6 mt-8 text-gray-200 text-sm">

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-white" />
              <span>5000+ Happy Customers</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-white" />
              <span>4.8 Rating</span>
            </div>
          </div>

        </div>
      </div>

      {/* VEHICLE CATEGORIES */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
            Our Fleet
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Vehicle Categories
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse fleet of well-maintained vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {vehicleCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-400 transition-all shadow-lg"
            >

              <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <category.icon className="h-6 w-6 text-red-700" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {category.type}
              </h3>

              <p className="text-gray-600 text-sm mb-2">
                {category.suitable}
              </p>

              <p className="text-gray-500 text-xs">
                {category.examples}
              </p>

              <button
                onClick={() => onNavigate("listing")}
                className="mt-4 text-red-700 text-sm font-semibold hover:text-red-800 flex items-center gap-1"
              >
                View Details →
              </button>

            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
              Why Us
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Travelers Choose Us
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the best service with our premium fleet
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-red-400 transition-all text-center"
              >

                <div className="bg-red-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-red-700" />
                </div>

                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className="relative text-white" style={classyRedGradient}>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore Kodaikanal?
          </h2>

          <p className="text-gray-200 mb-8 text-lg">
            Book your vehicle now and enjoy the freedom of the open road
          </p>

          <button
            onClick={() => onNavigate("listing")}
            className="bg-white text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 mx-auto"
          >
            <Car size={18} />
            Browse Vehicles
          </button>

          <p className="text-gray-300 mt-6 text-sm">
            * Special rates for long-term rentals
          </p>

        </div>
      </div>

    </div>
  );
}