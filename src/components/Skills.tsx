import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    title: 'Lenguajes de Programación',
    icon: '💻',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'XML', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'JavaScript', level: 75 },
    ]
  },
  {
    title: 'Frameworks & Librerías',
    icon: '⚛️',
    skills: [
      { name: 'React', level: 80 },
      { name: 'Angular', level: 75 },
      { name: 'Tailwind CSS', level: 70 },
      { name: 'Material Design', level: 75 },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS Cloud', level: 75 },
      { name: 'Firebase', level: 70 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'SQLite', level: 75 },
    ]
  },
  {
    title: 'Herramientas de Desarrollo',
    icon: '🛠️',
    skills: [
      { name: 'Android Studio', level: 85 },
      { name: 'Visual Studio Code', level: 85 },
      { name: 'IntelliJ IDEA', level: 80 },
      { name: 'Eclipse', level: 75 },
    ]
  }
];

const technologies = [
  'Java', 'HTML5', 'CSS3', 'JavaScript', 'SQL', 'React', 'Angular', 'AWS Cloud',
  'Firebase', 'Android Studio', 'Material Design', 'SQLite', 'Git & GitHub',
  'Visual Studio Code', 'IntelliJ IDEA', 'Tailwind CSS', 'XML', 'TensorFlow',
  'Machine Learning', 'Natural Language Processing', 'UI/UX Design'
];

const professionalHighlights = [
  {
    title: 'Desarrollo Full-Stack',
    description: 'Frontend y Backend con tecnologías modernas',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Cloud Computing',
    description: 'AWS y servicios en la nube',
    icon: '☁️', 
    color: 'from-orange-500 to-yellow-500'
  },
  {
    title: 'Mobile Development',
    description: 'Aplicaciones Android nativas',
    icon: '📱',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Inteligencia Artificial',
    description: 'ML, NLP y soluciones inteligentes',
    icon: '🤖',
    color: 'from-purple-500 to-pink-500'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que manejo para crear aplicaciones multiplataforma
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-none bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Experiencia y Formación</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Experiencia Laboral</h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-purple-400 pl-4">
                      <h5 className="font-medium">Desarrollo de Aplicaciones Multiplataforma</h5>
                      <p className="text-sm text-muted-foreground">2023 - OpenWebinar</p>
                      <p className="text-sm">Especialización en diversos lenguajes: Java, SQL, HTML, CSS, XML, Angular y React</p>
                    </div>
                    <div className="border-l-2 border-blue-400 pl-4">
                      <h5 className="font-medium">Organizador de Eventos</h5>
                      <p className="text-sm text-muted-foreground">2022 - Videojuegos Party</p>
                      <p className="text-sm">Preparador de actividades y montaje de hardware previo al evento</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Formación</h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-green-400 pl-4">
                      <h5 className="font-medium">Grado Superior en Desarrollo de Aplicaciones Multiplataforma</h5>
                      <p className="text-sm text-muted-foreground">Cursando actualmente 1° año - Instituto Isidac</p>
                    </div>
                    <div className="border-l-2 border-orange-400 pl-4">
                      <h5 className="font-medium">Bachiller con orientación en Tecnología</h5>
                      <p className="text-sm text-muted-foreground">IES Isidya</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-8">Tecnologías que utilizo</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Especialidades Profesionales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {professionalHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${highlight.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{highlight.icon}</span>
                    </div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}