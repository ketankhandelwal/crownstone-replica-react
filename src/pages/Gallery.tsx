
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { 
      id: 1, 
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", 
      title: "Modern Kitchen Tiles", 
      category: "kitchen",
      description: "Sleek ceramic tiles with metallic accents",
      project: "Luxury Villa Mumbai"
    },
    { 
      id: 2, 
      image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=600&h=400&fit=crop", 
      title: "Marble Bathroom Elegance", 
      category: "bathroom",
      description: "Italian Carrara marble with gold veining",
      project: "Penthouse Bangalore"
    },
    { 
      id: 3, 
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop", 
      title: "Designer Water Taps", 
      category: "fittings",
      description: "Premium brass taps with waterfall design",
      project: "Resort Goa"
    },
    { 
      id: 4, 
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop", 
      title: "Complete Bathroom Suite", 
      category: "bathroom",
      description: "Coordinated tiles and premium fittings",
      project: "Hotel Chain Delhi"
    },
    { 
      id: 5, 
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop", 
      title: "Gourmet Kitchen Design", 
      category: "kitchen",
      description: "Mosaic backsplash with granite counters",
      project: "Farmhouse Pune"
    },
    { 
      id: 6, 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop", 
      title: "Artistic Wall Cladding", 
      category: "decorative",
      description: "3D textured tiles with LED integration",
      project: "Corporate Office Chennai"
    },
    { 
      id: 7, 
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=300&h=300&fit=crop", 
      title: "Luxury Marble Flooring", 
      category: "flooring",
      description: "Calacatta marble with brass inlays",
      project: "Heritage Hotel Rajasthan"
    },
    { 
      id: 8, 
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop", 
      title: "Smart Bathroom Tech", 
      category: "fittings",
      description: "Sensor taps and digital shower controls",
      project: "Tech Hub Hyderabad"
    },
    { 
      id: 9, 
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop", 
      title: "Outdoor Tile Installation", 
      category: "outdoor",
      description: "Weather-resistant porcelain tiles",
      project: "Garden Restaurant Mumbai"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', color: 'from-gray-600 to-gray-500' },
    { key: 'kitchen', label: 'Kitchen', color: 'from-orange-500 to-red-400' },
    { key: 'bathroom', label: 'Bathroom', color: 'from-blue-500 to-cyan-400' },
    { key: 'fittings', label: 'Fittings', color: 'from-emerald-500 to-teal-400' },
    { key: 'flooring', label: 'Flooring', color: 'from-purple-500 to-pink-400' },
    { key: 'decorative', label: 'Decorative', color: 'from-yellow-500 to-gold-400' },
    { key: 'outdoor', label: 'Outdoor', color: 'from-green-500 to-emerald-400' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f4d675%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-gold-500 to-yellow-400 text-black text-sm font-bold rounded-full mb-6 animate-bounce">
              🎨 Project Showcase
            </div>
            <h1 className="font-playfair text-6xl md:text-7xl font-bold text-white mb-8">
              Project Gallery
            </h1>
            <p className="font-inter text-xl text-gray-200 max-w-4xl mx-auto">
              Explore our stunning completed projects and get inspired by the endless possibilities
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white/50 backdrop-blur-sm sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter.key
                      ? `bg-gradient-to-r ${filter.color} text-white shadow-lg`
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 bg-white"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 font-semibold px-3 py-1">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </Badge>
                    </div>
                    
                    {/* Hover content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 mb-2">{item.description}</p>
                      <p className="text-gold-400 font-semibold text-sm">{item.project}</p>
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-gold-400 to-yellow-300"></div>
                        <span className="text-sm font-medium">View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-xl">No projects found for the selected category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
