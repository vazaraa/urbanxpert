import { 
  Zap, 
  Wrench, 
  Droplets, 
  Wind, 
  Bug, 
  Sparkles, 
  Paintbrush, 
  Shield, 
  Camera, 
  Lock,
  Lightbulb,
  Heart
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: any;
  imageSrc?: string;
  featured?: boolean;
  price?: string;
  details?: string;
  packages?: Array<{
    name: string;
    price: string;
    features: string[];
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    description: 'Deep cleaning services for homes and offices. Sanitization, carpet cleaning, and more.',
    imageSrc: '/services/professional-cleaning-service-person-using-vacuum-cleaner-office.jpg',
    featured: true,
    price: 'Starting from $99',
    details: 'Our professional cleaning services ensure your space is spotless and sanitized. We use eco-friendly products and modern equipment for the best results.',
    packages: [
      {
        name: 'Basic Clean',
        price: '$99',
        features: ['General cleaning', 'Vacuum and mop', 'Bathroom sanitization', '2-3 hours service']
      },
      {
        name: 'Deep Clean',
        price: '$179',
        features: ['Everything in Basic', 'Cabinet cleaning', 'Appliance cleaning', 'Window cleaning', '4-5 hours service']
      },
      {
        name: 'Premium Clean',
        price: '$249',
        features: ['Everything in Deep Clean', 'Carpet cleaning', 'Upholstery cleaning', 'Post-construction cleanup', '6-8 hours service']
      }
    ],
    faqs: [
      {
        question: 'Do you bring your own cleaning supplies?',
        answer: 'Yes, we bring all necessary cleaning supplies and equipment. We use eco-friendly, professional-grade products.'
      },
      {
        question: 'How long does a typical cleaning take?',
        answer: 'It depends on the size and condition of your space. Basic cleaning takes 2-3 hours, while deep cleaning can take 4-8 hours.'
      }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Licensed electricians for repairs, installations, and safety inspections.',
    imageSrc: '/services/male-electrician-working-switchboard-with-fuses.jpg',
    featured: false,
    price: 'Starting from $149',
    details: 'Our certified electricians handle all types of electrical work, from simple repairs to complex installations, ensuring safety and code compliance.',
    packages: [
      {
        name: 'Basic Repair',
        price: '$149',
        features: ['Outlet installation', 'Switch replacement', 'Light fixture installation', 'Safety inspection']
      },
      {
        name: 'Advanced Service',
        price: '$299',
        features: ['Panel upgrades', 'Circuit installation', 'Wiring repairs', 'GFCI installation']
      }
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing Solutions',
    description: 'Expert plumbers for leak repairs, installations, and emergency services.',
    imageSrc: '/services/plumbing-professional-doing-his-job.jpg',
    featured: true,
    price: 'Starting from $129',
    details: 'Professional plumbing services for residential and commercial properties. Available 24/7 for emergency repairs.',
    packages: [
      {
        name: 'Basic Repair',
        price: '$129',
        features: ['Leak repairs', 'Drain cleaning', 'Faucet installation', 'Toilet repairs']
      },
      {
        name: 'Full Service',
        price: '$249',
        features: ['Everything in Basic', 'Pipe installation', 'Water heater service', 'Sewer line inspection']
      }
    ]
  },
  {
    id: 'ac-repair',
    title: 'AC Repair & Maintenance',
    description: 'Professional HVAC services for optimal comfort and energy efficiency.',
    imageSrc: '/services/team-replacing-old-air-conditioner.jpg',
    featured: true,
    price: 'Starting from $179',
    details: 'Complete HVAC solutions including repair, maintenance, and installation of air conditioning systems.',
    packages: [
      {
        name: 'Maintenance',
        price: '$179',
        features: ['Filter replacement', 'System cleaning', 'Performance check', 'Coolant level check']
      },
      {
        name: 'Repair Service',
        price: '$299',
        features: ['Diagnostic service', 'Component replacement', 'System repair', '6-month warranty']
      }
    ]
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    description: 'Safe and effective pest elimination and prevention services.',
    imageSrc: '/services/man-hazmat-suit-disinfecting-classroom-due-coronavirus-pandemic.jpg',
    featured: true,
    price: 'Starting from $199',
    details: 'Comprehensive pest control solutions using safe, effective methods to eliminate and prevent infestations.',
    packages: [
      {
        name: 'Basic Treatment',
        price: '$199',
        features: ['Initial inspection', 'Treatment application', 'Common pest control', '30-day guarantee']
      },
      {
        name: 'Complete Protection',
        price: '$349',
        features: ['Everything in Basic', 'Quarterly treatments', 'Specialized pest control', '1-year warranty']
      }
    ]
  },
  {
    id: 'painting',
    title: 'Professional Painting',
    description: 'Interior and exterior painting services with premium quality finishes.',
    imageSrc: '/services/wallpaper-concept-flow-element-force.jpg',
    featured: false,
    price: 'Starting from $299',
    details: 'Professional painting services for residential and commercial properties with high-quality materials and expert craftsmanship.'
  },
  {
    id: 'water-purification',
    title: 'Water Purification',
    description: 'Installation and maintenance of water filtration and purification systems.',
    imageSrc: '/services/24311.jpg',
    featured: false,
    price: 'Starting from $399',
    details: 'Clean, pure water solutions for your home or business with advanced filtration technology.'
  },
  {
    id: 'cctv',
    title: 'CCTV Installation',
    description: 'Professional security camera installation and monitoring systems.',
    imageSrc: '/services/10604507.png',
    featured: false,
    price: 'Starting from $599',
    details: 'Complete security camera solutions including installation, setup, and ongoing monitoring services.'
  },
  {
    id: 'security',
    title: 'Security Systems',
    description: 'Comprehensive security solutions for home and business protection.',
    imageSrc: '/services/Screenshot 2025-09-04 112727.png',
    featured: false,
    price: 'Starting from $799',
    details: 'Advanced security systems including alarms, access control, and monitoring for complete protection.'
  }
];

export const automationServices = [
  {
    id: 'smart-cameras',
    title: '360° Smart Cameras',
    description: 'Advanced surveillance with AI-powered monitoring and mobile alerts.',
    icon: Camera
  },
  {
    id: 'sensor-lights',
    title: 'Motion Sensor Lights',
    description: 'Energy-efficient LED lighting with smart motion detection technology.',
    icon: Lightbulb
  },
  {
    id: 'air-health',
    title: 'Air Health Systems',
    description: 'Smart air purification and quality monitoring for healthier living.',
    icon: Heart
  },
  {
    id: 'smart-locks',
    title: 'Smart Lock Systems',
    description: 'Keyless entry with biometric and mobile app integration.',
    icon: Lock
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.id === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter(service => service.featured);
}