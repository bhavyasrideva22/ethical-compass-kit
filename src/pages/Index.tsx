import React, { useState } from 'react';
import { Landing } from './Landing';
import { Assessment } from './Assessment';
import { Results } from './Results';
import { UserResponse } from '@/types/assessment';

type AppState = 'landing' | 'assessment' | 'results';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const [responses, setResponses] = useState<UserResponse[]>([]);

  const handleStartAssessment = () => {
    setCurrentState('assessment');
  };

  const handleAssessmentComplete = (userResponses: UserResponse[]) => {
    setResponses(userResponses);
    setCurrentState('results');
  };

  const handleRestart = () => {
    setResponses([]);
    setCurrentState('landing');
  };

  const handleBackToLanding = () => {
    setCurrentState('landing');
  };

  switch (currentState) {
    case 'landing':
      return <Landing onStartAssessment={handleStartAssessment} />;
    
    case 'assessment':
      return (
        <Assessment 
          onComplete={handleAssessmentComplete}
          onBack={handleBackToLanding}
        />
      );
    
    case 'results':
      return (
        <Results 
          responses={responses}
          onRestart={handleRestart}
          onHome={handleBackToLanding}
        />
      );
    
    default:
      return <Landing onStartAssessment={handleStartAssessment} />;
  }
};

export default Index;
