
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      title: "Premium Ceramic Tiles",
      description: "High-quality ceramic tiles with stunning finishes and patterns",
      gradient: "from-blue-500 to-cyan-400",
      products: [
        { 
          name: "Glossy Diamond Pattern", 
          size: "60x60 cm", 
          price: "₹65/sq ft", 
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
          badge: "Best Seller"
        },
        { 
          name: "Matte Stone Finish", 
          size: "30x30 cm", 
          price: "₹45/sq ft", 
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=300&h=300&fit=crop",
          badge: "New"
        },
        { 
          name: "Textured Wave Design", 
          size: "45x45 cm", 
          price: "₹75/sq ft", 
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
          badge: "Premium"
        },
      ]
    },
    {
      title: "Luxury Marble Collection",
      description: "Exquisite marble pieces sourced from the finest quarries worldwide",
      gradient: "from-purple-500 to-pink-400",
      products: [
        { 
          name: "Italian Carrara Bianco", 
          size: "24x24 inch", 
          price: "₹280/sq ft", 
          rating: 5.0,
          image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=300&h=300&fit=crop",
          badge: "Luxury"
        },
        { 
          name: "Indian Makrana Gold", 
          size: "18x18 inch", 
          price: "₹180/sq ft", 
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=300&h=300&fit=crop",
          badge: "Heritage"
        },
        { 
          name: "Calacatta Nero", 
          size: "36x36 inch", 
          price: "₹350/sq ft", 
          rating: 5.0,
          image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=300&h=300&fit=crop",
          badge: "Exclusive"
        },
      ]
    },
    {
      title: "Designer Water Fittings",
      description: "Modern and elegant water fittings for bathrooms and kitchens",
      gradient: "from-emerald-500 to-teal-400",
      products: [
        { 
          name: "Waterfall Kitchen Tap", 
          type: "Single Handle Brass", 
          price: "₹8,500", 
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop",
          badge: "Designer"
        },
        { 
          name: "Rainfall Shower System", 
          type: "Wall Mounted Chrome", 
          price: "₹15,800", 
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=300&h=300&fit=crop",
          badge: "Premium"
        },
        { 
          name: "Smart Sensor Tap", 
          type: "Touchless Technology", 
          price: "₹12,500", 
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop",
          badge: "Tech"
        },
      ]
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'bg-gradient-to-r from-green-500 to-emerald-400';
      case 'New': return 'bg-gradient-to-r from-blue-500 to-cyan-400';
      case 'Premium': return 'bg-gradient-to-r from-purple-500 to-pink-400';
      case 'Luxury': return 'bg-gradient-to-r from-yellow-500 to-gold-400';
      case 'Heritage': return 'bg-gradient-to-r from-orange-500 to-red-400';
      case 'Exclusive': return 'bg-gradient-to-r from-indigo-500 to-purple-500';
      case 'Designer': return 'bg-gradient-to-r from-pink-500 to-rose-400';
      case 'Tech': return 'bg-gradient-to-r from-teal-500 to-cyan-400';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f4d675%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-gold-500 to-yellow-400 text-black text-sm font-bold rounded-full mb-6 animate-bounce">
              🏆 Premium Quality Products
            </div>
            <h1 className="font-playfair text-6xl md:text-7xl font-bold text-white mb-8">
              Our Products
            </h1>
            <p className="font-inter text-xl text-gray-200 max-w-4xl mx-auto">
              Discover our extensive collection of premium tiles, luxury marble, and modern water fittings
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {productCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`inline-block px-6 py-3 bg-gradient-to-r ${category.gradient} text-white text-sm font-bold rounded-full mb-4`}>
                    {category.title}
                  </div>
                  <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.products.map((product, index) => (
                    <Card key={product.name} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 overflow-hidden bg-white/80 backdrop-blur-sm">
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className={`${getBadgeColor(product.badge)} text-white border-0 font-bold px-3 py-1`}>
                            {product.badge}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex space-x-2">
                            <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                            </button>
                            <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                              <ShoppingCart className="w-4 h-4 text-gray-600 hover:text-blue-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center mb-3">
                          <div className="flex items-center space-x-1 mr-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                        </div>
                        
                        <p className="text-gray-600 mb-3">
                          {product.size || product.type}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-2xl bg-gradient-to-r from-gold-600 to-yellow-500 bg-clip-text text-transparent">
                            {product.price}
                          </p>
                          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Add to Cart
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
