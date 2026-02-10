export interface TimelineNode {
  phase: string;
  duration: string;
  deliverables: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  challenge: string;
  solution: string;
  timeline: TimelineNode[];
}

export const SERVICE_DATA: Record<string, ServiceDetail> = {
  'land': {
    id: 'LND-01',
    title: 'Land Development',
    tagline: 'Maximizing Your ROI & Useable Land',
    challenge: 'Developers often face "hidden" zoning or terrain issues that shrink usable acreage, hurting the project\'s bottom line before it even starts.',
    solution: 'We treat your land like an investment portfolio. By running thousands of layout scenarios instantly, we find the "perfect fit" design that yields the most lots or square footage while keeping construction costs low. We don\'t just design; we optimize for profit.',
    timeline: [
      { phase: 'Feasibility', duration: '2-4 Weeks', deliverables: ['Yield Study', 'Cost Analysis'] },
      { phase: 'Entitlements', duration: '3-6 Months', deliverables: ['Zoning Verification', 'City Approval'] },
      { phase: 'Engineering', duration: '4-5 Months', deliverables: ['Construction Plans', 'Grading Design'] },
      { phase: 'Permitting', duration: '2-3 Months', deliverables: ['Building Permits', 'Site Release'] }
    ]
  },
  'water': {
    id: 'WTR-02',
    title: 'Water Resources',
    tagline: 'Protecting Assets & Removing Constraints',
    challenge: 'Floodplains and drainage issues are the #1 killer of land deals. If water flow isn\'t managed perfectly, valuable land becomes undevelopable or legally risky.',
    solution: 'We turn water constraints into assets. Using advanced modeling, we precisely map flood risks to reclaim land safely. We design smart drainage systems that often double as park amenities, adding value to your development while satisfying all FEMA regulations.',
    timeline: [
      { phase: 'Analysis', duration: '3-5 Weeks', deliverables: ['Flood Impact Check', 'Drainage Map'] },
      { phase: 'Solution Design', duration: '4-6 Weeks', deliverables: ['Flood Mitigation Plan', 'Drainage Design'] },
      { phase: 'Regulatory Review', duration: '3-6 Months', deliverables: ['FEMA/City Coordination', 'Approval'] },
      { phase: 'Construction', duration: '1 Month', deliverables: ['Final Sign-off', 'Safety Cert.'] }
    ]
  },
  'environmental': {
    id: 'ENV-03',
    title: 'Environmental Stewardship',
    tagline: 'Sustainable Growth & Compliance',
    challenge: 'Environmental regulations can seem like a roadmap of "Don\'t Build Here." Unexpected findings (habitats, caves) can cause massive, costly delays.',
    solution: 'We see the environment as a partner, not an obstacle. We assess sites early to spot risks immediately. Instead of fighting nature, we design around it—integrating green spaces that fast-track compliance and make your project more attractive to buyers.',
    timeline: [
      { phase: 'Site Check', duration: '2-3 Weeks', deliverables: ['Environmental Scan', 'Risk Report'] },
      { phase: 'Planning', duration: '3 Weeks', deliverables: ['Preservation Strategy', 'Agency Strategy'] },
      { phase: 'Agency Approval', duration: '2-4 Months', deliverables: ['State Permits', 'Public Notice'] },
      { phase: 'Monitoring', duration: 'Ongoing', deliverables: ['Compliance Reports', 'Inspections'] }
    ]
  },
  'public': {
    id: 'PUB-04',
    title: 'Transportation & Infra',
    tagline: 'Infrastructure That Connects Communities',
    challenge: 'New developments need roads and utilities, but connecting to aging city infrastructure is complex, expensive, and requires navigating multiple government agencies.',
    solution: 'We handle the "City Talk" for you. We design robust connections that satisfy city engineers while minimizing your off-site costs. We often identify public funding or reimbursement opportunities to help offset infrastructure improvements.',
    timeline: [
      { phase: 'Traffic Study', duration: '4-6 Weeks', deliverables: ['Impact Analysis', 'Access Plan'] },
      { phase: 'Design', duration: '2 Months', deliverables: ['Road/Utility Plans', 'Route Approval'] },
      { phase: 'Final Specs', duration: '4-6 Months', deliverables: ['Construction Docs', 'Budget Finalization'] },
      { phase: 'Bidding', duration: '2 Months', deliverables: ['Contractor Selection', 'Project Start'] }
    ]
  },
  'permitting': {
    id: 'PRM-05',
    title: 'Permitting Expediting',
    tagline: 'Cutting Red Tape. Building Faster.',
    challenge: 'Time is money. Every day a project sits in "City Review" is a day you are paying interest without generating revenue. The bureaucratic loop is the biggest threat to your timeline.',
    solution: 'We don\'t wait for answers; we chase them. Our dedicated permitting team monitors your project daily, meeting with reviewers personally to resolve comments on the spot. We push your project to the top of the pile to get you "Shovel Ready" months sooner.',
    timeline: [
      { phase: 'Pre-Check', duration: '1 Week', deliverables: ['Code Audit', 'Fee Estimates'] },
      { phase: 'Submission', duration: '1 Day', deliverables: ['Direct Agency Upload', 'Tracking Setup'] },
      { phase: 'Active Pursuit', duration: '3-4 Weeks', deliverables: ['Comment Clearing', 'Agency Meetings'] },
      { phase: 'Approval', duration: '1 Week', deliverables: ['Permit Issued', 'Construction Start'] }
    ]
  }
};
