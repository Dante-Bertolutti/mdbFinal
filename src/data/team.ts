export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  phone: string;
  email: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Dante Bertolutti",
    role: "Co-Founder & Developer",
    initials: "DB",
    phone: "(250) 718-8479",
    email: "dante@mdbdevelopment.com",
    bio: "Dante specializes in full-stack web development and IT infrastructure. With a passion for building robust, scalable solutions, he brings technical expertise and a problem-solving mindset to every project.",
  },
  {
    name: "Milan Bertolutti",
    role: "Co-Founder & Developer",
    initials: "MB",
    phone: "(250) 718-0202",
    email: "milanbertolutti@gmail.com",
    bio: "Milan focuses on front-end development, user experience, and client relations. He ensures every project delivers a polished, intuitive experience that meets client expectations and business goals.",
  },
];

export const companyInfo = {
  name: "MDB Development & IT Services",
  email: "contact@mdbdevelopment.com",
  yearsExperience: 8,
  projectsCompleted: 6,
  responseTime: "24 hours",
  hours: "Monday - Friday, 9 AM - 6 PM",
};
