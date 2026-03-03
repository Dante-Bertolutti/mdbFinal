export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: "code" | "globe" | "server" | "wrench" | "envelope";
}

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Custom Web Applications",
    description:
      "Tailored web applications built with modern technologies to solve your specific business challenges and streamline operations.",
    features: [
      "E-commerce platforms",
      "Business management systems",
      "Customer portals",
      "API integrations",
    ],
    icon: "code",
  },
  {
    id: "websites",
    title: "Responsive Websites",
    description:
      "Mobile-first websites designed to look great on every device, optimized for performance and search engine visibility.",
    features: [
      "Corporate websites",
      "Portfolio sites",
      "Landing pages",
      "SEO optimization",
    ],
    icon: "globe",
  },
  {
    id: "hosting",
    title: "Web Hosting",
    description:
      "Reliable, secure hosting with 99.9% uptime guarantee. We handle the infrastructure so you can focus on your business.",
    features: [
      "Managed hosting",
      "SSL certificates",
      "Daily backups",
      "24/7 monitoring",
    ],
    icon: "server",
  },
  {
    id: "maintenance",
    title: "Maintenance & Upkeep",
    description:
      "Comprehensive ongoing support to keep your digital presence running smoothly, securely, and up to date.",
    features: [
      "Security updates",
      "Performance optimization",
      "Content updates",
      "Technical support",
    ],
    icon: "wrench",
  },
  {
    id: "business-email",
    title: "Business Email Services",
    description:
      "Get a professional email address with your own domain name. Stand out with name@yourbusiness.com instead of a generic free email — build trust and credibility with every message you send.",
    features: [
      "Custom domain email (you@yourbusiness.com)",
      "Reliable delivery & spam filtering",
      "Setup & migration support",
      "Ongoing management included",
    ],
    icon: "envelope",
  },
];

export interface AdditionalService {
  title: string;
  description: string;
  icon: "computer" | "phone";
}

export const additionalServices: AdditionalService[] = [
  {
    title: "IT Callouts for Small Businesses",
    description:
      "On-site and remote IT support for small businesses. From network setup and troubleshooting to software installation and system configuration, we keep your business technology running.",
    icon: "computer",
  },
  {
    title: "Computer Repairs",
    description:
      "Hardware and software troubleshooting, diagnostics, and repair services for desktops and laptops. We get your machines back up and running fast.",
    icon: "phone",
  },
];
