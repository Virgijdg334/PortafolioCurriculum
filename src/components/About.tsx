import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Award, GraduationCap, Code, Briefcase, Trophy, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const professionalStats = [
    {
      icon: Code,
      number: '10+',
      label: t('about.stats.technologies'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      number: '3',
      label: t('about.stats.projects'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Trophy,
      number: '6',
      label: t('about.stats.certificates'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      number: '2+',
      label: t('about.stats.experience'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    { icon: GraduationCap, label: t('about.achievements.student') },
    { icon: Award, label: t('about.achievements.bachelor') },
    { icon: Calendar, label: t('about.achievements.organizer') },
    { icon: MapPin, label: t('about.achievements.location') },
  ];

  const softSkills = [
    t('about.softSkills.teamwork'),
    t('about.softSkills.events'),
    t('about.softSkills.english'),
    t('about.softSkills.aws'),
    t('about.softSkills.learning'),
    t('about.softSkills.problemSolving')
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('about.title')} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Professional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {professionalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${stat.color} text-white`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t('about.bio1')}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {t('about.bio2')}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t('about.bio3')}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                      <achievement.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{achievement.label}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <Card className="border-none bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{t('about.myGoal')}</h3>
                <p className="text-muted-foreground text-sm">
                  "{t('about.goalText')}"
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}