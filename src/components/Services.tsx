
import { Gem, Palette, Settings, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Gem,
      title: "Premium Materials",
      description: "Sourced from the finest quarries and manufacturers worldwide, our materials meet the highest quality standards for durability and aesthetics."
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Our expert designers provide personalized consultations to help you choose the perfect materials and create stunning design concepts."
    },
    {
      icon: Settings,
      title: "Installation Services",
      description: "Professional installation services by certified technicians ensure your tiles and fittings are installed to perfection."
    },
    {
      icon: Heart,
      title: "After-Sales Support",
      description: "Comprehensive after-sales support including maintenance guidance, replacement parts, and warranty coverage for complete peace of mind."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond providing premium materials, we offer comprehensive services to ensure your 
            project is completed to the highest standards from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-cream-50"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gold-100 rounded-full flex items-center justify-center group-hover:bg-gold-200 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-gold-600" />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="font-inter text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
