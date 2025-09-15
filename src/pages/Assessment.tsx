import React, { useState } from 'react';
import { AssessmentLayout } from '@/components/AssessmentLayout';
import { ScenarioQuestion } from '@/components/ScenarioQuestion';
import { scenarioQuestions } from '@/data/scenarios';
import { UserResponse } from '@/types/assessment';
import { motion } from 'framer-motion';

interface AssessmentProps {
  onComplete: (responses: UserResponse[]) => void;
  onBack: () => void;
}

export const Assessment: React.FC<AssessmentProps> = ({ onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);

  const currentQuestion = scenarioQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / scenarioQuestions.length) * 100;

  const handleAnswer = (selectedOption: string, additionalInfo?: string) => {
    const newResponse: UserResponse = {
      questionId: currentQuestion.id,
      selectedOption,
      additionalInfo
    };

    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);

    if (currentQuestionIndex < scenarioQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(updatedResponses);
    }
  };

  return (
    <AssessmentLayout
      progress={progress}
      currentSection={`Scenario ${currentQuestionIndex + 1} of ${scenarioQuestions.length}`}
      onBack={onBack}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <ScenarioQuestion
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        </motion.div>
      </div>
    </AssessmentLayout>
  );
};