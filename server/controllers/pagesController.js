import { query } from '../config/db.js';

// Canonical section key normalization map to eliminate duplicate / repeating sections
export const CANONICAL_SECTION_ALIASES = {
  hero_banner: 'hero',
  about_hero: 'hero',
  quality_hero: 'hero',
  patients_hero: 'hero',
  contact_hero: 'hero',
  hcp_hero: 'hero',
  news_hero: 'hero',
  portfolio_header: 'hero',
  careers_hero: 'hero',
  divisions_showcase: 'areas_of_care',
  division_tabs_section: 'areas_of_care',
  corporate_mission: 'mission_vision',
  about_overview: 'about_onecore',
  quality_promise: 'quality_assurance',
  quality_highlight: 'quality_assurance',
  contact_info_cards: 'direct_channels',
  contact_form_settings: 'form_intro',
  enquiry_types: 'partnerships_section',
  guidance_cards: 'for_patients',
  patient_guidance_cards: 'for_patients',
  clinical_resources: 'for_professionals',
};

// Standard section blueprints for all site pages matching authentic frontend components
export const PAGE_SECTION_DEFAULTS = {
  'home': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Hero Banner & Core Mission',
      eyebrow: 'COMMITTED TO HEALTHCARE',
      heading: 'Prescribing a better tomorrow',
      subheading: 'Committed to clinical excellence across specialized therapeutic divisions.',
      image_url: '/assets/hero-healthcare.jpg',
      cta_text: 'Explore Areas of Care',
      cta_url: '/areas-of-care',
      secondary_cta_text: 'Contact Us',
      secondary_cta_url: '/contact'
    },
    {
      key: 'about_onecore',
      type: 'editorial',
      title: 'About Onecore Overview',
      eyebrow: 'OUR APPROACH',
      heading: 'Healthcare is personal. \nOur approach should be too.',
      subheading: 'Pioneering accessible, high-efficacy pharmaceutical solutions.',
      body: 'Onecore Pharma brings together disciplined formulation science, reliable quality oversight, and a human approach to therapy.',
      image_url: '/assets/internet/healthcare-team-discussion.jpg',
      cta_text: 'Discover Onecore',
      cta_url: '/about'
    },
    {
      key: 'areas_of_care',
      type: 'carousel',
      title: 'Areas of Care Showcase',
      eyebrow: 'THERAPEUTIC SPECIALTIES',
      heading: 'Areas of Care',
      subheading: 'Specialized formulation divisions dedicated to clinical depth and therapeutic precision.',
      body: 'Explore our complete formulation ecosystem spanning 9 dedicated medical divisions.'
    },
    {
      key: 'our_purpose',
      type: 'cards_grid',
      title: 'Our Purpose, Vision & Mission',
      eyebrow: 'CORE PURPOSE',
      heading: 'Improve care through medicines and healthcare solutions that matter.',
      items: [
        {
          title: 'Our Vision',
          desc: 'To become one of India’s most trusted healthcare companies, shaping better health and better lives through quality, innovation and purpose.'
        },
        {
          title: 'Our Mission',
          desc: 'To provide the medical fraternity with trusted medicines and innovative healthcare solutions, while empowering our people and stakeholders through intellectual, professional and financial growth.'
        }
      ]
    },
    {
      key: 'quality_assurance',
      type: 'editorial_cards',
      title: 'Quality Assurance & Standards',
      eyebrow: 'QUALITY & COMPLIANCE',
      heading: 'Quality is part of the product from the beginning.',
      subheading: 'Our approach is centered on qualified manufacturing environments, appropriate quality controls and disciplined review before products reach the market.',
      body: 'Medicines carry responsibility. That is why quality needs to be considered across manufacturing, testing, review and release, not treated as a final checkpoint.',
      image_url: '/assets/internet/lab-chemistry.jpg',
      cta_text: 'EXPLORE OUR QUALITY',
      cta_url: '/quality-manufacturing',
      items: [
        {
          title: 'Consistent standards',
          desc: 'Quality expectations aligned to the nature and regulatory requirements of each product.'
        },
        {
          title: 'Responsible release',
          desc: 'Review and controls designed to support product consistency and reliability.'
        }
      ]
    },
    {
      key: 'sustainability',
      type: 'pillars',
      title: 'Sustainability & Stewardship',
      eyebrow: 'LONG-TERM STEWARDSHIP',
      heading: 'Better health and a healthier future belong together.',
      items: [
        {
          eyebrow: 'STEP 01',
          title: 'Use resources thoughtfully.',
          desc: 'Work toward more efficient use of energy, water and materials across the operations and manufacturing network that support our products.'
        },
        {
          eyebrow: 'STEP 02',
          title: 'Reduce what is unnecessary.',
          desc: 'Evaluate packaging choices with the aim of reducing avoidable material use while protecting product quality, safety and stability.'
        },
        {
          eyebrow: 'STEP 03',
          title: 'Grow with shared standards.',
          desc: 'Build relationships with partners who share expectations around quality, compliance, ethical conduct and environmental responsibility.'
        }
      ]
    },
    {
      key: 'looking_ahead',
      type: 'numbered_grid',
      title: 'Looking Ahead Strategic Pillars',
      eyebrow: 'STRATEGIC DIRECTION',
      heading: 'Building depth. \nExpanding thoughtfully.',
      items: [
        {
          title: 'Deepen therapeutic expertise',
          desc: 'Build stronger portfolios within our core areas of care.'
        },
        {
          title: 'Strengthen medical engagement',
          desc: 'Stay closer to clinical practice and evolving healthcare needs.'
        },
        {
          title: 'Expand thoughtfully',
          desc: 'Enter new areas where the portfolio can add meaningful value.'
        },
        {
          title: 'Grow responsibly',
          desc: 'Strengthen quality, partnerships and sustainable practices as the organisation scales.'
        }
      ]
    },
    {
      key: 'news_preview',
      type: 'news_feed',
      title: 'News & Perspectives Preview',
      eyebrow: 'LATEST UPDATES',
      heading: 'News & perspectives.',
      subheading: 'Recent announcements, clinical updates, and corporate milestones.'
    },
    {
      key: 'final_cta',
      type: 'cta_banner',
      title: 'Call to Action Banner',
      heading: 'Purposeful healthcare, across every area we serve.',
      body: 'Explore the therapeutic areas and formulations that make up the Onecore portfolio.',
      cta_text: 'Explore areas of care',
      cta_url: '/areas-of-care',
      secondary_cta_text: 'Connect With Us',
      secondary_cta_url: '/contact'
    }
  ],
  'about': [
    {
      key: 'hero',
      type: 'hero',
      title: 'About Us Hero Banner',
      eyebrow: 'ABOUT ONECORE',
      heading: 'Built around clinical reality. Guided by patient trust.',
      body: 'Onecore Pharma is built around the belief that modern pharmaceutical science achieves its highest impact when aligned closely with the clinical reality of patients and doctors.',
      image_url: '/assets/about-facility.jpg'
    },
    {
      key: 'mission_vision',
      type: 'cards_grid',
      title: 'Vision & Mission',
      eyebrow: 'VISION & MISSION',
      items: [
        {
          title: 'Our Vision',
          desc: 'To become one of India’s most trusted healthcare companies, shaping better health and better lives through quality, innovation and purpose.'
        },
        {
          title: 'Our Mission',
          desc: 'To provide the medical fraternity with trusted medicines and innovative healthcare solutions, while empowering our people and stakeholders through intellectual, professional and financial growth.'
        }
      ]
    },
    {
      key: 'foundation',
      type: 'editorial_stats',
      title: 'Foundation & Clinical Impact',
      eyebrow: 'OUR FOUNDATION',
      heading: 'Our Foundation & Vision',
      body: 'At Onecore Pharma, every formulation starts with a distinct clinical question: How can this medicine make treatment more reliable, accessible, and comfortable for the patient?\n\nWe bring together rigorous research, disciplined quality oversight, and ethical supply chain standards across multi-therapeutic disciplines to serve patients and clinicians with dependable healthcare solutions.',
      image_url: '/assets/quality.jpg',
      items: [
        {
          stat: '60+',
          title: 'Prescription Formulations',
          desc: 'Formulations engineered across essential oral solids, liquids, and specialized complexes.'
        },
        {
          stat: '09',
          title: 'Therapeutic Disciplines',
          desc: 'Comprehensive portfolios spanning Gynaecology, Orthopaedics, Neurology, Pediatrics, and Oncology.'
        },
        {
          stat: '100%',
          title: 'Batch Quality Protocol',
          desc: 'Multi-tier analytical testing and disciplined batch release authorization before clinical distribution.'
        }
      ]
    },
    {
      key: 'principles',
      type: 'cards_grid',
      title: 'Foundational Principles',
      eyebrow: 'FOUNDATIONAL PRINCIPLES',
      heading: 'Principles guiding every decision.',
      image_url: '/assets/healthcare-professionals.jpg',
      items: [
        {
          title: 'Clinical Relevance',
          description: 'Focusing formulation research on real-world medical challenges, physician feedback, and patient comfort.',
          detail: 'Aligning active ingredients and pharmacokinetic profiles with physician guidance and daily regimen realities.'
        },
        {
          title: 'Uncompromising Quality',
          description: 'Treating quality as an intrinsic requirement from raw material intake through to packaging and release.',
          detail: 'Adhering to strict cGMP parameters, validated analytical testing, and comprehensive batch traceability.'
        },
        {
          title: 'Responsible Stewardship',
          description: 'Building lasting clinical partnerships and upholding ethical standards across the healthcare supply chain.',
          detail: 'Committed to ethical commercial practices, continuous pharmacovigilance, and long-term medical trust.'
        }
      ]
    },
    {
      key: 'commitments',
      type: 'cards_grid',
      title: 'Our Commitments',
      eyebrow: 'OUR COMMITMENTS',
      heading: 'Disciplined science, human focus.',
      subheading: 'Connecting clinical insight with dependable pharmaceutical manufacturing to deliver medicines people can trust.',
      image_url: '/assets/two-perspectives.jpg',
      items: [
        {
          title: 'Therapeutic Breadth',
          text: 'Developing specialized portfolios across essential medical disciplines including General Medicine, Paediatrics, ENT, Orthopaedics, and Oncology.'
        },
        {
          title: 'Formulation Integrity',
          text: 'Every batch is verified through rigorous stability testing, identity verification, and multi-stage analytical checkpoints.'
        },
        {
          title: 'Patient Centricity',
          text: 'Creating clear, transparent product information and reliable supply chains to support continuity in everyday care.'
        }
      ]
    },
    {
      key: 'final_cta',
      type: 'cta_banner',
      title: 'Call to Action Banner',
      heading: 'Explore our therapeutic specialties and quality disciplines.',
      body: 'Discover how our formulations serve diverse clinical disciplines with dependable consistency and uncompromising standards.',
      cta_text: 'Areas of Care',
      cta_url: '/areas-of-care',
      secondary_cta_text: 'Quality Standards',
      secondary_cta_url: '/quality-manufacturing'
    }
  ],
  'quality-manufacturing': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Quality & Manufacturing Hero Banner',
      eyebrow: 'QUALITY & MANUFACTURING',
      heading: 'Quality is part of the product from the beginning.',
      body: 'At Onecore Pharma, quality is not treated as a final checkpoint. It is considered throughout the product journey, from formulation and sourcing to manufacturing, testing and responsible release.',
      image_url: '/assets/quality.jpg',
      video_url: '/assets/quality-manufacturing.mp4',
      cta_text: 'Quality Principles',
      cta_url: '#principles',
      secondary_cta_text: 'Explore Formulations',
      secondary_cta_url: '/areas-of-care'
    },
    {
      key: 'principles',
      type: 'cards_grid',
      title: 'Quality Principles',
      eyebrow: 'FOUNDATIONAL PRINCIPLES',
      heading: 'Principles that guide our quality approach.',
      items: [
        {
          title: 'Consistent Standards',
          desc: 'Quality begins with clear specifications, controlled processes and consistent standards across the entire product lifecycle.'
        },
        {
          title: 'Responsible Release',
          desc: 'Products are released only after the appropriate quality requirements, testing assays, and regulatory checks have been completed.'
        },
        {
          title: 'Controlled Processes',
          desc: 'Manufacturing and quality processes are designed to support consistency, traceability and dependable clinical product performance.'
        },
        {
          title: 'Continuous Improvement',
          desc: 'We continuously look for opportunities to strengthen analytical methods, improve batch reliability and support better healthcare outcomes.'
        }
      ]
    },
    {
      key: 'manufacturing_standards',
      type: 'editorial_cards',
      title: 'Manufacturing Disciplines',
      eyebrow: 'MANUFACTURING DISCIPLINES',
      heading: 'Manufacturing with discipline and control.',
      body: 'Onecore formulations are produced in qualified manufacturing environments adhering strictly to cGMP and regulatory standards.',
      image_url: '/assets/pharma.jpg',
      items: [
        {
          title: 'Validated Processes',
          desc: 'Equipment calibration, automated dosing precision, and continuous environmental cleanroom monitoring.'
        },
        {
          title: 'Batch Traceability',
          desc: 'End-to-end documentation, analytical audit logs, and complete ingredient traceability across the supply chain.'
        }
      ]
    },
    {
      key: 'assurance_steps',
      type: 'process_steps',
      title: 'Lifecycle Controls & Assurance Steps',
      eyebrow: 'QUALITY ASSURANCE',
      heading: 'Controls throughout the lifecycle.',
      items: [
        {
          num: '01',
          title: 'Raw Material Qualification',
          desc: 'Strict supplier qualification, active ingredient assay testing, and purity validation before production batching.'
        },
        {
          num: '02',
          title: 'Formulation Integrity',
          desc: 'Precise stoichiometric blending, dissolution rate monitoring, and bio-relevance confirmation in controlled chambers.'
        },
        {
          num: '03',
          title: 'Analytical Testing',
          desc: 'HPLC assays, stability profiling across climatic zones, microbial limits testing, and particulate verification.'
        },
        {
          num: '04',
          title: 'Packaging & Release',
          desc: 'Tamper-evident primary packaging, stability-guaranteed blister sealing, and authorized Qualified Person batch release.'
        }
      ]
    }
  ],
  'patients-caregivers': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Patients & Caregivers Hero Banner',
      eyebrow: 'PATIENTS & PROFESSIONALS',
      heading: 'Patients & Caregivers',
      body: 'Patients live the experience of a health condition. Healthcare professionals bring the knowledge and judgement needed to manage it.\n\nAt Onecore, both perspectives matter. Our role is to support them with dependable products, clear information and responsible communication.',
      cta_text: 'For Patients & Families',
      cta_url: '#for-patients',
      secondary_cta_text: 'For Healthcare Professionals',
      secondary_cta_url: '#for-professionals',
      image_url: '/assets/patients-caregivers.jpg'
    },
    {
      key: 'two_perspectives',
      type: 'editorial',
      title: 'Two Perspectives Section',
      eyebrow: 'TWO PERSPECTIVES',
      heading: 'Different experiences. The same goal.',
      body: 'Good healthcare depends on understanding both the person living with a condition and the professional responsible for treating it.\n\nWe want Onecore to stay close to both. That means listening to patient needs, respecting clinical practice and making sure our products and information remain relevant to real healthcare.',
      image_url: '/assets/two-perspectives.jpg'
    },
    {
      key: 'our_role',
      type: 'cards_grid',
      title: 'Our Role & Commitments',
      eyebrow: 'OUR ROLE',
      heading: 'Listen carefully. Support responsibly. Keep the person behind the medicine in view.',
      items: [
        {
          title: 'See the person, not only the condition.',
          desc: 'The experience of living with illness or managing treatment can shape what patients need from healthcare.',
          footer: 'Patient lived experience'
        },
        {
          title: 'Value clinical judgement.',
          desc: 'Healthcare professionals bring scientific knowledge and practical experience to every treatment decision.',
          footer: 'Evidence & clinical practice'
        },
        {
          title: 'Make information easier to access.',
          desc: 'Patients and professionals should be able to find clear factual information about the products they use or prescribe.',
          footer: 'Factual product transparency'
        }
      ]
    },
    {
      key: 'for_patients',
      type: 'editorial_cards',
      title: 'For Patients and Caregivers Guidance',
      eyebrow: 'FOR PATIENTS AND CAREGIVERS',
      heading: 'You should be able to understand the medicines that are part of your care.',
      body: 'Clear information helps patients and caregivers take a more informed role in the treatment journey.\n\nOnecore provides factual information about its products and encourages patients to speak with their doctor or pharmacist when they have questions about their individual treatment.',
      cta_text: 'Product Information',
      cta_url: '/areas-of-care',
      secondary_cta_text: 'Report a Safety Concern',
      secondary_cta_url: '#patient-safety',
      image_url: '/assets/internet/compassionate-care.jpg',
      items: [
        {
          title: 'Find information about your medicine',
          desc: 'Access product names, active salt compositions, dosage forms and factual patient guidance across specialties.'
        },
        {
          title: 'Use medicines responsibly',
          desc: 'Follow the instructions provided by your healthcare professional and the clinical guide supplied with your medicine.'
        },
        {
          title: 'Share safety concerns',
          desc: 'Report a suspected side effect or product quality observation involving a Onecore product for clinical review.'
        }
      ]
    },
    {
      key: 'for_professionals',
      type: 'editorial_cards',
      title: 'For Healthcare Professionals Clinical Data',
      eyebrow: 'FOR HEALTHCARE PROFESSIONALS',
      heading: 'Supporting clinical practice with clear product information.',
      body: 'Healthcare professionals make treatment decisions by bringing together science, clinical experience and the needs of each individual patient.\n\nOur responsibility is to make accurate product information accessible and to maintain clear channels for safety and quality reporting.',
      image_url: '/assets/healthcare-professionals.jpg',
      items: [
        {
          title: 'Scientific Compositions & Dosage Forms',
          desc: 'Review product listings, active ingredients, pharmacokinetic profiles, and available delivery formats across therapeutic specialties.'
        },
        {
          title: 'Clinical Safety Reporting',
          desc: 'Submit adverse drug observations, product quality feedback, or pharmacovigilance reports directly to our safety committee.'
        },
        {
          title: 'Medical & Formulation Dialogue',
          desc: 'Connect with our medical affairs and quality assurance teams for technical product monographs, documentation, and clinical inquiries.'
        }
      ]
    },
    {
      key: 'treatment_journey',
      type: 'process_steps',
      title: 'Treatment Journey Steps',
      eyebrow: 'TREATMENT JOURNEY',
      heading: 'A prescription begins in the clinic. Care continues beyond it.',
      body: 'Healthcare professionals make treatment decisions in the clinical setting. Patients then carry those decisions into everyday life.\n\nWe believe a responsible pharmaceutical company should understand both parts of that journey and support them with medicines and information people can depend on.',
      image_url: '/assets/treatment-journey.jpg',
      items: [
        {
          stage: '01',
          title: 'Healthcare professional',
          desc: 'Clinical assessment, diagnosis and evidence-based therapeutic evaluation.'
        },
        {
          stage: '02',
          title: 'Treatment decision',
          desc: 'Selecting appropriate formulation, dosage schedule and treatment guidance.'
        },
        {
          stage: '03',
          title: 'Patient',
          desc: 'Understanding administration instructions, storage conditions and safety facts.'
        },
        {
          stage: '04',
          title: 'Everyday care',
          desc: 'Managing treatment adherence and monitoring recovery in home routine.'
        }
      ]
    },
    {
      key: 'patient_safety',
      type: 'safety_reporting',
      title: 'Patient Safety & Pharmacovigilance',
      eyebrow: 'PATIENT SAFETY & PHARMACOVIGILANCE',
      heading: 'Safety information deserves a clear way to reach us.',
      body: 'If a patient, caregiver or healthcare professional becomes aware of a suspected side effect or product quality concern involving a Onecore product, that information can be reported directly for immediate clinical review.',
      items: [
        {
          eyebrow: 'PATIENTS AND CAREGIVERS',
          title: 'Report a Patient Concern',
          desc: 'Tell us about a suspected side effect, packaging irregularity, or quality observation involving a Onecore product.'
        },
        {
          eyebrow: 'HEALTHCARE PROFESSIONALS',
          title: 'Clinical Safety Observation',
          desc: 'Submit professional drug safety feedback, adverse event reports, or therapeutic observations directly to our medical desk.'
        }
      ]
    }
  ],
  'areas-of-care': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Therapeutic Areas Hero',
      heading: 'Our medicines & areas of care.',
      body: 'Explore Onecore’s 9 specialized therapeutic divisions and over 60 clinically engineered prescription medicines, supportive therapies, and micronutrient formulations.',
      image_url: '/assets/hero-healthcare.jpg'
    },
    {
      key: 'dossier_inquiry',
      type: 'cta_card',
      title: 'Institutional Access & Dossier Inquiry',
      eyebrow: 'INSTITUTIONAL ACCESS',
      heading: 'Request Full Product Portfolio & Monographs',
      body: 'For registered medical practitioners, hospital formularies, and institutional procurement partners requiring prescribing dossiers, bioequivalence data, or commercial rate cards.'
    }
  ],
  'contact': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Contact Hero Banner',
      eyebrow: 'CONNECT WITH US',
      heading: 'Get in Touch with Onecore Pharma',
      body: 'Whether you are looking for product information, exploring a business opportunity or simply want to reach our team, we will help direct your enquiry to the appropriate place.',
      cta_text: 'Send an Enquiry',
      cta_url: '#enquiry-form',
      secondary_cta_text: 'Contact Details',
      secondary_cta_url: '#contact-details',
      image_url: '/assets/internet/contact-direct-helpline.jpg'
    },
    {
      key: 'direct_channels',
      type: 'contact_info_cards',
      title: 'Company Contact Coordinates',
      eyebrow: 'GET IN TOUCH',
      heading: 'Company Contact Coordinates',
      subheading: 'Direct channels and operational hours for healthcare professionals, patients, and partners.',
      body: 'Corporate Headquarters, Industrial Area, Hyderabad, India',
      content: {
        registered_office: 'Corporate Headquarters, Industrial Area, Hyderabad, India',
        primary_phone: '+91 40 0000 0000',
        support_email: 'contact@onecorepharma.com',
        business_email: 'business@onecorepharma.com',
        working_hours: 'Monday – Friday: 9:00 AM – 6:00 PM IST'
      },
      items: [
        { channel: 'SUPPORT EMAIL', title: 'Support Email', value: 'contact@onecorepharma.com', cta_text: 'Write to info desk', cta_url: 'mailto:contact@onecorepharma.com' },
        { channel: 'PRIMARY PHONE', title: 'Primary Phone', value: '+91 40 0000 0000', cta_text: 'Call our team', cta_url: 'tel:+914000000000' },
        { channel: 'BUSINESS HOURS', title: 'Working Hours', value: 'Monday – Friday: 9:00 AM – 6:00 PM IST', cta_text: 'WORKING DAYS // MON – SAT', cta_url: '' },
        { channel: 'BUSINESS EMAIL', title: 'Business Email', value: 'business@onecorepharma.com', cta_text: 'Email business desk', cta_url: 'mailto:business@onecorepharma.com' },
        { channel: 'REGISTERED OFFICE', title: 'Registered Office', value: 'Corporate Headquarters, Industrial Area, Hyderabad, India', cta_text: 'Headquarters', cta_url: '#contact-details' }
      ]
    },
    {
      key: 'partnerships_section',
      type: 'editorial_cards',
      title: 'Partnerships & Distribution Overview',
      eyebrow: 'Distribution & Franchise Partnerships',
      heading: 'Grow with Onecore.',
      subheading: 'We are expanding our distribution network across India and are looking to partner with pharmaceutical distributors and franchise partners who understand their markets and want to build for the long term.',
      body: 'With a growing portfolio across multiple therapeutic areas, Onecore offers partners access to relevant products, dependable supply and structured commercial support.',
      cta_text: 'Become a Onecore Partner',
      cta_url: '/partnerships',
      items: [
        {
          num: '01',
          title: 'Broad portfolio',
          description: 'Access products across multiple therapeutic areas, helping you build a more diversified business.'
        },
        {
          num: '02',
          title: 'Territory focused approach',
          description: 'Work within clearly discussed markets with a focus on sustainable product movement and growth.'
        },
        {
          num: '03',
          title: 'Better inventory planning',
          description: 'We believe in practical stock planning and consistent replenishment rather than unnecessary inventory loading.'
        },
        {
          num: '04',
          title: 'Partner support',
          description: 'Receive product information, promotional support and a dedicated point of contact for smoother day to day coordination.'
        }
      ]
    },
    {
      key: 'form_intro',
      type: 'editorial',
      title: 'Inquiry Form Introduction',
      eyebrow: 'SEND AN ENQUIRY',
      heading: 'Tell us how we can help.',
      body: 'Complete the form below and your enquiry will be directed directly to the appropriate functional team.',
      subheading: 'Please do not use this form for medical emergencies or to request individual diagnosis, treatment or changes to prescribed medicines. For personal medical advice, contact a qualified healthcare professional.'
    },
    {
      key: 'patient_safety',
      type: 'safety_banner',
      title: 'Safety Concerns & Pharmacovigilance Link',
      eyebrow: 'PATIENT SAFETY',
      heading: 'Reporting side effects and product safety observations',
      body: 'If you have a concern regarding a suspected adverse reaction or product quality issue involving a Onecore product, please visit our dedicated safety reporting channel.',
      cta_text: 'Go to Patient Safety',
      cta_url: '/patients-caregivers#patient-safety'
    }
  ],
  'partnerships': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Partnerships Hero Banner',
      eyebrow: 'GROW WITH ONECORE',
      heading: 'Distribution & Franchise Partnerships',
      body: 'We are expanding our distribution network across India and are looking to partner with pharmaceutical distributors and franchise partners who understand their markets and want to build for the long term.',
      image_url: '/assets/about-facility.jpg',
      cta_text: 'Apply for Partnership',
      cta_url: '#apply'
    },
    {
      key: 'pillars',
      type: 'cards_grid',
      title: 'Partner Advantages',
      eyebrow: 'PARTNER ADVANTAGES',
      heading: 'Why Partner with Onecore',
      subheading: 'Practical stock planning, sustainable movement, and structured commercial support.',
      items: [
        {
          title: 'Broad portfolio',
          desc: 'Access products across multiple therapeutic areas, helping you build a more diversified business.'
        },
        {
          title: 'Territory focused approach',
          desc: 'Work within clearly discussed markets with a focus on sustainable product movement and growth.'
        },
        {
          title: 'Better inventory planning',
          desc: 'We believe in practical stock planning and consistent replenishment rather than unnecessary inventory loading.'
        },
        {
          title: 'Partner support',
          desc: 'Receive product information, promotional support and a dedicated point of contact for smoother day to day coordination.'
        }
      ]
    },
    {
      key: 'network_scope',
      type: 'editorial',
      title: 'Network Criteria & Scope',
      eyebrow: 'NETWORK CRITERIA',
      heading: 'Eligibility & Capabilities',
      body: 'We look for experienced pharmaceutical distributors holding valid wholesale drug licenses and GST registrations with established market coverage in hospital or retail channels.'
    }
  ],
  'news': [
    {
      key: 'hero',
      type: 'hero',
      title: 'News & Perspectives Hero',
      eyebrow: 'NEWS & PERSPECTIVES',
      heading: 'Perspectives on Healthcare and Innovation',
      subheading: 'Stay updated on our therapeutic developments, formulation research, and corporate milestones.',
      image_url: '/assets/news-1.jpg'
    }
  ],
  'sitemap': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Site Map & Navigation Index',
      eyebrow: 'DIRECTORY & SITEMAP',
      heading: 'Site Map & Navigation Index',
      subheading: 'Explore the complete directory of Onecore Pharma platforms, divisions, formulations, and regulatory disclosures.',
      body: 'Direct access to all therapeutic area portfolios, clinical monographs, quality standards, and organizational resources across the Onecore platform.',
      image_url: '/assets/hero-healthcare.jpg'
    },
    {
      key: 'directory_info',
      type: 'editorial',
      title: 'Architecture & Directory Overview',
      eyebrow: 'INDEX OVERVIEW',
      heading: 'Comprehensive Architectural Directory',
      body: 'Structured overview of all publicly accessible routes, specialized therapeutic areas, clinical monographs, and compliance documentation.'
    }
  ],
  'privacy': [
    {
      key: 'banner',
      type: 'hero',
      title: 'Page Banner & Header',
      eyebrow: 'LEGAL & COMPLIANCE',
      heading: 'Privacy Policy',
      subheading: 'How Onecore Pharma collects, protects, and handles personal data.',
      body: 'Onecore Pharma is committed to protecting your privacy and ensuring responsible, transparent handling of all communications and interactions.',
      image_url: '/assets/about-facility.jpg',
    },
    {
      key: 'information_collection',
      type: 'editorial',
      title: '1. Information Collection',
      eyebrow: 'ARTICLE 01',
      heading: '1. Information Collection',
      body: 'Onecore Pharma collects information voluntarily submitted through our contact and inquiry forms, including names, professional affiliations, and contact details necessary to respond to product or partnership communications.',
    },
    {
      key: 'use_of_information',
      type: 'editorial',
      title: '2. Use of Information',
      eyebrow: 'ARTICLE 02',
      heading: '2. Use of Information',
      body: 'Submitted details are used solely to route inquiries to the appropriate departmental function, such as medical information, business partnerships, or customer support.',
    },
    {
      key: 'data_protection',
      type: 'editorial',
      title: '3. Data Protection & Confidentiality',
      eyebrow: 'ARTICLE 03',
      heading: '3. Data Protection & Confidentiality',
      body: 'We maintain reasonable technical and organizational standards to protect communications from unauthorized disclosure, access, or alteration.',
    }
  ],
  'disclaimer': [
    {
      key: 'banner',
      type: 'hero',
      title: 'Page Banner & Header',
      eyebrow: 'LEGAL & REGULATORY',
      heading: 'Disclaimer',
      subheading: 'Regulatory notices, medical boundaries, and conditions of website use.',
      body: 'Please review the following legal disclosures regarding medical information, product specifications, and regulatory frameworks.',
      image_url: '/assets/hero-healthcare.jpg',
    },
    {
      key: 'medical_information_notice',
      type: 'editorial',
      title: 'Medical Information Notice',
      eyebrow: 'NOTICE 01',
      heading: 'Medical Information Notice',
      body: 'The content provided on this website is for informational and educational purposes only and is not intended to replace consultation with a qualified medical professional.',
    },
    {
      key: 'product_availability',
      type: 'editorial',
      title: 'Product Availability',
      eyebrow: 'NOTICE 02',
      heading: 'Product Availability',
      body: 'Product specifications and availability are subject to local regulatory authorizations and marketed formulation guidelines.',
    }
  ],
  'healthcare-professionals': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Healthcare Professionals Hero',
      eyebrow: 'CLINICAL COLLABORATION',
      heading: 'Scientific Rigor & Clinical Partnerships',
      subheading: 'Collaborating with medical specialists across therapeutic disciplines to elevate clinical outcomes.',
      image_url: '/assets/internet/healthcare-team-discussion.jpg'
    },
    {
      key: 'clinical_resources',
      type: 'editorial_cards',
      title: 'Clinical Data & Medical Dialogue',
      eyebrow: 'CLINICAL PORTFOLIOS',
      heading: 'Evidence-Based Therapeutic Portfolios',
      subheading: 'Monographs, formulation dossiers, and bioequivalence data for clinicians.'
    }
  ],
  'careers': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Careers Hero',
      eyebrow: 'CAREERS & OPPORTUNITIES',
      heading: 'Build Your Career at Onecore',
      subheading: 'Join our passionate team advancing modern pharmaceutical development.',
      image_url: '/assets/about-facility.jpg'
    },
    {
      key: 'recruitment_contact',
      type: 'editorial',
      title: 'HR Contact Details',
      eyebrow: 'JOIN OUR TEAM',
      heading: 'HR Recruitment Coordinates',
      body: 'Submit your curriculum vitae along with your preferred therapeutic division to our corporate talent desk.',
      cta_text: 'Email Talent Team',
      cta_url: 'mailto:careers@onecorepharma.com'
    }
  ],
  'research-quality': [
    {
      key: 'hero',
      type: 'hero',
      title: 'Research & Quality Hero',
      eyebrow: 'QUALITY & COMPLIANCE',
      heading: 'Rigorous Quality Control & Analytical Testing',
      subheading: 'Adhering to strict international pharmacopoeial specifications.',
      image_url: '/assets/quality.jpg'
    },
    {
      key: 'standards_cards',
      type: 'cards_grid',
      title: 'Certifications & Accreditations',
      eyebrow: 'ACCREDITATIONS',
      heading: 'Global Quality Frameworks',
      items: [
        { title: 'cGMP Compliant', desc: 'Compliant with current Good Manufacturing Practices across all production suites.' },
        { title: 'WHO-GMP Certified', desc: 'WHO-GMP certified facilities ensuring uniform purity and bioequivalence.' },
        { title: 'GLP Laboratory Assays', desc: 'Good Laboratory Practices followed for every analytical HPLC and stability run.' }
      ]
    }
  ]
};

// Aliases
PAGE_SECTION_DEFAULTS['areas_of_care'] = PAGE_SECTION_DEFAULTS['areas-of-care'];
PAGE_SECTION_DEFAULTS['patients_caregivers'] = PAGE_SECTION_DEFAULTS['patients-caregivers'];
PAGE_SECTION_DEFAULTS['healthcare_professionals'] = PAGE_SECTION_DEFAULTS['healthcare-professionals'];
PAGE_SECTION_DEFAULTS['quality_manufacturing'] = PAGE_SECTION_DEFAULTS['quality-manufacturing'];
PAGE_SECTION_DEFAULTS['terms'] = PAGE_SECTION_DEFAULTS['disclaimer'];
PAGE_SECTION_DEFAULTS[''] = PAGE_SECTION_DEFAULTS['home'];

const KNOWN_PAGE_TEMPLATES = [
  { page_key: 'home', title: 'Home', slug: '/' },
  { page_key: 'about', title: 'About Onecore', slug: '/about' },
  { page_key: 'patients-caregivers', title: 'Patients & Caregivers', slug: '/patients-caregivers' },
  { page_key: 'healthcare-professionals', title: 'Healthcare Professionals', slug: '/healthcare-professionals' },
  { page_key: 'quality-manufacturing', title: 'Quality & Manufacturing', slug: '/quality-manufacturing' },
  { page_key: 'areas-of-care', title: 'Therapeutic Areas', slug: '/areas-of-care' },
  { page_key: 'contact', title: 'Contact', slug: '/contact' },
  { page_key: 'news', title: 'News & Perspectives', slug: '/news' },
  { page_key: 'partnerships', title: 'Distribution & Partnerships', slug: '/partnerships' },
  { page_key: 'sitemap', title: 'Site Map & Directory', slug: '/sitemap' },
  { page_key: 'privacy', title: 'Privacy Statement', slug: '/privacy' },
  { page_key: 'disclaimer', title: 'Terms of Use & Disclaimer', slug: '/disclaimer' },
  { page_key: 'careers', title: 'Careers', slug: '/careers' },
  { page_key: 'research-quality', title: 'Research & Quality', slug: '/research-quality' },
];

/**
 * Inserts a single section definition into MySQL page_sections with graceful fallback.
 */
export const insertDefaultSection = async (pageId, def, orderIndex) => {
  const secKey = def.key || def.type || `section_${orderIndex}`;
  const secType = def.type || 'editorial';
  const secTitle = def.title || def.heading || def.content?.headline || def.content?.heading || def.content?.title || secKey;
  const heading = def.heading || def.title || def.content?.headline || def.content?.heading || def.content?.title || secTitle;
  const subheading = def.subheading || def.content?.subheadline || def.content?.subtext || def.content?.lead || def.content?.subheading || null;
  const body = def.body || def.content?.body || def.content?.description || def.content?.mission || null;
  const ctaText = def.cta_text || def.content?.cta_text || null;
  const ctaUrl = def.cta_url || def.content?.cta_link || def.content?.cta_url || null;
  const secondaryCtaText = def.secondary_cta_text || def.content?.secondary_cta_text || null;
  const secondaryCtaUrl = def.secondary_cta_url || def.content?.secondary_cta_url || null;
  const imageUrl = def.image_url || def.content?.image_url || null;
  const videoUrl = def.video_url || def.content?.video_url || null;
  const contentJson = JSON.stringify(def.content || {});

  let itemsJson = null;
  if (def.items) {
    itemsJson = JSON.stringify(def.items);
  } else if (def.content?.mission && def.content?.vision) {
    itemsJson = JSON.stringify([
      { title: 'Our Mission', desc: def.content.mission },
      { title: 'Our Vision', desc: def.content.vision }
    ]);
  } else if (def.content?.stat1_val) {
    itemsJson = JSON.stringify([
      { stat: def.content.stat1_val, title: def.content.stat1_lbl || 'Metric 1' },
      { stat: def.content.stat2_val || '', title: def.content.stat2_lbl || 'Metric 2' }
    ]);
  } else if (secKey === 'contact_info_cards' || secType === 'contact_info_cards' || secKey === 'direct_channels') {
    itemsJson = JSON.stringify([
      { channel: 'SUPPORT EMAIL', title: 'Support Email', value: def.content?.support_email || 'contact@onecorepharma.com', cta_text: 'Write to info desk', cta_url: `mailto:${def.content?.support_email || 'contact@onecorepharma.com'}` },
      { channel: 'PRIMARY PHONE', title: 'Primary Phone', value: def.content?.primary_phone || '+91 40 0000 0000', cta_text: 'Call our team', cta_url: `tel:${(def.content?.primary_phone || '+914000000000').replace(/[^0-9+]/g, '')}` },
      { channel: 'BUSINESS HOURS', title: 'Working Hours', value: def.content?.working_hours || 'Monday – Friday: 9:00 AM – 6:00 PM IST', cta_text: 'WORKING DAYS // MON – SAT', cta_url: '' },
      { channel: 'BUSINESS EMAIL', title: 'Business Email', value: def.content?.business_email || 'business@onecorepharma.com', cta_text: 'Email business desk', cta_url: `mailto:${def.content?.business_email || 'business@onecorepharma.com'}` },
      { channel: 'REGISTERED OFFICE', title: 'Registered Office', value: def.content?.registered_office || 'Corporate Headquarters, Industrial Area, Hyderabad, India', cta_text: 'Headquarters', cta_url: '#contact-details' }
    ]);
  }

  try {
    await query(
      `INSERT INTO page_sections 
        (page_id, section_key, section_type, eyebrow, heading, subheading, body, cta_text, cta_url, secondary_cta_text, secondary_cta_url, image_url, display_order, is_active, items_json, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, NOW(), NOW())`,
      [
        pageId,
        secKey,
        secType,
        def.content?.eyebrow || def.eyebrow || null,
        heading || secTitle || '',
        subheading,
        body,
        ctaText,
        ctaUrl,
        secondaryCtaText,
        secondaryCtaUrl,
        imageUrl,
        orderIndex,
        itemsJson || contentJson
      ]
    );
  } catch (err) {
    // Fallback if secondary_cta_* columns are absent in older schema
    try {
      await query(
        `INSERT INTO page_sections 
          (page_id, section_key, section_type, eyebrow, heading, subheading, body, cta_text, cta_url, image_url, display_order, is_active, items_json, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, NOW(), NOW())`,
        [
          pageId,
          secKey,
          secType,
          def.content?.eyebrow || def.eyebrow || null,
          heading || secTitle || '',
          subheading,
          body,
          ctaText,
          ctaUrl,
          imageUrl,
          orderIndex,
          itemsJson || contentJson
        ]
      );
    } catch (insertErr) {
      console.warn(`Warning inserting default section "${secKey}":`, insertErr.message);
    }
  }
};

/**
 * Universal auto-seeding helper:
 * Directly inserts default modular sections into MySQL for any page that has 0 sections.
 */
export const autoSeedPageSections = async (page) => {
  if (!page || !page.id) return [];
  const cleanSlug = (page.slug || '').replace(/^\/+/, '').toLowerCase();
  const cleanKey = (page.page_key || '').replace(/^\/+/, '').toLowerCase();

  const defaults =
    PAGE_SECTION_DEFAULTS[cleanSlug] ||
    PAGE_SECTION_DEFAULTS[cleanKey] ||
    PAGE_SECTION_DEFAULTS[cleanSlug.replace(/-/g, '_')] ||
    PAGE_SECTION_DEFAULTS[cleanKey.replace(/-/g, '_')] ||
    PAGE_SECTION_DEFAULTS[cleanSlug.replace(/_/g, '-')] ||
    PAGE_SECTION_DEFAULTS[cleanKey.replace(/_/g, '-')] ||
    (cleanSlug === '' ? PAGE_SECTION_DEFAULTS['home'] : null);

  if (!defaults || defaults.length === 0) return [];

  for (let i = 0; i < defaults.length; i++) {
    await insertDefaultSection(page.id, defaults[i], i + 1);
  }

  const [newSections] = await query(
    'SELECT * FROM page_sections WHERE page_id = ? ORDER BY display_order ASC, id ASC',
    [page.id]
  );
  return newSections;
};

const setNoCacheHeaders = (res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
};

export const getPages = async (req, res, next) => {
  try {
    setNoCacheHeaders(res);

    // Auto-seed missing known pages in MySQL
    for (const t of KNOWN_PAGE_TEMPLATES) {
      const existing = await query('SELECT id FROM pages WHERE page_key = ? OR slug = ?', [t.page_key, t.slug]);
      if (!existing || existing.length === 0) {
        await query(
          'INSERT INTO pages (page_key, title, slug, status, seo_title, seo_description, created_at, updated_at) VALUES (?, ?, ?, "published", ?, ?, NOW(), NOW())',
          [t.page_key, t.title, t.slug, `${t.title} | Onecore Pharma`, `Overview and detailed information on ${t.title} at Onecore Pharma.`]
        );
      }
    }

    // Auto-seed missing sections across all pages in MySQL
    const allPages = await query('SELECT * FROM pages');
    for (const p of allPages) {
      const [secCount] = await query(
        'SELECT COUNT(*) as count FROM page_sections WHERE page_id = ?',
        [p.id]
      );
      if (secCount?.count === 0) {
        await autoSeedPageSections(p);
      }
    }

    const pages = await query(`
      SELECT p.*, COUNT(s.id) as section_count
      FROM pages p
      LEFT JOIN page_sections s ON p.id = s.page_id
      GROUP BY p.id
      ORDER BY p.id ASC
    `);
    return res.status(200).json({ success: true, data: pages });
  } catch (error) {
    next(error);
  }
};

export const getPageByKey = async (req, res, next) => {
  try {
    setNoCacheHeaders(res);
    const { key } = req.params;
    const isPublic = !req.user;

    const cleanKey = (key || '').replace(/^\/+/, '').toLowerCase();
    const formattedSlug = key.startsWith('/') ? key : `/${key}`;

    let pages = await query(
      'SELECT * FROM pages WHERE page_key = ? OR slug = ? OR slug = ? OR id = ?',
      [key, key, formattedSlug, isNaN(key) ? -1 : parseInt(key, 10)]
    );

    // If page record doesn't exist in `pages`, check known templates and auto-create parent page
    if (!pages || pages.length === 0) {
      const template = KNOWN_PAGE_TEMPLATES.find(
        (t) => t.page_key === cleanKey || t.slug === formattedSlug || t.page_key === key
      );
      if (template || PAGE_SECTION_DEFAULTS[cleanKey]) {
        const title = template?.title || cleanKey.split(/[-_]/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const slug = template?.slug || formattedSlug;
        const pageKey = template?.page_key || cleanKey;
        await query(
          'INSERT INTO pages (page_key, title, slug, status, seo_title, seo_description, created_at, updated_at) VALUES (?, ?, ?, "published", ?, ?, NOW(), NOW())',
          [pageKey, title, slug, `${title} | Onecore Pharma`, `Overview and detailed information on ${title} at Onecore Pharma.`]
        );
        pages = await query(
          'SELECT * FROM pages WHERE page_key = ? OR slug = ?',
          [pageKey, slug]
        );
      }
    }

    if (!pages || pages.length === 0) {
      return res.status(404).json({ success: false, message: 'Page not found.' });
    }

    const page = pages[0];
    let sectionSql = 'SELECT * FROM page_sections WHERE page_id = ?';
    if (isPublic) {
      sectionSql += ' AND is_active = 1';
    }
    sectionSql += ' ORDER BY display_order ASC, id ASC';

    let sections = await query(sectionSql, [page.id]);

    // Check if sections exist; if not, immediately auto-seed from blueprint directly into MySQL
    if (!sections || sections.length === 0) {
      await autoSeedPageSections(page);
      sections = await query(sectionSql, [page.id]);
    }

    // Auto-seed missing sections if blueprint has sections that don't exist yet in MySQL
    const cleanSlug = (page.slug || '').replace(/^\/+/, '').toLowerCase();
    const cleanKeyParam = (page.page_key || '').replace(/^\/+/, '').toLowerCase();
    const defaults =
      PAGE_SECTION_DEFAULTS[cleanSlug] ||
      PAGE_SECTION_DEFAULTS[cleanKeyParam] ||
      PAGE_SECTION_DEFAULTS[cleanSlug.replace(/-/g, '_')] ||
      PAGE_SECTION_DEFAULTS[cleanKeyParam.replace(/-/g, '_')] ||
      PAGE_SECTION_DEFAULTS[cleanSlug.replace(/_/g, '-')] ||
      PAGE_SECTION_DEFAULTS[cleanKeyParam.replace(/_/g, '-')] ||
      (cleanSlug === '' ? PAGE_SECTION_DEFAULTS['home'] : null);

    if (defaults && defaults.length > 0 && sections && sections.length > 0) {
      const existingKeys = new Set(
        sections.map((s) => (s.section_key || '').trim().toLowerCase())
      );
      for (const s of sections) {
        const rawKey = (s.section_key || '').trim().toLowerCase();
        const canonical = CANONICAL_SECTION_ALIASES[rawKey] || rawKey;
        existingKeys.add(canonical);
      }

      let maxOrder = Math.max(...sections.map((s) => s.display_order || 0), 0);
      let insertedAny = false;

      for (let i = 0; i < defaults.length; i++) {
        const def = defaults[i];
        const secKey = def.key || def.type || `section_${i + 1}`;
        const canonicalKey = CANONICAL_SECTION_ALIASES[secKey] || secKey;

        if (!existingKeys.has(secKey) && !existingKeys.has(canonicalKey)) {
          maxOrder++;
          await insertDefaultSection(page.id, def, maxOrder);
          existingKeys.add(secKey);
          existingKeys.add(canonicalKey);
          insertedAny = true;
        }
      }

      if (insertedAny) {
        sections = await query(sectionSql, [page.id]);
      }
    }

    // Deduplicate repeating sections (e.g., legacy aliases vs canonical keys, or duplicated section rows)
    if (sections && sections.length > 0) {
      const seenCanonical = new Map();
      const dedupedSections = [];

      for (const sec of sections) {
        const rawKey = (sec.section_key || '').trim().toLowerCase();
        const canonicalKey = CANONICAL_SECTION_ALIASES[rawKey] || rawKey;

        if (!seenCanonical.has(canonicalKey)) {
          seenCanonical.set(canonicalKey, sec);
          dedupedSections.push(sec);
        } else {
          // Compare richness: keep the one that has items_json or image_url or body
          const existingSec = seenCanonical.get(canonicalKey);
          const existingScore = (existingSec.items_json ? 2 : 0) + (existingSec.image_url ? 1 : 0) + (existingSec.body ? 1 : 0);
          const newScore = (sec.items_json ? 2 : 0) + (sec.image_url ? 1 : 0) + (sec.body ? 1 : 0);

          if (newScore > existingScore || (newScore === existingScore && sec.id > existingSec.id)) {
            const idx = dedupedSections.indexOf(existingSec);
            if (idx !== -1) {
              dedupedSections[idx] = sec;
            }
            seenCanonical.set(canonicalKey, sec);
          }
        }
      }
      sections = dedupedSections;
    }

    page.sections = sections;

    return res.status(200).json({ success: true, data: page });
  } catch (error) {
    next(error);
  }
};

export const updatePage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, slug, status, seo_title, seo_description } = req.body;

    const updates = [];
    const params = [];

    if (title !== undefined) { updates.push('title = ?'); params.push(title); }
    if (slug !== undefined) { updates.push('slug = ?'); params.push(slug); }
    if (status !== undefined) { updates.push('status = ?'); params.push(status); }
    if (seo_title !== undefined) { updates.push('seo_title = ?'); params.push(seo_title); }
    if (seo_description !== undefined) { updates.push('seo_description = ?'); params.push(seo_description); }

    if (updates.length === 0) {
      return res.status(400).json({ success: false, message: 'No fields provided.' });
    }

    params.push(id);
    await query(`UPDATE pages SET ${updates.join(', ')} WHERE id = ?`, params);

    return res.status(200).json({
      success: true,
      message: 'Page settings updated successfully.',
    });
  } catch (error) {
    next(error);
  }
};

export const createPageSection = async (req, res, next) => {
  try {
    const { pageId } = req.params;
    const {
      section_key,
      section_type,
      section_title,
      eyebrow,
      heading,
      subheading,
      body,
      items_json,
      content_json,
      cta_text,
      cta_url,
      secondary_cta_text,
      secondary_cta_url,
      image_url,
      video_url,
      display_order,
      is_active,
    } = req.body;

    if (!section_key || !section_key.trim()) {
      return res.status(400).json({ success: false, message: 'Section key identifier is required.' });
    }

    // Determine max display order if not provided
    let order = display_order;
    if (order === undefined) {
      const [maxOrder] = await query('SELECT MAX(display_order) as max_order FROM page_sections WHERE page_id = ?', [pageId]);
      order = (maxOrder?.max_order || 0) + 1;
    }

    const finalHeading = heading || section_title || '';
    const finalItemsJson = items_json !== undefined 
      ? (typeof items_json === 'object' ? JSON.stringify(items_json) : items_json) 
      : (content_json !== undefined ? (typeof content_json === 'object' ? JSON.stringify(content_json) : content_json) : null);

    const result = await query(`
      INSERT INTO page_sections 
        (page_id, section_key, section_type, eyebrow, heading, subheading, body, items_json, cta_text, cta_url, secondary_cta_text, secondary_cta_url, image_url, video_url, display_order, is_active)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      pageId,
      section_key.trim().toLowerCase().replace(/\s+/g, '_'),
      section_type || 'editorial',
      eyebrow || null,
      finalHeading,
      subheading || null,
      body || null,
      finalItemsJson,
      cta_text || null,
      cta_url || null,
      secondary_cta_text || null,
      secondary_cta_url || null,
      image_url || null,
      video_url || null,
      order,
      is_active !== undefined ? (is_active ? 1 : 0) : 1
    ]);

    setNoCacheHeaders(res);
    return res.status(201).json({
      success: true,
      message: 'Page section created successfully.',
      data: { id: result.insertId }
    });
  } catch (error) {
    next(error);
  }
};

export const updatePageSection = async (req, res, next) => {
  try {
    setNoCacheHeaders(res);
    const { id } = req.params;
    const {
      eyebrow,
      heading,
      subheading,
      body,
      items_json,
      content_json,
      section_title,
      cta_text,
      cta_url,
      secondary_cta_text,
      secondary_cta_url,
      image_url,
      image_mobile_url,
      mobile_image_url,
      video_url,
      is_active,
      display_order,
      order_index,
      section_type,
    } = req.body;

    const updates = [];
    const params = [];
    const mobileImg = image_mobile_url !== undefined ? image_mobile_url : mobile_image_url;

    if (eyebrow !== undefined) { updates.push('eyebrow = ?'); params.push(eyebrow); }
    if (heading !== undefined || section_title !== undefined) { 
      updates.push('heading = ?'); 
      params.push(heading !== undefined ? heading : section_title); 
    }
    if (subheading !== undefined) { updates.push('subheading = ?'); params.push(subheading); }
    if (body !== undefined) { updates.push('body = ?'); params.push(body); }
    if (items_json !== undefined || content_json !== undefined) {
      let val = items_json !== undefined ? items_json : content_json;
      if (typeof val === 'string') {
        try { val = JSON.parse(val); } catch {}
      }
      if (val && typeof val === 'object' && !Array.isArray(val) && mobileImg !== undefined) {
        val.image_mobile_url = mobileImg;
      }
      updates.push('items_json = ?');
      params.push(typeof val === 'object' ? JSON.stringify(val) : val);
    }
    if (cta_text !== undefined) { updates.push('cta_text = ?'); params.push(cta_text); }
    if (cta_url !== undefined) { updates.push('cta_url = ?'); params.push(cta_url); }
    if (secondary_cta_text !== undefined) { updates.push('secondary_cta_text = ?'); params.push(secondary_cta_text); }
    if (secondary_cta_url !== undefined) { updates.push('secondary_cta_url = ?'); params.push(secondary_cta_url); }
    if (image_url !== undefined) { updates.push('image_url = ?'); params.push(image_url); }
    if (video_url !== undefined) { updates.push('video_url = ?'); params.push(video_url); }
    if (is_active !== undefined) { updates.push('is_active = ?'); params.push(is_active ? 1 : 0); }
    if (display_order !== undefined || order_index !== undefined) {
      updates.push('display_order = ?');
      params.push(display_order !== undefined ? display_order : order_index);
    }
    if (section_type !== undefined) { updates.push('section_type = ?'); params.push(section_type); }

    if (updates.length === 0 && mobileImg === undefined) {
      return res.status(400).json({ success: false, message: 'No fields provided.' });
    }

    if (updates.length > 0) {
      params.push(id);
      await query(`UPDATE page_sections SET ${updates.join(', ')} WHERE id = ?`, params);
    }

    if (mobileImg !== undefined) {
      try {
        await query('UPDATE page_sections SET image_mobile_url = ? WHERE id = ?', [mobileImg, id]);
      } catch (colErr) {
        if (colErr.code === 'ER_BAD_FIELD_ERROR' || colErr.message?.includes('image_mobile_url')) {
          try {
            await query('ALTER TABLE page_sections ADD COLUMN image_mobile_url VARCHAR(255) NULL AFTER image_url');
            await query('UPDATE page_sections SET image_mobile_url = ? WHERE id = ?', [mobileImg, id]);
          } catch {}
        }
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Page section updated successfully.',
    });
  } catch (error) {
    next(error);
  }
};

export const deletePageSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    await query('DELETE FROM page_sections WHERE id = ?', [id]);
    return res.status(200).json({
      success: true,
      message: 'Page section deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};

export const reorderPageSections = async (req, res, next) => {
  try {
    const { pageId } = req.params;
    const { orderedIds } = req.body; // Array of section IDs in new order

    if (!Array.isArray(orderedIds)) {
      return res.status(400).json({ success: false, message: 'orderedIds must be an array of section IDs.' });
    }

    for (let index = 0; index < orderedIds.length; index++) {
      await query(
        'UPDATE page_sections SET display_order = ? WHERE id = ? AND page_id = ?',
        [index + 1, orderedIds[index], pageId]
      );
    }

    return res.status(200).json({
      success: true,
      message: 'Section order updated successfully.',
    });
  } catch (error) {
    next(error);
  }
};
