import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreement</h2>
                <p className="text-gray-600 mb-6">
                  By booking our services, you agree to these terms and conditions. 
                  Our services are subject to availability and may require advance scheduling.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <p className="text-gray-600 mb-6">
                  Payment is due upon completion of service unless other arrangements have been made. 
                  We accept cash, credit cards, and electronic payments. A service fee may apply for 
                  emergency or after-hours services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
                <p className="text-gray-600 mb-6">
                  Services may be cancelled up to 24 hours before the scheduled appointment without penalty. 
                  Cancellations made less than 24 hours in advance may be subject to a cancellation fee.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
                <p className="text-gray-600 mb-6">
                  We carry comprehensive insurance to protect your property. Our liability is limited 
                  to the cost of the service provided, and we are not responsible for pre-existing 
                  conditions or damage not caused by our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty</h2>
                <p className="text-gray-600 mb-6">
                  We guarantee our workmanship for 30 days from the date of service completion. 
                  Parts and materials may carry manufacturer warranties as applicable.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  For questions about these terms, please contact us at legal@urbanxpert.com 
                  or +1 (555) 123-4567.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}