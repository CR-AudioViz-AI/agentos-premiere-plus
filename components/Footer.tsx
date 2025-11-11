import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const areas = [
    { name: "Naples", slug: "naples" },
    { name: "Estero", slug: "estero" },
    { name: "Bonita Springs", slug: "bonita-springs" },
    { name: "Fort Myers", slug: "fort-myers" },
    { name: "Cape Coral", slug: "cape-coral" },
    { name: "Lehigh Acres", slug: "lehigh-acres" },
    { name: "Marco Island", slug: "marco-island" },
    { name: "Golden Gate Estates", slug: "golden-gate-estates" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Premiere Plus Realty
            </h3>
            <p className="mb-4">
              Your trusted real estate partners serving Southwest Florida with 
              integrity, expertise, and exceptional service.
            </p>
            <div className="space-y-2">
              <a
                href="tel:239-777-0155"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                239-777-0155
              </a>
              <a
                href="mailto:info@premiereplus.com"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@premiereplus.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Southwest Florida</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-primary-400 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {areas.slice(0, 4).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Areas */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">More Areas</h3>
            <ul className="space-y-2">
              {areas.slice(4).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Premiere Plus Realty. All rights reserved.
          </p>
          <p className="mt-2">
            Tony & Laura Harvey - Licensed Real Estate Agents in Southwest Florida
          </p>
        </div>
      </div>
    </footer>
  );
}
