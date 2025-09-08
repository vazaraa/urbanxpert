import { notFound } from 'next/navigation';
import { CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/CTAButton';
import { getServiceBySlug } from '@/lib/services';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ServiceIcon className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {service.details || service.description}
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-gray-600 font-medium">{service.price}</span>
            </div>
            <CTAButton href="/book" size="lg">
              Book This Service
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      {service.packages && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
              <p className="text-gray-600">Choose the package that best fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.packages.map((pkg, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-gray-900">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                      Select Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Common questions about our {service.title.toLowerCase()}</p>
            </div>
            
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book {service.title}?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get professional service with our satisfaction guarantee. Book now and experience the UrbanXpert difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/book" variant="secondary" size="lg">
              Book Service Now
            </CTAButton>
            <CTAButton href="https://wa.me/1234567890" variant="secondary" size="lg" external={true}>
              WhatsApp Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}