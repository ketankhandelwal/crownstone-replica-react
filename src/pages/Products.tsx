
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Products = () => {
  const productCategories = [
    {
      title: "Ceramic Tiles",
      products: [
        { name: "Glossy Finish Tiles", size: "60x60 cm", price: "₹45/sq ft" },
        { name: "Matte Finish Tiles", size: "30x30 cm", price: "₹35/sq ft" },
        { name: "Textured Ceramic", size: "45x45 cm", price: "₹50/sq ft" },
      ]
    },
    {
      title: "Marble Collection",
      products: [
        { name: "Italian Carrara", size: "24x24 inch", price: "₹180/sq ft" },
        { name: "Indian Makrana", size: "18x18 inch", price: "₹120/sq ft" },
        { name: "Granite Composite", size: "36x36 inch", price: "₹95/sq ft" },
      ]
    },
    {
      title: "Water Fittings",
      products: [
        { name: "Premium Kitchen Tap", type: "Single Handle", price: "₹3,500" },
        { name: "Bathroom Mixer", type: "Wall Mounted", price: "₹2,800" },
        { name: "Shower System", type: "Rain Shower", price: "₹8,500" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gold-50 to-cream-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive range of premium tiles, marble, and water fittings
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {productCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-16">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.products.map((product, index) => (
                    <Card key={product.name} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="font-playfair text-xl font-semibold mb-3">{product.name}</h3>
                        <p className="text-gray-600 mb-2">
                          {product.size || product.type}
                        </p>
                        <p className="font-semibold text-gold-600 text-lg">{product.price}</p>
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
