export interface BatteryCategory {
  id: string
  name: string
  description: string
  applications: string[]
  badge?: string
}

export const batteryCategories: BatteryCategory[] = [
  {
    id: 'car',
    name: 'Car Batteries',
    description: 'Standard lead-acid and AGM batteries for all passenger vehicles. Matched to your exact make, model, and year.',
    applications: ['Sedans', 'Hatchbacks', 'SUVs', 'Wagons'],
    badge: 'Most Popular',
  },
  {
    id: '4wd',
    name: '4WD & Off-Road',
    description: 'Heavy-duty batteries built for the demands of 4WD touring, towing, and off-road use across WA terrain.',
    applications: ['4WDs', 'Utes', 'Dual-cabs', 'Off-road vehicles'],
  },
  {
    id: 'truck',
    name: 'Truck & Commercial',
    description: 'High-capacity batteries for heavy vehicles, commercial transport, and fleet operations across Perth.',
    applications: ['Semi-trailers', 'Rigid trucks', 'Buses', 'Commercial vehicles'],
  },
  {
    id: 'marine',
    name: 'Marine & Boat',
    description: 'Deep cycle and dual-purpose marine batteries engineered for the demands of boats and watercraft.',
    applications: ['Tinnies', 'Runabouts', 'Cruisers', 'Jet skis'],
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle & Powersport',
    description: 'Compact, lightweight batteries for motorcycles, scooters, ATVs, and powersport vehicles.',
    applications: ['Motorcycles', 'Scooters', 'ATVs', 'Dirt bikes'],
  },
  {
    id: 'agm',
    name: 'AGM Batteries',
    description: 'Absorbent Glass Mat technology for modern vehicles with high electrical demands and start-stop systems.',
    applications: ['European vehicles', 'Start-stop systems', 'Luxury vehicles'],
    badge: 'Premium',
  },
  {
    id: 'lithium',
    name: 'Lithium Batteries',
    description: 'Lightweight, long-life lithium iron phosphate batteries for performance, auxiliary, and EV support applications.',
    applications: ['Caravans', 'Camping', 'Solar', 'High-performance'],
    badge: 'Premium',
  },
  {
    id: 'start-stop',
    name: 'Start-Stop Batteries',
    description: 'EFB and AGM batteries engineered specifically for vehicles with automatic start-stop technology.',
    applications: ['Modern hatchbacks', 'European makes', 'Hybrid vehicles'],
  },
  {
    id: 'commercial',
    name: 'Fleet & Commercial',
    description: 'Trade pricing and priority stock for mechanics, workshops, fleets, and dealerships across Perth.',
    applications: ['Fleets', 'Workshops', 'Dealerships', 'Tradies'],
    badge: 'Trade',
  },
]
