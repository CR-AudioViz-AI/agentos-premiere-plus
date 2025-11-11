import { Phone, Home, Search, FileText, Key, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BuyPage() {
  return (
    <div className="py-12">
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Buy a Home</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Find your dream home in Southwest Florida
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Buy With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Home className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Local Knowledge</h3>
              <p className="text-gray-600 text-center">Deep understanding of Southwest Florida neighborhoods, schools, and market conditions.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Search className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Property Access</h3>
              <p className="text-gray-600 text-center">Full MLS access and exclusive listings before they hit the market.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FileText className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Full Support</h3>
              <p className="text-gray-600 text-center">From pre-approval to closing, we guide you through every step.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 rounded-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Buying Process</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { num: 1, title: "Get Pre-Approved", desc: "Start with mortgage pre-approval to know your budget and show sellers you're serious." },
              { num: 2, title: "Define Your Needs", desc: "We'll discuss must-haves, nice-to-haves, and deal-breakers for your perfect home." },
              { num: 3, title: "Tour Properties", desc: "We'll schedule showings and provide insights on each property's value and condition." },
              { num: 4, title: "Make an Offer", desc: "We'll craft a competitive offer and negotiate the best terms on your behalf." },
              { num: 5, title: "Inspection & Closing", desc: "Navigate inspections, appraisals, and paperwork to secure your new home." }
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

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">First-Time Buyer Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Check Your Credit", desc: "Review credit reports and address any issues before applying for a mortgage." },
              { title: "Save for Down Payment", desc: "Aim for 10-20% down to avoid PMI and get better interest rates." },
              { title: "Research Neighborhoods", desc: "Visit areas at different times, check schools, commute times, and amenities." },
              { title: "Budget for Extras", desc: "Remember closing costs, inspections, moving, and immediate repairs." },
              { title: "Don't Skip Inspection", desc: "Professional inspection can save thousands by revealing hidden issues." },
              { title: "Think Long-Term", desc: "Consider resale value and plan to stay at least 3-5 years." }
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-primary-700 text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Home Search?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Let's find your perfect home in Southwest Florida together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Browse Properties
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
