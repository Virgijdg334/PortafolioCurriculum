import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ChevronDown, Github, Linkedin, Mail, Download, Award, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { useState } from 'react';
import cvImage from 'figma:asset/8a77e2737cf13f794a1035e7e1c4353149bb2cf8.png';
import profileImage from 'figma:asset/2fa45d59e50c750845f6c842baed2a9fb33dfc53.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const [showCVDialog, setShowCVDialog] = useState(false);
  const { t } = useLanguage();
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const keySkills = ['Java', 'React', 'AWS Cloud', 'Angular', 'Python'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30">
                  <Award className="w-4 h-4 mr-2" />
                  {t('hero.available')}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-foreground">{t('hero.greeting')}</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Virgilio J.
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Domínguez
                </span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  {t('hero.role')}
                </p>
                <p className="text-lg text-muted-foreground">
                  {t('hero.specialization')}
                </p>
              </div>
            </motion.div>

            {/* Key Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {keySkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Badge variant="outline" className="px-3 py-1.5 bg-card/50 backdrop-blur-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => scrollToSection('#projects')}
              >
                <Code className="w-5 h-5 mr-2" />
                {t('hero.viewProjects')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                {t('hero.contact')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowCVDialog(true)}
              >
                <Download className="w-5 h-5 mr-2" />
                {t('hero.viewCV')}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-accent"
                onClick={() => window.open('https://github.com/Virgijdg334', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-accent"
                onClick={() => window.open('https://linkedin.com/in/virgilio-jes%C3%BAs-dom%C3%ADnguez-gonz%C3%A1lez-a34385284/', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-accent"
                onClick={() => window.location.href = 'mailto:jesusdmg334@gmail.com'}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Decorative Programming Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative flex justify-center">
              {/* Profile Image Container - Simple and Professional */}
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Virgilio J. Domínguez - Desarrollador Full-Stack"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-2 border-border/50"
                />
              </div>
              
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -left-2 top-8 bg-card/80 backdrop-blur-sm border rounded-lg p-2 shadow-md"
              >
                <div className="text-xl font-bold text-purple-400">10+</div>
                <div className="text-xs text-muted-foreground">{t('hero.technologies')}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -right-2 bottom-8 bg-card/80 backdrop-blur-sm border rounded-lg p-2 shadow-md"
              >
                <div className="text-xl font-bold text-green-400">3</div>
                <div className="text-xs text-muted-foreground">{t('hero.projectsCount')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('#about')}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* CV Dialog */}
      <Dialog open={showCVDialog} onOpenChange={setShowCVDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogTitle className="text-2xl font-bold">{t('hero.cvTitle')}</DialogTitle>
          <DialogDescription>
            {t('hero.cvDescription')}
          </DialogDescription>
          <div className="mt-4">
            <img 
              src={cvImage} 
              alt="Currículum de Virgilio J. Domínguez" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-6 flex gap-4 justify-center">
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = cvImage;
                  link.download = 'CV_Virgilio_Dominguez.png';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('hero.downloadCV')}
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(cvImage, '_blank')}
              >
                {t('hero.viewFullSize')}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}