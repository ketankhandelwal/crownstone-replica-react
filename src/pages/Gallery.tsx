
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", title: "Modern Kitchen Tiles" },
    { id: 2, image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=600&h=400&fit=crop", title: "Marble Bathroom" },
    { id: 3, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop", title: "Premium Taps" },
    { id: 4, image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop", title: "Bathroom Fittings" },
    { id: 5, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop", title: "Kitchen Design" },
    { id: 6, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop", title: "Wall Cladding" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gold-50 to-cream-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Project Gallery
            </h1>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our completed projects and get inspired for your next renovation
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <div key={item.id} className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <h3 className="text-white font-playfair text-xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
