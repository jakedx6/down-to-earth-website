import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Image
              src="/assets/DtE-Color-Logo.svg"
              alt="Down to Earth Farmstead"
              width={200}
              height={60}
              className="h-16 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-primary-foreground/90 text-lg mb-6 max-w-md">
              Iowa farm providing sustainable food solutions with advanced preservation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="secondary" size="sm">
                <Link href="/products">
                  Shop Products
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              {/* <li>
                <Link href="/articles" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Articles
                </Link>
              </li> */} {/* Hidden for now */}
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2025 Down to Earth Farmstead. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-primary-foreground/70 text-sm mt-4 sm:mt-0">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <a href="mailto:info@downtoearthfarmstead.com" className="hover:text-white transition-colors">
                info@downtoearthfarmstead.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}