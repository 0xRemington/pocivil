// Placeholder project photography (royalty-free, unsplash.com) until
// real site photos are supplied — swap the files in src/assets/projects/
import highwayPhoto from '../assets/projects/highway-route1.jpg'
import bridgePhoto from '../assets/projects/bridge-exploits.jpg'
import drainagePhoto from '../assets/projects/drainage-harbourfront.jpg'
import siteworkPhoto from '../assets/projects/sitework-argentia.jpg'

import serviceEarthwork from '../assets/services/earthwork.jpg'
import serviceRoadway from '../assets/services/roadway.jpg'
import serviceBridge from '../assets/services/bridge.jpg'
import serviceUtilities from '../assets/services/utilities.jpg'
import serviceDemolition from '../assets/services/demolition.jpg'
import serviceStormwater from '../assets/services/stormwater.jpg'
import valueSafety from '../assets/values/safety.jpg'
import valueFleet from '../assets/values/fleet.jpg'
import valueSurvey from '../assets/values/survey.jpg'
import valueStructure from '../assets/values/structure.jpg'

export const company = {
  name: 'P.Okeke Heavy Civil',
  shortName: 'P.Okeke',
  tagline: 'Building the foundations that move communities forward.',
  phone: '(709) 555-0142',
  email: 'estimating@pokekeheavycivil.com',
  address: '42 Industrial Crescent, Mount Pearl, NL A1N 4S2',
  hours: 'Mon–Fri · 6:00 AM – 6:00 PM',
  founded: 2004,
}

/* image/imagePosition feed the Card photo face — imagePosition steers
   the photo's subject into the glass swoop window at the top-right of
   the tile (see .card__photo in styles/elements/card.css) */
export const services = [
  {
    icon: 'earthwork',
    title: 'Earthwork & Grading',
    description:
      'Mass excavation, site grading, and soil stabilization with GPS-guided machine control for centimetre precision.',
    image: serviceEarthwork,
    imagePosition: '50% 55%',
    imageAlt: 'Motor grader levelling a dirt road',
  },
  {
    icon: 'roadway',
    title: 'Roadways & Highways',
    description:
      'Full-depth roadway construction, widening, and reconstruction — subgrade through final paving for provincial and municipal clients.',
    image: serviceRoadway,
    imagePosition: '35% 45%',
    imageAlt: 'Roller compacting fresh asphalt',
  },
  {
    icon: 'bridge',
    title: 'Bridges & Structures',
    description:
      'Cast-in-place and precast structures, drilled shafts, abutments, and culverts engineered for decades of service.',
    image: serviceBridge,
    imagePosition: '50% 40%',
    imageAlt: 'Cable-stayed bridge pylon under construction with cranes',
  },
  {
    icon: 'utilities',
    title: 'Underground Utilities',
    description:
      'Storm, sanitary, and water systems including deep trenching, boring, and large-diameter pipe installation.',
    image: serviceUtilities,
    imagePosition: '60% 50%',
    imageAlt: 'Open trench with gravel bedding and pipe staged beside it',
  },
  {
    icon: 'demolition',
    title: 'Demolition & Clearing',
    description:
      'Controlled structural demolition, site clearing, and environmentally responsible material recycling.',
    image: serviceDemolition,
    imagePosition: '60% 30%',
    imageAlt: 'Excavator working through demolition rubble',
  },
  {
    icon: 'stormwater',
    title: 'Site & Stormwater',
    description:
      'Detention ponds, drainage channels, erosion control, and complete site-development packages.',
    image: serviceStormwater,
    imagePosition: '50% 40%',
    imageAlt: 'Stacked concrete culvert sections',
  },
]

export const projects = [
  {
    title: 'Trans-Canada Highway Widening — Route 1',
    category: 'Highway',
    scope: '6.8 km · 4 Lanes · $38M',
    blurb:
      'Full-depth reconstruction and widening of the province’s busiest corridor — 470,000 m³ of embankment, dual box culverts, and phased traffic control that kept 28,000 vehicles a day moving.',
    accent: '#f5a623',
    image: highwayPhoto,
  },
  {
    title: 'Exploits River Bridge Replacement',
    category: 'Bridge',
    scope: 'Twin 98-m Spans · $24M',
    blurb:
      'Demolition and staged replacement of twin crossings over an active salmon river, with 96 drilled shafts, precast concrete girders, and zero recordable incidents across 28 months.',
    accent: '#3da5d9',
    image: bridgePhoto,
  },
  {
    title: 'St. John’s Harbourfront Drainage Program',
    category: 'Stormwater',
    scope: '5,600 m Storm Main · $16M',
    blurb:
      'Large-diameter storm trunk lines up to 2,400 mm, two regional detention ponds, and outfall structures — built through congested harbourfront utilities without a single service disruption.',
    accent: '#5aa469',
    image: drainagePhoto,
  },
  {
    title: 'Argentia Marine Terminal Site',
    category: 'Sitework',
    scope: '85 Hectares · 1.1M m³ Moved',
    blurb:
      'Mass grading, rock excavation, and complete wet-utility package for a port-served industrial park, delivered pad-ready 6 weeks ahead of the developer’s schedule.',
    accent: '#c0563b',
    image: siteworkPhoto,
  },
]

export const process = [
  {
    step: '01',
    title: 'Estimate & Plan',
    description:
      'Detailed takeoffs, constructability reviews, and value engineering give you a hard number you can hold us to — before the first stake goes in.',
  },
  {
    step: '02',
    title: 'Mobilize',
    description:
      'Permits, erosion and sediment control plans, traffic control, and utility locates locked down while our own fleet and crews stage on site — no waiting on subcontractors.',
  },
  {
    step: '03',
    title: 'Self-Perform',
    description:
      'GPS-guided machine control, daily quantity tracking, and on-site QA/QC keep production measurable and the schedule honest.',
  },
  {
    step: '04',
    title: 'Deliver & Close Out',
    description:
      'Punch lists cleared, as-builts and testing records handed over, and a finished product backed by our warranty — not excuses.',
  },
]

/* image/imagePosition feed the Card photo face — imagePosition steers
   the photo's subject into the glass swoop window at the top-right of
   the tile (see .card__photo in styles/elements/card.css) */
export const values = [
  {
    title: 'Safety First',
    description:
      'A 0.61 TRIF and a culture where any crew member can stop work. Everyone goes home in the same shape they arrived — every shift, every site.',
    image: valueSafety,
    imagePosition: '50% 30%',
    imageAlt: 'Wall of well-worn construction hard hats',
  },
  {
    title: 'Self-Performed',
    description:
      'We own our iron and employ our crews. When the schedule tightens, we add shifts — we don’t renegotiate with subcontractors.',
    image: valueFleet,
    imagePosition: '35% 50%',
    imageAlt: 'Excavator working atop a gravel mound',
  },
  {
    title: 'Schedule Certainty',
    description:
      'CPM schedules updated weekly and production tracked daily, so you see slippage before it happens — not in a claim afterward.',
    image: valueSurvey,
    imagePosition: '55% 25%',
    imageAlt: 'Surveyor running a level in front of a dozer',
  },
  {
    title: 'Built to Endure',
    description:
      'Roads, bridges, and utilities are generational infrastructure. We build to the spec, then to the standard our name demands.',
    image: valueStructure,
    imagePosition: '50% 22%',
    imageAlt: 'Concrete highway overpass structure',
  },
]

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Safety', href: '#safety' },
  { label: 'Contact', href: '#contact' },
]
