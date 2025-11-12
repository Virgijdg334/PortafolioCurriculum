import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Smartphone, Globe, MessageCircle, Star, Calendar, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import tightPokerImage from 'figma:asset/17a87a8b4a140b18ac0afba69f0c3d942c3540e9.png';

const projects = [
  {
    id: 1,
    title: 'TightPoker',
    subtitle: 'Aplicación de Casino Profesional',
    description: 'Aplicación móvil completa para la gestión de casinos con interfaz elegante en verde esmeralda. Incluye sistema de saldo, gestión de torneos como "Mystery Weekend", diferentes modalidades de juego y navegación intuitiva con iconografía de cartas.',
    longDescription: 'TightPoker es una sofisticada aplicación de casino que combina elegancia visual con funcionalidad profesional. La interfaz presenta un distintivo fondo verde esmeralda con marcos dorados, sistema de gestión de saldo en euros, organización de torneos especiales como "Mystery Weekend", y navegación fluida entre diferentes modalidades de juego con iconografía clásica de cartas.',
    image: 'https://images.unsplash.com/photo-1662057168153-c0d62a4025f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwb2tlciUyMGNhc2lubyUyMGFwcCUyMGdyZWVuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTgxOTYxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Java', 'Android Studio', 'SQLite', 'Material Design', 'Firebase', 'UI/UX Design'],
    category: 'Aplicación Móvil',
    status: 'Completado',
    year: '2024',
    featured: true,
    githubUrl: 'https://github.com/Virgijdg334/tightpoker',
    demoUrl: null,
    icon: Smartphone,
    gradient: 'from-green-600 to-emerald-500',
    highlights: ['Interfaz verde esmeralda elegante', 'Sistema de saldo en euros', 'Torneos especiales (Mystery Weekend)', 'Navegación con iconografía de cartas']
  },
  {
    id: 2,
    title: 'CardTCGShop',
    subtitle: 'E-commerce de Cartas Coleccionables',
    description: 'Tienda online interactiva especializada en cartas Pokémon de coleccionista. Incluye catálogo dinámico, sistema de búsqueda avanzada, carrito de compras y gestión de inventario en tiempo real.',
    longDescription: 'CardTCGShop es una plataforma web completa para la venta de cartas de trading card games, especialmente Pokémon. La aplicación cuenta con un sistema de filtrado avanzado, visualización de cartas en alta resolución, gestión de usuarios, procesamiento de pedidos y análisis de tendencias de mercado.',
    image: 'https://images.unsplash.com/photo-1664997296099-5a0b63ab0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwdHJhZGluZyUyMGNhcmRzJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NTgwODIyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    category: 'Aplicación Web',
    status: 'Completado',
    year: '2023',
    featured: true,
    githubUrl: 'https://github.com/Virgijdg334/cardTCGShop',
    demoUrl: null,
    icon: Globe,
    gradient: 'from-purple-600 to-pink-600',
    highlights: ['Filtrado avanzado', 'Carrito de compras', 'Gestión de inventario', 'Interfaz responsive']
  },
  {
    id: 3,
    title: 'ChatBot Empresarial',
    subtitle: 'IA para Gestión de Incidencias',
    description: 'Sistema de chatbot inteligente desarrollado para una empresa de gestión de incidencias. Automatiza la atención al cliente y optimiza la resolución de problemas técnicos mediante IA.',
    longDescription: 'Chatbot empresarial diseñado para automatizar la gestión de incidencias técnicas. El sistema utiliza procesamiento de lenguaje natural para clasificar automáticamente los problemas, derivar casos complejos a técnicos especializados y proporcionar soluciones instantáneas para problemas comunes.',
    image: 'https://images.unsplash.com/photo-1682941664177-7920d0e59418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwY3VzdG9tZXIlMjBzZXJ2aWNlJTIwc3VwcG9ydHxlbnwxfHx8fDE3NTgxNzg2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Python', 'Natural Language Processing', 'TensorFlow', 'Flask', 'SQL', 'Machine Learning'],
    category: 'Inteligencia Artificial',
    status: 'En Producción',
    year: '2024',
    featured: false,
    githubUrl: null,
    demoUrl: null,
    icon: MessageCircle,
    gradient: 'from-orange-500 to-red-500',
    highlights: ['Procesamiento NLP', 'Clasificación automática', 'Integración empresarial', 'ML Predictivo']
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una selección curada de proyectos que demuestran mis habilidades en desarrollo multiplataforma y diseño de experiencias digitales
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Featured Project Indicator */}
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-4 z-10"
                >
                  <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black border-0">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Proyecto Destacado
                  </Badge>
                </motion.div>
              )}

              <Card className={`border-none bg-card/50 backdrop-blur-sm overflow-hidden ${
                project.featured ? 'ring-2 ring-purple-500/20' : ''
              }`}>
                <div className={`grid lg:grid-cols-2 gap-0 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  
                  {/* Project Image */}
                  <motion.div
                    className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`} />
                      <ImageWithFallback
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Overlay with project info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                      
                      {/* Floating badges */}
                      <div className="absolute top-6 left-6 flex flex-col gap-2 z-30">
                        <Badge variant="secondary" className="backdrop-blur-md bg-background/90">
                          <project.icon className="w-4 h-4 mr-2" />
                          {project.category}
                        </Badge>
                        <Badge variant="secondary" className="backdrop-blur-md bg-background/90">
                          <Calendar className="w-4 h-4 mr-2" />
                          {project.year}
                        </Badge>
                      </div>

                      <div className="absolute top-6 right-6 z-30">
                        <Badge 
                          variant={project.status === 'Completado' ? 'default' : 'secondary'}
                          className={`backdrop-blur-md ${
                            project.status === 'En Producción' 
                              ? 'bg-green-500/90 text-white' 
                              : 'bg-background/90'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Content */}
                  <CardContent className={`p-8 lg:p-12 space-y-6 ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-3xl lg:text-4xl font-bold mb-2">{project.title}</h3>
                        <p className="text-lg text-purple-400 font-medium mb-4">{project.subtitle}</p>
                      </motion.div>
                      
                      <motion.p 
                        className="text-muted-foreground leading-relaxed text-lg"
                        initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Key Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <h4 className="font-semibold text-lg">Características principales:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                            {highlight}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Stack tecnológico:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 + (techIndex * 0.05) }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="px-3 py-1.5 text-sm hover:bg-accent transition-colors">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-wrap gap-4 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {project.githubUrl && (
                        <Button 
                          variant="outline" 
                          size="lg"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex items-center gap-2 hover:bg-accent transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          Ver Código
                        </Button>
                      )}
                      
                      {project.demoUrl ? (
                        <Button 
                          size="lg"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                          className={`flex items-center gap-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 border-0 text-white`}
                        >
                          <ExternalLink className="w-5 h-5" />
                          Ver Demo
                        </Button>
                      ) : (
                        <Button 
                          size="lg"
                          variant="secondary"
                          disabled
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-5 h-5" />
                          {project.status === 'En Producción' ? 'Demo Confidencial' : 'Demo Privada'}
                        </Button>
                      )}
                    </motion.div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="border-none bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
            <CardContent className="relative p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  Estoy siempre buscando nuevos desafíos y oportunidades para aplicar mis conocimientos. 
                  Si tienes una idea interesante o necesitas desarrollar una solución digital, ¡hablemos!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-3"
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Contactar Ahora
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-3"
                    onClick={() => window.open('https://github.com/Virgijdg334', '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Ver en GitHub
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}