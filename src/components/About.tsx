
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-cream-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Dreams Into Reality
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">
              For over two decades, Crownstone Designs has been at the forefront of luxury jewelry creation. 
              Our master craftsmen combine traditional techniques with contemporary design to create pieces 
              that are both timeless and uniquely modern.
            </p>
            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Every piece tells a story - your story. Whether it's an engagement ring that marks the beginning 
              of forever, or a custom necklace that celebrates a milestone, we believe jewelry should be as 
              unique as the person wearing it.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-gold-600 mb-2">20+</div>
                <div className="font-inter text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-gold-600 mb-2">5000+</div>
                <div className="font-inter text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-gold-600 mb-2">100%</div>
                <div className="font-inter text-gray-600">Handcrafted</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-gold-600 mb-2">∞</div>
                <div className="font-inter text-gray-600">Possibilities</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=700&fit=crop&crop=center"
              alt="Jewelry craftsman at work"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-200 rounded-lg opacity-50 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cream-200 rounded-lg opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
