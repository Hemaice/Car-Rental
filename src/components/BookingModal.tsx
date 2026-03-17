import { useState } from 'react';
import { X, Users, Clock, Calendar } from 'lucide-react';
import { Vehicle } from '../data/vehicles';
import toast from 'react-hot-toast';

interface BookingModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export default function BookingModal({ vehicle, onClose }: BookingModalProps) {

  const classyRedGradient = {
    background: "linear-gradient(135deg, #7a1c1c 0%, #a52a2a 50%, #6b0f0f 100%)",
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    members: 1,
    hours: 1,
    date: '',
  });

  if (!vehicle) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919363586559";

    const message = `*New Booking Request*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Vehicle: ${vehicle.name}
Type: ${vehicle.type}
Members: ${formData.members}
Hours: ${formData.hours}
Date: ${formData.date}

Please confirm availability.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    toast.success("Redirecting to WhatsApp...", {
      style: {
        borderRadius: "10px",
        background: "#7a1c1c", // optional consistency
        color: "#fff",
      },
    });

    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Book Your Vehicle</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6">

          {/* Vehicle Info */}
          <div className="mb-6 bg-gray-50 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <img
                src={vehicle.image_url}
                alt={vehicle.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">{vehicle.name}</h3>
                <p className="text-gray-600 text-sm">{vehicle.type}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  {vehicle.seater_capacity} Seater
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg mt-1"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg mt-1"
              />
            </div>

            {/* Date */}
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Rental Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg mt-1"
              />
            </div>

            {/* Members */}
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Number of Members *
              </label>
              <input
                type="number"
                min="1"
                max={vehicle.seater_capacity}
                value={formData.members}
                onChange={(e) =>
                  setFormData({ ...formData, members: parseInt(e.target.value) })
                }
                className="w-full px-4 py-2 border rounded-lg mt-1"
              />
            </div>

            {/* Hours */}
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Rental Hours *
              </label>
              <input
                type="number"
                min="1"
                max="24"
                value={formData.hours}
                onChange={(e) =>
                  setFormData({ ...formData, hours: parseInt(e.target.value) })
                }
                className="w-full px-4 py-2 border rounded-lg mt-1"
              />
            </div>

            {/* Info Box */}
            <div className="bg-red-50 p-3 rounded-lg text-sm">
              Click confirm booking → You will be redirected to WhatsApp
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border py-2 rounded-lg"
              >
                Cancel
              </button>

              {/* ✅ UPDATED GRADIENT BUTTON */}
              <button
                type="submit"
                className="flex-1 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                style={classyRedGradient}
              >
                Confirm Booking
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}