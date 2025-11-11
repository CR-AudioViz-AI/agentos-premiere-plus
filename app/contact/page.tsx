"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Let's discuss your Southwest Florida real estate needs
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Ready to buy or sell your Southwest Florida home? We're here to help! 
              Reach out to Tony & Laura Harvey today.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:239-777-0155" className="text-primary-600 hover:text-primary-700">
                    239-777-0155
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Call or text us anytime
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@premiereplus.com" className="text-primary-600 hover:text-primary-700">
                    info@premiereplus.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                  <p className="text-gray-600">
                    Southwest Florida<br />
                    Naples, Fort Myers, Cape Coral & Beyond
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Agent Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Meet Your Agents</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Tony Harvey</h4>
                  <p className="text-gray-600 text-sm">
                    Licensed Real Estate Agent<br />
                    15+ Years Experience<br />
                    Waterfront & Luxury Specialist
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Laura Harvey</h4>
                  <p className="text-gray-600 text-sm">
                    Licensed Real Estate Agent<br />
                    15+ Years Experience<br />
                    Family Homes & First-Time Buyers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Thank you! We'll be in touch soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="(239) 777-0155"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">
                    I'm Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select an option</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="both">Both Buying & Selling</option>
                    <option value="investment">Investment Properties</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
