import PropertyCard from "@/components/PropertyCard";
import QuickSearch from "@/components/QuickSearch";

// Static properties data
const properties = [
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
  {
    id: 7,
    title: "Elegant Island Living",
    location: "Marco Island, FL",
    price: 1250000,
    beds: 4,
    baths: 3.5,
    sqft: 3400,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    type: "Single Family",
    features: ["Waterfront", "Pool", "Private Dock"],
  },
  {
    id: 8,
    title: "Peaceful Estate Home",
    location: "Golden Gate Estates, FL",
    price: 575000,
    beds: 4,
    baths: 3,
    sqft: 2600,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    type: "Single Family",
    features: ["5+ Acres", "Horse Property", "Privacy"],
  },
  {
    id: 9,
    title: "Downtown Loft Condo",
    location: "Fort Myers, FL",
    price: 285000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    type: "Condo",
    features: ["Downtown", "Modern", "Walkable"],
  },
];

export default function Properties() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
          Available Properties
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our current listings across Southwest Florida
        </p>

        <div className="mb-12">
          <QuickSearch />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for?
          </p>
          <a
            href="tel:239-777-0155"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Call Us at 239-777-0155
          </a>
        </div>
      </div>
    </div>
  );
}
