import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const cols = [
  {
    heading: 'Services',
    links: [
      { label: 'Battery Matching', href: '/quote' },
      { label: 'Perth-Wide Delivery', href: '/#services' },
      { label: 'Installation', href: '/#services' },
      { label: '24/7 Emergency', href: '/#emergency' },
      { label: 'Trade Supply', href: '/#trade' },
    ],
  },
  {
    heading: 'Battery Range',
    links: [
      { label: 'Car Batteries', href: '/battery-range#car' },
      { label: '4WD & Off-Road', href: '/battery-range#4wd' },
      { label: 'AGM Batteries', href: '/battery-range#agm' },
      { label: 'Truck Batteries', href: '/battery-range#truck' },
      { label: 'Marine & Lithium', href: '/battery-range#marine' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Battery Range', href: '/battery-range' },
      { label: 'Get a Quote', href: '/quote' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <span className="text-lg font-black text-white tracking-tight">BATTERY FACTORY</span>
              <span className="text-lg font-black text-red-500 tracking-tight"> DIRECT</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
              Perth&apos;s warehouse-direct battery supplier. Matched to your vehicle, delivered across Perth from our Maddington supply hub.
            </p>
            <div className="space-y-2.5">
              <a href="tel:0000000000" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm">
                <Phone className="w-3.5 h-3.5 text-red-500 flex-shrink-0" /> 0000 000 000
              </a>
              <a href="mailto:info@batteryfactorydirect.com.au" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm">
                <Mail className="w-3.5 h-3.5 text-red-500 flex-shrink-0" /> info@batteryfactorydirect.com.au
              </a>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" /> Maddington, WA 6109
              </div>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-zinc-500 hover:text-zinc-200 text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Network */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50">
          <p className="text-zinc-600 text-xs uppercase tracking-widest font-medium mb-2">Part of the Perth Battery Network</p>
          <p className="text-zinc-600 text-xs">Connected with Car Battery Perth · Fremantle Batteries</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-zinc-700 text-xs">© {new Date().getFullYear()} Battery Factory Direct. All rights reserved. Maddington, Perth WA.</p>
          <p className="text-zinc-700 text-xs">ABN: Pending</p>
        </div>
      </div>
    </footer>
  )
}
