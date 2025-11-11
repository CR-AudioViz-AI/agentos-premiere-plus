import { Building2, Home, MapPin, Phone, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import AreaCard from "@/components/AreaCard";
import QuickSearch from "@/components/QuickSearch";

// Static property data - no database needed
const featuredProperties = [
  {
    id: 1,
    title: "Luxury Waterfront Estate",
    location: "Naples, FL",
    price: 2495000,
    beds: 5,
    baths: 5.5,
    sqft: 5200,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    type: "Single Family",
    features: ["Waterfront", "Pool", "Dock"],
  },
  {
    id: 2,
    title: "Modern Golf Course Home",
    location: "Estero, FL",
    price: 875000,
    beds: 4,
    baths: 3,
    sqft: 3100,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    type: "Single Family",
    features: ["Golf Course", "Pool", "Smart Home"],
  },
  {
    id: 3,
    title: "Beachfront Condo Paradise",
    location: "Bonita Springs, FL",
    price: 625000,
    beds: 3,
    baths: 2,
    sqft: 1850,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    type: "Condo",
    features: ["Beachfront", "Balcony", "Resort Style"],
  },
  {
    id: 4,
    title: "Charming Family Home",
    location: "Fort Myers, FL",
    price: 425000,
    beds: 3,
    baths: 2,
    sqft: 2000,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    type: "Single Family",
    features: ["Updated Kitchen", "Large Yard", "Great Schools"],
  },
  {
    id: 5,
    title: "Waterfront Boater's Dream",
    location: "Cape Coral, FL",
    price: 795000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    type: "Single Family",
    features: ["Waterfront", "Boat Lift", "Pool"],
  },
  {
    id: 6,
    title: "Spacious Ranch Style",
    location: "Lehigh Acres, FL",
    price: 325000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    type: "Single Family",
    features: ["Large Lot", "Updated", "Move-in Ready"],
  },
];

const featuredAreas = [
  {
    name: "Naples",
    description: "Upscale living with pristine beaches and world-class dining",
    medianPrice: "$650,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    slug: "naples",
  },
  {
    name: "Estero",
    description: "Growing community with excellent shopping and golf courses",
    medianPrice: "$450,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    slug: "estero",
  },
  {
    name: "Bonita Springs",
    description: "Perfect blend of beach life and family-friendly neighborhoods",
    medianPrice: "$525,000",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    slug: "bonita-springs",
  },
  {
    name: "Cape Coral",
    description: "Waterfront paradise with 400+ miles of navigable waterways",
    medianPrice: "$425,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    slug: "cape-coral",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Southwest Florida Real Estate Experts
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-primary-100">
              Tony & Laura Harvey - Premiere Plus Realty
            </p>
            <p className="text-lg lg:text-xl mb-8 text-primary-100">
              Serving Naples, Estero, Bonita Springs, Fort Myers, Cape Coral, and all of Southwest Florida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/properties"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
              >
                Browse Properties
              </Link>
              <a
                href="tel:239-777-0155"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-500 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                239-777-0155
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Widget */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <QuickSearch />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Home className="w-8 h-8 text-primary-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">800+</div>
              <div className="text-gray-600">Homes Sold</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-primary-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$200M+</div>
              <div className="text-gray-600">In Sales</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Building2 className="w-8 h-8 text-primary-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our hand-picked selection of exceptional homes across Southwest Florida
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Properties
              <MapPin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Southwest Florida Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Southwest Florida
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the unique charm and lifestyle of each community we serve
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredAreas.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Areas
              <MapPin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tony & Laura Harvey?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with dedicated real estate professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                15+ years of experience in Southwest Florida real estate. We know every neighborhood, 
                school district, and market trend.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Over $200M in closed transactions and 800+ happy families. Our track record 
                speaks for itself.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Home className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                We treat every client like family. Your goals become our goals, and we work 
                tirelessly to exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Let's start your Southwest Florida real estate journey today. Contact Tony & Laura Harvey 
            for expert guidance and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:239-777-0155"
              className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 239-777-0155
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
