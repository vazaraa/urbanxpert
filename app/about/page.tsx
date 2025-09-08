import { CheckCircle, Users, Award, Clock,Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CTAButton from '@/components/CTAButton';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">UrbanXpert</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're dedicated to providing exceptional home and business maintenance services 
              with professionalism, reliability, and a commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, UrbanXpert began with a simple mission: to provide reliable, 
                professional maintenance services that homeowners and businesses can trust. 
                What started as a small team of skilled technicians has grown into a comprehensive 
                service provider serving thousands of satisfied customers.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we combine traditional craftsmanship with modern technology to deliver 
                solutions that not only meet but exceed our customers' expectations. Our commitment 
                to quality, transparency, and customer service has made us the preferred choice 
                for maintenance services in the region.
              </p>
              <CTAButton href="/services">
                Explore Our Services
              </CTAButton>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional technician at work"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional home and business maintenance services that enhance 
                  the quality of life for our customers. We strive to be the most trusted 
                  and reliable service provider through professional excellence, innovative 
                  solutions, and unwavering commitment to customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize the maintenance industry by integrating cutting-edge 
                  technology with traditional craftsmanship. We envision a future where 
                  every home and business has access to reliable, efficient, and smart 
                  maintenance solutions that make life easier and more comfortable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose UrbanXpert?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your complete satisfaction with every service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Quality Guaranteed',
                description: 'Every service comes with our quality guarantee. If you\'re not satisfied, we\'ll make it right.'
              },
              {
                icon: Clock,
                title: 'On-Time Service',
                description: 'We respect your time. Our technicians arrive punctually and complete work within the estimated timeframe.'
              },
              {
                icon: Award,
                title: 'Expert Technicians',
                description: 'Our team consists of licensed, experienced professionals who stay updated with the latest techniques and technologies.'
              },
              {
                icon: Users,
                title: 'Customer-Centric',
                description: 'Your satisfaction is our priority. We listen to your needs and provide personalized solutions.'
              },
              {
                icon: Shield,
                title: 'Fully Insured',
                description: 'Complete insurance coverage protects your property and gives you peace of mind during service.'
              },
              {
                icon: CheckCircle,
                title: 'Transparent Pricing',
                description: 'No hidden fees or surprise charges. You\'ll know the exact cost before we begin any work.'
              }
            ].map((reason, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the UrbanXpert Difference?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of satisfied customers who trust us for their maintenance needs.
          </p>
          <CTAButton href="/book" variant="secondary" size="lg">
            Get Started Today
          </CTAButton>
        </div>
      </section>
    </div>
  );
}