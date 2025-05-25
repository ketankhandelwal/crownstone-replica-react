
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sparkles, Gem, Droplets, Home, Palette, Crown } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Ceramic Masterpieces",
      description: "High-gloss ceramic tiles with intricate patterns and vibrant colors",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=600&fit=crop&crop=center",
      category: "Premium Tiles",
      gradient: "from-blue-500 to-cyan-400",
      icon: Sparkles
    },
    {
      id: 2,
      title: "Marble Elegance",
      description: "Luxurious marble slabs with natural veining for sophisticated interiors",
      image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=500&h=600&fit=crop&crop=center",
      category: "Luxury Marble",
      gradient: "from-purple-500 to-pink-400",
      icon: Gem
    },
    {
      id: 3,
      title: "Designer Taps",
      description: "Modern brass and chrome taps with waterfall and rainfall designs",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=600&fit=crop&crop=center",
      category: "Water Fittings",
      gradient: "from-emerald-500 to-teal-400",
      icon: Droplets
    },
    {
      id: 4,
      title: "Bathroom Suites",
      description: "Complete bathroom solutions with premium accessories and fixtures",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=600&fit=crop&crop=center",
      category: "Bath Accessories",
      gradient: "from-orange-500 to-red-400",
      icon: Home
    },
    {
      id: 5,
      title: "Mosaic Art",
      description: "Handcrafted mosaic tiles perfect for accent walls and backsplashes",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop&crop=center",
      category: "Artistic Tiles",
      gradient: "from-indigo-500 to-purple-400",
      icon: Palette
    },
    {
      id: 6,
      title: "Royal Collection",
      description: "Gold-veined marble and premium granite for luxury spaces",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop&crop=center",
      category: "Royal Series",
      gradient: "from-yellow-500 to-gold-400",
      icon: Crown
    }
  ];

  return (
    <section id="collections" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-gold-500 to-yellow-400 text-black text-sm font-bold rounded-full mb-6 animate-bounce">
            🏆 Award-Winning Collections
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent mb-8">
            Exquisite Product Range
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From handpicked Italian marble to cutting-edge water fittings, discover our premium 
            collections that redefine luxury living and transform ordinary spaces into extraordinary experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <Link key={item.id} to="/products">
              <Card 
                className="group cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-white/80 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category badge with gradient */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center space-x-2 bg-gradient-to-r ${item.gradient} px-4 py-2 rounded-full shadow-lg`}>
                      <item.icon className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-bold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-2">
                        View Collection →
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-2 text-gold-600 font-semibold">
                    <span>Explore Now</span>
                    <div className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-gold-500 to-yellow-400 transition-all duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <Link to="/products">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">View All Products 🚀</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;
