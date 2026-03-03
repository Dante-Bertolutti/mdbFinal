export interface Project {
  id: string;
  client: string;
  clientRole: string;
  projectType: string;
  title: string;
  description: string;
  result: string;
  testimonial: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "quincy-johnson",
    client: "Quincy Johnson",
    clientRole: "Financial Advisor",
    projectType: "Custom Client Portal",
    title: "Financial Advisory Client Portal",
    description:
      "A comprehensive client portal designed for a financial advisory practice. The platform streamlines client management, document sharing, and communication, allowing the practice to serve clients more efficiently.",
    result: "Significantly increased client satisfaction",
    testimonial:
      "MDB Development transformed our financial advisory practice with a custom client portal that streamlined our operations. Dante and Milan's attention to detail and understanding of our business needs was exceptional.",
    features: [
      "Secure client dashboard",
      "Document management",
      "Appointment scheduling",
      "Real-time notifications",
    ],
  },
  {
    id: "itsraidenphotography",
    client: "ItsRaidenPhotography",
    clientRole: "Photography Studio",
    projectType: "Portfolio Website & Booking System",
    title: "Photography Portfolio & Booking Platform",
    description:
      "A stunning portfolio website with high-performance image galleries and an integrated booking system. Built for speed and visual impact, the site showcases photography work while converting visitors into clients.",
    result: "3x increase in client inquiries",
    testimonial:
      "The portfolio website MDB Development created for our photography business has been a game-changer. The image galleries load fast, the booking system works flawlessly, and our client inquiries have tripled.",
    features: [
      "Optimized image galleries",
      "Online booking system",
      "Mobile-responsive design",
      "SEO optimization",
    ],
  },
  {
    id: "elevatedframing",
    client: "ElevatedFraming",
    clientRole: "Custom Framing Business",
    projectType: "E-commerce Platform",
    title: "Custom Framing E-commerce Store",
    description:
      "A full-featured e-commerce platform that showcases custom framing products with an intuitive ordering system. The platform enables customers to browse, customize, and order frames online with ease.",
    result: "40% increase in sales",
    testimonial:
      "Working with MDB Development was a fantastic experience. They built us an e-commerce platform that perfectly showcases our custom framing work. The online ordering system is intuitive, and our sales have increased by 40% since launch.",
    features: [
      "Product showcase gallery",
      "Custom order builder",
      "Secure payment processing",
      "Order tracking system",
    ],
  },
];
