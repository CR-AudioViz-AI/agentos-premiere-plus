import Link from "next/link";
import Image from "next/image";
import { MapPin, TrendingUp } from "lucide-react";

interface Area {
  name: string;
  description: string;
  medianPrice: string;
  image: string;
  slug: string;
}

export default function AreaCard({ area }: { area: Area }) {
  return (
    <Link href={`/areas/${area.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
        <div className="relative h-48">
          <Image
            src={area.image}
            alt={area.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-primary-600" />
            <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
          </div>
          <p className="text-gray-600 mb-4 min-h-[3rem]">
            {area.description}
          </p>
          <div className="flex items-center gap-2 text-primary-700">
            <TrendingUp className="w-4 h-4" />
            <span className="font-semibold">Median: {area.medianPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
