import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  external?: boolean;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'default',
  external = false 
}: CTAButtonProps) {
  const buttonClasses = variant === 'primary' 
    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
    : 'bg-white hover:bg-gray-50 text-blue-600 border border-blue-600';

  const buttonContent = (
    <Button 
      className={`${buttonClasses} group transition-all duration-300 hover:shadow-lg`}
      size={size}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href}>
      {buttonContent}
    </Link>
  );
}