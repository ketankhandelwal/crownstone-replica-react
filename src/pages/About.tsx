import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f4d675%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-gold-500 to-yellow-400 text-black text-sm font-bold rounded-full mb-6 animate-bounce">
              🏢 Our Story
            </div>
            <h1 className="font-playfair text-6xl md:text-7xl font-bold text-white mb-8">
              About KESARWANI SANITARY WARE
            </h1>
            <p className="font-inter text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in premium tiles, marble, and water fittings
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="font-inter text-gray-600 mb-6">
                Founded in 2000, KESARWANI SANITARY WARE began as a small family business with a vision to provide 
                premium quality tiles and marble to discerning customers. Over the years, we have grown 
                to become one of the leading suppliers in the region, known for our exceptional quality 
                and customer service.
              </p>
              
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="font-inter text-gray-600 mb-6">
                To transform spaces with premium quality materials while providing exceptional customer 
                service and expert guidance throughout every project. We believe that every space 
                deserves the finest materials and craftsmanship.
              </p>
              
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <ul className="font-inter text-gray-600 list-disc pl-6 mb-6">
                <li>Over 20 years of industry experience</li>
                <li>Premium quality materials from trusted suppliers</li>
                <li>Expert design consultation and guidance</li>
                <li>Professional installation services</li>
                <li>Competitive pricing with transparent quotes</li>
                <li>Comprehensive after-sales support</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
