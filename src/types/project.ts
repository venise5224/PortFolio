export interface ProjectType {
  title: string;
  type: "개인" | "팀";
  period: string;
  description: string;
  imageUrl: string;
  link: string;
  githubUrl: string;
  techStack: string[];
  troubles: string[];
}
