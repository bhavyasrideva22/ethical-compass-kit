import { ScenarioQuestion } from '@/types/assessment';

export const scenarioQuestions: ScenarioQuestion[] = [
  {
    id: 'data-privacy',
    title: 'Data Privacy vs Business Insights',
    scenario: 'You work in a marketing analytics team. A new dataset would allow more precise customer targeting but includes customer data whose consent is unclear. The leadership asks you to use it for an upcoming campaign.',
    options: [
      {
        id: 'use-now',
        text: 'Use the data now and disclaim risk afterwards',
        value: 1
      },
      {
        id: 'delay-verify',
        text: 'Delay using it until consent is verified',
        value: 4
      },
      {
        id: 'anonymized-only',
        text: 'Use only anonymized data and proceed with restricted targeting',
        value: 3
      },
      {
        id: 'reject-entirely',
        text: 'Reject using dataset entirely',
        value: 2
      }
    ],
    followUpQuestion: 'What additional information would you seek before making this decision?'
  },
  {
    id: 'reporting-misconduct',
    title: 'Reporting Others\' Misconduct',
    scenario: 'You observe a peer falsifying part of a performance report to make metrics look better. Your direct manager is unaware. You are asked to co-sign that report.',
    options: [
      {
        id: 'refuse-sign',
        text: 'Refuse to sign and report the falsification',
        value: 4
      },
      {
        id: 'discuss-peer',
        text: 'Discuss with peer first, give chance to correct',
        value: 3
      },
      {
        id: 'sign-quietly',
        text: 'Sign but document concerns privately',
        value: 1
      },
      {
        id: 'escalate-manager',
        text: 'Escalate to manager without signing',
        value: 4
      }
    ],
    followUpQuestion: 'How would you handle potential retaliation or relationship damage?'
  },
  {
    id: 'resource-allocation',
    title: 'Favoritism in Resource Allocation',
    scenario: 'You have limited resources (budget, tools). A senior stakeholder requests you allocate more to their team, but this reduces what\'s available to a team with more urgent needs.',
    options: [
      {
        id: 'follow-hierarchy',
        text: 'Follow the senior stakeholder\'s request',
        value: 1
      },
      {
        id: 'propose-compromise',
        text: 'Propose a compromise solution that addresses both needs',
        value: 4
      },
      {
        id: 'prioritize-urgency',
        text: 'Allocate based on urgency, explain decision transparently',
        value: 3
      },
      {
        id: 'escalate-decision',
        text: 'Escalate the decision to higher management',
        value: 2
      }
    ],
    followUpQuestion: 'How would you communicate your decision to both teams?'
  },
  {
    id: 'conflict-interest',
    title: 'Conflict of Interest',
    scenario: 'You are offered tickets to a sports event by a vendor whose contract you oversee. Accepting could be perceived as a conflict of interest.',
    options: [
      {
        id: 'accept-quietly',
        text: 'Accept the tickets as a normal business gesture',
        value: 1
      },
      {
        id: 'decline-politely',
        text: 'Politely decline citing company policy',
        value: 4
      },
      {
        id: 'report-offer',
        text: 'Report the offer to compliance before deciding',
        value: 3
      },
      {
        id: 'accept-disclose',
        text: 'Accept but disclose to manager and recuse from vendor decisions',
        value: 2
      }
    ],
    followUpQuestion: 'What ongoing measures would you implement to avoid similar situations?'
  },
  {
    id: 'customer-fraud',
    title: 'Customer Lies & Refund Policy',
    scenario: 'A customer claims product damage that seems doubtful given records. Company policy demands refunds. You suspect fraud but have no proof.',
    options: [
      {
        id: 'deny-refund',
        text: 'Deny the refund based on suspicion',
        value: 1
      },
      {
        id: 'follow-policy',
        text: 'Follow policy and provide refund while documenting concerns',
        value: 3
      },
      {
        id: 'investigate-further',
        text: 'Request additional evidence before deciding',
        value: 4
      },
      {
        id: 'partial-resolution',
        text: 'Offer partial refund or store credit as compromise',
        value: 2
      }
    ],
    followUpQuestion: 'How would you balance customer satisfaction with fraud prevention?'
  },
  {
    id: 'data-ethics',
    title: 'Innovation vs Ethical Boundaries',
    scenario: 'Your product team suggests a feature that leverages user data in a way technically allowed but ethically questionable (e.g., nudging behavior, obscuring opt-out).',
    options: [
      {
        id: 'implement-feature',
        text: 'Implement the feature since it\'s technically legal',
        value: 1
      },
      {
        id: 'ethical-review',
        text: 'Require ethics review and user consent improvements',
        value: 4
      },
      {
        id: 'modify-approach',
        text: 'Modify the feature to be more transparent and ethical',
        value: 3
      },
      {
        id: 'reject-feature',
        text: 'Reject the feature entirely',
        value: 2
      }
    ],
    followUpQuestion: 'What ethical guidelines would you propose for future feature development?'
  },
  {
    id: 'compliance-speed',
    title: 'Compliance vs Speed',
    scenario: 'Under pressure from leadership, there\'s a push to bypass some compliance checks to launch fast. You are in charge of risk or QA.',
    options: [
      {
        id: 'bypass-checks',
        text: 'Bypass checks to meet deadline',
        value: 1
      },
      {
        id: 'expedite-process',
        text: 'Expedite compliance process while maintaining standards',
        value: 3
      },
      {
        id: 'refuse-bypass',
        text: 'Refuse to bypass checks, explain risks to leadership',
        value: 4
      },
      {
        id: 'partial-launch',
        text: 'Propose phased launch with compliance-cleared features first',
        value: 2
      }
    ],
    followUpQuestion: 'How would you present the compliance risks to leadership?'
  }
];