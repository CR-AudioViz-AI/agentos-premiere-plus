import { Award, Heart, Home, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About Tony & Laura Harvey
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted real estate partners with over 15 years of experience 
            serving Southwest Florida families
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Agent Profiles */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Tony Harvey */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="Tony Harvey"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Tony Harvey
              </h2>
              <p className="text-center text-primary-600 font-semibold mb-6">
                Co-Founder & Licensed Real Estate Agent
              </p>
              <p className="text-gray-600 mb-4">
                With over 15 years in Southwest Florida real estate, Tony brings unparalleled 
                market knowledge and negotiation expertise to every transaction. His background 
                in finance and investment gives clients a strategic advantage in today's market.
              </p>
              <p className="text-gray-600">
                Tony specializes in waterfront properties and luxury homes, helping clients 
                find their dream coastal lifestyle. His dedication to client success and 
                market insight have resulted in over $100M in closed transactions.
              </p>
            </div>

            {/* Laura Harvey */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                  alt="Laura Harvey"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Laura Harvey
              </h2>
              <p className="text-center text-primary-600 font-semibold mb-6">
                Co-Founder & Licensed Real Estate Agent
              </p>
              <p className="text-gray-600 mb-4">
                Laura's passion for real estate and interior design creates a unique 
                perspective that helps clients see the full potential of every property. 
                Her attention to detail and creative vision have helped countless families 
                find their perfect home.
              </p>
              <p className="text-gray-600">
                Specializing in family homes and first-time buyers, Laura's warm approach 
                and comprehensive market knowledge make the home buying process smooth and 
                enjoyable. She's committed to making your real estate dreams a reality.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                Honest, transparent communication in every transaction
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Client-First</h3>
              <p className="text-gray-600 text-sm">
                Your goals and satisfaction are our top priority
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Exceptional service and attention to every detail
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Home className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">
                Deep knowledge of Southwest Florida communities
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary-700 text-white rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">800+</div>
              <div className="text-primary-100">Homes Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$200M+</div>
              <div className="text-primary-100">In Sales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to start your Southwest Florida real estate journey? Contact Tony & Laura 
            Harvey today for expert guidance and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:239-777-0155"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              Call 239-777-0155
            </a>
            <a
              href="mailto:info@premiereplus.com"
              className="inline-block bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors"
            >
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
