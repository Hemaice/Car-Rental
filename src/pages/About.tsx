import { Users, Award, Heart, Target } from "lucide-react";

export default function About() {

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize your needs and satisfaction above all else",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Providing well-maintained vehicles and excellent support",
    },
    {
      icon: Heart,
      title: "Trust & Safety",
      description: "Building lasting relationships through reliable service",
    },
    {
      icon: Target,
      title: "Flexibility",
      description: "Offering rental options that fit your schedule and budget",
    },
  ];

  const classyRedGradient = {
    background: "linear-gradient(135deg, #7a1c1c 0%, #a52a2a 50%, #6b0f0f 100%)",
  };

  return (
    <div className="bg-white">

      {/* HERO SECTION */}

      <div
        className="text-white py-20 shadow-lg"
        style={classyRedGradient}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Heaven Brothers
          </h1>

          <p className="text-gray-200 text-lg">
            Your trusted partner for vehicle rentals
          </p>

        </div>
      </div>


      {/* STORY SECTION */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with a vision to make vehicle rentals simple and accessible,
              Heaven Brothers has been serving our community with reliable
              transportation solutions. We understand that every journey is
              important, whether it's a family trip, business meeting, or special
              occasion.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our fleet includes a wide range of vehicles from compact cars to
              spacious minivans, all maintained to the highest standards. With
              transparent pricing and flexible hourly rentals, we make it easy
              for you to get on the road.
            </p>

          </div>

          <div className="bg-gray-100 h-64 rounded-xl overflow-hidden shadow-lg">

            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Car rental"
              className="w-full h-full object-cover"
            />

          </div>

        </div>


        {/* VALUES SECTION */}

        <div className="mb-20">

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((value, index) => (

              <div
                key={index}
                className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-red-400 transition"
              >

                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4">

                  <value.icon className="h-8 w-8 text-red-700" />

                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {value.title}
                </h3>

                <p className="text-gray-600">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* STATS SECTION */}

        <div
          className="rounded-xl p-10 text-center text-white shadow-lg"
          style={classyRedGradient}
        >

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Join Thousands of Happy Customers
          </h2>

          <p className="text-gray-200 mb-8">
            Experience the convenience and reliability that has made us the
            preferred choice for vehicle rentals
          </p>

          <div className="flex flex-wrap justify-center gap-12">

            <div>
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-gray-200">Happy Customers</div>
            </div>

            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-gray-200">Support</div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}