import { notFound } from "next/navigation";
import { Bed, Bath, Square, MapPin, Phone, Mail, Share2, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Static data - will be replaced with Supabase query
const properties = [
  { id: "1", title: "Luxury Waterfront Estate", location: "Naples, FL", price: 2495000, beds: 5, baths: 5.5, sqft: 5200, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", type: "Single Family", features: ["Waterfront", "Pool", "Dock", "Smart Home"], description: "Stunning waterfront estate with private dock, infinity pool, and panoramic bay views. This architectural masterpiece features floor-to-ceiling windows, gourmet kitchen, and luxury finishes throughout." },
  { id: "2", title: "Modern Golf Course Home", location: "Estero, FL", price: 875000, beds: 4, baths: 3, sqft: 3100, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", type: "Single Family", features: ["Golf Course", "Pool", "Smart Home"], description: "Beautiful home on championship golf course with stunning fairway views. Open floor plan, chef's kitchen, and resort-style pool." },
  { id: "3", title: "Beachfront Condo Paradise", location: "Bonita Springs, FL", price: 625000, beds: 3, baths: 2, sqft: 1850, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", type: "Condo", features: ["Beachfront", "Balcony", "Resort Style"], description: "Stunning beachfront condo with direct beach access. Wake up to sunrise views over the Gulf of Mexico." },
];

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id);
  
  if (!property) notFound();
  
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                {property.location}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {property.title}
              </h1>
              <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
                {formattedPrice}
              </div>
              
              {/* Property Stats */}
              <div className="flex flex-wrap gap-6 text-gray-600 border-t pt-6">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5" />
                  <span className="font-semibold">{property.beds}</span> Beds
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5" />
                  <span className="font-semibold">{property.baths}</span> Baths
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-5 h-5" />
                  <span className="font-semibold">{property.sqft.toLocaleString()}</span> sqft
                </div>
                <div className="text-gray-500">
                  {property.type}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Property</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {property.description}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Agent */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Agent
              </h3>
              <div className="mb-6">
                <p className="text-gray-600 mb-2">Tony & Laura Harvey</p>
                <p className="text-sm text-gray-500">Premiere Plus Realty</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <a
                  href="tel:239-777-0155"
                  className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  239-777-0155
                </a>
                <a
                  href="mailto:info@premiereplus.com"
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email Agent
                </a>
              </div>

              {/* Quick Contact Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <textarea
                  placeholder="I'm interested in this property..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Request Info
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.filter(p => p.id !== property.id).slice(0, 3).map((prop) => (
              <Link key={prop.id} href={`/properties/${prop.id}`}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image src={prop.image} alt={prop.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{prop.title}</h3>
                    <p className="text-primary-700 font-bold">
                      {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(prop.price)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
