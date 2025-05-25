
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-gold-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f4d675" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Exquisite
            <span className="block text-gold-600">Luxury Jewelry</span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Handcrafted with passion, designed with precision. Discover our collection of timeless pieces that celebrate your unique story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Explore Collections
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              Custom Design
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cream-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
