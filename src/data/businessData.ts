export interface ServiceItem {
  id: string;
  name: string;
  category: 'repairs' | 'installations' | 'openers' | 'maintenance';
  shortDesc: string;
  details: string;
  urgency: 'high' | 'normal';
}

export const BUSINESS_INFO = {
  name: "Kieran Mellor",
  trade: "Garage Door Specialist",
  tagline: "Garage Doors Done Right",
  phoneFormatted: "07463 565117",
  phoneInternational: "+44 7463 565117",
  phoneRaw: "447463565117",
  whatsappNumber: "447463565117",
  addressLine1: "54 Boulevard",
  city: "Preston",
  country: "England",
  postcode: "PR1 4PH",
  fullAddress: "54 Boulevard, Preston, England, PR1 4PH",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=54+Boulevard,+Preston,+England,+PR1+4PH",
  whatsappDefaultMsg: "Hi Kieran, I found your website and I need help with my garage door in Preston.",
  serviceAreas: [
    "Preston City Centre (PR1)",
    "Ashton-on-Ribble & Docklands (PR2)",
    "Fulwood & Cadley (PR2)",
    "Penwortham & Higher Penwortham (PR1)",
    "Bamber Bridge & Walton-le-Dale (PR5)",
    "Leyland & Farington (PR25)",
    "Broughton & Woodplumpton (PR3)",
    "Longton & Hutton (PR4)",
    "Kirkham & Wesham (PR4)"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "installation",
    name: "Garage Door Installation",
    category: "installations",
    shortDesc: "Complete fitting of brand-new sectional, roller, and up-and-over garage doors built for durability and security.",
    details: "Precision installation tailored to your garage aperture, including weather seal fitting, track alignment, and thorough balance testing.",
    urgency: "normal"
  },
  {
    id: "repair",
    name: "Garage Door Repair",
    category: "repairs",
    shortDesc: "Rapid fault finding and mechanical repairs for doors that are sticking, heavy to lift, or refusing to close.",
    details: "Full diagnostics of moving parts, tracks, lock barrels, and latch cables to get your existing door operating smoothly again.",
    urgency: "high"
  },
  {
    id: "replacement",
    name: "Garage Door Replacement",
    category: "installations",
    shortDesc: "Safe removal and environmentally responsible disposal of old, damaged doors with modern secure replacements.",
    details: "Upgrade older, drafty, or dented garage doors with modern insulated roller or sectional systems suited to your property aesthetic.",
    urgency: "normal"
  },
  {
    id: "opener-repair",
    name: "Garage Door Opener Repair",
    category: "openers",
    shortDesc: "Specialist repair of automated electric motors, remote controls, wall switches, and safety eye sensors.",
    details: "Resolving motor hums, gear strip issues, transmitter pairing failures, and optical sensor misalignments across leading automation brands.",
    urgency: "high"
  },
  {
    id: "opener-installation",
    name: "Garage Door Opener Installation",
    category: "openers",
    shortDesc: "Convert your manual garage door into smooth electric automation or replace an obsolete motor unit.",
    details: "Installation of whisper-quiet belt or chain drive electric operators equipped with rolling code remotes and manual emergency release.",
    urgency: "normal"
  },
  {
    id: "broken-spring",
    name: "Broken Spring Replacement",
    category: "repairs",
    shortDesc: "Safe replacement of snapped or fatigued torsion and extension springs under high tension.",
    details: "High-cycle replacement springs properly matched to the exact weight of your door, installed and calibrated with professional winding bars.",
    urgency: "high"
  },
  {
    id: "cable-repair",
    name: "Garage Door Cable Repair",
    category: "repairs",
    shortDesc: "Replacement of frayed, snapped, or loose lift cables that cause the garage door to sag or jam.",
    details: "Heavy-gauge galvanised steel cables fitted and tensioned evenly across both drums to eliminate dangerous door skewing.",
    urgency: "high"
  },
  {
    id: "panel-replacement",
    name: "Garage Door Panel Replacement",
    category: "repairs",
    shortDesc: "Replacing damaged, dented, or weathered individual door panels without needing a whole new door.",
    details: "Cost-effective repair sourcing colour-matched section panels to restore exterior kerb appeal and structural rigidity.",
    urgency: "normal"
  },
  {
    id: "track-repair",
    name: "Garage Door Track Repair",
    category: "repairs",
    shortDesc: "Realignment and reinforcement of bent, twisted, or misaligned vertical and horizontal tracks.",
    details: "Straightening or replacing warped guide rails to prevent rollers from binding, grinding, or popping out of track.",
    urgency: "high"
  },
  {
    id: "roller-replacement",
    name: "Garage Door Roller Replacement",
    category: "maintenance",
    shortDesc: "Upgrading noisy, seized, or cracked rollers with premium ball-bearing rollers for smooth, quiet glide.",
    details: "Replaces worn metal wheels with durable nylon-coated or steel precision ball-bearing rollers to reduce motor strain.",
    urgency: "normal"
  },
  {
    id: "maintenance",
    name: "Garage Door Maintenance & Tune-Up",
    category: "maintenance",
    shortDesc: "Comprehensive health check, balance testing, hardware tightening, and professional lubrication.",
    details: "Annual preventive service including spring tension re-balancing, safety auto-reverse testing, hinge inspection, and weather-stripping.",
    urgency: "normal"
  },
  {
    id: "emergency-service",
    name: "Emergency Garage Door Service",
    category: "repairs",
    shortDesc: "Urgent callouts for stuck open doors, off-track emergencies, or broken springs leaving your vehicle trapped.",
    details: "Priority response across Preston to secure your garage, safely release trapped vehicles, and make urgent structural repairs.",
    urgency: "high"
  }
];

export const TRUST_POINTS = [
  {
    title: "Direct Specialist Service",
    description: "You deal directly with Kieran Mellor from your first enquiry to job completion—no subcontractors, no agency middlemen."
  },
  {
    title: "Upfront, Honest Pricing",
    description: "Clear quotation provided before any repair work commences. No surprise fees, no hidden callout markups."
  },
  {
    title: "Preston-Based Rapid Response",
    description: "Centrally situated at 54 Boulevard (PR1), offering prompt arrival across Preston and surrounding Lancashire communities."
  },
  {
    title: "Safety-Certified Protocols",
    description: "Garage door springs and cables carry extreme mechanical tension. Every job includes full balance and safety stop verification."
  },
  {
    title: "Quality Replacement Hardware",
    description: "We fit high-cycle torsion springs, heavy-gauge cables, and reputable motor hardware designed for years of trouble-free use."
  }
];

export const FAQS = [
  {
    question: "My garage door is stuck halfway or won't open. What should I do?",
    answer: "Do not attempt to force the door or repeatedly press the opener button, as this can snap cables or burn out the motor. If a spring has broken, the door will be extremely heavy. Contact Kieran via WhatsApp or phone (07463 565117) for safe diagnostic advice and prompt attendance."
  },
  {
    question: "Can I replace a broken spring myself?",
    answer: "Garage door torsion and extension springs are under massive mechanical tension. Replacing them without specialist winding bars and mechanical knowledge is one of the leading causes of severe DIY injuries. Having a trained specialist safely handle the replacement ensures correct door balance and family safety."
  },
  {
    question: "How quickly can you attend in Preston?",
    answer: "Being based at 54 Boulevard in Preston (PR1), local repairs across Preston, Penwortham, Fulwood, and nearby areas can frequently be attended to promptly, particularly for urgent security situations like a door stuck open."
  },
  {
    question: "Can an existing manual garage door be converted to electric?",
    answer: "In most cases, yes. Provided your current door is structurally sound, balanced, and runs smoothly on its tracks, an electric motor operator with remote controls can be fitted to automate your existing door."
  },
  {
    question: "How do I get an estimate for a repair or replacement?",
    answer: "Simply send a quick photo of the issue via WhatsApp to 07463 565117 with a brief note of what is happening. Kieran can often diagnose the issue and give you an upfront price or schedule an on-site visit."
  }
];
