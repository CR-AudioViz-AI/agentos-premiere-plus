"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function QuickSearch() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to /properties with query params
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (propertyType) params.append("type", propertyType);
    if (priceRange) params.append("price", priceRange);
    
    window.location.href = `/properties?${params.toString()}`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Find Your Perfect Home
      </h3>
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Location</option>
          <option value="naples">Naples</option>
          <option value="estero">Estero</option>
          <option value="bonita-springs">Bonita Springs</option>
          <option value="fort-myers">Fort Myers</option>
          <option value="cape-coral">Cape Coral</option>
          <option value="lehigh-acres">Lehigh Acres</option>
          <option value="marco-island">Marco Island</option>
          <option value="golden-gate-estates">Golden Gate Estates</option>
        </select>

        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Property Type</option>
          <option value="single-family">Single Family</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
          <option value="land">Land</option>
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Price Range</option>
          <option value="0-300000">Under $300K</option>
          <option value="300000-500000">$300K - $500K</option>
          <option value="500000-750000">$500K - $750K</option>
          <option value="750000-1000000">$750K - $1M</option>
          <option value="1000000-plus">$1M+</option>
        </select>

        <button
          type="submit"
          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          Search
        </button>
      </form>
    </div>
  );
}
