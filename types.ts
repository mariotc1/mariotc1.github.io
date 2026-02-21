import React from 'react';

export interface Project {
  slug: string;
  title: string;
  image?: string;
  repo: string;
  demo?: string;
  tech: string[];
  status: string;
  private: boolean;
  short: string;
  description?: string; // Long description for modal
}

export interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: string;
  }[];
}
