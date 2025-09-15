export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  completed: boolean;
}

export interface ScenarioQuestion {
  id: string;
  title: string;
  scenario: string;
  options: {
    id: string;
    text: string;
    value: number;
  }[];
  followUpQuestion?: string;
}

export interface PearlScore {
  P: number; // Practical Intelligence
  E: number; // Execution
  A: number; // Adaptability
  R: number; // Reliability
  L: number; // Learning Agility
}

export interface AssessmentResults {
  overallScore: number;
  sectionScores: {
    scenario_application: number;
    practical_skills: number;
    time_task_management: number;
    real_world_problem_solving: number;
  };
  pearlScores: PearlScore;
  fitLevel: 'Ready' | 'Trainable' | 'Not Yet Ready';
  topSkillToImprove: string;
  topBehavioralHabit: string;
  confidenceScore: number;
}

export interface UserResponse {
  questionId: string;
  selectedOption: string;
  additionalInfo?: string;
}