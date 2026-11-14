import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Layers,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import HeroResponsiveImage from '../components/HeroResponsiveImage';
import { useCmsPage } from '../hooks/useCmsPage';
import { assetUrl } from '../utils/assetUrl';
import PageSkeleton from '../components/PageSkeleton';

export default function Sitemap() {
  const { getSection, loading: cmsLoading, isError: cmsError } = useCmsPage('sitemap');

  useEffect(() => {
    document.title = 'Site Map & Architecture | Onecore Pharma';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Complete architectural site directory and navigation hierarchy for Onecore Pharma corporate website, therapeutic divisions, and clinical monographs.'
      );
    }
  }, []);

  const heroSec = getSection('hero', {
    eyebrow: 'DIRECTORY & NAVIGATION',
    title: 'Site Architecture & Directory.',
    body: 'A structured overview of all pages, specialized therapeutic divisions, clinical formulations, corporate information, and regulatory channels across Onecore Pharma.',
    image_url: '/assets/about-facility.jpg',
  });

  const directorySec = getSection('sitemap_directory', {
    title: 'Website Directory',
    body: 'Navigate directly to any section, therapeutic domain, or operational disclosure.',
  });

  const therapeuticDivisions = [
    { code: 'CYTOS', name: 'Oncology', slug: 'cytos', desc: 'Specialised therapies and supportive oncological care' },
    { code: 'FEMME', name: 'Women’s Health', slug: 'femme', desc: 'Reproductive health, fertility, and pregnancy-related nutrition' },
    { code: 'NEURIX', name: 'Neurology', slug: 'neurix', desc: 'Neuropathic care, neuro-nutrition, and CNS therapies' },
    { code: 'ORTHEON', name: 'Orthopaedics', slug: 'ortheon', desc: 'Joint mobility, bone density, and musculoskeletal care (OneFLEXO)' },
    { code: 'VELLIS', name: 'Dermatology', slug: 'vellis', desc: 'Medical dermatology, barrier restoration, and skin care' },
    { code: 'EYERIX', name: 'Ophthalmology', slug: 'eyerix', desc: 'Ocular infection, inflammation, and ocular lubrication' },
    { code: 'OTIRA', name: 'ENT', slug: 'otira', desc: 'Specialized ear, nose, and throat formulations' },
    { code: 'PEDIAPLUS', name: 'Paediatrics', slug: 'pediaplus', desc: 'Childhood therapeutic and nutritional formulations' },
    { code: 'OMNARA', name: 'General Medicine', slug: 'omnara', desc: 'Everyday therapeutics, anti-infectives, and GI care' },
  ];

  const primaryPages = [
    { name: 'Home', path: '/', desc: 'Corporate introduction, mission, 9 therapeutic areas, and quality statement' },
    { name: 'About Onecore', path: '/about', desc: 'Corporate foundation, Vision & Mission, leadership philosophy, and ethical commitments' },
    { name: 'Quality & Manufacturing', path: '/quality-manufacturing', desc: 'cGMP facilities, 6-step lifecycle assurance, analytical testing, and release protocols' },
    { name: 'Patients & Caregivers', path: '/patients-caregivers', desc: 'Treatment journey, caregiver guidance, informed prescription usage, and pharmacovigilance' },
    { name: 'Areas of Care', path: '/areas-of-care', desc: 'Comprehensive portfolio of 9 therapeutic divisions and 60+ clinically engineered medicines' },
    { name: 'Distribution & Partnerships', path: '/partnerships', desc: 'Franchise partnerships, territory exclusivity, supply consistency, and commercial inquiry' },
    { name: 'News & Perspectives', path: '/news', desc: 'Formulation research updates, clinical milestones, and corporate perspective articles' },
    { name: 'Contact Us', path: '/contact', desc: 'Corporate headquarters, direct helpline, department routing, and official enquiry form' },
  ];

  const legalAndCompliance = [
    { name: 'Privacy Statement', path: '/privacy', desc: 'Data handling, voluntary communications, and confidentiality principles' },
    { name: 'Terms of Use & Disclaimer', path: '/disclaimer', desc: 'Medical information notice, regulatory boundaries, and website terms' },
    { name: 'Patient Safety & Reporting', path: '/patients-caregivers#patient-safety', desc: 'Direct adverse event observation and product quality reporting desk' },
    { name: 'XML Sitemap (for Crawlers)', path: '/sitemap.xml', desc: 'Machine-readable search engine index file', isExternal: true },
  ];

  if (cmsLoading && !cmsError) {
    return <PageSkeleton />;
  }

  return (
    <div className="w-full bg-transparent text-[#121212] overflow-x-hidden">
      {/* =========================================================================
          SECTION 1 — EDITORIAL HERO
          ========================================================================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-end pb-16 sm:pb-20 pt-32 px-4 sm:px-8 lg:px-12 bg-black">
        <div className="absolute inset-0 z-0">
          <HeroResponsiveImage
            desktopImage={heroSec.image_url}
            mobileImage={heroSec.image_mobile_url || heroSec.mobile_image_url}
            alt="Onecore Pharma website architecture and sitemap"
            fallback="/assets/about-facility.jpg"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6 sm:space-y-8">
          <ScrollReveal>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D52B1E] font-bold block">
              {heroSec.eyebrow || 'DIRECTORY & NAVIGATION'}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.05] max-w-4xl pt-2">
              {heroSec.title ? (
                heroSec.title.includes('\n') ? (
                  <>
                    {heroSec.title.split('\n')[0]} <br />
                    <span className="italic font-normal text-[#D52B1E]">{heroSec.title.split('\n').slice(1).join(' ')}</span>
                  </>
                ) : (
                  heroSec.title
                )
              ) : (
                <>
                  Site Architecture <br />
                  <span className="italic font-normal text-[#D52B1E]">&amp; Directory.</span>
                </>
              )}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-base sm:text-xl text-white/90 font-light leading-relaxed font-sans max-w-3xl">
              {heroSec.body || 'A structured overview of all pages, specialized therapeutic divisions, clinical formulations, corporate information, and regulatory channels across Onecore Pharma.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — SITEMAP DIRECTORY (3 STRUCTURED PILLARS)
          ========================================================================= */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Category 1: Main Platform Pages */}
        <div className="space-y-8">
          <div className="border-b border-[#E5E3DC] pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D52B1E] uppercase tracking-wider block">
                CATEGORY 01
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#121212] tracking-tight pt-1">
                Primary Platform Pages
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
              {primaryPages.length} Pages
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryPages.map((pg, idx) => (
              <ScrollReveal key={pg.path} delay={idx * 0.04}>
                <Link
                  to={pg.path}
                  className="group bg-white/80 hover:bg-white backdrop-blur-xs border border-[#E5E3DC] hover:border-[#121212] p-6 sm:p-7 rounded-3xl h-full flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-stone-400 group-hover:text-[#D52B1E] transition-colors font-medium">
                        0{idx + 1}
                      </span>
                      <ArrowRight size={14} className="text-stone-300 group-hover:text-[#D52B1E] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#121212] group-hover:text-[#D52B1E] transition-colors">
                      {pg.name}
                    </h3>
                    <p className="text-xs text-[#555555] font-light leading-relaxed font-sans">
                      {pg.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-mono text-stone-400">
                    {pg.path}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Category 2: 9 Specialized Therapeutic Divisions */}
        <div className="space-y-8">
          <div className="border-b border-[#E5E3DC] pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D52B1E] uppercase tracking-wider block">
                CATEGORY 02
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#121212] tracking-tight pt-1">
                Therapeutic Divisions (Areas of Care)
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
              9 Specialized Divisions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapeuticDivisions.map((div, idx) => (
              <ScrollReveal key={div.code} delay={idx * 0.04}>
                <Link
                  to={`/areas-of-care/${div.slug}`}
                  className="group bg-white/80 hover:bg-white backdrop-blur-xs border border-[#E5E3DC] hover:border-[#D52B1E] p-6 sm:p-7 rounded-3xl h-full flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#D52B1E]">
                        {div.code}
                      </span>
                      <span className="text-xs font-mono text-stone-400">DIV 0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#121212] group-hover:text-[#D52B1E] transition-colors">
                      {div.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed font-sans">
                      {div.desc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs text-[#D52B1E] font-semibold">
                    <span>View Division Monographs</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Category 3: Governance, Regulatory & Legal */}
        <div className="space-y-8">
          <div className="border-b border-[#E5E3DC] pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D52B1E] uppercase tracking-wider block">
                CATEGORY 03
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#121212] tracking-tight pt-1">
                Governance, Safety &amp; Legal Disclosures
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
              Regulatory Standards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalAndCompliance.map((item, idx) => (
              <ScrollReveal key={item.path} delay={idx * 0.05}>
                {item.isExternal ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-stone-50 hover:bg-stone-100 border border-[#E5E3DC] p-6 rounded-3xl h-full flex flex-col justify-between space-y-4 transition-all duration-300"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#0D5C75] font-semibold">XML FEED</span>
                        <ExternalLink size={13} className="text-stone-400 group-hover:text-[#0D5C75]" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-[#121212]">{item.name}</h3>
                      <p className="text-xs text-[#555555] font-light leading-relaxed font-sans">{item.desc}</p>
                    </div>
                    <span className="text-[11px] font-mono text-stone-400">{item.path}</span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="group bg-white/80 hover:bg-white border border-[#E5E3DC] hover:border-[#121212] p-6 rounded-3xl h-full flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#D52B1E] font-semibold">LEGAL &amp; SAFETY</span>
                        <ArrowRight size={13} className="text-stone-300 group-hover:text-[#D52B1E] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-[#121212] group-hover:text-[#D52B1E] transition-colors">{item.name}</h3>
                      <p className="text-xs text-[#555555] font-light leading-relaxed font-sans">{item.desc}</p>
                    </div>
                    <span className="text-[11px] font-mono text-stone-400">{item.path}</span>
                  </Link>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
