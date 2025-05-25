
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Premium Tiles",
      description: "High-quality ceramic, porcelain, and designer tiles for every space",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=600&fit=crop&crop=center",
      category: "Tiles"
    },
    {
      id: 2,
      title: "Natural Marble",
      description: "Elegant marble slabs and tiles for luxury interiors",
      image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=500&h=600&fit=crop&crop=center",
      category: "Marble"
    },
    {
      id: 3,
      title: "Water Taps",
      description: "Modern and classic water taps for kitchen and bathroom",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=600&fit=crop&crop=center",
      category: "Taps"
    },
    {
      id: 4,
      title: "Bathroom Fittings",
      description: "Complete bathroom solutions with premium fittings",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=600&fit=crop&crop=center",
      category: "Fittings"
    },
    {
      id: 5,
      title: "Kitchen Solutions",
      description: "Comprehensive kitchen tiles and fitting solutions",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop&crop=center",
      category: "Kitchen"
    },
    {
      id: 6,
      title: "Wall Cladding",
      description: "Decorative wall cladding and feature wall solutions",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop&crop=center",
      category: "Cladding"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Product Range
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of tiles, marble, and premium fittings designed to 
            transform your residential and commercial spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <Link key={item.id} to="/products">
              <Card 
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
