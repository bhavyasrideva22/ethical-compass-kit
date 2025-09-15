import React from 'react';
import { AssessmentLayout } from '@/components/AssessmentLayout';
import { RadarChart } from '@/components/RadarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AssessmentResults, UserResponse } from '@/types/assessment';
import { 
  TrendingUp, 
  Award, 
  Target, 
  BookOpen, 
  Download,
  RotateCcw
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ResultsProps {
  responses: UserResponse[];
  onRestart: () => void;
  onHome: () => void;
}

export const Results: React.FC<ResultsProps> = ({ responses, onRestart, onHome }) => {
  // Calculate results based on responses
  const calculateResults = (): AssessmentResults => {
    const totalResponses = responses.length;
    const totalPossibleScore = totalResponses * 4; // max 4 points per question
    
    // Simple scoring based on option values (this would be more sophisticated in real implementation)
    const totalScore = responses.reduce((sum, response) => {
      const question = scenarioQuestions.find(q => q.id === response.questionId);
      const option = question?.options.find(opt => opt.id === response.selectedOption);
      return sum + (option?.value || 0);
    }, 0);

    const overallScore = Math.round((totalScore / totalPossibleScore) * 100);
    
    // Generate PEARL scores (simplified)
    const pearlScores = {
      P: Math.max(60, overallScore + Math.random() * 20 - 10),
      E: Math.max(60, overallScore + Math.random() * 20 - 10),
      A: Math.max(60, overallScore + Math.random() * 20 - 10),
      R: Math.max(60, overallScore + Math.random() * 20 - 10),
      L: Math.max(60, overallScore + Math.random() * 20 - 10)
    };

    return {
      overallScore,
      sectionScores: {
        scenario_application: overallScore,
        practical_skills: Math.max(60, overallScore + Math.random() * 15 - 7),
        time_task_management: Math.max(60, overallScore + Math.random() * 15 - 7),
        real_world_problem_solving: Math.max(60, overallScore + Math.random() * 15 - 7)
      },
      pearlScores,
      fitLevel: overallScore >= 80 ? 'Ready' : overallScore >= 65 ? 'Trainable' : 'Not Yet Ready',
      topSkillToImprove: 'Ethical communication under policy constraints',
      topBehavioralHabit: 'Asking clarifying questions when facing ethical ambiguity',
      confidenceScore: Math.max(50, overallScore - 10)
    };
  };

  const results = calculateResults();

  const getFitLevelColor = (level: string) => {
    switch (level) {
      case 'Ready': return 'success';
      case 'Trainable': return 'warning';
      default: return 'destructive';
    }
  };

  const recommendations = [
    {
      title: 'Ethics Training',
      description: 'Complete a comprehensive ethics course focusing on professional decision-making',
      priority: 'High'
    },
    {
      title: 'Scenario Practice',
      description: 'Engage with additional ethical dilemma simulations and case studies',
      priority: 'Medium'
    },
    {
      title: 'Mentorship',
      description: 'Seek guidance from experienced professionals in ethical leadership',
      priority: 'Medium'
    },
    {
      title: 'Policy Review',
      description: 'Study your organization\'s code of conduct and ethics policies',
      priority: 'High'
    }
  ];

  return (
    <AssessmentLayout
      progress={100}
      currentSection="Assessment Results"
      onHome={onHome}
      showProgress={false}
    >
      <div className="space-y-8">
        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-card shadow-elegant text-center">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center justify-center">
                <Award className="mr-2 h-6 w-6" />
                Your Ethics Readiness Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold text-primary mb-4">
                {results.overallScore}
              </div>
              <Badge 
                variant="outline" 
                className={`text-lg px-4 py-2 border-${getFitLevelColor(results.fitLevel)}`}
              >
                {results.fitLevel}
              </Badge>
              <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                You demonstrate {results.fitLevel.toLowerCase()} ethical decision-making capabilities 
                for professional roles requiring integrity and values-based judgment.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* PEARL Framework */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  PEARL Framework Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadarChart scores={results.pearlScores} />
              </CardContent>
            </Card>
          </motion.div>

          {/* Section Scores */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Section Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(results.sectionScores).map(([section, score]) => (
                  <div key={section} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="capitalize">
                        {section.replace(/_/g, ' ')}
                      </span>
                      <span className="font-medium">{Math.round(score)}%</span>
                    </div>
                    <Progress value={score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-lg">Top Skill to Improve</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary font-medium">{results.topSkillToImprove}</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-lg">Key Behavioral Habit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary font-medium">{results.topBehavioralHabit}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Improvement Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold">{rec.title}</h4>
                        <Badge 
                          variant={rec.priority === 'High' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button onClick={onRestart} variant="outline" className="flex items-center space-x-2">
            <RotateCcw className="h-4 w-4" />
            <span>Retake Assessment</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download Report</span>
          </Button>
        </motion.div>
      </div>
    </AssessmentLayout>
  );
};

// Import scenarios for calculation
import { scenarioQuestions } from '@/data/scenarios';