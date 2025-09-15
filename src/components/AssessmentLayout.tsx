import React from 'react';
import { ProgressBar } from './ProgressBar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface AssessmentLayoutProps {
  children: React.ReactNode;
  progress: number;
  currentSection?: string;
  onBack?: () => void;
  onHome?: () => void;
  showProgress?: boolean;
}

export const AssessmentLayout: React.FC<AssessmentLayoutProps> = ({
  children,
  progress,
  currentSection,
  onBack,
  onHome,
  showProgress = true
}) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="bg-card border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {onBack && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onBack}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              )}
              <div>
                <h1 className="text-xl font-bold text-primary">
                  Ethical Decision Spotter
                </h1>
                {currentSection && (
                  <p className="text-sm text-muted-foreground">{currentSection}</p>
                )}
              </div>
            </div>
            {onHome && (
              <Button
                variant="outline"
                size="sm"
                onClick={onHome}
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
            )}
          </div>
          {showProgress && (
            <div className="mt-4">
              <ProgressBar progress={progress} />
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};