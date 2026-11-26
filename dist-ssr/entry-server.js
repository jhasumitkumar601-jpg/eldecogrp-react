import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect, useMemo } from "react";
import { renderToString } from "react-dom/server";
const PROJECTS = [
  {
    "slug": "eldeco-live-by-the-greens",
    "name": "Eldeco Live By The Greens",
    "area": "Noida",
    "location": "Sector 150, Noida",
    "config": "2 & 3 BR Apartments",
    "status": "Ongoing",
    "rera": "PI-UPRERAPRJ15172, PII-UPRERAPRJ121123, PIII-UPRERAPRJ575706",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-live-by-the-greens",
    "overview": "A nature-inspired residential project in Sports City, Sector 150, Noida — the low-density, green sector of Noida. The official Eldeco page describes expansive greens, a large clubhouse, recreational and sporting facilities, river views and the nearby CricKingdom by Rohit Sharma academy.",
    "amenities": [
      "Clubhouse",
      "Cricket Pitch",
      "Gym",
      "Swimming Pool",
      "Half Basketball Court",
      "Jogging Track",
      "Lawn Tennis Court",
      "Grass Sloped Seating"
    ],
    "locationAdv": [
      [
        "RPS International School",
        "4 km"
      ],
      [
        "Upcoming Jewar International Airport",
        "20 km"
      ],
      [
        "Noida Sector 148 Metro Station (Aqua Line)",
        "3–4 km"
      ],
      [
        "KR Mangalam World School",
        "3–4 km"
      ],
      [
        "Greater Valley School & Noida Educational Area",
        "4–5 km"
      ],
      [
        "Noida–Greater Noida Expressway",
        "4–5 km"
      ]
    ],
    "extraLabel": "Master Plan",
    "images": {
      "hero": "/assets/images/projects/eldeco-live-by-the-greens/hero.webp",
      "gallery": [
        "/assets/images/projects/eldeco-live-by-the-greens/gallery-1.webp",
        "/assets/images/projects/eldeco-live-by-the-greens/gallery-2.webp",
        "/assets/images/projects/eldeco-live-by-the-greens/gallery-3.webp",
        "/assets/images/projects/eldeco-live-by-the-greens/gallery-4.webp",
        "/assets/images/projects/eldeco-live-by-the-greens/gallery-5.webp",
        "/assets/images/projects/eldeco-live-by-the-greens/gallery-6.webp"
      ],
      "extra": "/assets/images/projects/eldeco-live-by-the-greens/masterplan.jpg"
    },
    "faqs": [
      {
        "q": "What is the price of Eldeco Live By The Greens?",
        "a": "The price of Eldeco Live By The Greens (Sector 150, Noida) is on request. Call or WhatsApp us on +91 8799756026 to get the current price, payment plan and available units for the 2 & 3 BR Apartments residences."
      },
      {
        "q": "What is the RERA registration number of Eldeco Live By The Greens?",
        "a": "Eldeco Live By The Greens is registered with UP RERA under number PI-UPRERAPRJ15172, PII-UPRERAPRJ121123, PIII-UPRERAPRJ575706. Please verify the registration at up-rera.in before booking."
      },
      {
        "q": "Where is Eldeco Live By The Greens located and how well connected is it?",
        "a": "Eldeco Live By The Greens is located at Sector 150, Noida. Key location advantages listed for the project: 4 km — RPS International School; 20 km — Upcoming Jewar International Airport; 3–4 km — Noida Sector 148 Metro Station (Aqua Line); 3–4 km — KR Mangalam World School."
      },
      {
        "q": "What configurations are available at Eldeco Live By The Greens?",
        "a": "Eldeco Live By The Greens offers 2 & 3 BR Apartments. The project status is Ongoing. Message us on WhatsApp at +91 8799756026 for floor plans and current availability."
      },
      {
        "q": "What amenities does Eldeco Live By The Greens offer?",
        "a": "Amenities at Eldeco Live By The Greens include Clubhouse, Cricket Pitch, Gym, Swimming Pool, Half Basketball Court and Jogging Track. The full official amenities list is given in the Amenities section of this page."
      },
      {
        "q": "How can I book a site visit for Eldeco Live By The Greens?",
        "a": "Call or WhatsApp +91 8799756026 and our team will arrange and accompany your site visit to Eldeco Live By The Greens, Sector 150, Noida. You can also enquire through the form on this page — enquiries are answered on WhatsApp."
      }
    ],
    "related": [
      "eldeco-aamantran",
      "eldeco-edge",
      "eldeco-inspire",
      "eldeco-magnolia-park",
      "eldeco-the-studio",
      "eldeco-sylvan-view",
      "eldeco-olympia",
      "eldeco-utopia",
      "eldeco-the-klasse",
      "eldeco-ananda"
    ],
    "completedHtml": null
  },
  {
    "slug": "eldeco-la-vida-bella",
    "name": "Eldeco La Vida Bella",
    "area": "Greater Noida",
    "location": "Sector 12, Greater Noida",
    "config": "3 & 4 BR Premium Residences",
    "status": "Ongoing",
    "rera": "UPRERAPRJ136219/04/2024",
    "launch": "26 April 2024",
    "official": "https://www.eldecogroup.com/residential/eldeco-la-vida-bella",
    "overview": "Premium 3 & 4 bedroom residences in Sector 12, Greater Noida (Noida Extension side), launched on 26 April 2024 as per the official Eldeco page. The project centres on a lifestyle club with a rooftop swimming pool and a wide range of sports and wellness amenities.",
    "amenities": [
      "Lifestyle Club",
      "Rooftop Swimming Pool",
      "Gym",
      "Yoga & Meditation Zone",
      "Amphitheatre",
      "Multipurpose Court",
      "Table Tennis",
      "Badminton Court",
      "Kid's Play Area",
      "Party Hall",
      "Multi-tier Security",
      "Aerobics",
      "Billiards",
      "Cricket Pitch",
      "Fitness Court",
      "Open Chess",
      "Pavilion Stage & Lawn",
      "Pet Park",
      "Pickleball Court",
      "Squash Court"
    ],
    "locationAdv": [
      [
        "Noida–Greater Noida Link Road",
        "0.1 km"
      ],
      [
        "Yotta Data Centre",
        "2 km"
      ],
      [
        "Proposed Metro Station",
        "3 km"
      ],
      [
        "GD Goenka International School",
        "3.2 km"
      ],
      [
        "Knowledge Park V",
        "5 km"
      ],
      [
        "Ace City Square",
        "6 km"
      ]
    ],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/eldeco-la-vida-bella/hero.webp",
      "gallery": [
        "/assets/images/projects/eldeco-la-vida-bella/gallery-1.webp",
        "/assets/images/projects/eldeco-la-vida-bella/gallery-2.webp",
        "/assets/images/projects/eldeco-la-vida-bella/gallery-3.webp",
        "/assets/images/projects/eldeco-la-vida-bella/gallery-4.webp",
        "/assets/images/projects/eldeco-la-vida-bella/gallery-5.webp",
        "/assets/images/projects/eldeco-la-vida-bella/gallery-6.webp"
      ],
      "extra": ""
    },
    "faqs": [
      {
        "q": "What is the price of Eldeco La Vida Bella?",
        "a": "The price of Eldeco La Vida Bella (Sector 12, Greater Noida) is on request. Call or WhatsApp us on +91 8799756026 to get the current price, payment plan and available units for the 3 & 4 BR Premium Residences residences."
      },
      {
        "q": "What is the RERA registration number of Eldeco La Vida Bella?",
        "a": "Eldeco La Vida Bella is registered with UP RERA under number UPRERAPRJ136219/04/2024. Please verify the registration at up-rera.in before booking."
      },
      {
        "q": "Where is Eldeco La Vida Bella located and how well connected is it?",
        "a": "Eldeco La Vida Bella is located at Sector 12, Greater Noida. Key location advantages listed for the project: 0.1 km — Noida–Greater Noida Link Road; 2 km — Yotta Data Centre; 3 km — Proposed Metro Station; 3.2 km — GD Goenka International School."
      },
      {
        "q": "What configurations are available at Eldeco La Vida Bella?",
        "a": "Eldeco La Vida Bella offers 3 & 4 BR Premium Residences. The project status is Ongoing. Message us on WhatsApp at +91 8799756026 for floor plans and current availability."
      },
      {
        "q": "What amenities does Eldeco La Vida Bella offer?",
        "a": "Amenities at Eldeco La Vida Bella include Lifestyle Club, Rooftop Swimming Pool, Gym, Yoga & Meditation Zone, Amphitheatre and Multipurpose Court. The full official amenities list is given in the Amenities section of this page."
      },
      {
        "q": "How can I book a site visit for Eldeco La Vida Bella?",
        "a": "Call or WhatsApp +91 8799756026 and our team will arrange and accompany your site visit to Eldeco La Vida Bella, Sector 12, Greater Noida. You can also enquire through the form on this page — enquiries are answered on WhatsApp."
      }
    ],
    "related": [
      "eldeco-7-peaks-residences",
      "eldeco-mystic-greens",
      "eldeco-golf-view-apartments",
      "eldeco-the-castle",
      "eldeco-riviera",
      "eldeco-residency-greens",
      "eldeco-green-meadows"
    ],
    "completedHtml": null
  },
  {
    "slug": "eldeco-7-peaks-residences",
    "name": "Eldeco 7 Peaks Residences",
    "area": "Greater Noida",
    "location": "Omicron 1A, Greater Noida",
    "config": "3 & 4 BR Oxy-rich Residences",
    "status": "New Launch",
    "rera": "UPRERAPRJ106523/01/2026",
    "launch": "28 January 2026",
    "official": "https://www.eldecogroup.com/residential/eldeco-7-peaks-residences",
    "overview": "Seven towers of 3 & 4 bedroom 'Oxy-rich' residences in Omicron 1A, Greater Noida, launched on 28 January 2026 as per the official Eldeco page. Landscaped courts, orchard and reflexology gardens and a leisure park shape the project, funded and mortgaged with Tata Capital Housing Finance Limited as noted on the official page.",
    "amenities": [
      "Grand Entrance",
      "Courtyard Garden",
      "Reflexology Path",
      "Orchard Garden",
      "Kid's Play Area",
      "Skating Circuit",
      "Cycling Track",
      "Pavilion Stage & Lawn",
      "Senior Citizen Garden",
      "Outdoor Gym",
      "Jogging Track",
      "Leisure Park",
      "Party Lawn",
      "Yoga & Meditation Zone",
      "Bonfire Pit",
      "CCTV Security",
      "Outdoor Sitting Area",
      "Rain Garden"
    ],
    "locationAdv": [
      [
        "Fortis Hospital",
        "4 km"
      ],
      [
        "Delta 1 Metro Station",
        "6 km"
      ],
      [
        "Yamuna Expressway",
        "7 km"
      ],
      [
        "Noida–Greater Noida Expressway",
        "7 km"
      ],
      [
        "Pari Chowk Metro Station",
        "7.7 km"
      ],
      [
        "Buddh International Circuit",
        "17.5 km"
      ]
    ],
    "extraLabel": "Master Plan",
    "images": {
      "hero": "/assets/images/projects/eldeco-7-peaks-residences/hero.webp",
      "gallery": [
        "/assets/images/projects/eldeco-7-peaks-residences/gallery-1.webp",
        "/assets/images/projects/eldeco-7-peaks-residences/gallery-2.webp",
        "/assets/images/projects/eldeco-7-peaks-residences/gallery-3.webp",
        "/assets/images/projects/eldeco-7-peaks-residences/gallery-4.webp",
        "/assets/images/projects/eldeco-7-peaks-residences/gallery-5.webp",
        "/assets/images/projects/eldeco-7-peaks-residences/gallery-6.webp"
      ],
      "extra": "/assets/images/projects/eldeco-7-peaks-residences/masterplan.webp"
    },
    "faqs": [
      {
        "q": "What is the price of Eldeco 7 Peaks Residences?",
        "a": "The price of Eldeco 7 Peaks Residences (Omicron 1A, Greater Noida) is on request. Call or WhatsApp us on +91 8799756026 to get the current price, payment plan and available units for the 3 & 4 BR Oxy-rich Residences residences."
      },
      {
        "q": "What is the RERA registration number of Eldeco 7 Peaks Residences?",
        "a": "Eldeco 7 Peaks Residences is registered with UP RERA under number UPRERAPRJ106523/01/2026. Please verify the registration at up-rera.in before booking."
      },
      {
        "q": "Where is Eldeco 7 Peaks Residences located and how well connected is it?",
        "a": "Eldeco 7 Peaks Residences is located at Omicron 1A, Greater Noida. Key location advantages listed for the project: 4 km — Fortis Hospital; 6 km — Delta 1 Metro Station; 7 km — Yamuna Expressway; 7 km — Noida–Greater Noida Expressway."
      },
      {
        "q": "What configurations are available at Eldeco 7 Peaks Residences?",
        "a": "Eldeco 7 Peaks Residences offers 3 & 4 BR Oxy-rich Residences. The project status is New Launch. Message us on WhatsApp at +91 8799756026 for floor plans and current availability."
      },
      {
        "q": "What amenities does Eldeco 7 Peaks Residences offer?",
        "a": "Amenities at Eldeco 7 Peaks Residences include Grand Entrance, Courtyard Garden, Reflexology Path, Orchard Garden, Kid's Play Area and Skating Circuit. The full official amenities list is given in the Amenities section of this page."
      },
      {
        "q": "How can I book a site visit for Eldeco 7 Peaks Residences?",
        "a": "Call or WhatsApp +91 8799756026 and our team will arrange and accompany your site visit to Eldeco 7 Peaks Residences, Omicron 1A, Greater Noida. You can also enquire through the form on this page — enquiries are answered on WhatsApp."
      }
    ],
    "related": [
      "eldeco-la-vida-bella",
      "eldeco-mystic-greens",
      "eldeco-golf-view-apartments",
      "eldeco-the-castle",
      "eldeco-riviera",
      "eldeco-residency-greens",
      "eldeco-green-meadows"
    ],
    "completedHtml": null
  },
  {
    "slug": "eldeco-echoes-of-eden",
    "name": "Eldeco Echoes Of Eden",
    "area": "Yamuna Expressway",
    "location": "Sector 22D, Yamuna Expressway, Greater Noida",
    "config": "3 BR VRV Air Conditioned Homes",
    "status": "New Launch",
    "rera": "UPRERAPRJ125342/02/2026",
    "launch": "27 February 2026",
    "official": "https://www.eldecogroup.com/residential/eldeco-echoes-of-eden",
    "overview": "3 bedroom VRV air-conditioned homes at GH-01B/1, Sector 22D on the Yamuna Expressway, launched on 27 February 2026 as per the official Eldeco page. The layout plan is approved by YEIDA, and the project sits minutes from Jaypee Sports City and the Buddha International Circuit.",
    "amenities": [
      "Convenience Retail",
      "Landscape Hangout Area",
      "Multipurpose Court",
      "Amphitheatre",
      "Peripheral Greens",
      "Palm Tree Avenue",
      "Kids Swing Area",
      "CCTV Security",
      "Open Gym",
      "Power Backup",
      "School Bus Waiting Area"
    ],
    "locationAdv": [
      [
        "Jaypee Sports City",
        "0.5 km"
      ],
      [
        "Sardar Patel Vidyalaya (Jaypee Group)",
        "1.1 km"
      ],
      [
        "Buddha International Circuit",
        "3 km"
      ],
      [
        "Kailash Hospital",
        "4.5 km"
      ],
      [
        "Gaurs International School",
        "5.3 km"
      ],
      [
        "Galgotias University",
        "5.9 km"
      ]
    ],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/eldeco-echoes-of-eden/hero.webp",
      "gallery": [
        "/assets/images/projects/eldeco-echoes-of-eden/gallery-1.webp",
        "/assets/images/projects/eldeco-echoes-of-eden/gallery-2.webp",
        "/assets/images/projects/eldeco-echoes-of-eden/gallery-3.webp",
        "/assets/images/projects/eldeco-echoes-of-eden/gallery-4.webp",
        "/assets/images/projects/eldeco-echoes-of-eden/gallery-5.webp",
        "/assets/images/projects/eldeco-echoes-of-eden/gallery-6.webp"
      ],
      "extra": ""
    },
    "faqs": [
      {
        "q": "What is the price of Eldeco Echoes Of Eden?",
        "a": "The price of Eldeco Echoes Of Eden (Sector 22D, Yamuna Expressway, Greater Noida) is on request. Call or WhatsApp us on +91 8799756026 to get the current price, payment plan and available units for the 3 BR VRV Air Conditioned Homes residences."
      },
      {
        "q": "What is the RERA registration number of Eldeco Echoes Of Eden?",
        "a": "Eldeco Echoes Of Eden is registered with UP RERA under number UPRERAPRJ125342/02/2026. Please verify the registration at up-rera.in before booking."
      },
      {
        "q": "Where is Eldeco Echoes Of Eden located and how well connected is it?",
        "a": "Eldeco Echoes Of Eden is located at Sector 22D, Yamuna Expressway, Greater Noida. Key location advantages listed for the project: 0.5 km — Jaypee Sports City; 1.1 km — Sardar Patel Vidyalaya (Jaypee Group); 3 km — Buddha International Circuit; 4.5 km — Kailash Hospital."
      },
      {
        "q": "What configurations are available at Eldeco Echoes Of Eden?",
        "a": "Eldeco Echoes Of Eden offers 3 BR VRV Air Conditioned Homes. The project status is New Launch. Message us on WhatsApp at +91 8799756026 for floor plans and current availability."
      },
      {
        "q": "What amenities does Eldeco Echoes Of Eden offer?",
        "a": "Amenities at Eldeco Echoes Of Eden include Convenience Retail, Landscape Hangout Area, Multipurpose Court, Amphitheatre, Peripheral Greens and Palm Tree Avenue. The full official amenities list is given in the Amenities section of this page."
      },
      {
        "q": "How can I book a site visit for Eldeco Echoes Of Eden?",
        "a": "Call or WhatsApp +91 8799756026 and our team will arrange and accompany your site visit to Eldeco Echoes Of Eden, Sector 22D, Yamuna Expressway, Greater Noida. You can also enquire through the form on this page — enquiries are answered on WhatsApp."
      }
    ],
    "related": [
      "eldeco-whispers-of-wonder",
      "eldeco-ballads-of-bliss"
    ],
    "completedHtml": null
  },
  {
    "slug": "eldeco-whispers-of-wonder",
    "name": "Eldeco Whispers Of Wonder",
    "area": "Yamuna Expressway",
    "location": "Sector 22D, Yamuna Expressway, Greater Noida",
    "config": "3 BR VRV Air Conditioned Homes",
    "status": "New Launch",
    "rera": "UPRERAPRJ752382/09/2025",
    "launch": "2 September 2025",
    "official": "https://www.eldecogroup.com/residential/eldeco-whispers-of-wonder",
    "overview": "3 bedroom VRV air-conditioned homes in Sector 22D on the Yamuna Expressway, launched on 2 September 2025 as per the official Eldeco page. A double-height multipurpose hall, mini football court, box cricket and a palm tree avenue headline the amenity list. The project is funded and mortgaged with PNB Housing Finance Limited as noted on the official page.",
    "amenities": [
      "Convenience Retail",
      "Open Gym",
      "Peripheral Greens",
      "School Bus Waiting Area",
      "Palm Tree Avenue",
      "Multipurpose Court",
      "Amphitheatre",
      "Kid's Play Area",
      "Squash Court",
      "Swimming Pool",
      "Box Cricket",
      "Mini Football Court",
      "Prefunction Hall",
      "Double-Height Multipurpose Hall",
      "Gym",
      "Pool Table Room"
    ],
    "locationAdv": [
      [
        "Jaypee Sports City",
        "0.5 km"
      ],
      [
        "Sardar Patel Vidyalaya (Jaypee Group)",
        "1.1 km"
      ],
      [
        "Buddh International Circuit",
        "3 km"
      ],
      [
        "Krishna Hospital",
        "4.5 km"
      ],
      [
        "Gaurs International School",
        "5.3 km"
      ],
      [
        "Galgotias University",
        "5.9 km"
      ]
    ],
    "extraLabel": "Master Plan",
    "images": {
      "hero": "/assets/images/projects/eldeco-whispers-of-wonder/hero.webp",
      "gallery": [
        "/assets/images/projects/eldeco-whispers-of-wonder/gallery-1.webp",
        "/assets/images/projects/eldeco-whispers-of-wonder/gallery-2.webp",
        "/assets/images/projects/eldeco-whispers-of-wonder/gallery-3.webp",
        "/assets/images/projects/eldeco-whispers-of-wonder/gallery-4.webp",
        "/assets/images/projects/eldeco-whispers-of-wonder/gallery-5.webp",
        "/assets/images/projects/eldeco-whispers-of-wonder/gallery-6.webp"
      ],
      "extra": "/assets/images/projects/eldeco-whispers-of-wonder/masterplan.png"
    },
    "faqs": [
      {
        "q": "What is the price of Eldeco Whispers Of Wonder?",
        "a": "The price of Eldeco Whispers Of Wonder (Sector 22D, Yamuna Expressway, Greater Noida) is on request. Call or WhatsApp us on +91 8799756026 to get the current price, payment plan and available units for the 3 BR VRV Air Conditioned Homes residences."
      },
      {
        "q": "What is the RERA registration number of Eldeco Whispers Of Wonder?",
        "a": "Eldeco Whispers Of Wonder is registered with UP RERA under number UPRERAPRJ752382/09/2025. Please verify the registration at up-rera.in before booking."
      },
      {
        "q": "Where is Eldeco Whispers Of Wonder located and how well connected is it?",
        "a": "Eldeco Whispers Of Wonder is located at Sector 22D, Yamuna Expressway, Greater Noida. Key location advantages listed for the project: 0.5 km — Jaypee Sports City; 1.1 km — Sardar Patel Vidyalaya (Jaypee Group); 3 km — Buddh International Circuit; 4.5 km — Krishna Hospital."
      },
      {
        "q": "What configurations are available at Eldeco Whispers Of Wonder?",
        "a": "Eldeco Whispers Of Wonder offers 3 BR VRV Air Conditioned Homes. The project status is New Launch. Message us on WhatsApp at +91 8799756026 for floor plans and current availability."
      },
      {
        "q": "What amenities does Eldeco Whispers Of Wonder offer?",
        "a": "Amenities at Eldeco Whispers Of Wonder include Convenience Retail, Open Gym, Peripheral Greens, School Bus Waiting Area, Palm Tree Avenue and Multipurpose Court. The full official amenities list is given in the Amenities section of this page."
      },
      {
        "q": "How can I book a site visit for Eldeco Whispers Of Wonder?",
        "a": "Call or WhatsApp +91 8799756026 and our team will arrange and accompany your site visit to Eldeco Whispers Of Wonder, Sector 22D, Yamuna Expressway, Greater Noida. You can also enquire through the form on this page — enquiries are answered on WhatsApp."
      }
    ],
    "related": [
      "eldeco-echoes-of-eden",
      "eldeco-ballads-of-bliss"
    ],
    "completedHtml": null
  },
  {
    "slug": "eldeco-ballads-of-bliss",
    "name": "Eldeco Ballads Of Bliss",
    "area": "Yamuna Expressway",
    "location": "Sector 22D, Yamuna Expressway, Greater Noida",
    "config": "3 BR Air Conditioned Premium Residences",
    "status": "New Launch",
    "rera": "UPRERAPRJ921261/05/2025",
    "launch": "21 May 2025",
    "official": "https://www.eldecogroup.com/residential/eldeco-ballads-of-bliss",
    "overview": "Premium air-conditioned 3 bedroom residences in Sector 22D on the Yamuna Expressway, launched on 21 May 2025 as per the official Eldeco page, with a swimming pool, squash court, box cricket and a reading room among its amenities.",
    "amenities": [
      "Open Gym",
      "Kid's Play Area",
      "Amphitheatre",
      "Multipurpose Court",
      "CCTV Security",
      "Party Hall",
      "Squash Court",
      "Box Cricket",
      "Swimming Pool",
      "Gym",
      "Power Backup",
      "Peripheral Greens",
      "Pool Table Room",
      "Reading Room"
    ],
    "locationAdv": [
      [
        "Sardar Patel Vidyalaya",
        "1.1 km"
      ],
      [
        "Buddha International Circuit",
        "5.1 km"
      ],
      [
        "Kalash Hospital",
        "5.6 km"
      ],
      [
        "Noida International Airport",
        "32.5 km"
      ]
    ],
    "extraLabel": "Master Plan",
    "images": {
      "hero": "/assets/images/projects/eldeco-ballads-of-bliss/hero.webp",
      "gallery": [
        "/assets/images/projects/eldeco-ballads-of-bliss/gallery-1.webp",
        "/assets/images/projects/eldeco-ballads-of-bliss/gallery-2.webp",
        "/assets/images/projects/eldeco-ballads-of-bliss/gallery-3.webp",
        "/assets/images/projects/eldeco-ballads-of-bliss/gallery-4.webp"
      ],
      "extra": "/assets/images/projects/eldeco-ballads-of-bliss/masterplan.png"
    },
    "faqs": [
      {
        "q": "What is the price of Eldeco Ballads Of Bliss?",
        "a": "The price of Eldeco Ballads Of Bliss (Sector 22D, Yamuna Expressway, Greater Noida) is on request. Call or WhatsApp us on +91 8799756026 to get the current price, payment plan and available units for the 3 BR Air Conditioned Premium Residences residences."
      },
      {
        "q": "What is the RERA registration number of Eldeco Ballads Of Bliss?",
        "a": "Eldeco Ballads Of Bliss is registered with UP RERA under number UPRERAPRJ921261/05/2025. Please verify the registration at up-rera.in before booking."
      },
      {
        "q": "Where is Eldeco Ballads Of Bliss located and how well connected is it?",
        "a": "Eldeco Ballads Of Bliss is located at Sector 22D, Yamuna Expressway, Greater Noida. Key location advantages listed for the project: 1.1 km — Sardar Patel Vidyalaya; 5.1 km — Buddha International Circuit; 5.6 km — Kalash Hospital; 32.5 km — Noida International Airport."
      },
      {
        "q": "What configurations are available at Eldeco Ballads Of Bliss?",
        "a": "Eldeco Ballads Of Bliss offers 3 BR Air Conditioned Premium Residences. The project status is New Launch. Message us on WhatsApp at +91 8799756026 for floor plans and current availability."
      },
      {
        "q": "What amenities does Eldeco Ballads Of Bliss offer?",
        "a": "Amenities at Eldeco Ballads Of Bliss include Open Gym, Kid's Play Area, Amphitheatre, Multipurpose Court, CCTV Security and Party Hall. The full official amenities list is given in the Amenities section of this page."
      },
      {
        "q": "How can I book a site visit for Eldeco Ballads Of Bliss?",
        "a": "Call or WhatsApp +91 8799756026 and our team will arrange and accompany your site visit to Eldeco Ballads Of Bliss, Sector 22D, Yamuna Expressway, Greater Noida. You can also enquire through the form on this page — enquiries are answered on WhatsApp."
      }
    ],
    "related": [
      "eldeco-echoes-of-eden",
      "eldeco-whispers-of-wonder"
    ],
    "completedHtml": null
  },
  {
    "slug": "eldeco-aamantran",
    "name": "Eldeco Aamantran",
    "area": "Noida",
    "location": "Sector 119, Noida",
    "config": "2–4 BR Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-aamantran",
    "overview": "Eldeco Aamantran is a completed Eldeco Group residential project at Sector 119, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Aamantran ready to move?",
        "a": "Yes. Eldeco Aamantran is a completed Eldeco Group residential project at Sector 119, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Aamantran?",
        "a": "The price in Eldeco Aamantran is on request — resale prices depend on the specific unit, its configuration (2–4 BR Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Aamantran located?",
        "a": "Eldeco Aamantran is located at Sector 119, Noida. Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Aamantran or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (2–4 BR Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-edge",
      "eldeco-inspire",
      "eldeco-magnolia-park",
      "eldeco-the-studio",
      "eldeco-sylvan-view",
      "eldeco-olympia",
      "eldeco-utopia",
      "eldeco-the-klasse",
      "eldeco-ananda"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. It connects towards the Noida–Greater Noida side and the FNG corridor, which keeps both Noida's commercial sectors and Greater Noida within practical reach for daily commuters.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Aamantran, the starting point is the 2–4 BR Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector 119</h2><p class="p-lead">Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. It connects towards the Noida–Greater Noida side and the FNG corridor, which keeps both Noida's commercial sectors and Greater Noida within practical reach for daily commuters.</p><p class="p-lead">Eldeco Aamantran is an address in this neighbourhood — 2–4 BR Apartments at Sector 119, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Aamantran is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (2–4 BR Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Aamantran, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-edge",
    "name": "Eldeco Edge",
    "area": "Noida",
    "location": "Sector 119, Noida",
    "config": "1–2 BR Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-edge",
    "overview": "Eldeco Edge is a completed Eldeco Group residential project at Sector 119, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Edge ready to move?",
        "a": "Yes. Eldeco Edge is a completed Eldeco Group residential project at Sector 119, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Edge?",
        "a": "The price in Eldeco Edge is on request — resale prices depend on the specific unit, its configuration (1–2 BR Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Edge located?",
        "a": "Eldeco Edge is located at Sector 119, Noida. Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Edge or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (1–2 BR Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-aamantran",
      "eldeco-inspire",
      "eldeco-magnolia-park",
      "eldeco-the-studio",
      "eldeco-sylvan-view",
      "eldeco-olympia",
      "eldeco-utopia",
      "eldeco-the-klasse",
      "eldeco-ananda"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. It connects towards the Noida–Greater Noida side and the FNG corridor, which keeps both Noida's commercial sectors and Greater Noida within practical reach for daily commuters.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Edge, the starting point is the 1–2 BR Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector 119</h2><p class="p-lead">Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. It connects towards the Noida–Greater Noida side and the FNG corridor, which keeps both Noida's commercial sectors and Greater Noida within practical reach for daily commuters.</p><p class="p-lead">Eldeco Edge is an address in this neighbourhood — 1–2 BR Apartments at Sector 119, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Edge is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (1–2 BR Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Edge, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-inspire",
    "name": "Eldeco Inspire",
    "area": "Noida",
    "location": "Sector 119, Noida",
    "config": "2–3 BR + Study Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-inspire",
    "overview": "Eldeco Inspire is a completed Eldeco Group residential project at Sector 119, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Inspire ready to move?",
        "a": "Yes. Eldeco Inspire is a completed Eldeco Group residential project at Sector 119, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Inspire?",
        "a": "The price in Eldeco Inspire is on request — resale prices depend on the specific unit, its configuration (2–3 BR + Study Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Inspire located?",
        "a": "Eldeco Inspire is located at Sector 119, Noida. Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Inspire or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (2–3 BR + Study Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-aamantran",
      "eldeco-edge",
      "eldeco-magnolia-park",
      "eldeco-the-studio",
      "eldeco-sylvan-view",
      "eldeco-olympia",
      "eldeco-utopia",
      "eldeco-the-klasse",
      "eldeco-ananda"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. It connects towards the Noida–Greater Noida side and the FNG corridor, which keeps both Noida's commercial sectors and Greater Noida within practical reach for daily commuters.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Inspire, the starting point is the 2–3 BR + Study Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector 119</h2><p class="p-lead">Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. It connects towards the Noida–Greater Noida side and the FNG corridor, which keeps both Noida's commercial sectors and Greater Noida within practical reach for daily commuters.</p><p class="p-lead">Eldeco Inspire is an address in this neighbourhood — 2–3 BR + Study Apartments at Sector 119, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Inspire is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (2–3 BR + Study Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Inspire, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-magnolia-park",
    "name": "Eldeco Magnolia Park",
    "area": "Noida",
    "location": "Sector 119, Noida",
    "config": "Residential Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-magnolia-park",
    "overview": "Eldeco Magnolia Park is a completed Eldeco Group residential project at Sector 119, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Magnolia Park ready to move?",
        "a": "Yes. Eldeco Magnolia Park is a completed Eldeco Group residential project at Sector 119, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Magnolia Park?",
        "a": "The price in Eldeco Magnolia Park is on request — resale prices depend on the specific unit, its configuration (Residential Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Magnolia Park located?",
        "a": "Eldeco Magnolia Park is located at Sector 119, Noida. Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Magnolia Park or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (Residential Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-aamantran",
      "eldeco-edge",
      "eldeco-inspire",
      "eldeco-the-studio",
      "eldeco-sylvan-view",
      "eldeco-olympia",
      "eldeco-utopia",
      "eldeco-the-klasse",
      "eldeco-ananda"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. It connects towards the Noida–Greater Noida side and the FNG corridor, which keeps both Noida's commercial sectors and Greater Noida within practical reach for daily commuters.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Magnolia Park, the starting point is the Residential Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector 119</h2><p class="p-lead">Sector 119 is one of Noida's established residential sectors, a settled neighbourhood of group-housing societies with daily-needs markets, schools and healthcare in the surrounding sectors. It connects towards the Noida–Greater Noida side and the FNG corridor, which keeps both Noida's commercial sectors and Greater Noida within practical reach for daily commuters.</p><p class="p-lead">Eldeco Magnolia Park is an address in this neighbourhood — Residential Apartments at Sector 119, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Magnolia Park is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (Residential Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Magnolia Park, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-the-studio",
    "name": "Eldeco The Studio",
    "area": "Noida",
    "location": "Sector 93A, Expressway, Noida",
    "config": "Studio Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-the-studio",
    "overview": "Eldeco The Studio is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco The Studio ready to move?",
        "a": "Yes. Eldeco The Studio is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco The Studio?",
        "a": "The price in Eldeco The Studio is on request — resale prices depend on the specific unit, its configuration (Studio Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco The Studio located?",
        "a": "Eldeco The Studio is located at Sector 93A, Expressway, Noida. Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco The Studio or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (Studio Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-aamantran",
      "eldeco-edge",
      "eldeco-inspire",
      "eldeco-magnolia-park",
      "eldeco-sylvan-view",
      "eldeco-olympia",
      "eldeco-utopia",
      "eldeco-the-klasse",
      "eldeco-ananda"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco The Studio, the starting point is the Studio Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector 93A</h2><p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p><p class="p-lead">Eldeco The Studio is an address in this neighbourhood — Studio Apartments at Sector 93A, Expressway, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco The Studio is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (Studio Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco The Studio, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-sylvan-view",
    "name": "Eldeco Sylvan View",
    "area": "Noida",
    "location": "Sector 93A, Expressway, Noida",
    "config": "3–4 BR Duplex Penthouses",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-sylvan-view",
    "overview": "Eldeco Sylvan View is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Sylvan View ready to move?",
        "a": "Yes. Eldeco Sylvan View is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Sylvan View?",
        "a": "The price in Eldeco Sylvan View is on request — resale prices depend on the specific unit, its configuration (3–4 BR Duplex Penthouses), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Sylvan View located?",
        "a": "Eldeco Sylvan View is located at Sector 93A, Expressway, Noida. Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Sylvan View or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (3–4 BR Duplex Penthouses) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-aamantran",
      "eldeco-edge",
      "eldeco-inspire",
      "eldeco-magnolia-park",
      "eldeco-the-studio",
      "eldeco-olympia",
      "eldeco-utopia",
      "eldeco-the-klasse",
      "eldeco-ananda"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Sylvan View, the starting point is the 3–4 BR Duplex Penthouses layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector 93A</h2><p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p><p class="p-lead">Eldeco Sylvan View is an address in this neighbourhood — 3–4 BR Duplex Penthouses at Sector 93A, Expressway, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Sylvan View is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (3–4 BR Duplex Penthouses), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Sylvan View, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-olympia",
    "name": "Eldeco Olympia",
    "area": "Noida",
    "location": "Sector 93A, Expressway, Noida",
    "config": "2–3 BR Luxury Apartments & Penthouses",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-olympia",
    "overview": "Eldeco Olympia is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Olympia ready to move?",
        "a": "Yes. Eldeco Olympia is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Olympia?",
        "a": "The price in Eldeco Olympia is on request — resale prices depend on the specific unit, its configuration (2–3 BR Luxury Apartments & Penthouses), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Olympia located?",
        "a": "Eldeco Olympia is located at Sector 93A, Expressway, Noida. Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Olympia or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (2–3 BR Luxury Apartments & Penthouses) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-aamantran",
      "eldeco-edge",
      "eldeco-inspire",
      "eldeco-magnolia-park",
      "eldeco-the-studio",
      "eldeco-sylvan-view",
      "eldeco-utopia",
      "eldeco-the-klasse",
      "eldeco-ananda"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Olympia, the starting point is the 2–3 BR Luxury Apartments & Penthouses layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector 93A</h2><p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p><p class="p-lead">Eldeco Olympia is an address in this neighbourhood — 2–3 BR Luxury Apartments & Penthouses at Sector 93A, Expressway, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Olympia is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (2–3 BR Luxury Apartments & Penthouses), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Olympia, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-utopia",
    "name": "Eldeco Utopia",
    "area": "Noida",
    "location": "Sector 93A, Expressway, Noida",
    "config": "Premium Residences",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-utopia",
    "overview": "Eldeco Utopia is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Utopia ready to move?",
        "a": "Yes. Eldeco Utopia is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Utopia?",
        "a": "The price in Eldeco Utopia is on request — resale prices depend on the specific unit, its configuration (Premium Residences), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Utopia located?",
        "a": "Eldeco Utopia is located at Sector 93A, Expressway, Noida. Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Utopia or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (Premium Residences) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-aamantran",
      "eldeco-edge",
      "eldeco-inspire",
      "eldeco-magnolia-park",
      "eldeco-the-studio",
      "eldeco-sylvan-view",
      "eldeco-olympia",
      "eldeco-the-klasse",
      "eldeco-ananda"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Utopia, the starting point is the Premium Residences layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector 93A</h2><p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p><p class="p-lead">Eldeco Utopia is an address in this neighbourhood — Premium Residences at Sector 93A, Expressway, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Utopia is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (Premium Residences), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Utopia, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-the-klasse",
    "name": "Eldeco The Klasse",
    "area": "Noida",
    "location": "Sector 93A, Expressway, Noida",
    "config": "Premium Residences",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-the-klasse",
    "overview": "Eldeco The Klasse is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco The Klasse ready to move?",
        "a": "Yes. Eldeco The Klasse is a completed Eldeco Group residential project at Sector 93A, Expressway, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco The Klasse?",
        "a": "The price in Eldeco The Klasse is on request — resale prices depend on the specific unit, its configuration (Premium Residences), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco The Klasse located?",
        "a": "Eldeco The Klasse is located at Sector 93A, Expressway, Noida. Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco The Klasse or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (Premium Residences) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-aamantran",
      "eldeco-edge",
      "eldeco-inspire",
      "eldeco-magnolia-park",
      "eldeco-the-studio",
      "eldeco-sylvan-view",
      "eldeco-olympia",
      "eldeco-utopia",
      "eldeco-ananda"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco The Klasse, the starting point is the Premium Residences layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector 93A</h2><p class="p-lead">Sector 93A sits along the Noida–Greater Noida Expressway, one of the city's most developed residential corridors. The expressway puts Noida's Sector 18 commercial district and the Mahamaya Flyover side within a straight drive, and the sector is surrounded by other established expressway-facing societies, schools and offices.</p><p class="p-lead">Eldeco The Klasse is an address in this neighbourhood — Premium Residences at Sector 93A, Expressway, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco The Klasse is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (Premium Residences), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco The Klasse, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-ananda",
    "name": "Eldeco Ananda",
    "area": "Noida",
    "location": "Sector 48, Noida",
    "config": "Premium Homes",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-ananda",
    "overview": "Eldeco Ananda is a completed Eldeco Group residential project at Sector 48, Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Ananda ready to move?",
        "a": "Yes. Eldeco Ananda is a completed Eldeco Group residential project at Sector 48, Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Ananda?",
        "a": "The price in Eldeco Ananda is on request — resale prices depend on the specific unit, its configuration (Premium Homes), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Ananda located?",
        "a": "Eldeco Ananda is located at Sector 48, Noida. Sector 48 is a central Noida residential sector, close to the City Centre side and the Sector 18 commercial district. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Ananda or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (Premium Homes) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-live-by-the-greens",
      "eldeco-aamantran",
      "eldeco-edge",
      "eldeco-inspire",
      "eldeco-magnolia-park",
      "eldeco-the-studio",
      "eldeco-sylvan-view",
      "eldeco-olympia",
      "eldeco-utopia",
      "eldeco-the-klasse"
    ],
    "completedHtml": {
      "overviewExtra": '<p class="p-lead">Sector 48 is a central Noida residential sector, close to the City Centre side and the Sector 18 commercial district. It is a low-density, largely built-up neighbourhood with markets, schools and metro connectivity on the Blue Line corridor in the surrounding sectors.</p>\n<p class="p-lead">For buyers and tenants looking at Eldeco Ananda, the starting point is the Premium Homes layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>',
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Living in Sector 48</h2><p class="p-lead">Sector 48 is a central Noida residential sector, close to the City Centre side and the Sector 18 commercial district. It is a low-density, largely built-up neighbourhood with markets, schools and metro connectivity on the Blue Line corridor in the surrounding sectors.</p><p class="p-lead">Eldeco Ananda is an address in this neighbourhood — Premium Homes at Sector 48, Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>'
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Ananda is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (Premium Homes), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Ananda, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-mystic-greens",
    "name": "Eldeco Mystic Greens",
    "area": "Greater Noida",
    "location": "Sector Omicron 1, Greater Noida",
    "config": "2 & 3 BR Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-mystic-greens",
    "overview": "Eldeco Mystic Greens is a completed Eldeco Group residential project at Sector Omicron 1, Greater Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Mystic Greens ready to move?",
        "a": "Yes. Eldeco Mystic Greens is a completed Eldeco Group residential project at Sector Omicron 1, Greater Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Mystic Greens?",
        "a": "The price in Eldeco Mystic Greens is on request — resale prices depend on the specific unit, its configuration (2 & 3 BR Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Mystic Greens located?",
        "a": "Eldeco Mystic Greens is located at Sector Omicron 1, Greater Noida. Sector Omicron 1 is a residential pocket of Greater Noida near the Pari Chowk side, the city's main commercial and transit hub. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Mystic Greens or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (2 & 3 BR Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-la-vida-bella",
      "eldeco-7-peaks-residences",
      "eldeco-golf-view-apartments",
      "eldeco-the-castle",
      "eldeco-riviera",
      "eldeco-residency-greens",
      "eldeco-green-meadows"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector Omicron 1 is a residential pocket of Greater Noida near the Pari Chowk side, the city's main commercial and transit hub. The surrounding Alpha and Beta sectors hold schools, markets and hospitals, and the Aqua Line metro and the Noida–Greater Noida Expressway serve the area.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Mystic Greens, the starting point is the 2 & 3 BR Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector Omicron 1</h2><p class="p-lead">Sector Omicron 1 is a residential pocket of Greater Noida near the Pari Chowk side, the city's main commercial and transit hub. The surrounding Alpha and Beta sectors hold schools, markets and hospitals, and the Aqua Line metro and the Noida–Greater Noida Expressway serve the area.</p><p class="p-lead">Eldeco Mystic Greens is an address in this neighbourhood — 2 & 3 BR Apartments at Sector Omicron 1, Greater Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Mystic Greens is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (2 & 3 BR Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Mystic Greens, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-golf-view-apartments",
    "name": "Eldeco Golf View Apartments",
    "area": "Greater Noida",
    "location": "Sector Omega 1, Greater Noida",
    "config": "Residential Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-golf-view-apartments",
    "overview": "Eldeco Golf View Apartments is a completed Eldeco Group residential project at Sector Omega 1, Greater Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Golf View Apartments ready to move?",
        "a": "Yes. Eldeco Golf View Apartments is a completed Eldeco Group residential project at Sector Omega 1, Greater Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Golf View Apartments?",
        "a": "The price in Eldeco Golf View Apartments is on request — resale prices depend on the specific unit, its configuration (Residential Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Golf View Apartments located?",
        "a": "Eldeco Golf View Apartments is located at Sector Omega 1, Greater Noida. Sector Omega 1 is a green, low-density residential pocket of Greater Noida near the city's golf-course greens and the Pari Chowk commercial belt. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Golf View Apartments or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (Residential Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-la-vida-bella",
      "eldeco-7-peaks-residences",
      "eldeco-mystic-greens",
      "eldeco-the-castle",
      "eldeco-riviera",
      "eldeco-residency-greens",
      "eldeco-green-meadows"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector Omega 1 is a green, low-density residential pocket of Greater Noida near the city's golf-course greens and the Pari Chowk commercial belt. Wide roads, parks and established neighbouring sectors make it a quieter alternative to the denser expressway corridors, while remaining connected to Noida via the expressway.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Golf View Apartments, the starting point is the Residential Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector Omega 1</h2><p class="p-lead">Sector Omega 1 is a green, low-density residential pocket of Greater Noida near the city's golf-course greens and the Pari Chowk commercial belt. Wide roads, parks and established neighbouring sectors make it a quieter alternative to the denser expressway corridors, while remaining connected to Noida via the expressway.</p><p class="p-lead">Eldeco Golf View Apartments is an address in this neighbourhood — Residential Apartments at Sector Omega 1, Greater Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Golf View Apartments is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (Residential Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Golf View Apartments, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-the-castle",
    "name": "Eldeco The Castle",
    "area": "Greater Noida",
    "location": "Sector Pi, Greater Noida",
    "config": "3 BHK Residential Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-the-castle",
    "overview": "Eldeco The Castle is a completed Eldeco Group residential project at Sector Pi, Greater Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco The Castle ready to move?",
        "a": "Yes. Eldeco The Castle is a completed Eldeco Group residential project at Sector Pi, Greater Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco The Castle?",
        "a": "The price in Eldeco The Castle is on request — resale prices depend on the specific unit, its configuration (3 BHK Residential Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco The Castle located?",
        "a": "Eldeco The Castle is located at Sector Pi, Greater Noida. Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco The Castle or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (3 BHK Residential Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-la-vida-bella",
      "eldeco-7-peaks-residences",
      "eldeco-mystic-greens",
      "eldeco-golf-view-apartments",
      "eldeco-riviera",
      "eldeco-residency-greens",
      "eldeco-green-meadows"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. It is an established residential sector with schools, markets and the city's commercial belt in the surrounding area, connected to Noida through the Noida–Greater Noida Expressway and the link road network.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco The Castle, the starting point is the 3 BHK Residential Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector Pi</h2><p class="p-lead">Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. It is an established residential sector with schools, markets and the city's commercial belt in the surrounding area, connected to Noida through the Noida–Greater Noida Expressway and the link road network.</p><p class="p-lead">Eldeco The Castle is an address in this neighbourhood — 3 BHK Residential Apartments at Sector Pi, Greater Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco The Castle is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (3 BHK Residential Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco The Castle, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-riviera",
    "name": "Eldeco Riviera",
    "area": "Greater Noida",
    "location": "Sector Pi, Greater Noida",
    "config": "2 & 3 BHK Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-riviera",
    "overview": "Eldeco Riviera is a completed Eldeco Group residential project at Sector Pi, Greater Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Riviera ready to move?",
        "a": "Yes. Eldeco Riviera is a completed Eldeco Group residential project at Sector Pi, Greater Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Riviera?",
        "a": "The price in Eldeco Riviera is on request — resale prices depend on the specific unit, its configuration (2 & 3 BHK Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Riviera located?",
        "a": "Eldeco Riviera is located at Sector Pi, Greater Noida. Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Riviera or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (2 & 3 BHK Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-la-vida-bella",
      "eldeco-7-peaks-residences",
      "eldeco-mystic-greens",
      "eldeco-golf-view-apartments",
      "eldeco-the-castle",
      "eldeco-residency-greens",
      "eldeco-green-meadows"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. It is an established residential sector with schools, markets and the city's commercial belt in the surrounding area, connected to Noida through the Noida–Greater Noida Expressway and the link road network.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Riviera, the starting point is the 2 & 3 BHK Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector Pi</h2><p class="p-lead">Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. It is an established residential sector with schools, markets and the city's commercial belt in the surrounding area, connected to Noida through the Noida–Greater Noida Expressway and the link road network.</p><p class="p-lead">Eldeco Riviera is an address in this neighbourhood — 2 & 3 BHK Apartments at Sector Pi, Greater Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Riviera is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (2 & 3 BHK Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Riviera, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-residency-greens",
    "name": "Eldeco Residency Greens",
    "area": "Greater Noida",
    "location": "Sector Pi, Greater Noida",
    "config": "Residential Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-residency-greens",
    "overview": "Eldeco Residency Greens is a completed Eldeco Group residential project at Sector Pi, Greater Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Residency Greens ready to move?",
        "a": "Yes. Eldeco Residency Greens is a completed Eldeco Group residential project at Sector Pi, Greater Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Residency Greens?",
        "a": "The price in Eldeco Residency Greens is on request — resale prices depend on the specific unit, its configuration (Residential Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Residency Greens located?",
        "a": "Eldeco Residency Greens is located at Sector Pi, Greater Noida. Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Residency Greens or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (Residential Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-la-vida-bella",
      "eldeco-7-peaks-residences",
      "eldeco-mystic-greens",
      "eldeco-golf-view-apartments",
      "eldeco-the-castle",
      "eldeco-riviera",
      "eldeco-green-meadows"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. It is an established residential sector with schools, markets and the city's commercial belt in the surrounding area, connected to Noida through the Noida–Greater Noida Expressway and the link road network.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Residency Greens, the starting point is the Residential Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector Pi</h2><p class="p-lead">Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. It is an established residential sector with schools, markets and the city's commercial belt in the surrounding area, connected to Noida through the Noida–Greater Noida Expressway and the link road network.</p><p class="p-lead">Eldeco Residency Greens is an address in this neighbourhood — Residential Apartments at Sector Pi, Greater Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Residency Greens is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (Residential Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Residency Greens, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  },
  {
    "slug": "eldeco-green-meadows",
    "name": "Eldeco Green Meadows",
    "area": "Greater Noida",
    "location": "Sector Pi, Greater Noida",
    "config": "Residential Apartments",
    "status": "Completed",
    "rera": "",
    "launch": "",
    "official": "https://www.eldecogroup.com/residential/eldeco-green-meadows",
    "overview": "Eldeco Green Meadows is a completed Eldeco Group residential project at Sector Pi, Greater Noida, listed under Completed Projects on the official Eldeco Group website. For resale, rental or current availability enquiries, contact us on call or WhatsApp.",
    "amenities": [],
    "locationAdv": [],
    "extraLabel": "",
    "images": {
      "hero": "/assets/images/projects/completed-banner.webp",
      "gallery": [],
      "extra": ""
    },
    "faqs": [
      {
        "q": "Is Eldeco Green Meadows ready to move?",
        "a": "Yes. Eldeco Green Meadows is a completed Eldeco Group residential project at Sector Pi, Greater Noida, listed under Completed Projects on the official Eldeco Group website. Homes here are available through resale, and rental units come up from time to time."
      },
      {
        "q": "What is the price of a home in Eldeco Green Meadows?",
        "a": "The price in Eldeco Green Meadows is on request — resale prices depend on the specific unit, its configuration (Residential Apartments), floor and furnishing. Call or WhatsApp us on +91 8799756026 to get the asking price for the units currently available."
      },
      {
        "q": "Where is Eldeco Green Meadows located?",
        "a": "Eldeco Green Meadows is located at Sector Pi, Greater Noida. Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. Enquire on call or WhatsApp for directions and to arrange a site visit."
      },
      {
        "q": "How can I enquire about Eldeco Green Meadows or arrange a visit?",
        "a": "Call us on +91 8799756026 or use the WhatsApp button on this page. Tell us the configuration you are looking for (Residential Apartments) and whether you want to buy or rent, and we will confirm availability and schedule your visit."
      }
    ],
    "related": [
      "eldeco-la-vida-bella",
      "eldeco-7-peaks-residences",
      "eldeco-mystic-greens",
      "eldeco-golf-view-apartments",
      "eldeco-the-castle",
      "eldeco-riviera",
      "eldeco-residency-greens"
    ],
    "completedHtml": {
      "overviewExtra": `<p class="p-lead">Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. It is an established residential sector with schools, markets and the city's commercial belt in the surrounding area, connected to Noida through the Noida–Greater Noida Expressway and the link road network.</p>
<p class="p-lead">For buyers and tenants looking at Eldeco Green Meadows, the starting point is the Residential Apartments layouts already delivered here. Resale and rental availability in a completed project changes frequently, so confirm the live options on call or WhatsApp before planning a visit.</p>`,
      "locality": {
        "attrs": 'id="locality" class="p-sec"',
        "html": `<div class="wrap"><h2 class="p-heading">Living in Sector Pi</h2><p class="p-lead">Sector Pi lies in eastern Greater Noida, in the Pari Chowk–Kasna side of the city. It is an established residential sector with schools, markets and the city's commercial belt in the surrounding area, connected to Noida through the Noida–Greater Noida Expressway and the link road network.</p><p class="p-lead">Eldeco Green Meadows is an address in this neighbourhood — Residential Apartments at Sector Pi, Greater Noida. Because the project is complete and occupied, day-to-day conveniences, society maintenance and the actual living experience can be seen as they are during a site visit, rather than imagined from a brochure.</p></div>`
      },
      "resale": {
        "attrs": 'id="resale" class="p-sec p-loc-sec"',
        "html": '<div class="wrap"><h2 class="p-heading">Resale, Rental &amp; Availability</h2>\n<p class="p-lead">Eldeco Green Meadows is a completed Eldeco Group project, so there is no developer inventory on sale here — homes change hands through resale, and units also come up for rent from time to time. Availability depends on the configuration (Residential Apartments), the tower and floor, and whether a unit is furnished, so current options are confirmed on enquiry rather than listed as fixed stock.</p>\n<p class="p-lead">Tell us your configuration and budget on call or WhatsApp, and we will confirm which resale or rental options are currently available in Eldeco Green Meadows, share the asking price or rent for those specific units, and arrange a visit so you can inspect the actual home and the society before deciding.</p></div>'
      }
    }
  }
];
const CONTENT = {
  "home": {
    "title": "Eldeco Group Projects in Noida, Greater Noida & Yamuna Expressway | Authorized Channel Partner",
    "desc": "Explore Eldeco Group residential projects in Noida, Greater Noida & Yamuna Expressway — Live By The Greens, La Vida Bella, 7 Peaks, Echoes of Eden, Whispers of Wonder, Ballads of Bliss & more. RERA details, price on request, enquire on WhatsApp.",
    "ogImage": "https://www.eldecogrp.com/assets/images/projects/eldeco-live-by-the-greens/hero.webp",
    "graph": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.eldecogrp.com/#website",
          "url": "https://www.eldecogrp.com/",
          "name": "Eldeco Group Projects — Authorized Channel Partner",
          "inLanguage": "en-IN",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.eldecogrp.com/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": [
            "Organization",
            "RealEstateAgent"
          ],
          "@id": "https://www.eldecogrp.com/#organization",
          "name": "Eldeco Group Projects — Authorized Channel Partner",
          "url": "https://www.eldecogrp.com/",
          "logo": "https://www.eldecogrp.com/assets/images/logo/eldeco-logo.png",
          "image": "https://www.eldecogrp.com/assets/images/logo/eldeco-logo.png",
          "telephone": "+91-8799756026",
          "areaServed": [
            "Noida",
            "Greater Noida",
            "Yamuna Expressway"
          ],
          "description": "Authorized Channel Partner for Eldeco Group projects in Noida, Greater Noida and Yamuna Expressway. This is not the official Eldeco Group website."
        },
        {
          "@type": "ItemList",
          "@id": "https://www.eldecogrp.com/#projects",
          "name": "Eldeco Group Projects in Noida, Greater Noida & Yamuna Expressway",
          "numberOfItems": 22,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Eldeco Live By The Greens",
              "url": "https://www.eldecogrp.com/projects/eldeco-live-by-the-greens.html"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Eldeco La Vida Bella",
              "url": "https://www.eldecogrp.com/projects/eldeco-la-vida-bella.html"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Eldeco 7 Peaks Residences",
              "url": "https://www.eldecogrp.com/projects/eldeco-7-peaks-residences.html"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Eldeco Echoes Of Eden",
              "url": "https://www.eldecogrp.com/projects/eldeco-echoes-of-eden.html"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Eldeco Whispers Of Wonder",
              "url": "https://www.eldecogrp.com/projects/eldeco-whispers-of-wonder.html"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Eldeco Ballads Of Bliss",
              "url": "https://www.eldecogrp.com/projects/eldeco-ballads-of-bliss.html"
            },
            {
              "@type": "ListItem",
              "position": 7,
              "name": "Eldeco Aamantran",
              "url": "https://www.eldecogrp.com/projects/eldeco-aamantran.html"
            },
            {
              "@type": "ListItem",
              "position": 8,
              "name": "Eldeco Edge",
              "url": "https://www.eldecogrp.com/projects/eldeco-edge.html"
            },
            {
              "@type": "ListItem",
              "position": 9,
              "name": "Eldeco Inspire",
              "url": "https://www.eldecogrp.com/projects/eldeco-inspire.html"
            },
            {
              "@type": "ListItem",
              "position": 10,
              "name": "Eldeco Magnolia Park",
              "url": "https://www.eldecogrp.com/projects/eldeco-magnolia-park.html"
            },
            {
              "@type": "ListItem",
              "position": 11,
              "name": "Eldeco The Studio",
              "url": "https://www.eldecogrp.com/projects/eldeco-the-studio.html"
            },
            {
              "@type": "ListItem",
              "position": 12,
              "name": "Eldeco Sylvan View",
              "url": "https://www.eldecogrp.com/projects/eldeco-sylvan-view.html"
            },
            {
              "@type": "ListItem",
              "position": 13,
              "name": "Eldeco Olympia",
              "url": "https://www.eldecogrp.com/projects/eldeco-olympia.html"
            },
            {
              "@type": "ListItem",
              "position": 14,
              "name": "Eldeco Utopia",
              "url": "https://www.eldecogrp.com/projects/eldeco-utopia.html"
            },
            {
              "@type": "ListItem",
              "position": 15,
              "name": "Eldeco The Klasse",
              "url": "https://www.eldecogrp.com/projects/eldeco-the-klasse.html"
            },
            {
              "@type": "ListItem",
              "position": 16,
              "name": "Eldeco Ananda",
              "url": "https://www.eldecogrp.com/projects/eldeco-ananda.html"
            },
            {
              "@type": "ListItem",
              "position": 17,
              "name": "Eldeco Mystic Greens",
              "url": "https://www.eldecogrp.com/projects/eldeco-mystic-greens.html"
            },
            {
              "@type": "ListItem",
              "position": 18,
              "name": "Eldeco Golf View Apartments",
              "url": "https://www.eldecogrp.com/projects/eldeco-golf-view-apartments.html"
            },
            {
              "@type": "ListItem",
              "position": 19,
              "name": "Eldeco The Castle",
              "url": "https://www.eldecogrp.com/projects/eldeco-the-castle.html"
            },
            {
              "@type": "ListItem",
              "position": 20,
              "name": "Eldeco Riviera",
              "url": "https://www.eldecogrp.com/projects/eldeco-riviera.html"
            },
            {
              "@type": "ListItem",
              "position": 21,
              "name": "Eldeco Residency Greens",
              "url": "https://www.eldecogrp.com/projects/eldeco-residency-greens.html"
            },
            {
              "@type": "ListItem",
              "position": 22,
              "name": "Eldeco Green Meadows",
              "url": "https://www.eldecogrp.com/projects/eldeco-green-meadows.html"
            }
          ]
        }
      ]
    },
    "faqs": [
      {
        "q": "Which Eldeco projects are available in Noida, Greater Noida and Yamuna Expressway?",
        "a": "This site lists 22 Eldeco Group projects in the Noida region: 11 in Noida, 8 in Greater Noida and 3 on Yamuna Expressway. The ongoing and new-launch projects are Eldeco Live By The Greens (Sector 150, Noida), Eldeco La Vida Bella (Sector 12, Greater Noida), Eldeco 7 Peaks Residences (Omicron 1A, Greater Noida), and Eldeco Echoes Of Eden, Eldeco Whispers Of Wonder and Eldeco Ballads Of Bliss (Sector 22D, Yamuna Expressway)."
      },
      {
        "q": "What is the price of Eldeco projects listed here?",
        "a": "Prices for all projects on this site are on request, as the official Eldeco Group project pages do not publish prices. Call or WhatsApp +91 8799756026 to get the current price, payment plan and unit availability for any project."
      },
      {
        "q": "Are these Eldeco projects RERA registered?",
        "a": "The ongoing and new-launch projects list their UP RERA registration numbers on their pages here — for example Eldeco La Vida Bella: UPRERAPRJ136219/04/2024 and Eldeco Echoes Of Eden: UPRERAPRJ125342/02/2026. For completed projects, the official Eldeco pages do not publish a RERA number. Please verify every registration independently at up-rera.in before booking."
      },
      {
        "q": "How can I book a site visit for an Eldeco project?",
        "a": "Call or WhatsApp +91 8799756026 and our team will arrange and accompany your site visit to any Eldeco project in Noida, Greater Noida or on Yamuna Expressway. You can also send an enquiry from any project page — enquiries are answered on WhatsApp."
      },
      {
        "q": "Is this the official Eldeco Group website?",
        "a": "No. This is the website of an Authorized Channel Partner for Eldeco Group projects in Noida, Greater Noida and Yamuna Expressway — it is not the official Eldeco Group website. All project details and RERA numbers here are sourced from the official Eldeco Group website, eldecogroup.com."
      },
      {
        "q": "Why buy an Eldeco home?",
        "a": "Eldeco Group has been developing homes across North India since 1985, with more than 175 projects delivered and more than 30,000 satisfied customers, as stated on the official Eldeco website. Every project listed here links to its official details, so you can compare configurations, amenities and location advantages before enquiring."
      }
    ]
  },
  "areaCards": [
    {
      "title": "Eldeco Projects in Noida",
      "text": "11 projects — the ongoing Eldeco Live By The Greens in Sector 150 and completed homes in Sector 119, Sector 93A (Expressway) and Sector 48.",
      "href": "/areas/noida.html",
      "label": "View Noida Projects →"
    },
    {
      "title": "Eldeco Projects in Greater Noida",
      "text": "8 projects — Eldeco La Vida Bella (Sector 12), the new-launch Eldeco 7 Peaks Residences (Omicron 1A) and completed homes in Omicron 1, Omega 1 and Sector Pi.",
      "href": "/areas/greater-noida.html",
      "label": "View Greater Noida Projects →"
    },
    {
      "title": "Eldeco Projects on Yamuna Expressway",
      "text": "3 new-launch projects in Sector 22D — Echoes Of Eden, Whispers Of Wonder and Ballads Of Bliss — near Jaypee Sports City, Buddha International Circuit and the Noida International Airport corridor.",
      "href": "/areas/yamuna-expressway.html",
      "label": "View Yamuna Expressway Projects →"
    }
  ],
  "areas": [
    {
      "slug": "noida",
      "area": "Noida",
      "title": "Eldeco Projects in Noida — Flats in Sector 150, 93A, 119 & More | Authorized Channel Partner",
      "desc": "Explore Eldeco Group projects in Noida — Live By The Greens in Sector 150 (ongoing) plus completed Eldeco homes in Sector 119, Sector 93A Expressway and Sector 48. RERA details, price on request, enquire on WhatsApp.",
      "ogImage": "https://www.eldecogrp.com/assets/images/projects/eldeco-live-by-the-greens/hero.webp",
      "h1": "Eldeco Projects in Noida",
      "lead": "11 Eldeco Group residential projects in Noida — with official RERA details, amenities, location advantages and price on request.",
      "introHtml": "<p>Eldeco Group — North India&#x27;s trusted developer since 1985, with 175+ projects delivered and 30,000+ happy families — has 11 residential projects listed in Noida. The current offering is Eldeco Live By The Greens in Sector 150, Noida&#x27;s low-density green sector, offering 2 &amp; 3 BR apartments (RERA: PI-UPRERAPRJ15172, PII-UPRERAPRJ121123, PIII-UPRERAPRJ575706). Sector 150 sits 3–4 km from the Noida Sector 148 Metro Station (Aqua Line) and the Noida–Greater Noida Expressway, and about 20 km from the upcoming Jewar (Noida International) Airport.</p><p>Eldeco&#x27;s completed Noida portfolio covers Sector 119 (Aamantran, Edge, Inspire and Magnolia Park), Sector 93A on the Expressway (The Studio, Sylvan View, Olympia, Utopia and The Klasse) and Sector 48 (Ananda) — configurations range from studio and 1–2 BR apartments to 3–4 BR duplex penthouses. Compare every project below and enquire on WhatsApp for resale/availability updates, floor plans and site visits.</p>"
    },
    {
      "slug": "greater-noida",
      "area": "Greater Noida",
      "title": "Eldeco Projects in Greater Noida — Flats in Sector 12, Omicron 1A & Sector Pi | Authorized Channel Partner",
      "desc": "Explore Eldeco Group projects in Greater Noida — La Vida Bella in Sector 12, new-launch 7 Peaks Residences in Omicron 1A, plus completed homes in Omicron 1, Omega 1 and Sector Pi. RERA details, price on request, enquire on WhatsApp.",
      "ogImage": "https://www.eldecogrp.com/assets/images/projects/eldeco-la-vida-bella/hero.webp",
      "h1": "Eldeco Projects in Greater Noida",
      "lead": "8 Eldeco Group residential projects in Greater Noida — with official RERA details, amenities, location advantages and price on request.",
      "introHtml": "<p>Eldeco Group — developing homes across North India since 1985, with 175+ projects delivered and 30,000+ happy families — has 8 residential projects listed in Greater Noida. The ongoing Eldeco La Vida Bella in Sector 12 offers 3 &amp; 4 BR premium residences (RERA: UPRERAPRJ136219/04/2024), just 0.1 km from the Noida–Greater Noida Link Road and 5 km from Knowledge Park V. The new-launch Eldeco 7 Peaks Residences in Omicron 1A offers 3 &amp; 4 BR oxy-rich residences (RERA: UPRERAPRJ106523/01/2026), 6 km from Delta 1 Metro Station and 7.7 km from Pari Chowk Metro Station.</p><p>Eldeco&#x27;s completed Greater Noida projects include Mystic Greens (Omicron 1), Golf View Apartments (Omega 1) and The Castle, Riviera, Residency Greens and Green Meadows in Sector Pi. Compare configurations, amenities and location advantages on each project page, and enquire on WhatsApp for the latest price and availability.</p>"
    },
    {
      "slug": "yamuna-expressway",
      "area": "Yamuna Expressway",
      "title": "Eldeco Projects on Yamuna Expressway — New Launch Flats in Sector 22D near Jewar Airport | Authorized Channel Partner",
      "desc": "Explore Eldeco Group new-launch projects on Yamuna Expressway — Echoes Of Eden, Whispers Of Wonder and Ballads Of Bliss in Sector 22D, near Jaypee Sports City and Buddha International Circuit. RERA details, price on request, enquire on WhatsApp.",
      "ogImage": "https://www.eldecogrp.com/assets/images/projects/eldeco-echoes-of-eden/hero.webp",
      "h1": "Eldeco Projects on Yamuna Expressway",
      "lead": "3 Eldeco Group residential projects in Yamuna Expressway — with official RERA details, amenities, location advantages and price on request.",
      "introHtml": "<p>Eldeco Group has launched three residential projects in Sector 22D on the Yamuna Expressway, Greater Noida — Eldeco Echoes Of Eden (RERA: UPRERAPRJ125342/02/2026), Eldeco Whispers Of Wonder (RERA: UPRERAPRJ752382/09/2025) and Eldeco Ballads Of Bliss (RERA: UPRERAPRJ921261/05/2025). All three offer 3 BR air-conditioned homes in a fast-growing corridor shaped by the upcoming Noida International Airport.</p><p>Sector 22D sits 0.5 km from Jaypee Sports City and about 3 km from the Buddha International Circuit, with Gaurs International School (5.3 km), Galgotias University (5.9 km) and Kailash Hospital (4.5 km) in the neighbourhood. Ballads Of Bliss lists the Noida International Airport at 32.5 km. Compare the three projects below and enquire on WhatsApp for prices, floor plans and site visits.</p>"
    }
  ],
  "about": {
    "title": "About Eldeco Group | Since 1985, 175+ Projects Delivered",
    "desc": "About Eldeco Group — North India developer since 1985 with 175+ projects delivered and 30,000+ families. Noida, Greater Noida & Yamuna Expressway projects via an Authorized Channel Partner.",
    "ogImage": "https://www.eldecogrp.com/assets/images/logo/eldeco-logo.png",
    "bodyHtml": `<p>The Eldeco Group has been a leading name in real estate development across North India since 1985, led by Eldeco Infrastructure and Properties Ltd. As published on the official Eldeco Group website, the group has delivered more than 175 projects spanning townships, high-rise condominiums, industrial estates, malls and office complexes, with 30+ projects in various stages of active execution and more than 30,000 satisfied customers.</p>
<p>Eldeco's presence spans Lucknow, Noida, Greater Noida, Gurugram, Delhi and other North Indian cities. This website covers only Eldeco's projects in <strong>Noida, Greater Noida and along the Yamuna Expressway</strong>.</p>
<h2>Design &amp; Credibility</h2>
<p>Eldeco ensures unique and innovative designs for all its projects and avoids repetition in external design, so each completed project becomes a landmark in its local geography. The group follows strong processes, a company-wide ERP system and a robust MIS, with a high emphasis on transparency and conformance to statutory norms.</p>
<h2>About This Website</h2>
<p><strong>Authorized Channel Partner — this is not the official Eldeco Group website.</strong> The official website is <a href="https://www.eldecogroup.com/" target="_blank" rel="noopener">eldecogroup.com</a>. Project facts here are sourced from official project pages; please verify RERA details at <a href="https://www.up-rera.in/" target="_blank" rel="noopener">up-rera.in</a>.</p>`
  },
  "contact": {
    "title": "Contact Us | Eldeco Projects Noida — Call & WhatsApp 8799756026",
    "desc": "Contact our team for Eldeco Group projects in Noida, Greater Noida & Yamuna Expressway. Call or WhatsApp +91 8799756026 for price, floor plans and site visits.",
    "ogImage": "https://www.eldecogrp.com/assets/images/logo/eldeco-logo.png",
    "preHtml": '<p>For price, floor plans, availability and site visits for any Eldeco Group project in Noida, Greater Noida or Yamuna Expressway:</p>\n<p>📞 <strong>Call:</strong> <a href="tel:+918799756026">+91 8799756026</a><br>\n💬 <strong>WhatsApp:</strong> <a href="https://wa.me/918799756026" target="_blank" rel="noopener">Chat on WhatsApp</a></p>\n',
    "postHtml": '\n<p class="fine">Authorized Channel Partner — this is not the official Eldeco Group website.</p>'
  },
  "notFound": {
    "title": "Page Not Found | Eldeco Projects",
    "desc": "The page you are looking for does not exist.",
    "ogImage": "https://www.eldecogrp.com/assets/images/logo/eldeco-logo.png"
  },
  "imageDims": {
    "/assets/images/projects/eldeco-live-by-the-greens/hero.webp": [
      1920,
      1080
    ],
    "/assets/images/projects/eldeco-la-vida-bella/hero.webp": [
      1920,
      1080
    ],
    "/assets/images/projects/eldeco-7-peaks-residences/hero.webp": [
      1920,
      1080
    ],
    "/assets/images/projects/eldeco-echoes-of-eden/hero.webp": [
      2e3,
      1193
    ],
    "/assets/images/projects/eldeco-whispers-of-wonder/hero.webp": [
      825,
      608
    ],
    "/assets/images/projects/eldeco-ballads-of-bliss/hero.webp": [
      1920,
      1080
    ],
    "/assets/images/projects/completed-banner.webp": [
      1258,
      817
    ]
  },
  "areaSlugs": {
    "Noida": "noida",
    "Greater Noida": "greater-noida",
    "Yamuna Expressway": "yamuna-expressway"
  }
};
const SITE_CONFIG = {
  domain: "https://www.eldecogrp.com",
  phone: "8799756026",
  whatsapp: "918799756026",
  // EmailJS — enquiries are emailed via this service (fixed 2026-11-09).
  emailjs: {
    serviceId: "service_fkmfynb",
    templateId: "template_bdjcyq6",
    publicKey: "xLfYDZXLlR6IeQ-C6",
    apiUrl: "https://api.emailjs.com/api/v1.0/email/send"
  }
};
const DOMAIN = SITE_CONFIG.domain;
const PHONE = SITE_CONFIG.phone;
const WA = SITE_CONFIG.whatsapp;
const DISCLAIMER = "Authorized Channel Partner — this is not the official Eldeco Group website.";
function esc(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function areaSlug(area) {
  return CONTENT.areaSlugs[area] || "noida";
}
function areaPageUrl(area) {
  return `/areas/${areaSlug(area)}.html`;
}
function areaPageName(area) {
  return area === "Yamuna Expressway" ? "Eldeco Projects on Yamuna Expressway" : `Eldeco Projects in ${area}`;
}
function waText(text) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}
function projectWaLink(p) {
  return waText(`Hi, I am interested in ${p.name}, ${p.location}. Please share price and availability.`);
}
function projectCity(p) {
  const parts = p.location.split(",").map((s) => s.trim()).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : p.area;
}
function firstRera(rera) {
  if (!rera) return "";
  return rera.split(",")[0].trim();
}
function projectTitle(p) {
  const withConfig = `${p.name} ${p.location} | ${p.config} — Price on Request`;
  if (withConfig.length <= 78) return withConfig;
  return `${p.name} ${p.location} | Price on Request`;
}
function projectDesc(p) {
  const rera = firstRera(p.rera);
  return `Explore ${p.name} at ${p.location} — ${p.config} by Eldeco Group. Status: ${p.status}.` + (rera ? ` RERA: ${rera}.` : "") + ` Price on Request. View floor plans, amenities, gallery & location advantages. Enquire: +91 8799756026.`;
}
function ldBreadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, url], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: DOMAIN + url
    }))
  };
}
function projectBreadcrumbItems(p) {
  return [
    ["Home", "/"],
    [areaPageName(p.area), areaPageUrl(p.area)],
    [p.name, `/projects/${p.slug}.html`]
  ];
}
function projectListingLd(p, desc) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: p.name,
    url: `${DOMAIN}/projects/${p.slug}.html`,
    description: desc,
    address: {
      "@type": "PostalAddress",
      streetAddress: p.location,
      addressLocality: projectCity(p),
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    brand: { "@type": "Brand", name: "Eldeco Group" }
  };
  if (p.rera) ld.identifier = p.rera;
  return ld;
}
function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
}
function imageDims(src) {
  const d = CONTENT.imageDims[src];
  return d ? { width: d[0], height: d[1] } : {};
}
function showToast(msg) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("app-toast", { detail: msg }));
  }
}
function trackConversion(eventName, params) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.trackConversion === "function") {
      window.trackConversion(eventName, params || {});
    } else {
      console.log("[track]", eventName, params || {});
    }
  } catch (e) {
  }
}
function enquiryWhatsAppUrl(project, d) {
  const lines = [
    `Hi, I am interested in ${project}.`,
    `Name: ${d.name || ""}`,
    `Mobile: ${d.phone || ""}`
  ];
  if (d.email) lines.push(`Email: ${d.email}`);
  if (d.interest) lines.push(`Interested in: ${d.interest}`);
  if (d.message) lines.push(`Message: ${d.message}`);
  return `https://wa.me/${WA}?text=${encodeURIComponent(lines.join("\n"))}`;
}
async function sendEnquiryEmail(project, d) {
  const e = SITE_CONFIG.emailjs;
  try {
    const res = await fetch(e.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: e.serviceId,
        template_id: e.templateId,
        user_id: e.publicKey,
        template_params: {
          from_name: d.name || "",
          phone: d.phone || "",
          email: d.email || "",
          interest: d.interest || "",
          project,
          message: d.message || "",
          reply_to: d.email || ""
        }
      })
    });
    return res.ok;
  } catch (err) {
    return false;
  }
}
function EnquiryForm({ project = "", variant = "standard" }) {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const proj = variant === "proj";
  async function onSubmit(e) {
    e.preventDefault();
    if (sending) return;
    const form = formRef.current;
    const fd = new FormData(form);
    const projectName = project || "Eldeco Group Projects";
    const d = {
      name: (fd.get("name") || "").toString(),
      phone: (fd.get("phone") || "").toString(),
      email: (fd.get("email") || "").toString(),
      interest: (fd.get("interest") || "").toString(),
      message: (fd.get("message") || "").toString()
    };
    setSending(true);
    const ok = await sendEnquiryEmail(projectName, d);
    if (ok) {
      trackConversion("generate_lead", { project: projectName });
      showToast("Thank you! Your enquiry has been sent — our team will contact you shortly.");
      form.reset();
    } else {
      trackConversion("generate_lead", { project: projectName });
      showToast("Couldn't send online — opening WhatsApp…");
      window.open(enquiryWhatsAppUrl(projectName, d), "_blank");
    }
    setSending(false);
  }
  const fields = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("label", { children: [
      "Name",
      /* @__PURE__ */ jsx("input", { type: "text", name: "name", required: true, placeholder: "Your name", autoComplete: "name" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Mobile",
      /* @__PURE__ */ jsx("input", { type: "tel", name: "phone", required: true, pattern: "[0-9+ -]{10,15}", placeholder: "10-digit mobile number", autoComplete: "tel" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Email",
      /* @__PURE__ */ jsx("input", { type: "email", name: "email", placeholder: "Email (optional)", autoComplete: "email" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Interested in",
      /* @__PURE__ */ jsxs("select", { name: "interest", defaultValue: "", children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "Select configuration" }),
        /* @__PURE__ */ jsx("option", { children: "2 BHK" }),
        /* @__PURE__ */ jsx("option", { children: "3 BHK" }),
        /* @__PURE__ */ jsx("option", { children: "4 BHK" }),
        /* @__PURE__ */ jsx("option", { children: "Penthouse / Duplex" }),
        /* @__PURE__ */ jsx("option", { children: "Other" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Message",
      /* @__PURE__ */ jsx("textarea", { name: "message", rows: "3", placeholder: "I want price & availability details" })
    ] })
  ] });
  if (proj) {
    return /* @__PURE__ */ jsxs("form", { ref: formRef, className: "enquiry-form p-form", "data-project": project, onSubmit, children: [
      /* @__PURE__ */ jsx("div", { className: "p-form-strip", children: "Express Your Interest" }),
      /* @__PURE__ */ jsxs("div", { className: "p-form-body", children: [
        /* @__PURE__ */ jsx("p", { className: "form-sub", children: "Get price, floor plans & a site visit on WhatsApp." }),
        fields,
        /* @__PURE__ */ jsx("button", { type: "submit", className: "p-submit", disabled: sending, children: sending ? "Sending…" : "Send Enquiry →" }),
        /* @__PURE__ */ jsx("p", { className: "form-note", children: "Submitting sends your enquiry to us instantly. No spam, ever." })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { ref: formRef, className: "enquiry-form", "data-project": project, onSubmit, children: [
    /* @__PURE__ */ jsx("h3", { children: "Express Your Interest" }),
    /* @__PURE__ */ jsx("p", { className: "form-sub", children: "Get price, floor plans & a site visit on WhatsApp." }),
    fields,
    /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary btn-block", disabled: sending, children: sending ? "Sending…" : "Send Enquiry →" }),
    /* @__PURE__ */ jsx("p", { className: "form-note", children: "Submitting sends your enquiry to us instantly. No spam, ever." })
  ] });
}
function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("General Enquiry — Eldeco Projects");
  useEffect(() => {
    const path = window.location.pathname;
    let eligible = false;
    let name = "General Enquiry — Eldeco Projects";
    if (path === "/" || path === "/index.html") eligible = true;
    const pm = path.match(/^\/projects\/([a-z0-9-]+)\.html$/);
    if (pm) {
      eligible = true;
      const p = PROJECTS.find((x) => x.slug === pm[1]);
      if (p) name = p.name;
    }
    if (/^\/areas\/[a-z0-9-]+\.html$/.test(path)) eligible = true;
    if (!eligible) return;
    let seen = false;
    try {
      seen = !!sessionStorage.getItem("leadpop-seen");
    } catch (e) {
    }
    if (seen) return;
    const t = setTimeout(() => {
      setProjectName(name);
      setOpen(true);
      try {
        sessionStorage.setItem("leadpop-seen", "1");
      } catch (e) {
      }
    }, 6e3);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  if (!open) return null;
  return /* @__PURE__ */ jsx("div", { className: "leadpop-overlay", onClick: () => setOpen(false), role: "presentation", children: /* @__PURE__ */ jsxs("div", { className: "leadpop-wrap", role: "dialog", "aria-modal": "true", "aria-label": "Enquire now", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsx("button", { type: "button", className: "leadpop-close", "aria-label": "Close popup", onClick: () => setOpen(false), children: "×" }),
    /* @__PURE__ */ jsx(EnquiryForm, { project: projectName })
  ] }) });
}
function Header() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("header", { className: "site-header", children: /* @__PURE__ */ jsxs("div", { className: "wrap nav-row", children: [
    /* @__PURE__ */ jsx("a", { className: "brand", href: "/", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/logo/eldeco-logo.png", alt: "Eldeco Group", className: "logo", width: "2080", height: "363" }) }),
    /* @__PURE__ */ jsxs("nav", { className: "main-nav", children: [
      /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/#projects", children: "Projects" }),
      /* @__PURE__ */ jsx("a", { href: "/areas/noida.html", children: "Noida" }),
      /* @__PURE__ */ jsx("a", { href: "/areas/greater-noida.html", children: "Greater Noida" }),
      /* @__PURE__ */ jsx("a", { href: "/areas/yamuna-expressway.html", children: "Yamuna Expressway" }),
      /* @__PURE__ */ jsx("a", { href: "/about.html", children: "About Eldeco" }),
      /* @__PURE__ */ jsx("a", { href: "/contact.html", children: "Contact" })
    ] })
  ] }) }) });
}
function Breadcrumbs({ items }) {
  return /* @__PURE__ */ jsx("nav", { className: "breadcrumbs", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsx("ol", { children: items.map(([label, url], i) => {
    const last = i === items.length - 1;
    return /* @__PURE__ */ jsx("li", { ...last ? { "aria-current": "page" } : {}, children: url && !last ? /* @__PURE__ */ jsx("a", { href: url, children: label }) : label }, i);
  }) }) });
}
function Toast() {
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    const onToast = (e) => {
      setMsg(e.detail || "");
      setVisible(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setVisible(false), 4200);
    };
    window.addEventListener("app-toast", onToast);
    return () => window.removeEventListener("app-toast", onToast);
  }, []);
  return /* @__PURE__ */ jsx("div", { id: "toast", className: "toast", role: "status", "aria-live": "polite", hidden: !visible, children: msg });
}
function CookieBanner() {
  const [show, setShow] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) setShow(true);
    } catch (e) {
      setShow(true);
    }
  }, []);
  const setConsent = (v) => {
    try {
      localStorage.setItem("cookie-consent", JSON.stringify(v));
    } catch (e) {
    }
    setShow(false);
    showToast("Cookie preferences saved.");
  };
  return /* @__PURE__ */ jsxs("div", { id: "cookie-banner", className: "cookie-banner", hidden: !show, children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "We use cookies to improve your experience and measure enquiries.",
      " ",
      /* @__PURE__ */ jsx(
        "button",
        {
          id: "cookie-prefs-btn",
          type: "button",
          className: "link-btn",
          onClick: () => setPrefsOpen(!prefsOpen),
          children: "Preferences"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "cookie-actions", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          id: "cookie-accept",
          type: "button",
          className: "btn btn-primary",
          onClick: () => setConsent({ essential: true, analytics: true, marketing: true }),
          children: "Accept all"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          id: "cookie-reject",
          type: "button",
          className: "btn",
          onClick: () => setConsent({ essential: true, analytics: false, marketing: false }),
          children: "Essential only"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "cookie-prefs", hidden: !prefsOpen, children: [
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", id: "ck-analytics", checked: analytics, onChange: (e) => setAnalytics(e.target.checked) }),
        " Analytics cookies"
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", id: "ck-marketing", checked: marketing, onChange: (e) => setMarketing(e.target.checked) }),
        " Marketing cookies"
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          id: "cookie-save",
          type: "button",
          className: "btn btn-primary",
          onClick: () => setConsent({ essential: true, analytics, marketing }),
          children: "Save preferences"
        }
      )
    ] })
  ] });
}
function Footer() {
  const links1 = PROJECTS.slice(0, 11);
  const links2 = PROJECTS.slice(11);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
      /* @__PURE__ */ jsxs("div", { className: "wrap foot-grid", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/images/logo/eldeco-logo.png", alt: "Eldeco Group", className: "logo foot-logo", width: "2080", height: "363" }),
          /* @__PURE__ */ jsx("p", { children: "Eldeco Group projects in Noida, Greater Noida & Yamuna Expressway — enquire for price, availability, floor plans and site visits." }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Call / WhatsApp:" }),
            " ",
            /* @__PURE__ */ jsxs("a", { href: `tel:+91${PHONE}`, children: [
              "+91 ",
              PHONE
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { children: "Projects" }),
          /* @__PURE__ */ jsx("ul", { children: links1.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `/projects/${p.slug}.html`, children: p.name }) }, p.slug)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { children: "More Projects" }),
          /* @__PURE__ */ jsx("ul", { children: links2.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `/projects/${p.slug}.html`, children: p.name }) }, p.slug)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/about.html", children: "About Eldeco Group" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/contact.html", children: "Contact Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.eldecogroup.com/", target: "_blank", rel: "noopener", children: "Official Eldeco Group Website" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.up-rera.in/", target: "_blank", rel: "noopener", children: "Verify RERA at up-rera.in" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "wrap foot-legal", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Disclaimer:" }),
          " ",
          DISCLAIMER,
          " All project details, images and RERA numbers on this site are sourced from the official Eldeco Group website (eldecogroup.com) and are for information only; they do not constitute an offer. Prices are on request. Please verify all details, including RERA registration, independently at up-rera.in before making any purchase decision."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "© 2026 eldecogrp.com — Authorized Channel Partner. All rights reserved." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sticky-cta", children: [
      /* @__PURE__ */ jsx("a", { href: `tel:+91${PHONE}`, children: "📞 Call Now" }),
      /* @__PURE__ */ jsx("a", { className: "wa", href: `https://wa.me/${WA}`, target: "_blank", rel: "noopener", children: "💬 WhatsApp" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "float-cta", children: [
      /* @__PURE__ */ jsx("a", { className: "fc-call", href: `tel:+91${PHONE}`, "aria-label": "Call us", children: "📞" }),
      /* @__PURE__ */ jsx("a", { className: "fc-wa", href: `https://wa.me/${WA}`, target: "_blank", rel: "noopener", "aria-label": "Chat on WhatsApp", children: "💬" })
    ] }),
    /* @__PURE__ */ jsx(CookieBanner, {}),
    /* @__PURE__ */ jsx(Toast, {}),
    /* @__PURE__ */ jsx(LeadPopup, {})
  ] });
}
function ProjectCard({ p, style }) {
  const dims = imageDims(p.images.hero);
  const searchTxt = `${p.name} ${p.location} ${p.config} ${p.area}`.toLowerCase();
  return /* @__PURE__ */ jsxs("article", { className: "card", "data-area": p.area, "data-status": p.status, "data-search": searchTxt, style, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        loading: "lazy",
        src: p.images.hero,
        alt: `${p.name}, ${p.location} — Eldeco Group residential project`,
        ...dims
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
      /* @__PURE__ */ jsx("h3", { children: p.name }),
      /* @__PURE__ */ jsxs("p", { className: "loc", children: [
        "📍 ",
        p.location
      ] }),
      /* @__PURE__ */ jsx("p", { children: p.config }),
      /* @__PURE__ */ jsxs("div", { className: "meta", children: [
        /* @__PURE__ */ jsx("span", { className: "badge", children: p.status }),
        /* @__PURE__ */ jsx("span", { className: "badge badge-alt", children: p.area }),
        /* @__PURE__ */ jsx("strong", { children: "Price on Request" })
      ] }),
      /* @__PURE__ */ jsx("a", { className: "btn btn-primary", href: `/projects/${p.slug}.html`, children: "View Details →" })
    ] })
  ] });
}
function HomePage() {
  const [q, setQ] = useState("");
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 350);
    return () => clearTimeout(t);
  }, []);
  const shown = useMemo(() => {
    const needle = q.toLowerCase();
    return PROJECTS.map((p) => {
      const txt = `${p.name} ${p.location} ${p.config} ${p.area}`.toLowerCase();
      const ok = (!needle || txt.includes(needle)) && (!area || p.area === area) && (!status || p.status === status);
      return { p, ok };
    });
  }, [q, area, status]);
  const shownCount = shown.filter((s) => s.ok).length;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("span", { className: "badge badge-alt", children: "Authorized Channel Partner" }),
      /* @__PURE__ */ jsx("h1", { children: "Eldeco Group Projects in Noida, Greater Noida & Yamuna Expressway" }),
      /* @__PURE__ */ jsx("p", { className: "lead", children: "Homes by Eldeco Group — North India's trusted developer since 1985 — across Sector 150 Noida, Greater Noida and the Yamuna Expressway corridor near the upcoming Noida International Airport." }),
      /* @__PURE__ */ jsx("a", { className: "btn btn-primary", href: "#projects", children: "Explore Projects" }),
      " ",
      /* @__PURE__ */ jsx("a", { className: "btn btn-wa", href: `https://wa.me/${WA}`, target: "_blank", rel: "noopener", children: "Chat on WhatsApp" }),
      /* @__PURE__ */ jsxs("div", { className: "stats", children: [
        /* @__PURE__ */ jsxs("div", { className: "stat", children: [
          /* @__PURE__ */ jsx("b", { children: "Since 1985" }),
          "40+ Years of Legacy"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "stat", children: [
          /* @__PURE__ */ jsx("b", { children: "175+" }),
          "Projects Delivered"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "stat", children: [
          /* @__PURE__ */ jsx("b", { children: "30,000+" }),
          "Happy Families"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "stat", children: [
          /* @__PURE__ */ jsx("b", { children: "22" }),
          "Projects in Noida Region Listed Here"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "projects", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h2", { children: "Eldeco Projects — Noida, Greater Noida & Yamuna Expressway" }),
      /* @__PURE__ */ jsxs("div", { className: "controls", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "search",
            id: "q",
            placeholder: "Search project, sector or configuration…",
            "aria-label": "Search projects",
            value: q,
            onChange: (e) => setQ(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxs("select", { id: "f-area", "aria-label": "Filter by area", value: area, onChange: (e) => setArea(e.target.value), children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "All Areas" }),
          /* @__PURE__ */ jsx("option", { children: "Noida" }),
          /* @__PURE__ */ jsx("option", { children: "Greater Noida" }),
          /* @__PURE__ */ jsx("option", { children: "Yamuna Expressway" })
        ] }),
        /* @__PURE__ */ jsxs("select", { id: "f-status", "aria-label": "Filter by status", value: status, onChange: (e) => setStatus(e.target.value), children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "All Status" }),
          /* @__PURE__ */ jsx("option", { children: "Ongoing" }),
          /* @__PURE__ */ jsx("option", { children: "New Launch" }),
          /* @__PURE__ */ jsx("option", { children: "Completed" })
        ] })
      ] }),
      !ready ? /* @__PURE__ */ jsx("div", { id: "skeletons", className: "grid", children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "skeleton" }, i)) }) : null,
      /* @__PURE__ */ jsx("div", { id: "project-grid", className: "grid", hidden: !ready, children: shown.map(({ p, ok }) => /* @__PURE__ */ jsx(ProjectCard, { p, style: ok ? void 0 : { display: "none" } }, p.slug)) }),
      /* @__PURE__ */ jsxs("div", { id: "empty-state", className: "empty-state", hidden: !(ready && shownCount === 0), children: [
        /* @__PURE__ */ jsx("h3", { children: "No projects match your search" }),
        /* @__PURE__ */ jsx("p", { children: "Try a different sector or configuration — or ask us on WhatsApp, we'll find the right Eldeco home for you." }),
        /* @__PURE__ */ jsx("a", { className: "btn btn-wa", href: `https://wa.me/${WA}`, target: "_blank", rel: "noopener", children: "Ask on WhatsApp" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "areas", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h2", { children: "Eldeco Projects by Area" }),
      /* @__PURE__ */ jsx("div", { className: "grid", children: CONTENT.areaCards.map((c) => /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
        /* @__PURE__ */ jsx("h3", { children: c.title }),
        /* @__PURE__ */ jsx("p", { children: c.text }),
        /* @__PURE__ */ jsx("a", { className: "btn btn-primary", href: c.href, children: c.label })
      ] }) }, c.href)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "band", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h2", { children: "About Eldeco Group" }),
      /* @__PURE__ */ jsx("p", { children: "The Eldeco Group has been a leading name in real estate development across North India since 1985. As per the official Eldeco website, the group has delivered more than 175 projects — townships, high-rise condominiums, industrial estates, malls and office complexes — with 30+ projects in various stages of execution and more than 30,000 satisfied customers. Eldeco avoids repetition in design, so each project becomes a unique landmark in its local geography." }),
      /* @__PURE__ */ jsx("h2", { children: "Why Buy an Eldeco Home Through Us?" }),
      /* @__PURE__ */ jsxs("div", { className: "grid", children: [
        /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
          /* @__PURE__ */ jsx("h3", { children: "Official Details Only" }),
          /* @__PURE__ */ jsx("p", { children: "Every RERA number, configuration and amenity here is taken from the official Eldeco Group project page — nothing invented." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
          /* @__PURE__ */ jsx("h3", { children: "Price on Request, No Pressure" }),
          /* @__PURE__ */ jsx("p", { children: "Current price, payment plans and unit availability confirmed transparently on call or WhatsApp." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
          /* @__PURE__ */ jsx("h3", { children: "Guided Site Visits" }),
          /* @__PURE__ */ jsx("p", { children: "We arrange and accompany site visits across Noida, Greater Noida and Yamuna Expressway projects." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "faq", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h2", { children: "Frequently Asked Questions — Eldeco Projects in Noida Region" }),
      CONTENT.home.faqs.map((f) => /* @__PURE__ */ jsxs("details", { className: "faq-item", children: [
        /* @__PURE__ */ jsx("summary", { children: f.q }),
        /* @__PURE__ */ jsx("p", { children: f.a })
      ] }, f.q))
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "enquire", children: /* @__PURE__ */ jsxs("div", { className: "wrap two-col", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { children: "Enquire Now" }),
        /* @__PURE__ */ jsx("p", { children: "Tell us which Eldeco project you're considering — we'll reply on WhatsApp with the latest price, floor plans and availability." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "📞 Call: ",
          /* @__PURE__ */ jsxs("a", { href: `tel:+91${PHONE}`, children: [
            "+91 ",
            PHONE
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          "💬 WhatsApp: ",
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/${WA}`, target: "_blank", rel: "noopener", children: "Chat now" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("aside", { children: /* @__PURE__ */ jsx(EnquiryForm, { project: "General Enquiry — Eldeco Projects" }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const bySlug$1 = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));
function ProjectPage({ p }) {
  const waLink = projectWaLink(p);
  const hero = p.images.hero;
  const gallery = p.images.gallery;
  const extra = p.images.extra;
  const completed = p.status === "Completed" && p.completedHtml;
  const cfgItems = [
    ["Type", p.config],
    ["Location", p.location],
    ["Status", p.status],
    ["Price", "On Request"]
  ];
  if (p.launch) cfgItems.push(["Launched", p.launch]);
  if (p.rera) cfgItems.push(["RERA", "Registered"]);
  const fpCta = waText(`Hi, please share the floor plans of ${p.name}, ${p.location}.`);
  const fpRows = /* @__PURE__ */ jsxs("div", { className: "p-fp-details", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-fp-row", children: [
      /* @__PURE__ */ jsx("h6", { children: "Configuration" }),
      /* @__PURE__ */ jsx("span", { children: p.config })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-fp-row", children: [
      /* @__PURE__ */ jsx("h6", { children: "Price" }),
      /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("strong", { children: "On Request" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-fp-row", children: [
      /* @__PURE__ */ jsx("h6", { children: "Status" }),
      /* @__PURE__ */ jsx("span", { children: p.status })
    ] })
  ] });
  const relatedProjects = (p.related || []).map((s) => bySlug$1[s]).filter(Boolean);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      Breadcrumbs,
      {
        items: [
          ["Home", "/"],
          [areaPageName(p.area), areaPageUrl(p.area)],
          [p.name, ""]
        ]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "p-banner", style: { backgroundImage: `url('${hero}')` }, children: [
      /* @__PURE__ */ jsxs("div", { className: "p-banner-box", children: [
        /* @__PURE__ */ jsx("p", { className: "p-banner-over", children: p.config }),
        /* @__PURE__ */ jsx("h1", { children: p.name }),
        /* @__PURE__ */ jsxs("p", { className: "p-banner-loc", children: [
          "📍 ",
          p.location
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-banner-price", children: [
          "Price: ",
          /* @__PURE__ */ jsx("strong", { children: "On Request" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-banner-cta", children: [
          /* @__PURE__ */ jsx("a", { className: "p-btn p-btn-light", href: "#enquire", children: "Enquire Now" }),
          /* @__PURE__ */ jsx("a", { className: "p-btn p-btn-wa", href: waLink, target: "_blank", rel: "noopener", children: "WhatsApp" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-banner-badges", children: [
        /* @__PURE__ */ jsx("span", { className: "badge", children: p.status }),
        /* @__PURE__ */ jsx("span", { className: "badge badge-alt", children: p.area }),
        p.rera ? /* @__PURE__ */ jsxs("span", { className: "badge badge-rera", children: [
          "RERA: ",
          p.rera
        ] }) : /* @__PURE__ */ jsx("span", { className: "badge badge-rera", children: "Completed Project" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-config", children: /* @__PURE__ */ jsx("div", { className: "wrap p-config-row", children: cfgItems.map(([k, v]) => /* @__PURE__ */ jsxs("div", { className: "p-cfg-box", children: [
      /* @__PURE__ */ jsx("h3", { children: k }),
      /* @__PURE__ */ jsx("p", { children: v })
    ] }, k)) }) }),
    /* @__PURE__ */ jsx("nav", { className: "anchor-nav", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("a", { href: "#overview", children: "Overview" }),
      /* @__PURE__ */ jsx("a", { href: "#amenities", children: "Amenities" }),
      /* @__PURE__ */ jsx("a", { href: "#floorplans", children: "Floor Plans" }),
      /* @__PURE__ */ jsx("a", { href: "#price", children: "Price" }),
      /* @__PURE__ */ jsx("a", { href: "#gallery", children: "Gallery" }),
      /* @__PURE__ */ jsx("a", { href: "#location", children: "Location" }),
      /* @__PURE__ */ jsx("a", { href: "#enquire", children: "Enquire" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "overview", className: "p-sec", children: /* @__PURE__ */ jsxs("div", { className: "wrap two-col", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "p-heading", children: [
          "Overview — ",
          p.name
        ] }),
        /* @__PURE__ */ jsx("p", { className: "p-lead", children: p.overview }),
        completed ? /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: p.completedHtml.overviewExtra } }) : null,
        /* @__PURE__ */ jsx("table", { className: "fact-table p-facts", children: /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Project" }),
            /* @__PURE__ */ jsxs("td", { children: [
              p.name,
              " by Eldeco Group"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Location" }),
            /* @__PURE__ */ jsx("td", { children: p.location })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Configurations" }),
            /* @__PURE__ */ jsx("td", { children: p.config })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Status" }),
            /* @__PURE__ */ jsx("td", { children: p.status })
          ] }),
          p.launch ? /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Launch Date" }),
            /* @__PURE__ */ jsx("td", { children: p.launch })
          ] }) : null,
          p.rera ? /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "RERA No." }),
            /* @__PURE__ */ jsx("td", { children: p.rera })
          ] }) : null,
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Price" }),
            /* @__PURE__ */ jsx("td", { children: "On Request" })
          ] })
        ] }) }),
        p.rera ? /* @__PURE__ */ jsxs("p", { className: "rera-line", children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            "UP RERA Reg. No.: ",
            p.rera
          ] }),
          " — Verify at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.up-rera.in/", target: "_blank", rel: "noopener", children: "up-rera.in" }),
          ". Details sourced from the",
          " ",
          /* @__PURE__ */ jsx("a", { href: p.official, target: "_blank", rel: "noopener", children: "official Eldeco Group project page" }),
          "."
        ] }) : /* @__PURE__ */ jsxs("p", { className: "rera-line", children: [
          "This is a completed project listed on the",
          " ",
          /* @__PURE__ */ jsx("a", { href: p.official, target: "_blank", rel: "noopener", children: "official Eldeco Group website" }),
          ". No RERA number is published for it on the official page — verify project details at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.up-rera.in/", target: "_blank", rel: "noopener", children: "up-rera.in" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("aside", { className: "sticky-form p-aside", id: "enquire", children: /* @__PURE__ */ jsx(EnquiryForm, { project: p.name, variant: "proj" }) })
    ] }) }),
    p.amenities.length ? /* @__PURE__ */ jsx("section", { id: "amenities", className: "p-sec p-amen-sec", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h2", { className: "p-heading", children: "World-Class Amenities" }),
      /* @__PURE__ */ jsx("div", { className: "p-amen-grid", children: p.amenities.map((a) => /* @__PURE__ */ jsxs("div", { className: "p-amen-item", children: [
        /* @__PURE__ */ jsx("span", { className: "p-amen-ic", "aria-hidden": "true", children: "✓" }),
        a
      ] }, a)) })
    ] }) }) : null,
    /* @__PURE__ */ jsx("section", { id: "floorplans", className: "p-sec", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h2", { className: "p-heading", children: "Floor Plans" }),
      /* @__PURE__ */ jsx("div", { className: "p-fp-card", children: /* @__PURE__ */ jsxs("div", { className: "p-fp-inner", children: [
        extra ? /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            className: "p-fp-img",
            src: extra,
            alt: `${p.name}, ${p.location} — ${p.extraLabel}`
          }
        ) : null,
        fpRows,
        /* @__PURE__ */ jsx("a", { className: "p-btn", href: fpCta, target: "_blank", rel: "noopener", children: "Get Floor Plan on WhatsApp" }),
        extra ? /* @__PURE__ */ jsxs("p", { className: "fine", children: [
          p.extraLabel,
          " as published on the official Eldeco Group page for this project. Detailed floor plans are shared on WhatsApp on enquiry."
        ] }) : /* @__PURE__ */ jsxs("p", { className: "fine", children: [
          "Detailed floor plans for ",
          p.name,
          " are shared on WhatsApp on enquiry — no sizes are published here unless confirmed on the official project page."
        ] })
      ] }) })
    ] }) }),
    gallery.length ? /* @__PURE__ */ jsx("section", { className: "p-welcome", style: { backgroundImage: `url('${gallery[0]}')` }, children: /* @__PURE__ */ jsx("div", { className: "p-welcome-inner", children: /* @__PURE__ */ jsxs("p", { children: [
      "Welcome to ",
      p.name,
      " — a thoughtfully curated residential destination at ",
      p.location,
      "."
    ] }) }) }) : null,
    /* @__PURE__ */ jsx("section", { id: "price", className: "p-sec", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h2", { className: "p-heading", children: "Price List" }),
      /* @__PURE__ */ jsxs("table", { className: "price-table p-price-table", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Configuration" }),
          /* @__PURE__ */ jsx("th", { children: "Price" }),
          /* @__PURE__ */ jsx("th", {})
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: p.config }),
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("strong", { children: "Price on Request" }) }),
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("a", { className: "p-link", href: "#enquire", children: "Enquire →" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "fine", children: "Prices are not published on the official project page; current price, payment plan and availability are confirmed on enquiry." })
    ] }) }),
    gallery.length ? /* @__PURE__ */ jsx("section", { id: "gallery", className: "p-sec p-gal-sec", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("h2", { className: "p-heading", children: [
        "A Glimpse of ",
        /* @__PURE__ */ jsx("span", { children: p.name })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-gallery-grid", children: gallery.map((g) => /* @__PURE__ */ jsx("figure", { className: "p-gal-item", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: g, alt: `${p.name}, ${p.location} — gallery image` }) }, g)) })
    ] }) }) : null,
    p.locationAdv.length ? /* @__PURE__ */ jsx("section", { id: "location", className: "p-sec p-loc-sec", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h2", { className: "p-heading", children: "Location Advantages" }),
      /* @__PURE__ */ jsx("div", { className: "p-loc-grid", children: p.locationAdv.map(([n, d]) => /* @__PURE__ */ jsxs("div", { className: "p-loc-card", children: [
        /* @__PURE__ */ jsx("strong", { children: n }),
        /* @__PURE__ */ jsx("span", { children: d })
      ] }, n)) })
    ] }) }) : null,
    completed && p.completedHtml.locality ? /* @__PURE__ */ jsx(
      "section",
      {
        id: "locality",
        className: "p-sec",
        dangerouslySetInnerHTML: { __html: p.completedHtml.locality.html }
      }
    ) : null,
    completed && p.completedHtml.resale ? /* @__PURE__ */ jsx(
      "section",
      {
        id: "resale",
        className: "p-sec p-loc-sec",
        dangerouslySetInnerHTML: { __html: p.completedHtml.resale.html }
      }
    ) : null,
    p.faqs.length ? /* @__PURE__ */ jsx("section", { id: "faq", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "Frequently Asked Questions — ",
        p.name
      ] }),
      p.faqs.map((f) => /* @__PURE__ */ jsxs("details", { className: "faq-item", children: [
        /* @__PURE__ */ jsx("summary", { children: f.q }),
        /* @__PURE__ */ jsx("p", { children: f.a })
      ] }, f.q))
    ] }) }) : null,
    relatedProjects.length ? /* @__PURE__ */ jsx("section", { id: "related", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "More Eldeco Projects in ",
        p.area
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid", children: relatedProjects.map((r) => /* @__PURE__ */ jsx(ProjectCard, { p: r }, r.slug)) }),
      /* @__PURE__ */ jsxs("a", { className: "area-link", href: areaPageUrl(p.area), children: [
        "View all Eldeco projects in ",
        p.area,
        " →"
      ] })
    ] }) }) : null,
    /* @__PURE__ */ jsx("section", { className: "p-enquire", children: /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsxs("div", { className: "p-enquire-card", children: [
      /* @__PURE__ */ jsx("h2", { children: "Enquire Now" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Interested in ",
        p.name,
        "? Talk to our team for the latest price, available units, floor plans and a guided site visit."
      ] }),
      /* @__PURE__ */ jsxs("a", { className: "p-btn", href: `tel:+91${PHONE}`, children: [
        "📞 +91 ",
        PHONE
      ] }),
      /* @__PURE__ */ jsx("a", { className: "p-btn p-btn-wa", href: waLink, target: "_blank", rel: "noopener", children: "Chat on WhatsApp" })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function AreaPage({ area }) {
  const projects = PROJECTS.filter((p) => p.area === area.area);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("span", { className: "badge badge-alt", children: "Authorized Channel Partner" }),
        /* @__PURE__ */ jsx("h1", { children: area.h1 }),
        /* @__PURE__ */ jsx("p", { className: "lead", children: area.lead }),
        /* @__PURE__ */ jsx("a", { className: "btn btn-primary", href: "#projects", children: "View Projects" }),
        " ",
        /* @__PURE__ */ jsx("a", { className: "btn btn-wa", href: `https://wa.me/${WA}`, target: "_blank", rel: "noopener", children: "Chat on WhatsApp" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsx(Breadcrumbs, { items: [["Home", "/"], [area.h1, ""]] }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", { className: "wrap", dangerouslySetInnerHTML: { __html: area.introHtml } }) }),
      /* @__PURE__ */ jsx("section", { id: "projects", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "All Eldeco Projects in ",
          area.area
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid", children: projects.map((p) => /* @__PURE__ */ jsx(ProjectCard, { p }, p.slug)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Breadcrumbs, { items: [["Home", "/"], ["About Eldeco Group", ""]] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h1", { children: "About Eldeco Group" }),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: CONTENT.about.bodyHtml } })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Breadcrumbs, { items: [["Home", "/"], ["Contact Us", ""]] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsx("h1", { children: "Contact Us" }),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: CONTENT.contact.preHtml } }),
      /* @__PURE__ */ jsx("div", { style: { maxWidth: 520 }, children: /* @__PURE__ */ jsx(EnquiryForm, { project: "General Enquiry — Eldeco Projects" }) }),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: CONTENT.contact.postHtml } })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function NotFoundPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "wrap", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h1", { children: "404 — Page Not Found" }),
      /* @__PURE__ */ jsx("p", { children: "Oops, this page does not exist. Explore Eldeco Group projects in Noida, Greater Noida & Yamuna Expressway instead." }),
      /* @__PURE__ */ jsx("a", { className: "btn btn-primary", href: "/", children: "Go to Home Page" }),
      " ",
      /* @__PURE__ */ jsx("a", { className: "btn", href: "/#projects", children: "View Projects" })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const bySlug = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));
function itemListLd(area) {
  const projects = PROJECTS.filter((p) => p.area === area.area);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: area.h1,
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${DOMAIN}/projects/${p.slug}.html`
    }))
  };
}
function getRoute(rawPath) {
  let path = rawPath || "/";
  if (path === "/index.html") path = "/";
  if (path === "/") {
    return {
      path,
      file: "index.html",
      bodyClass: "",
      head: {
        title: CONTENT.home.title,
        desc: CONTENT.home.desc,
        path: "/",
        ogImage: CONTENT.home.ogImage,
        lds: [CONTENT.home.graph, faqLd(CONTENT.home.faqs)]
      },
      element: /* @__PURE__ */ jsx(HomePage, {})
    };
  }
  const projMatch = path.match(/^\/projects\/([a-z0-9-]+)\.html$/);
  if (projMatch && bySlug[projMatch[1]]) {
    const p = bySlug[projMatch[1]];
    const desc = projectDesc(p);
    return {
      path,
      file: `projects/${p.slug}.html`,
      bodyClass: "proj",
      head: {
        title: projectTitle(p),
        desc,
        path,
        ogImage: DOMAIN + p.images.hero,
        projectFonts: true,
        lds: [ldBreadcrumb(projectBreadcrumbItems(p)), projectListingLd(p, desc), faqLd(p.faqs)]
      },
      element: /* @__PURE__ */ jsx(ProjectPage, { p })
    };
  }
  const areaMatch = path.match(/^\/areas\/([a-z0-9-]+)\.html$/);
  if (areaMatch) {
    const area = CONTENT.areas.find((a) => a.slug === areaMatch[1]);
    if (area) {
      return {
        path,
        file: `areas/${area.slug}.html`,
        bodyClass: "",
        head: {
          title: area.title,
          desc: area.desc,
          path,
          ogImage: area.ogImage,
          lds: [ldBreadcrumb([["Home", "/"], [area.h1, path]]), itemListLd(area)]
        },
        element: /* @__PURE__ */ jsx(AreaPage, { area })
      };
    }
  }
  if (path === "/about.html") {
    return {
      path,
      file: "about.html",
      bodyClass: "",
      head: {
        title: CONTENT.about.title,
        desc: CONTENT.about.desc,
        path,
        ogImage: CONTENT.about.ogImage,
        lds: [ldBreadcrumb([["Home", "/"], ["About Eldeco Group", path]])]
      },
      element: /* @__PURE__ */ jsx(AboutPage, {})
    };
  }
  if (path === "/contact.html") {
    return {
      path,
      file: "contact.html",
      bodyClass: "",
      head: {
        title: CONTENT.contact.title,
        desc: CONTENT.contact.desc,
        path,
        ogImage: CONTENT.contact.ogImage,
        lds: [ldBreadcrumb([["Home", "/"], ["Contact Us", path]])]
      },
      element: /* @__PURE__ */ jsx(ContactPage, {})
    };
  }
  return {
    path: "/404.html",
    file: "404.html",
    bodyClass: "",
    head: {
      title: CONTENT.notFound.title,
      desc: CONTENT.notFound.desc,
      path: "/404.html",
      ogImage: CONTENT.notFound.ogImage,
      robots: "noindex, follow"
    },
    element: /* @__PURE__ */ jsx(NotFoundPage, {})
  };
}
function allRoutes() {
  const paths = [
    "/",
    ...CONTENT.areas.map((a) => `/areas/${a.slug}.html`),
    "/about.html",
    "/contact.html",
    ...PROJECTS.map((p) => `/projects/${p.slug}.html`),
    "/404.html"
  ];
  return paths.map((p) => getRoute(p));
}
function App({ path }) {
  return getRoute(path).element;
}
function buildHead({ title, desc, path, ogImage, robots, lds = [], projectFonts = false }) {
  const robotsMeta = robots || "index, follow, max-image-preview:large, max-snippet:-1";
  const ldHtml = lds.map((ld) => `<script type="application/ld+json">${JSON.stringify(ld)}<\/script>`).join("");
  const fonts = projectFonts ? '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="/css/project.css">' : "";
  return `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="${esc(robotsMeta)}">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${DOMAIN}${path}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Eldeco Group Projects — Authorized Channel Partner">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${DOMAIN}${path}"><meta property="og:image" content="${esc(ogImage)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${esc(ogImage)}">
<link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="stylesheet" href="/css/style.css">
${ldHtml}${fonts}`;
}
function render(path) {
  const route = getRoute(path);
  const html = renderToString(/* @__PURE__ */ jsx(App, { path }));
  return { head: buildHead(route.head), bodyClass: route.bodyClass, file: route.file, html };
}
export {
  allRoutes,
  getRoute,
  render
};
