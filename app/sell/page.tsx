import { Phone, TrendingUp, Camera, DollarSign, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SellPage() {
  return (
    <div className="py-12">
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sell Your Home</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Get top dollar for your Southwest Florida property
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Sell With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Market Expertise</h3>
              <p className="text-gray-600 text-center">15+ years of Southwest Florida market knowledge to price your home right.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Camera className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Professional Marketing</h3>
              <p className="text-gray-600 text-center">Professional photos, virtual tours, and MLS exposure across all platforms.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Proven Results</h3>
              <p className="text-gray-600 text-center">$200M+ in closed transactions with exceptional negotiation skills.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 rounded-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Selling Process</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { num: 1, title: "Free Home Valuation", desc: "We analyze recent sales and market trends to determine optimal pricing." },
              { num: 2, title: "Prepare & Stage", desc: "Recommend improvements, arrange professional photography, and create marketing plan." },
              { num: 3, title: "List & Market", desc: "Your home goes live on MLS, our website, and major real estate portals." },
              { num: 4, title: "Show & Negotiate", desc: "We handle showings, open houses, and negotiations to get the best offer." },
              { num: 5, title: "Close the Deal", desc: "Guide you through inspections, appraisals, and closing for smooth transaction." }
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-primary-700 text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Home?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Get your free home valuation and learn your property's worth in today's market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Request Free Valuation
            </Link>
            <a href="tel:239-777-0155" className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-900 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call 239-777-0155
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
