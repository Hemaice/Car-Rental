import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {

  const classyRedGradient = {
    background: "linear-gradient(135deg, #7a1c1c 0%, #a52a2a 50%, #6b0f0f 100%)",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "8072719424"; 

    const message = `Hello, I have an enquiry:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // // Optional alert
    // alert("Redirecting to WhatsApp...");

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "8072203607, 6383887268",
    },
    {
      icon: Mail,
      title: "Email",
      content: "heavenbrothers23@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Observattory puthukatu Kodaikanal 624-103",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "24/7 Support",
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <div
        className="text-white py-16 shadow-lg"
        style={classyRedGradient}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-200 text-lg">
            We'd love to hear from you
          </p>

        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-8">
              Have questions about our vehicles or rental process? Send us a
              message and our team will respond as soon as possible.
            </p>

            <div className="space-y-6">

              {contactInfo.map((info, index) => (

                <div key={index} className="flex items-start">

                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-50 rounded-lg">
                      <info.icon className="h-6 w-6 text-red-700" />
                    </div>
                  </div>

                  <div className="ml-4">

                    <h3 className="text-lg font-semibold text-gray-900">
                      {info.title}
                    </h3>

                    <p className="text-gray-600">
                      {info.content}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* FORM */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-md">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
                style={classyRedGradient}
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}
