import { Bed, Bath, Square, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: string;
  features: string[];
}

export default function PropertyCard({ property }: { property: Property }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {property.type}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {property.title}
        </h3>
        <div className="text-2xl font-bold text-primary-700 mb-4">
          {formattedPrice}
        </div>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            <span className="text-sm">{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
        <Link
          href={`/properties/${property.id}`}
          className="block w-full bg-primary-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
