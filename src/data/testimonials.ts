export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
  projectType: string;
  result: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Quincy Johnson",
    role: "Financial Advisor",
    initials: "QJ",
    quote:
      "MDB Development transformed our financial advisory practice with a custom client portal that streamlined our operations. Dante and Milan's attention to detail and understanding of our business needs was exceptional. Our client satisfaction has increased significantly since the launch.",
    rating: 5,
    projectType: "Custom Client Portal",
    result: "Significantly increased client satisfaction",
  },
  {
    name: "ItsRaidenPhotography",
    role: "Photography Studio",
    initials: "IR",
    quote:
      "The portfolio website MDB Development created for our photography business has been a game-changer. The image galleries load fast, the booking system works flawlessly, and our client inquiries have tripled. Professional, responsive, and exactly what we needed.",
    rating: 5,
    projectType: "Portfolio Website & Booking System",
    result: "3x increase in client inquiries",
  },
  {
    name: "ElevatedFraming",
    role: "Custom Framing Business",
    initials: "EF",
    quote:
      "Working with MDB Development was a fantastic experience. They built us an e-commerce platform that perfectly showcases our custom framing work. The online ordering system is intuitive, and our sales have increased by 40% since launch. Highly recommend their services!",
    rating: 5,
    projectType: "E-commerce Platform",
    result: "40% increase in sales",
  },
];
