// import {
//   Star
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import ServiceCard from '@/components/ServiceCard';
// import CTAButton from '@/components/CTAButton';
// import { getFeaturedServices, automationServices } from '@/lib/services';

// export default function Hero() {
//   const featuredServices = getFeaturedServices();

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
//             {[
//               { title: 'Cleaning Services', imageSrc: '/services/professional-cleaning-service-person-using-vacuum-cleaner-office.jpg', href: '/services/cleaning' },
//               { title: 'Electrical Services', imageSrc: '/services/male-electrician-working-switchboard-with-fuses.jpg', href: '/services/electrical' },
//               { title: 'Plumbing Solutions', imageSrc: '/services/plumbing-professional-doing-his-job.jpg', href: '/services/plumbing' },
//               { title: 'AC Repair', imageSrc: '/services/team-replacing-old-air-conditioner.jpg', href: '/services/ac-repair' },
//               { title: 'Pest Control', imageSrc: '/services/man-hazmat-suit-disinfecting-classroom-due-coronavirus-pandemic.jpg', href: '/services/pest-control' },
//               { title: 'Professional Painting', imageSrc: '/services/wallpaper-concept-flow-element-force.jpg', href: '/services/painting' },
//               { title: 'Men Spa and Salon', imageSrc: '/services/barber-shaving-contouring-male-customer-s-beard.jpg', href: '/services/men-spa-and-salon' },
//               { title: 'Women Spa and salon', imageSrc: '/services/young-beautiful-woman-having-face-massage-relaxing-spa.jpg', href: '/services/women-spa-and-salon' },
//               { title: 'Wooden and furniture', imageSrc: '/services/10604507.png', href: '/services/wooden-and-furniture' },
//               { title: 'Water Purification', imageSrc: '/services/wallpaper-concept-flow-element-force.jpg', href: '/services/water-purification' },
//               { title: 'CCTV Installation', imageSrc: '/services/24311.jpg', href: '/services/cctv' },
//               { title: 'Security Systems', imageSrc: '/services/Screenshot 2025-09-04 112727.png', href: '/services/security' },
//             ].map((service, index) => (
//               <ServiceCard
//                 key={index}
//                 title={service.title}
//                 description="Professional service with quality guarantee"
//                 imageSrc={service.imageSrc}
//                 href={service.href}
//               />
//             ))}
//           </div>

//       {/* <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               Professional <span className="text-blue-600">Home & Business</span> Maintenance
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               Expert solutions for all your maintenance needs. From electrical and plumbing to cleaning and smart home automation.
//               <span className="font-semibold">Trusted, reliable, and affordable.</span>
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <CTAButton href="/book" size="lg">
//                 Book Service Now
//               </CTAButton>
//               <CTAButton href="/services" variant="secondary" size="lg">
//                 Browse Services
//               </CTAButton>
//             </div>
//           </div>
//         </div>
//       </section> */}

//         {/* Floating Stats */}
//         {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { number: '5000+', label: 'Happy Customers' },
//               { number: '50+', label: 'Expert Technicians' },
//               { number: '24/7', label: 'Emergency Service' },
//               { number: '100%', label: 'Satisfaction Guarantee' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
//                 <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//       {/* Why Choose Us
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose UrbanXpert?</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We deliver exceptional service with professionalism, reliability, and attention to detail.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: CheckCircle,
//                 title: 'Licensed & Insured',
//                 description: 'All our technicians are fully licensed, insured, and background-checked for your peace of mind.'
//               },
//               {
//                 icon: Clock,
//                 title: '24/7 Emergency Service',
//                 description: 'Round-the-clock availability for urgent repairs and emergency maintenance needs.'
//               },
//               {
//                 icon: Shield,
//                 title: '100% Satisfaction Guarantee',
//                 description: 'We stand behind our work with a complete satisfaction guarantee on all services.'
//               }
//             ].map((feature, index) => (
//               <div key={index} className="text-center p-6">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <feature.icon className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Featured Services */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our most popular services, trusted by thousands of satisfied customers.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {featuredServices.map((service) => (
//               <ServiceCard
//                 key={service.id}
//                 title={service.title}
//                 description={service.description}
//                 imageSrc={service.imageSrc}
//                 href={`/services/${service.id}`}
//                 featured={true}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* All Services */}
//       {/* <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Comprehensive maintenance solutions for every need.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
//             {[
//               { title: 'Cleaning Services', icon: Sparkles, href: '/services/cleaning' },
//               { title: 'Electrical Services', icon: Zap, href: '/services/electrical' },
//               { title: 'Plumbing Solutions', icon: Droplets, href: '/services/plumbing' },
//               { title: 'AC Repair', icon: Wind, href: '/services/ac-repair' },
//               { title: 'Pest Control', icon: Bug, href: '/services/pest-control' },
//               { title: 'Professional Painting', icon: Paintbrush, href: '/services/painting' },
//               { title: 'Men Spa and Salon', icon: Paintbrush, href: '/services/men-spa-and-salon' },
//               { title: 'Women Spa and salon', icon: Paintbrush, href: '/services/women-spa-and-salon' },
//               { title: 'Wooden and furniture', icon: Paintbrush, href: '/services/wooden-and-furniture' },
//               { title: 'Water Purification', icon: Droplets, href: '/services/water-purification' },
//               { title: 'CCTV Installation', icon: Camera, href: '/services/cctv' },
//               { title: 'Security Systems', icon: Shield, href: '/services/security' },
//             ].map((service, index) => (
//               <ServiceCard
//                 key={index}
//                 title={service.title}
//                 description="Professional service with quality guarantee"
//                 icon={service.icon}
//                 href={service.href}
//               />
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Smart Home Automation */}
//       <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">New Technological Home Automations</h2>
//             <p className="text-blue-100 max-w-2xl mx-auto text-lg">
//               Transform your home with cutting-edge smart technology for enhanced security, comfort, and efficiency.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {automationServices.map((service, index) => (
//               <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
//                 <CardHeader className="text-center">
//                   <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
//                     <service.icon className="h-8 w-8 text-white" />
//                   </div>
//                   <CardTitle className="text-lg text-white">{service.title}</CardTitle>
//                   <CardDescription className="text-blue-100">{service.description}</CardDescription>
//                 </CardHeader>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center">
//             <CTAButton href="/services" variant="secondary">
//               Explore Smart Solutions
//             </CTAButton>
//           </div>
//         </div>
//       </section>

//       {/* Special Services Banner */}
//       <section className="py-16 bg-yellow-50 border-y border-yellow-200">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex items-center justify-center mb-4">
//             <Star className="h-6 w-6 text-yellow-500 mr-2" />
//             <span className="text-yellow-700 font-semibold text-sm uppercase tracking-wide">Special Offer</span>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Special services available only on UrbanXpert
//           </h2>
//           <p className="text-gray-600 mb-8 text-lg">
//             Exclusive packages combining multiple services with significant savings.
//             Professional maintenance solutions tailored to your specific needs.
//           </p>
//           <CTAButton href="/book" size="lg">
//             Book Special Package
//           </CTAButton>
//         </div>
//       </section>

//       {/* CTA Section
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
//           <p className="text-gray-600 mb-8 text-lg">
//             Join thousands of satisfied customers who trust UrbanXpert for their maintenance needs.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <CTAButton href="/book" size="lg">
//               Book Service Now
//             </CTAButton>
//             <CTAButton href="https://wa.me/1234567890" variant="secondary" size="lg" external={true}>
//               WhatsApp Us
//             </CTAButton>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   );
// }
import { Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import { getFeaturedServices, automationServices } from "@/lib/services";

export default function Hero() {
  const featuredServices = getFeaturedServices();

  return (
    <div className="bg-gray-50">
      {/* Small Banner */}
      <section className="m-6 flex justify-center">
        <div className="w-[1280px] h-[180px] rounded-xl shadow-md bg-red-500 flex items-center justify-between px-8">
          {/* Left Side - Text & Button */}
          <div className="max-w-md text-white">
             <img
            src="/services/vipvazraa/పప్పలు.jpg"
            alt="Banner"
            className="rounded-lg w-60 h-22 object-cover shadow-md"
          />
          </div>

          {/* Right Side - Image */}
         
        </div>
      </section>
      {/* Main Banner */}
      <section className="mx-4 mt-6">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
            alt="UrbanXpert Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Promo Boxes */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-6">
        {[
          {
            title: "Quick Fix at your doorstep!",
            description: "Electrical, plumbing & more in minutes",
            color: "bg-blue-500",
          },
          {
            title: "Care for your Comfort",
            description: "Spa, salon & grooming services",
            color: "bg-yellow-400",
          },
          {
            title: "No time for a repair run?",
            description: "Book maintenance services instantly",
            color: "bg-sky-300",
          },
        ].map((promo, i) => (
          <div
            key={i}
            className={`${promo.color} rounded-xl p-6 text-white shadow-md`}
          >
            <h3 className="font-bold text-lg mb-2">{promo.title}</h3>
            <p className="text-sm opacity-90">{promo.description}</p>
            <CTAButton
              href="/services"
            >
              Order Now
            </CTAButton>
          </div>
        ))}
      </section>

      {/* Category Shortcuts */}
      <section className="grid grid-cols-3 md:grid-cols-6 gap-4 p-6 bg-white mt-6 shadow-sm">
        {[
          {
            title: "Cleaning",
            imageSrc:
              "/services/professional-cleaning-service-person-using-vacuum-cleaner-office.jpg",
            href: "/services/cleaning",
          },
          {
            title: "Electrical",
            imageSrc:
              "/services/male-electrician-working-switchboard-with-fuses.jpg",
            href: "/services/electrical",
          },
          {
            title: "Plumbing",
            imageSrc: "/services/plumbing-professional-doing-his-job.jpg",
            href: "/services/plumbing",
          },
          {
            title: "AC Repair",
            imageSrc: "/services/team-replacing-old-air-conditioner.jpg",
            href: "/services/ac-repair",
          },
          {
            title: "Pest Control",
            imageSrc:
              "/services/man-hazmat-suit-disinfecting-classroom-due-coronavirus-pandemic.jpg",
            href: "/services/pest-control",
          },
          {
            title: "Painting",
            imageSrc: "/services/wallpaper-concept-flow-element-force.jpg",
            href: "/services/painting",
          },
        ].map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="flex flex-col items-center text-center"
          >
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-16 h-16 rounded-full object-cover shadow mb-2"
            />
            <span className="text-sm font-medium text-gray-700">
              {service.title}
            </span>
          </a>
        ))}
      </section>

      {/* Featured Services */}
      <section className="py-12 px-6 bg-white mt-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Services
          </h2>
          <p className="text-gray-600">
            Our most popular services, trusted by thousands of customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              href={`/services/${service.id}`}
              featured={true}
            />
          ))}
        </div>
      </section>

      {/* Smart Home Automation */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl mx-4 my-8 shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Smart Home Automations</h2>
          <p className="text-blue-100 text-lg">
            Enhance your home with cutting-edge smart solutions for comfort and
            security.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationServices.map((service, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-blue-100">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <CTAButton href="/services" variant="secondary">
            Explore Smart Solutions
          </CTAButton>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-yellow-50 border-t border-yellow-200 text-center">
        <div className="flex items-center justify-center mb-4">
          <Star className="h-6 w-6 text-yellow-500 mr-2" />
          <span className="text-yellow-700 font-semibold text-sm uppercase">
            Special Offer
          </span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Special Services Only on UrbanXpert
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Exclusive packages combining multiple services with savings. Tailored
          solutions for your specific needs.
        </p>
        <CTAButton href="/book" size="lg">
          Book Special Package
        </CTAButton>
      </section>
    </div>
  );
}
