
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gold-50 to-cream-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About KESARWANI SANITARY WARE
            </h1>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
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
