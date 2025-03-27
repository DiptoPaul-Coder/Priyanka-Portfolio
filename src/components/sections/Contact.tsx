
import { useEffect, useRef } from 'react';
import ContactForm from '../ui/ContactForm';
import { Mail, Phone, Linkedin, ExternalLink, MapPin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "paul.bmb011@gmail.com",
      link: "mailto:paul.bmb011@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+8801707617471",
      link: "tel:+8801707617471"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Altapole, Keshabpur-7450, Jessore, Bangladesh",
      link: "https://maps.google.com/?q=Keshabpur,Jessore,Bangladesh"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Google Scholar",
      value: "View Profile",
      link: "https://scholar.google.com/"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect with Me",
      link: "https://linkedin.com/"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-bg-subtle">
      <div className="section-container">
        <h2 className="section-title text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          I'm always open to discussing research collaborations, academic opportunities, or answering questions about my work.
        </p>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start reveal-animation">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-8">
              Feel free to reach out through any of the channels below. I'm looking forward to connecting with fellow researchers and potential collaborators.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 shadow-lg">
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
      
      <footer className="mt-20 border-t border-gray-200 pt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                PP
              </div>
              <div>
                <p className="font-display font-medium">Priyanka Paul</p>
                <p className="text-sm text-gray-500">Biochemistry & Molecular Biology Researcher</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Priyanka Paul. All rights reserved.
            </p>
            
            <div>
              <p className="text-gray-600 text-sm">
                Research Interests: Biochemistry, Molecular Biology, Bioinformatics
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
