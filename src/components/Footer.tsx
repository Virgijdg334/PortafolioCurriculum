import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Github, Linkedin, Mail, Heart, ArrowUp, MapPin, Phone, Award } from 'lucide-react';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.certificates'), href: '#certificates' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="relative bg-background/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-span-2"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Virgilio J. Domínguez
            </h3>
            <p className="text-muted-foreground text-sm max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                <Award className="w-3 h-3 mr-1" />
                AWS Certified
              </Badge>
              <Badge variant="outline" className="text-xs">
                {t('hero.available')}
              </Badge>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">{t('contact.info.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:jesusdmg334@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  jesusdmg334@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{t('contact.info.locationValue')}</span>
              </div>
            </div>
            
            <div className="flex gap-3 pt-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200"
                onClick={() => window.open('https://github.com/Virgijdg334', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-200"
                onClick={() => window.open('https://linkedin.com/in/virgilio-jes%C3%BAs-dom%C3%ADnguez-gonz%C3%A1lez-a34385284/', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-green-500/10 hover:text-green-400 transition-all duration-200"
                onClick={() => window.location.href = 'mailto:jesusdmg334@gmail.com'}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Virgilio J. Domínguez. {t('footer.rights')}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              {language === 'es' ? 'Desarrollado con React & Tailwind CSS' : 'Built with React & Tailwind CSS'}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:bg-accent transition-all duration-200"
            >
              <ArrowUp className="w-4 h-4" />
              {t('scrollToTop')}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}