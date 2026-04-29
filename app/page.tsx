import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { RegoFinder } from '@/components/sections/RegoFinder'
import { WhyUs } from '@/components/sections/WhyUs'
import { BatteryCategories } from '@/components/sections/BatteryCategories'
import { EmergencySection } from '@/components/sections/EmergencySection'
import { TradeSupply } from '@/components/sections/TradeSupply'
import { NetworkSection } from '@/components/sections/NetworkSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: "Battery Factory Direct | Perth's Warehouse-Direct Battery Supplier",
  description:
    'Warehouse-direct car, truck, marine and AGM batteries in Perth. Enter your rego for instant battery matching. Perth-wide delivery and installation from our Maddington supply hub.',
  keywords: [
    'Perth car batteries',
    'Maddington batteries',
    'car battery replacement Perth',
    'mobile battery delivery Perth',
    'battery supplier Maddington',
    'truck batteries Perth',
    'AGM batteries Perth',
    'marine batteries Perth',
    'trade battery supplier Perth',
    'emergency battery replacement Perth',
  ],
  openGraph: {
    title: "Battery Factory Direct | Perth's Warehouse-Direct Battery Supplier",
    description:
      'Fast battery matching, Perth-wide delivery, and installation from our Maddington supply hub.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RegoFinder />
      <WhyUs />
      <BatteryCategories />
      <EmergencySection />
      <TradeSupply />
      <NetworkSection />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
    </main>
  )
}
