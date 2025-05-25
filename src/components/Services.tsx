
import { Gem, Palette, Settings, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Gem,
      title: "Custom Design",
      description: "Transform your vision into reality with our bespoke jewelry design service. From concept to creation, we work closely with you to craft the perfect piece."
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Our expert designers provide personalized consultations to help you choose the perfect piece or create something entirely unique."
    },
    {
      icon: Settings,
      title: "Repair & Restoration",
      description: "Breathe new life into your treasured pieces with our professional repair and restoration services, handled with the utmost care."
    },
    {
      icon: Heart,
      title: "Lifetime Care",
      description: "We stand behind our craftsmanship with comprehensive lifetime care, including cleaning, maintenance, and adjustments."
    }
  ];

  return (
    <section id="custom" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond creating beautiful jewelry, we offer comprehensive services to ensure your pieces 
            remain as stunning as the day you first wore them.
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
