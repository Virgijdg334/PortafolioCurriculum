import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'jesusdmg334@gmail.com',
    href: 'mailto:jesusdmg334@gmail.com'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    value: '618 77 32 13',
    href: 'tel:+34618773213'
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    value: 'Calle Primavera 20, Sevilla, España',
    href: '#'
  }
];

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/virgilio',
    color: 'hover:text-gray-400'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/virgilio-jes%C3%BAs-dom%C3%ADnguez-gonz%C3%A1lez-a34385284/',
    color: 'hover:text-blue-400'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    href: 'https://twitter.com/virgilio',
    color: 'hover:text-blue-400'
  },
  {
    icon: Mail,
    name: 'Email',
    href: 'mailto:jesusdmg334@gmail.com',
    color: 'hover:text-purple-400'
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmailViaAPI = async (data: any) => {
    // Intentar múltiples servicios de email gratuitos en cascada
    const services = [
      // Web3Forms (gratis, sin registro)
      {
        url: 'https://api.web3forms.com/submit',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // Obtener gratis en web3forms.com
          name: data.from_name,
          email: data.from_email,
          subject: data.subject,
          message: data.message,
          to: 'jesusdmg334@gmail.com'
        })
      },
      // Formsubmit (gratis, sin registro)
      {
        url: 'https://formsubmit.co/jesusdmg334@gmail.com',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.from_name,
          email: data.from_email,
          subject: data.subject,
          message: data.message,
          _subject: `Nuevo mensaje de ${data.from_name}: ${data.subject}`,
          _autoresponse: 'Gracias por tu mensaje. Te responderé pronto.',
          _template: 'table'
        })
      }
    ];

    // Intentar cada servicio hasta que uno funcione
    for (const service of services) {
      try {
        const response = await fetch(service.url, {
          method: service.method,
          headers: service.headers,
          body: service.body
        });

        if (response.ok) {
          return { success: true, service: 'api' };
        }
      } catch (error) {
        console.log('Servicio falló, intentando siguiente...');
        continue;
      }
    }

    // Si todos fallan, usar mailto como fallback
    throw new Error('Todos los servicios fallaron');
  };

  const sendEmailViaMailto = (data: any) => {
    const subject = encodeURIComponent(`Nuevo mensaje de ${data.from_name}: ${data.subject}`);
    const body = encodeURIComponent(
      `Hola Virgilio,

Soy ${data.from_name} (${data.from_email}).

Asunto: ${data.subject}

Mensaje:
${data.message}

---
Este mensaje fue enviado desde tu portafolio web.`
    );
    
    const mailtoLink = `mailto:jesusdmg334@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    return { success: true, service: 'mailto' };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Por favor, completa todos los campos', {
        description: 'Todos los campos son obligatorios para enviar el mensaje.',
      });
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Email inválido', {
        description: 'Por favor, introduce un email válido.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString('es-ES')
      };

      // Intentar envío vía API primero
      try {
        const result = await sendEmailViaAPI(templateParams);
        
        if (result.success) {
          toast.success('¡Mensaje enviado correctamente!', {
            description: 'Te responderé tan pronto como sea posible.',
            icon: <CheckCircle className="w-4 h-4" />,
          });
          
          // Reset form
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      } catch (apiError) {
        // Si falla la API, usar mailto como fallback
        const mailtoResult = sendEmailViaMailto(templateParams);
        
        toast.success('Abriendo tu cliente de email', {
          description: 'Se abrirá tu aplicación de email con el mensaje pre-rellenado.',
          icon: <Mail className="w-4 h-4" />,
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }
      
    } catch (error) {
      toast.error('Error al procesar el mensaje', {
        description: 'Por favor, intenta contactar directamente por email: jesusdmg334@gmail.com',
        icon: <AlertCircle className="w-4 h-4" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hablemos de tu <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Proyecto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ¿Tienes una idea increíble? Me encantaría escucharla y colaborar contigo para hacerla realidad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Envíame un mensaje</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Respuesta garantizada en menos de 24 horas a <strong>jesusdmg334@gmail.com</strong>
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Tu nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Tu email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      placeholder="Asunto"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>

                {/* Enhanced Info Box */}
                <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Sistema de envío automático
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Este formulario usa múltiples APIs para garantizar que tu mensaje llegue a <strong>jesusdmg334@gmail.com</strong>. 
                    Si falla el envío automático, se abrirá tu cliente de email como respaldo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-none bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                        <info.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        {info.href !== '#' ? (
                          <a 
                            href={info.href} 
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-none bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Sígueme en redes sociales</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className={`p-3 bg-background/50 rounded-lg transition-all duration-300 ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-none bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Disponibilidad</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Actualmente estudiando y disponible para proyectos freelance y colaboraciones
                  </p>
                  <div className="inline-flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400">Disponible para proyectos</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}