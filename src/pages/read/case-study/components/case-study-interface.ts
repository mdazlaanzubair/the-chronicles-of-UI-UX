// Interface for a team member
interface TeamMember {
  name: string;
  role: string;
  profile: string;
}

// Interface for the overview section
export interface Overview {
  timeline: string;
  url: string;
  my_role: string;
  team: TeamMember[];
  title: string; // "Overview"
  desc: string[];
  img: string;
}

// Interface for the problem statement section
export interface Problem {
  title: string; // e.g., "Problem Statement"
  desc: string;
  img: string;
}

// Interface for an individual solution item in the solution list
interface SolutionListItem {
  title: string;
  desc: string;
}

// Interface for the solutions section
export interface Solutions {
  title: string; // e.g., "The Solution"
  desc: string;
  img: string;
  solution_list: SolutionListItem[];
}

// Interface for an individual impact item in the impact list
interface ImpactListItem {
  title: string;
  desc: string;
}

// Interface for the impact section
export interface Impact {
  title: string; // e.g., "The Impact"
  desc: string; // Can be an empty string
  img: string; // Can be an empty string
  impact_list: ImpactListItem[];
}

// Interface for an individual learning item in the learning list
interface LearningListItem {
  title: string; // Can be an empty string
  desc: string;
}

// Interface for the contributions section
export interface Contributions {
  title: string; // e.g., "My Contributions"
  desc: string;
  learning_list: LearningListItem[]; // Can be an empty array
}

// Interface for the conclusion section
export interface Conclusion {
  title: string; // e.g., "Final Thoughts"
  desc: string;
}

// Main interface for each CaseStudy object
export interface CaseStudy {
  title: string;
  sub_title: string;
  img: string; // Can be an empty string
  coverImg: string; // Can be an empty string
  overview: Overview;
  problem: Problem;
  solutions: Solutions;
  impact: Impact;
  contributions: Contributions;
  conclusion: Conclusion;
}

// The overall type for your JSON array
export type CaseStudies = CaseStudy[];
