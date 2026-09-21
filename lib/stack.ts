import type { BrandIconKey } from "@/lib/brand-icons";

export interface StackGroup {
  label: string;
  items: { name: string; icon?: BrandIconKey }[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "Backend",
    items: [
      { name: "Python", icon: "python" },
      { name: "Flask", icon: "flask" },
      { name: "Laravel", icon: "laravel" },
      { name: "PHP", icon: "php" },
      { name: "REST APIs" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
    ],
  },
  {
    label: "Data & Automation",
    items: [
      { name: "Pandas", icon: "pandas" },
      { name: "Selenium", icon: "selenium" },
      { name: "OpenCV", icon: "opencv" },
    ],
  },
  {
    label: "Mobile & Desktop",
    items: [
      { name: "Swift", icon: "swift" },
      { name: "SwiftUI" },
      { name: "Java", icon: "java" },
      { name: "PyQt", icon: "qt" },
    ],
  },
  {
    label: "Data & Infrastructure",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
    ],
  },
];
