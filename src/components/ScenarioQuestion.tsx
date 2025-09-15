import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ScenarioQuestion as ScenarioQuestionType } from '@/types/assessment';
import { motion } from 'framer-motion';

interface ScenarioQuestionProps {
  question: ScenarioQuestionType;
  onAnswer: (selectedOption: string, additionalInfo?: string) => void;
  className?: string;
}

export const ScenarioQuestion: React.FC<ScenarioQuestionProps> = ({
  question,
  onAnswer,
  className
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const [showFollowUp, setShowFollowUp] = useState<boolean>(false);

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(selectedOption, additionalInfo);
    }
  };

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    if (question.followUpQuestion) {
      setShowFollowUp(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">
            {question.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-subtle p-4 rounded-lg border">
            <p className="text-foreground leading-relaxed">{question.scenario}</p>
          </div>

          <div>
            <Label className="text-base font-medium mb-3 block">
              What would you do?
            </Label>
            <RadioGroup
              value={selectedOption}
              onValueChange={handleOptionSelect}
              className="space-y-3"
            >
              {question.options.map((option) => (
                <div key={option.id} className="flex items-start space-x-3">
                  <RadioGroupItem 
                    value={option.id} 
                    id={option.id}
                    className="mt-1"
                  />
                  <Label 
                    htmlFor={option.id} 
                    className="flex-1 text-sm leading-relaxed cursor-pointer hover:text-primary transition-colors"
                  >
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {showFollowUp && question.followUpQuestion && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <Label className="text-base font-medium">
                {question.followUpQuestion}
              </Label>
              <Textarea
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Please provide your reasoning and any additional considerations..."
                className="min-h-[100px]"
              />
            </motion.div>
          )}

          <div className="flex justify-end pt-4">
            <Button 
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="px-8"
            >
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};