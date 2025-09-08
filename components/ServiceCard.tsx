import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?:  typeof LucideIcon;
  href: string;
  featured?: boolean;
  imageSrc?: string;
}

export default function ServiceCard({ title, description, icon: Icon, href, featured = false, imageSrc }: ServiceCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'border-blue-200 bg-blue-50/50' : ''}`}>
      <CardHeader className="text-center">
        <div className={`w-full h-28 md:h-32 mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
          {imageSrc ? (
            <Image src={imageSrc} alt={title} width={400} height={200} className="w-full h-full object-cover" />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${featured ? 'bg-blue-100' : 'bg-blue-50'}`}>
              {Icon ? <Icon className={`h-8 w-8 ${featured ? 'text-blue-700' : 'text-blue-600'}`} /> : null}
            </div>
          )}
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
        {/* <CardDescription className="text-gray-600">{description}</CardDescription> */}
      </CardHeader>
      {/* <CardContent>
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
          <Link href={href}>Learn More</Link>
        </Button>
      </CardContent> */}
    </Card>
  );
}