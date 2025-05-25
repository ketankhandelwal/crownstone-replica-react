
import { Card, CardContent } from '@/components/ui/card';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Elegant Rings",
      description: "Timeless engagement and wedding rings crafted with the finest materials",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=600&fit=crop&crop=center",
      category: "Rings"
    },
    {
      id: 2,
      title: "Statement Necklaces",
      description: "Bold and beautiful necklaces that make every outfit extraordinary",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop&crop=center",
      category: "Necklaces"
    },
    {
      id: 3,
      title: "Luxury Earrings",
      description: "Sophisticated earrings designed to complement your natural beauty",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop&crop=center",
      category: "Earrings"
    },
    {
      id: 4,
      title: "Precious Bracelets",
      description: "Delicate and stunning bracelets for every occasion",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=600&fit=crop&crop=center",
      category: "Bracelets"
    },
    {
      id: 5,
      title: "Custom Pieces",
      description: "Bespoke jewelry designed exclusively for you",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=600&fit=crop&crop=center",
      category: "Custom"
    },
    {
      id: 6,
      title: "Vintage Collection",
      description: "Carefully curated vintage pieces with timeless appeal",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=600&fit=crop&crop=center",
      category: "Vintage"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Collections
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Each piece in our collection tells a story of craftsmanship, beauty, and timeless elegance. 
            Discover jewelry that speaks to your soul.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <Card 
              key={item.id} 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
