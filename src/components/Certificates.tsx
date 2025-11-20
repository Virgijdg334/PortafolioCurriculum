import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function Certificates() {
  const { t, language } = useLanguage();

  const certificates = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: '2024',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Lambda', 'CloudFormation'],
      description: language === 'es' 
        ? 'Certificación fundamental de AWS que valida conocimientos básicos sobre la nube de Amazon Web Services'
        : 'AWS fundamental certification that validates basic knowledge of Amazon Web Services cloud',
      verified: true
    },
    {
      title: language === 'es' ? 'Desarrollo de Aplicaciones Multiplataforma' : 'Cross-Platform Application Development',
      issuer: 'OpenWebinar',
      date: '2023',
      skills: ['Java', 'SQL', 'HTML', 'CSS', 'XML', 'Angular', 'React'],
      description: language === 'es'
        ? 'Especialización completa en desarrollo de aplicaciones para múltiples plataformas'
        : 'Complete specialization in application development for multiple platforms',
      verified: true
    },
    {
      title: 'Google Cloud Digital Leader',
      issuer: 'Google Cloud',
      date: '2024',
      skills: ['Google Cloud', 'BigQuery', 'Compute Engine', 'Cloud Storage', 'AI/ML'],
      description: language === 'es'
        ? 'Certificación que demuestra competencia en conceptos fundamentales de Google Cloud Platform'
        : 'Certification that demonstrates proficiency in fundamental Google Cloud Platform concepts',
      verified: true
    },
    {
      title: language === 'es' ? 'Fundamentos de Programación en Java' : 'Java Programming Fundamentals',
      issuer: 'Oracle Academy',
      date: '2023',
      skills: ['Java', 'POO', 'Algoritmos'],
      description: language === 'es'
        ? 'Certificación en fundamentos de Java y programación orientada a objetos'
        : 'Certification in Java fundamentals and object-oriented programming',
      verified: true
    },
    {
      title: language === 'es' ? 'Desarrollo Web Frontend' : 'Frontend Web Development',
      issuer: 'FreeCodeCamp',
      date: '2023',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      description: language === 'es'
        ? 'Certificación en tecnologías frontend modernas y diseño responsive'
        : 'Certification in modern frontend technologies and responsive design',
      verified: true
    },
    {
      title: language === 'es' ? 'Bases de Datos SQL' : 'SQL Databases',
      issuer: 'Microsoft Learn',
      date: '2023',
      skills: ['SQL Server', 'MySQL', 'Consultas', 'Diseño DB'],
      description: language === 'es'
        ? 'Fundamentos de bases de datos relacionales y lenguaje SQL'
        : 'Fundamentals of relational databases and SQL language',
      verified: true
    }
  ];

  const achievements = [
    {
      title: language === 'es' ? 'Organizador de Eventos Técnicos' : 'Technical Event Organizer',
      description: language === 'es' 
        ? 'Organizador principal en Videojuegos Party 2022'
        : 'Lead organizer at Videogames Party 2022',
      icon: '🎮',
      date: '2022'
    },
    {
      title: language === 'es' ? 'Proyectos Académicos' : 'Academic Projects',
      description: language === 'es'
        ? 'Desarrollo de múltiples aplicaciones durante el curso'
        : 'Development of multiple applications during the course',
      icon: '📱',
      date: '2023-2024'
    },
    {
      title: language === 'es' ? 'Nivel Avanzado de Inglés' : 'Advanced English Level',
      description: language === 'es'
        ? 'Capacidad para trabajar en entornos internacionales'
        : 'Ability to work in international environments',
      icon: '🌍',
      date: language === 'es' ? 'Actual' : 'Current'
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('certificates.title')} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{t('certificates.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('certificates.subtitle')}
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                        <Award className="w-5 h-5 text-purple-400" />
                      </div>
                      {cert.verified && (
                        <Badge variant="secondary" className="text-xs">
                          {language === 'es' ? 'Verificado' : 'Verified'}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <p className="text-purple-400 font-medium">{cert.issuer}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full mt-4">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('certificates.viewCertificate')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            {language === 'es' ? 'Otros Logros' : 'Other Achievements'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-none bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{achievement.icon}</div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.date}
                    </Badge>
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