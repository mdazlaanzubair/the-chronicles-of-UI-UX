interface FeatureItem {
  title: string;
  desc: string;
}

interface Overview {
  myRole: string;
  techUsed: string;
  timeline: string;
  sourceCode: string;
  liveUrl: string | null;
  projectDesc: string[];
}

interface Details {
  coverImgSrc: string;
  overview: Overview;
  features: FeatureItem[];
}

export interface Project {
  id: number;
  title: string;
  subTitle: string;
  img: string; // Assuming `narratorImg` etc. are string paths to images
  isFeatured: boolean;
  isLocked: boolean;
  details: Details;
}