import React from 'react';
import { PearlScore } from '@/types/assessment';

interface RadarChartProps {
  scores: PearlScore;
  size?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({ scores, size = 200 }) => {
  const labels = ['Practical\nIntelligence', 'Execution', 'Adaptability', 'Reliability', 'Learning\nAgility'];
  const values = [scores.P, scores.E, scores.A, scores.R, scores.L];
  
  const center = size / 2;
  const radius = (size / 2) - 40;
  const angleStep = (2 * Math.PI) / 5;
  
  // Generate pentagon points for background
  const backgroundPoints = Array.from({ length: 5 }, (_, i) => {
    const angle = i * angleStep - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  });
  
  // Generate data points
  const dataPoints = values.map((value, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const distance = (value / 100) * radius;
    return {
      x: center + distance * Math.cos(angle),
      y: center + distance * Math.sin(angle)
    };
  });
  
  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="mb-4">
        {/* Background grid */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale) => (
          <polygon
            key={scale}
            points={backgroundPoints
              .map(point => `${center + (point.x - center) * scale},${center + (point.y - center) * scale}`)
              .join(' ')}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
        ))}
        
        {/* Grid lines from center */}
        {backgroundPoints.map((point, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={point.x}
            y2={point.y}
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
        ))}
        
        {/* Data area */}
        <polygon
          points={dataPoints.map(point => `${point.x},${point.y}`).join(' ')}
          fill="hsl(var(--primary) / 0.2)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        
        {/* Data points */}
        {dataPoints.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="hsl(var(--primary))"
          />
        ))}
        
        {/* Labels */}
        {backgroundPoints.map((point, i) => (
          <text
            key={i}
            x={center + (point.x - center) * 1.2}
            y={center + (point.y - center) * 1.2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs fill-foreground font-medium"
          >
            {labels[i].split('\n').map((line, lineIndex) => (
              <tspan key={lineIndex} x={center + (point.x - center) * 1.2} dy={lineIndex === 0 ? 0 : '1em'}>
                {line}
              </tspan>
            ))}
          </text>
        ))}
      </svg>
      
      <div className="grid grid-cols-5 gap-2 text-center text-xs">
        {labels.map((label, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-lg font-bold text-primary">{values[i]}</div>
            <div className="text-muted-foreground">{label.replace('\n', ' ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};