import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import { FaShieldAlt, FaStar, FaHeadset } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-2">Get In Touch With Us</h1>
      <p className="text-gray-600 text-center mb-8">
        For More Information About Our Products & Services, Please Feel Free To Drop Us
        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="mb-6">
              <h2 className="font-bold text-lg flex items-center">
                <FiMapPin className="text-black mr-2 w-6 h-6" />
                Address
              </h2>
              <p>223 5th Avenue, New York NY10010, United States</p>
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-lg flex items-center">
                <FiPhone className="text-black mr-2 w-6 h-6" />
                Phone
              </h2>
              <p>Mobile: +1 234 567 6789</p>
              <p>Hotline: +1 456 678 7890</p>
            </div>
            <div>
              <h2 className="font-bold text-lg flex items-center">
                <FiClock className="text-black mr-2 w-6 h-6" />
                Working Time
              </h2>
              <p>Monday - Friday: 9:00 - 20:00</p>
              <p>Saturday - Sunday: 9:00 - 17:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="ABC"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="abc@gmail.com"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="This is optional"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="I’d like to ask about..."
                className="w-full border border-gray-300 rounded-lg p-2"
               
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-around mt-8 text-center w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <FaStar className="w-8 h-8 text-yellow-500" />
          <p className="font-bold">High Quality</p>
          <p className="text-sm text-gray-600">crafted from top materials</p>
        </div>
        <div className="flex flex-col items-center">
          <FaShieldAlt className="w-8 h-8 text-green-500" />
          <p className="font-bold">Warranty Protection</p>
          <p className="text-sm text-gray-600">Over 2 years</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHeadset className="w-8 h-8 text-blue-500" />
          <p className="font-bold">24/7 Support</p>
          <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
