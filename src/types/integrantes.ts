export interface TeamMember {
  id: string;
  name: string;
  role: string;
  rm: string;
  github: string;
  linkedin: string;
  avatarPlaceholder: string;
  photo?: string;
}

export interface TeamMemberDetail extends TeamMember {
  turma: string;
  bio: string;
  skills: string[];
  contributions: string[];
}
