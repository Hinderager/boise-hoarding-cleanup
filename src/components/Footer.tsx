import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MapPin, Phone, Clock } from 'lucide-react'
import { Fragment } from 'react'
import { getSiteSettings } from '@/lib/sanity'

export async function Footer() {
  const settings = await getSiteSettings()

  return (
    <footer className="bg-dark-blue text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Company</h4>
            <ul className="space-y-2">
              {(settings?.footerCompany || []).map((item) => (
                <li key={item._key}>
                  <Link href={item.href} className="text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Services</h4>
            <ul className="space-y-2">
              {(settings?.footerServices || []).map((label) => (
                <li key={label} className="text-white/80">{label}</li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Service Areas</h4>
            <ul className="space-y-2">
              {(settings?.footerAreas || []).map((item) => (
                <li key={item._key}>
                  <Link href={item.href} className="text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href={`tel:${settings?.sitePhoneHref}`}
                    className="text-white/80 hover:text-white transition-colors font-semibold"
                  >
                    <span className="md:hidden">Call Now</span>
                    <span className="hidden md:inline">{settings?.sitePhone}</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">
                    {(settings?.addressLines || []).map((line, i, all) => (
                      <Fragment key={line}>
                        {line}
                        {i < all.length - 1 ? <br /> : null}
                      </Fragment>
                    ))}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">
                    {(settings?.hoursLines || []).map((line, i, all) => (
                      <Fragment key={line}>
                        {line}
                        {i < all.length - 1 ? <br /> : null}
                      </Fragment>
                    ))}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <span
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </span>
              <span
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </span>
              <span
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} Boise Hoarding Cleanup. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link href="/privacy" className="text-white/60 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
