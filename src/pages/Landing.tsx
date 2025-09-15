import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Compass, 
  Target, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  BarChart3,
  Brain
} from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/ethics-hero.jpg';

interface LandingProps {
  onStartAssessment: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStartAssessment }) => {
  const features = [
    {
      icon: Target,
      title: 'Scenario-Based Assessment',
      description: 'Real-world ethical dilemmas that test your decision-making skills'
    },
    {
      icon: BarChart3,
      title: 'PEARL Framework Analysis',
      description: 'Comprehensive evaluation across 5 key dimensions of ethical leadership'
    },
    {
      icon: Brain,
      title: 'Personalized Insights',
      description: 'Detailed feedback and improvement recommendations tailored to your results'
    },
    {
      icon: TrendingUp,
      title: 'Career Readiness',
      description: 'Evaluate your readiness for roles requiring ethical judgment and integrity'
    }
  ];

  const sections = [
    { name: 'Scenario-Based Application', time: '15 min', questions: '7 scenarios' },
    { name: 'Practical Skills', time: '10 min', questions: '4 tasks' },
    { name: 'Time & Task Management', time: '5 min', questions: '5 questions' },
    { name: 'Real-World Problem Solving', time: '12 min', questions: '2 case studies' },
    { name: 'PEARL Framework Analysis', time: '8 min', questions: 'Self-assessment' }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Compass className="h-3 w-3 mr-1" />
                  Professional Ethics Assessment
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Ethical Decision
                  <br />
                  <span className="text-primary-glow">Spotter</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                  Evaluate your real-world readiness in ethical decision-making, integrity, 
                  and values-based judgment across professional scenarios.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onStartAssessment}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  Start Assessment
                  <Clock className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">50 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Professional level</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Instant results</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={heroImage} 
                alt="Professional ethics assessment"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Comprehensive Ethics Evaluation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our assessment measures how well you spot ethical issues, make decisions under ambiguity, 
              and balance conflicting obligations in real-world professional scenarios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Assessment Sections */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Assessment Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sections.map((section, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold">{section.name}</h3>
                          <p className="text-sm text-muted-foreground">{section.questions}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{section.time}</Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    onClick={onStartAssessment}
                    size="lg"
                    className="px-12"
                  >
                    Begin Assessment
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    No registration required • Instant results
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};