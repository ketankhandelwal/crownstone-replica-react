
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f4d675%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-gold-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute bottom-32 left-16 w-5 h-5 bg-emerald-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-70"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-gold-500 to-yellow-400 text-black text-sm font-semibold rounded-full mb-4 animate-bounce">
              ✨ Premium Quality Since 2000
            </span>
          </div>
          
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-gold-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Space Today
            </span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover premium tiles, luxurious marble, and modern water fittings that bring elegance 
            and sophistication to every corner of your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-600 to-yellow-500 hover:from-gold-700 hover:to-yellow-600 text-black px-10 py-4 text-lg font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl rounded-full"
              >
                🏛️ Explore Products
              </Button>
            </Link>
            <Link to="/gallery">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold transition-all duration-500 transform hover:scale-105 rounded-full backdrop-blur-sm"
              >
                🎨 View Gallery
              </Button>
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏺</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Premium Tiles</h3>
              <p className="text-gray-300 text-sm">Ceramic, Porcelain & Designer Collections</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Luxury Marble</h3>
              <p className="text-gray-300 text-sm">Italian Carrara & Indian Makrana</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚿</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Modern Fittings</h3>
              <p className="text-gray-300 text-sm">Taps, Showers & Complete Solutions</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-gradient-to-br from-gold-400 to-orange-500 rounded-lg opacity-20 animate-pulse transform rotate-45"></div>
      <div className="absolute bottom-40 right-16 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 animate-bounce transform rotate-12"></div>
      <div className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full opacity-30 animate-ping"></div>
    </section>
  );
};

export default Hero;
