
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@tilestonepro.com",
      link: "mailto:info@tilestonepro.com"
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "123 Tile Market Street, Mumbai, MH 400001",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gold-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us for expert consultation and 
            premium quality materials for your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-8">
              Visit Our Showroom
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center group-hover:bg-gold-200 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-gold-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-inter font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="font-inter text-gray-600 hover:text-gold-600 transition-colors duration-200"
                          >
                            {info.detail}
                          </a>
                        ) : (
                          <p className="font-inter text-gray-600">
                            {info.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-8">
              Send Us a Message
            </h3>
            
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200">
                      <option>Select project type</option>
                      <option>Tiles Installation</option>
                      <option>Marble Work</option>
                      <option>Water Fittings</option>
                      <option>Complete Renovation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
