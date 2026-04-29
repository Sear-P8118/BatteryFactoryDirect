import Link from 'next/link'
import { Phone, MapPin, Mail, Clock } from 'lucide-react'

const links = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'Battery Range', href: '/battery-range' },
    { label: 'Get a Quote', href: '/quote' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  'Battery Types': [
    { label: 'Car Batteries', href: '/battery-range#car' },
    { label: '4WD Batteries', href: '/battery-range#4wd' },
    { label: 'AGM Batteries', href: '/battery-range#agm' },
    { label: 'Truck Batteries', href: '/battery-range#truck' },
    { label: 'Marine Batteries', href: '/battery-range#marine' },
    { label: 'Lithium Batteries', href: '/battery-range#lithium' },
  ],
  Services: [
    { label: 'Perth-Wide Delivery', href: '/#services' },
    { label: 'Battery Installation', href: '/#services' },
    { label: '24/7 Emergency', href: '/#emergency' },
    { label: 'Trade Supply', href: '/#trade' },
    { label: 'Fleet Batteries', href: '/battery-range#commercial' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-black tracking-tight text-zinc-100">BATTERY FACTORY</span>
              <span className="text-xl font-black tracking-tight text-red-500"> DIRECT</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-6">
              Perth's warehouse-direct battery supplier. Fast matching, Perth-wide delivery, and installation from our Maddington supply hub.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:0000000000"
                className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                0000 000 000
              </a>
              <a
                href="mailto:info@batteryfactorydirect.com.au"
                className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                info@batteryfactorydirect.com.au
              </a>
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                Maddington, WA 6109
              </div>
              <div className="flex items-start gap-3 text-zinc-400">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                Opening Soon · 24/7 Emergency Support
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-zinc-100 font-semibold text-sm tracking-wide mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Network */}
        <div className="mt-12 pt-8 border-t border-zinc-800/60">
          <p className="text-zinc-600 text-xs mb-3 uppercase tracking-widest font-semibold">
            Part of the Perth Battery Network
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
            <span className="hover:text-zinc-300 cursor-default transition-colors">Car Battery Perth</span>
            <span className="hover:text-zinc-300 cursor-default transition-colors">Fremantle Batteries</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-zinc-800/40 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-700 text-xs">
            © {new Date().getFullYear()} Battery Factory Direct. All rights reserved. Maddington, Perth WA.
          </p>
          <p className="text-zinc-700 text-xs">ABN: Pending</p>
        </div>
      </div>
    </footer>
  )
}
