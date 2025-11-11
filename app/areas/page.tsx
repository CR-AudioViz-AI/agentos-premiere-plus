import AreaCard from "@/components/AreaCard";
import { MapPin, TrendingUp, Users, Home } from "lucide-react";

const areas = [
  {
    name: "Naples",
    description: "Upscale living with pristine beaches and world-class dining",
    medianPrice: "$650,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    slug: "naples",
    population: "22,000",
    highlights: ["Pristine beaches", "Fine dining", "Art galleries", "Golf courses"],
  },
  {
    name: "Estero",
    description: "Growing community with excellent shopping and golf courses",
    medianPrice: "$450,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    slug: "estero",
    population: "36,000",
    highlights: ["Miromar Outlets", "Golf communities", "Family-friendly", "Growing schools"],
  },
  {
    name: "Bonita Springs",
    description: "Perfect blend of beach life and family-friendly neighborhoods",
    medianPrice: "$525,000",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    slug: "bonita-springs",
    population: "58,000",
    highlights: ["Beach access", "Nature preserves", "Farmers markets", "Water activities"],
  },
  {
    name: "Fort Myers",
    description: "Historic downtown with vibrant arts scene and riverfront views",
    medianPrice: "$375,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    slug: "fort-myers",
    population: "87,000",
    highlights: ["Historic downtown", "Edison & Ford estates", "Arts district", "Riverfront"],
  },
  {
    name: "Cape Coral",
    description: "Waterfront paradise with 400+ miles of navigable waterways",
    medianPrice: "$425,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    slug: "cape-coral",
    population: "194,000",
    highlights: ["Waterfront living", "Boating paradise", "Family-friendly", "Affordable"],
  },
  {
    name: "Lehigh Acres",
    description: "Affordable homes with room to grow in a developing community",
    medianPrice: "$325,000",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    slug: "lehigh-acres",
    population: "124,000",
    highlights: ["Affordable", "Large lots", "Growing area", "Family-oriented"],
  },
  {
    name: "Marco Island",
    description: "Exclusive island paradise with pristine beaches and luxury living",
    medianPrice: "$850,000",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    slug: "marco-island",
    population: "18,000",
    highlights: ["Private island", "White sand beaches", "Luxury condos", "Boating"],
  },
  {
    name: "Golden Gate Estates",
    description: "Rural living with large lots perfect for privacy and horses",
    medianPrice: "$475,000",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    slug: "golden-gate-estates",
    population: "75,000",
    highlights: ["Large lots", "Rural feel", "Horse properties", "Privacy"],
  },
];

export default function Areas() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Explore Southwest Florida
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            From pristine beaches to golf course communities, discover the unique charm 
            and lifestyle of each area we serve in beautiful Southwest Florida.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Why Southwest Florida */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Southwest Florida?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Prime Location</h3>
              <p className="text-gray-600 text-sm">
                Gulf Coast paradise with easy access to beaches, nature, and culture
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Growing Market</h3>
              <p className="text-gray-600 text-sm">
                Strong real estate market with excellent investment opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                Welcoming neighborhoods with year-round activities and events
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Home className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Lifestyle</h3>
              <p className="text-gray-600 text-sm">
                Year-round sunshine, outdoor recreation, and relaxed coastal living
              </p>
            </div>
          </div>
        </section>

        {/* All Areas Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </section>

        {/* Market Overview */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Southwest Florida Market Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">$475K</div>
              <div className="text-gray-600">Average Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">600K+</div>
              <div className="text-gray-600">Total Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">15%</div>
              <div className="text-gray-600">Average Growth Rate</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Community?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let Tony & Laura Harvey help you discover the Southwest Florida lifestyle 
            that's perfect for you and your family.
          </p>
          <a
            href="tel:239-777-0155"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
          >
            Call Us Today: 239-777-0155
          </a>
        </section>
      </div>
    </div>
  );
}
