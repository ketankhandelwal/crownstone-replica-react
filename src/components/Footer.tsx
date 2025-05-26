import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useEffect } from 'react';

// Custom hook for scroll to top
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
};

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" }
  ];

  const services = [
    { name: "Design Consultation", href: "#" },
    { name: "Installation", href: "#" },
    { name: "Custom Orders", href: "#" },
    { name: "Bulk Supply", href: "#" },
    { name: "Technical Support", href: "#" }
  ];

  // Function to handle link clicks
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only scroll to top if it's not a social media link (which should open in new tab)
    if (!e.currentTarget.getAttribute('href')?.startsWith('#')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-gold-400 mb-4">
              KESARWANI SANITARY WARE
            </h3>
            <p className="font-inter text-gray-300 mb-6 leading-relaxed">
              Premium tiles, marble, and water fittings for modern living spaces. 
              Quality materials, expert service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-gray-300 hover:text-gold-400 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="font-inter text-gray-300 hover:text-gold-400 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-3 font-inter text-gray-300">
              <p>Infront of Hanuman Mandir, Babaganj<br />Pratapgarh, UP 230001</p>
              <p>Phone: +91 80901 40600</p>
              <p>Email: info@tilestonepro.com</p>
              <p className="mt-4 text-sm">
                <strong>Store Hours:</strong><br />
                Sun-Mon: 10AM-8PM<br />
                Saturday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-400 text-sm">
              © 2024 KESARWANI SANITARY WARE. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="font-inter text-gray-400 hover:text-gold-400 text-sm transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="font-inter text-gray-400 hover:text-gold-400 text-sm transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="font-inter text-gray-400 hover:text-gold-400 text-sm transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Warranty Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;