export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 'walk-in',
    question: 'Can I walk in?',
    answer:
      'Yes. Battery Factory Direct operates as a walk-in warehouse in Maddington, Perth. You\'re welcome to visit in person to browse stock, get expert advice, or collect a battery directly. Walk-in details will be confirmed when our Maddington location opens — check back soon.',
  },
  {
    id: 'delivery',
    question: 'Do you deliver across Perth?',
    answer:
      'Yes. We offer Perth-wide delivery from our Maddington supply hub. Whether you\'re in the northern suburbs, southern suburbs, the CBD, or the hills — we\'ll get the right battery to you fast.',
  },
  {
    id: 'installation',
    question: 'Can you install the battery?',
    answer:
      'Yes. We offer battery installation services across Perth. Our team can come to you at home, at work, or roadside — wherever your vehicle is parked. Book through the quote form or call us directly.',
  },
  {
    id: 'trade',
    question: 'Can you supply mechanics and businesses?',
    answer:
      'Absolutely. We operate a dedicated trade supply program for mechanics, workshops, fleets, dealerships, and businesses across Perth. Trade accounts get business pricing, priority stock access, and fast dispatch. Contact us to apply.',
  },
  {
    id: 'rego',
    question: 'Can I enter my rego to find the right battery?',
    answer:
      'Yes — this is one of our flagship features. Enter your vehicle\'s registration and we\'ll identify the correct battery for your exact make, model, and engine. Our rego matching tool is being finalised and will be live at launch. You can preview it now on our homepage.',
  },
  {
    id: 'emergency',
    question: 'Do you offer emergency battery replacement?',
    answer:
      'Yes. We offer 24/7 emergency battery help for drivers across Perth. If your battery has died and you\'re stranded, call us and we\'ll get you sorted — whether that\'s mobile delivery, roadside installation, or fast dispatch to your location.',
  },
  {
    id: 'battery-types',
    question: 'What battery types do you stock?',
    answer:
      'We stock a wide range including: standard lead-acid car batteries, AGM batteries, EFB batteries, start-stop batteries, 4WD and heavy-duty batteries, truck and commercial batteries, marine and boat batteries, motorcycle batteries, lithium iron phosphate batteries, and auxiliary deep cycle batteries. If you need it, we almost certainly stock it or can source it fast.',
  },
]
