// ═══ LOCAL COMPETITORS ══════════════════════════════════════════════════════
export interface LocalCompetitor {
  id: number
  name: string
  domain: string
  type: string
  threat: 'CRITICAL' | 'HIGH' | 'MED'
  locations: string
  notes: string
}

export const LOCAL_COMPETITORS: LocalCompetitor[] = [
  { id: 1,  name: 'Orthogen Care',        domain: 'orthogencare.com',        type: 'Brand Cannibalization',    threat: 'CRITICAL', locations: 'Ernakulam/Kochi',         notes: 'SAME DOCTOR (Dr. Vineeth MB) — appears on identical SERPs as regencare.in. #1 priority: no other fix delivers ROI until this is resolved.' },
  { id: 2,  name: 'DermaVue',             domain: 'dermavue.com',            type: 'Kerala Clinic Chain',      threat: 'HIGH',     locations: '7 clinics Kerala+TN',      notes: '7 clinics, 4.8★/1,438 reviews. #1 for GFC Kochi. 4,900-word pages with schema. Regencare ranks #9 — content depth is the gap.' },
  { id: 3,  name: 'Oliva Clinic',         domain: 'olivaclinic.com',         type: 'National Hair Chain',      threat: 'HIGH',     locations: 'Pan-India',                notes: '4.9★/1,475 reviews, 109K+ procedures. Dominates hair loss Kochi SERPs. National chain with 115 MD dermatologists.' },
  { id: 4,  name: 'Cutis International',  domain: 'cutisinternational.com',  type: 'International Chain',      threat: 'HIGH',     locations: 'Kerala+UAE+UK',            notes: 'UAE+UK presence competes directly in Regencare\'s NRI medical tourism segment. 20+ hair services, celebrity endorsements.' },
  { id: 5,  name: 'La Densitae',          domain: 'ladensitae.com',          type: 'Hair Chain',               threat: 'MED',      locations: '13 branches India+Dubai',  notes: '13+ branches + Dubai. Ranks for GFC and hair transplant. No named doctors on pages — E-E-A-T weakness Regencare can exploit.' },
  { id: 6,  name: 'Zaaya Skin Clinic',    domain: 'zaayaskinclinic.com',     type: 'Local Kochi',              threat: 'MED',      locations: 'Kochi (3 locations)',      notes: 'Strong local GFC content, #3 for GFC Kochi. No pricing, no named credentials — both are exploitable gaps.' },
  { id: 7,  name: 'DHI International',    domain: 'dhiinternational.com',    type: 'Global Hair Brand',        threat: 'MED',      locations: 'Global — Kochi branch',    notes: 'Global brand, #1 IMRB for hair transplant. Limited overlap — Regencare USP is ortho regen, not cosmetic transplant.' },
  { id: 8,  name: 'DH Clinic',            domain: 'dh-clinic.com',           type: 'Ortho+Stem Cell',          threat: 'MED',      locations: 'Kerala (multi-branch)',    notes: 'ONLY India clinic with Surecell Australia affiliation for regen medicine — low online authority but unique credentialing claim.' },
  { id: 9,  name: 'Hair Wellness Clinic', domain: 'hairwellnessclinic.com',  type: 'Hair Specialist',          threat: 'MED',      locations: 'Kerala',                   notes: 'Specialist GFC/hair. Low authority, thin content — outranking feasible with one well-structured GFC page.' },
  { id: 10, name: 'Epione Pain Centre',   domain: 'paincentre.in',           type: 'Pain & Regen',             threat: 'MED',      locations: 'Kerala',                   notes: '7yr Kerala PRP+Stem Cell+Prolotherapy — direct ortho regen overlap. Low DA. Easy to outrank with targeted content.' },
  // ── KOCHI DERMATOLOGY COMPETITORS ────────────────────────────────────────────
  { id: 18, name: 'Skinessence',                           domain: 'skinessence.co.in',              type: 'Local Kochi Derma',        threat: 'HIGH',     locations: 'Kadavanthra, Kochi',          notes: 'Board-cert dermatologist Dr Annu Jayan (20+ yrs). 25,000+ patients. Strong cluster: acne/PRP/GFC/RF microneedling/anti-aging. Clear cost estimates — Regencare needs to match transparency.' },
  { id: 19, name: 'VPS Lakeshore Dermatology',             domain: 'vpslakeshorehospital.com',       type: 'Hospital-Based Derma',     threat: 'HIGH',     locations: 'Kochi (NH-Bypass)',           notes: 'Multi-specialty hospital dermatology. Dr. Abin Abraham Itty heads dept (PRP, lasers, injectables). Strong domain authority. Outranks for hospital-derma searches in Kochi.' },
  { id: 20, name: 'Renai Medicity Derma',                  domain: 'renaimedicity.org',              type: 'Hospital-Based Derma',     threat: 'MED',      locations: 'Kochi (Palavattom)',          notes: 'Mid-tier hospital derma — wider service mix (psoriasis, vitiligo, eczema, acne). Cross-referrals from rheumatology/cosmetic surgery. Domain authority advantage over standalone clinics.' },
  { id: 21, name: 'Aster Medcity Dermatology',             domain: 'asterhospitals.in',              type: 'Hospital-Based Derma',     threat: 'HIGH',     locations: 'Kochi (Kuttisahib Rd)',       notes: "Aster brand power. Multiple consultants. Comprehensive derma + cosmetology offering. Outranks Regencare on 'best skin clinic Kochi' due to domain DA. Can't outrank — must niche down." },
  { id: 22, name: 'Amrita Hospitals Derma & Cosmetology',  domain: 'amritahospitals.org',            type: 'Hospital-Based Derma',     threat: 'HIGH',     locations: 'Kochi (Edappally)',           notes: "Amrita's massive domain authority. Soprano ICE Platinum laser + diode laser (premium kit). CO2 laser, Botox, fillers, PRP. Hospital trust + cosmetology bundle is hard to outrank." },
  { id: 23, name: 'Skin Lab Kochi (Dr Jamuna Pai)',         domain: 'blushclinics.com',               type: 'Celebrity Brand Derma',    threat: 'MED',      locations: 'Panampilly Nagar, Kochi',     notes: "Celebrity dermatologist Dr Jamuna Pai's franchise. Brand pull from media exposure. PRP/PRR/anti-aging focus. Premium pricing but loyal customer base." },
  { id: 24, name: 'Doctors Aesthetics Centre',             domain: 'doctorsaestheticscentre.com',    type: 'Local Kochi Derma',        threat: 'MED',      locations: 'MG Road, Ernakulam',          notes: 'Independent aesthetics practice. PRP, laser, anti-aging. Lower web authority. Easy to outrank with structured content + better location signals.' },
  { id: 25, name: 'Skin & Sculpt Clinic',                  domain: 'skinandsculpt.in',               type: 'Local Kochi Derma',        threat: 'MED',      locations: 'MG Road, Kochi',              notes: 'Aesthetic-focused clinic — body sculpting + skin. Mid-tier presence. Underutilized SEO — Regencare can outrank with stronger content depth.' },
  // ── CALICUT DERMATOLOGY COMPETITORS ──────────────────────────────────────────
  { id: 26, name: 'Lisa Skin Clinic',                      domain: 'lisaskinclinic.com',             type: 'Local Calicut Derma',      threat: 'HIGH',     locations: 'Calicut',                     notes: 'Dr Jenny Mathew (chief dermatologist). Premium positioning — Deka Punto CO2 laser, Cool Peel + Exosome Therapy, Scar Clinic. Strong patient testimonials. #1 Calicut derma SERP threat.' },
  { id: 27, name: 'Nahas Skin Clinic',                     domain: 'nahasskinclinic.com',            type: 'Local Calicut Derma',      threat: 'HIGH',     locations: 'Calicut',                     notes: 'Dr Shiraz Naha (15 yrs). Associate Professor at KMCT Medical College — strong E-E-A-T. Q-switch + laser toning specialist. Indian skin types focus. Direct Calicut competitor.' },
  { id: 28, name: 'MICAA',                                 domain: 'micaa.in',                       type: 'Local Calicut Derma',      threat: 'MED',      locations: 'Calicut',                     notes: '20+ years derma team. Strong cluster: tattoo removal, carbon peel, LHR. Clean modern site. Underutilized E-E-A-T — beatable with named credentials.' },
  { id: 29, name: "Dr Lasi's Skin & Hair Clinic",          domain: 'drlasisskinclinic.com',          type: 'Local Calicut Derma',      threat: 'MED',      locations: 'Mankave, Kozhikode',          notes: '16+ yrs experience. North Kerala derma + FUE hair transplant. Mid-authority site. Niche scope — beatable with broader regenerative angle.' },
  { id: 30, name: 'Aster MIMS Calicut Derma',              domain: 'asterhospitals.in',              type: 'Hospital-Based Derma',     threat: 'HIGH',     locations: 'Calicut',                     notes: 'Aster brand carryover from Kochi. Dr Rakhesh SV + Dr Preethi Cheriyan + Dr Lasida Ali (hair transplant). Multi-specialist team. Hospital DA advantage hard to beat. [Shares domain with Aster Medcity #21]' },
  { id: 31, name: 'PVS Sunrise Hospital Derma',            domain: 'pvssunrisehospital.com',         type: 'Hospital-Based Derma',     threat: 'MED',      locations: 'Calicut (Palayam)',           notes: 'Hospital derma + weight loss/lifestyle bundle. Dr Laxmi V Nair (54 yrs experience — high E-E-A-T). Affordable positioning vs premium clinics.' },
  { id: 32, name: 'IQRAA Hospital Derma',                  domain: 'iqraahospital.in',               type: 'Hospital-Based Derma',     threat: 'MED',      locations: 'Calicut',                     notes: 'Hospital derma — broad clinical scope (acne, psoriasis, eczema, alopecia, fungal). Microdermabrasion, electrocautery, phototherapy. Mid-tier authority but local trust strong.' },
  { id: 33, name: 'Dermis (Criniere)',                     domain: 'dermishairandskin.com',          type: 'Local Calicut Derma',      threat: 'MED',      locations: 'Calicut',                     notes: 'Hair transplant + PRP/Biotin PRP/GFC + skin services. New entrant but aggressive content marketing. Direct Regencare GFC competitor in Calicut.' },
  { id: 34, name: 'Revive Skin Clinics',                   domain: 'reviveskinclinics.com',          type: 'Local Calicut Derma',      threat: 'MED',      locations: 'Nadakkav, Kozhikode',         notes: 'Board-certified derma team. PRP/hair transplant/laser/STD screening. Broad scope. Site has weaker SEO — beatable with focused regenerative content.' },
  // ── CHENNAI COMPETITORS ────────────────────────────────────────────────────────
  { id: 35, name: 'Regen Institute of Orthopaedics (RIO)', domain: 'regenorthocare.com',             type: 'Sports & Regen Ortho',     threat: 'CRITICAL', locations: 'Chennai (Alwarpet)',          notes: "Tamil Nadu's first stem cell culture lab. Dr Lakshmi Naathan — Sports + Regen specialist. Direct competitor on regen-ortho searches. Outranks for 'stem cell knee Chennai' cluster." },
  { id: 36, name: 'Tosh Hospital Stem Cell Centre',        domain: 'toshhospitals.com',              type: 'Hospital-Based Regen',     threat: 'HIGH',     locations: 'Chennai',                     notes: "Stem cell + PRP for orthopedics. Hospital authority. Pushes 'No.1 stem cell hospital Chennai' positioning. Strong local SERP for joint pain/AVN/knee." },
  { id: 37, name: 'Dr A K Venkatachalam (Orthobiologic Surgery)', domain: 'orthobiologicsurgeryindia.com', type: 'Specialist Solo Practice', threat: 'MED', locations: 'Chennai',             notes: 'Solo specialist. PRP, MSCs, SVF, BMAC — breadth matches Regencare. Strong content on technical orthobiology. Lower domain authority but technical SEO is solid.' },
  { id: 38, name: 'Apollo Cosmetic Clinics',               domain: 'apollocosmeticclinics.com',      type: 'Hospital Cosmetic Chain',  threat: 'CRITICAL', locations: 'Chennai (multi)',              notes: 'Apollo brand power. Multi-branch Chennai. Acne, lasers, PRP, anti-aging. Massive domain authority. Cannot outrank head-on — niche down.' },
  { id: 39, name: 'Kosmoderma Clinics Chennai',            domain: 'kosmoderma.com',                 type: 'National Derma Chain',     threat: 'HIGH',     locations: 'Chennai (multi)',              notes: 'Premium dermatology chain. Dr Chytra (national figure). PICO laser, Ultherapy, RF microneedling, fillers. Multi-city — cross-pollinates Chennai SERPs.' },
  { id: 40, name: 'Mahi Skin, Hair & Laser Clinic',        domain: 'mahiskinhairandlaserclinic.com', type: 'Local Chennai Derma',      threat: 'MED',      locations: 'Kilpauk + Sowcarpet, Chennai', notes: 'Dr Deepika Lunawat. PICO + Q-switch laser specialist for pigmentation. Strong on-site content for hyperpigmentation cluster. Beatable with broader regen angle.' },
  { id: 41, name: 'Kaya Clinic Chennai',                   domain: 'kayaclinic.com',                 type: 'National Derma Chain',     threat: 'HIGH',     locations: 'Chennai (multi)',              notes: 'National chain — T Nagar, Nungambakkam branches. PRP, botox, fillers, fairness peels, LHR. Brand recognition strong. Outranks on broad derma searches.' },
  { id: 42, name: 'Render Skin & Hair Clinic',             domain: 'renderskinandhairrclinic.com',   type: 'Local Chennai Derma',      threat: 'MED',      locations: 'Chennai',                     notes: 'Evidence-based derma positioning. New entrant — aggressive content marketing. Watch for SERP gains in 6-12 months.' },
  // ── TRIVANDRUM / OTHER ────────────────────────────────────────────────────────
  { id: 43, name: 'Skinessence Trivandrum / Ananthapuri Derma', domain: 'ananthapurhospitals.com',  type: 'Hospital-Based Derma',     threat: 'MED',      locations: 'Trivandrum',                  notes: 'Trivandrum hospital derma. Lower threat to Kochi/Calicut/Chennai but matters for Kerala-state SERPs. Catches NRI medical tourism south Kerala.' },
  { id: 44, name: 'Shri Bone & Joint Clinic (SBJ Ortho)',  domain: 'sbjortho.com',                  type: 'Specialist Solo Practice', threat: 'MED',      locations: 'Chennai',                     notes: "Dr Shriram Krishnamoorthy. Stem cell knee injections specialty. Niche orthopedic regen. Direct overlap with Regencare's ortho-regen positioning in Chennai." },
]

// ═══ HOSPITAL COMPETITORS ════════════════════════════════════════════════════
export interface HospitalCompetitor {
  id: number
  name: string
  domain: string
  type: string
  da: number
  locations: string
  focus: string
  wordCount: number
  h2Count: number
  schema: string
  faq: string
  doctorCredentials: string
  backlinkProfile: string
  eeat: string
  notes: string
}

export const HOSPITAL_COMPETITORS: HospitalCompetitor[] = [
  { id: 11, name: 'Apollo Hospitals',       domain: 'apollohospitals.com',     type: 'National Hospital Chain',         da: 72, locations: 'Pan-India + International',  focus: 'Regrow Cell Therapy — DCGI-approved (OSSGROW, CARTIGROW) for cartilage and bone',                          wordCount: 1300, h2Count: 12, schema: 'Strong',  faq: 'Yes', doctorCredentials: 'Named specialists with profiles',       backlinkProfile: 'Very High', eeat: 'Very High', notes: 'DCGI-approved branded treatments (OSSGROW, CARTIGROW) — no other competitor can claim this. Breadcrumb schema + location pages for every city.' },
  { id: 12, name: 'Apollo Spectra',         domain: 'apollospectra.com',       type: 'Hospital (Apollo Group)',          da: 65, locations: 'Pan-India, Tier 2 cities',   focus: 'Regrow Stem Cell Therapy for Bones and Cartilage — proprietary branded treatment',                          wordCount: 1300, h2Count: 12, schema: 'Strong',  faq: 'Yes', doctorCredentials: 'Linked specialist profiles',            backlinkProfile: 'Very High', eeat: 'Very High', notes: 'Same Apollo brand authority. Dedicated Spectra brand for Tier-2 cities. Strong breadcrumb + MedicalProcedure schema. Treatment structured as: overview→who qualifies→how→benefits→risks→FAQ.' },
  { id: 13, name: 'Manipal Hospitals',      domain: 'manipalhospitals.com',    type: 'National Hospital Chain',         da: 70, locations: 'Pan-India + International',  focus: 'Blog: Stem Cell Therapy in Orthopaedics — educational, research-backed, clinical tone',                      wordCount: 1300, h2Count:  7, schema: 'Strong',  faq: 'Yes', doctorCredentials: 'Dr. Lokesh A Veerappa — named on page', backlinkProfile: 'Very High', eeat: 'Very High', notes: 'Doctor-authored blog with PubMed citation — gold standard E-E-A-T signal. 40+ hospital locations = massive internal linking. Named doctor on every page.' },
  { id: 14, name: 'Kokilaben Hospital',     domain: 'kokilabenhospital.com',   type: 'Super-Speciality Hospital',        da: 62, locations: 'Mumbai (National reach)',    focus: 'Comprehensive PRP page — 2,100 words, 9 H2 sections, treatment comparison table',                           wordCount: 2100, h2Count:  9, schema: 'Strong',  faq: 'Yes', doctorCredentials: 'Named physicians, 10+ years experience', backlinkProfile: 'High',      eeat: 'Very High', notes: 'Strongest PRP page structure found: 9 H2s, treatment comparison table (PRP vs. others), \'Why choose us\' section, ultrasound-guided procedure mentioned.' },
  { id: 15, name: 'Stem Cell Care India',   domain: 'stemcellcareindia.com',   type: 'Dedicated Stem Cell Centre',       da: 44, locations: 'Delhi (International)',       focus: '8,000+ word homepage, 50+ conditions, international patient guide, GMP lab, NABH',                            wordCount: 8000, h2Count:  9, schema: 'Strong',  faq: 'Yes', doctorCredentials: 'Stem Cell Scientists (team reference)',  backlinkProfile: 'Medium',    eeat: 'High',      notes: '8,000+ word homepage — most comprehensive stem cell content indexed. International patient guide, multi-country pages, GMP lab credentials. 50+ conditions = enormous long-tail keyword coverage.' },
  { id: 16, name: 'RegenOrthoSport',        domain: 'regenorthosport.in',      type: 'Regen Ortho Clinic',               da: 32, locations: 'Hyderabad, Mumbai, Bangalore, Dallas', focus: 'Stem Cell + HCP Therapy for knee — 1,800 words, 4 named doctors, IOF member',                      wordCount: 1800, h2Count: 12, schema: 'Partial', faq: 'Yes', doctorCredentials: 'Dr. Venkatesh Movva + 3 specialists',   backlinkProfile: 'Medium',    eeat: 'High',      notes: 'Multi-city presence + Dallas (USA) = cross-border medical tourism SEO. IOF member badge. Named 4 doctors with specialties. Knee-specific HCP Therapy + Stem Cell — two treatment pages for one condition.' },
  { id: 17, name: 'Chaitanya Stem Cell',    domain: 'chaitanyastemcell.com',   type: 'Dedicated Stem Cell Centre',       da: 28, locations: 'Pune (National reach)',       focus: '3,500-word OA treatment page — academic citations (6 PubMed), condition-specific structure',               wordCount: 3500, h2Count:  7, schema: 'Partial', faq: 'Yes', doctorCredentials: 'Dr. Anant Bagul — Orthopedician Pune',  backlinkProfile: 'Low',       eeat: 'Medium',    notes: '6 PubMed academic citations on condition page — highest research authority signal found. Named orthopedician. Condition → Symptoms → Treatment → FAQ structure.' },
]

// ═══ KEYWORD RANKING MAP ═════════════════════════════════════════════════════
export interface RankingKeyword {
  keyword: string
  volume: number
  intent: string
  cluster: string
}

export const RANKING_KEYWORDS: RankingKeyword[] = [
  { keyword: 'stem cell therapy Kerala',                  volume: 480,  intent: 'Commercial',  cluster: 'Regen — Kerala' },
  { keyword: 'stem cell treatment knee India',            volume: 390,  intent: 'Commercial',  cluster: 'Regen — National' },
  { keyword: 'regenerative medicine India',               volume: 720,  intent: 'Commercial',  cluster: 'Regen — National' },
  { keyword: 'PRP treatment Kerala',                      volume: 1600, intent: 'Commercial',  cluster: 'PRP — Kerala' },
  { keyword: 'GFC therapy Kochi',                         volume: 1300, intent: 'Commercial',  cluster: 'GFC — Kochi' },
  { keyword: 'hair loss treatment Kochi',                 volume: 2400, intent: 'Commercial',  cluster: 'Hair — Kochi' },
  { keyword: 'knee pain treatment without surgery',       volume: 720,  intent: 'Commercial',  cluster: 'Ortho — Kerala' },
  { keyword: 'best stem cell hospital India',             volume: 590,  intent: 'Transact.',   cluster: 'Regen — National' },
  { keyword: 'stem cell therapy cost India',              volume: 480,  intent: 'Transact.',   cluster: 'Conversational' },
  { keyword: 'PRP for knee pain India',                   volume: 320,  intent: 'Commercial',  cluster: 'PRP — National' },
  { keyword: 'regenerative medicine Kochi',               volume: 170,  intent: 'Navigat.',    cluster: 'Regen — Kochi' },
  { keyword: 'stem cell treatment Kochi',                 volume: 140,  intent: 'Commercial',  cluster: 'Regen — Kochi' },
  { keyword: 'non-surgical knee treatment Kerala',        volume: 170,  intent: 'Commercial',  cluster: 'Ortho — Kerala' },
  { keyword: 'GFC therapy cost Kerala',                   volume: 170,  intent: 'Transact.',   cluster: 'Conversational' },
  { keyword: 'hair transplant Kochi',                     volume: 1900, intent: 'Transact.',   cluster: 'Hair — Kochi' },
  // ── KOCHI DERMATOLOGY & ORTHO KEYWORDS ────────────────────────────────────────
  { keyword: 'hair fall treatment Kochi',                 volume: 3900, intent: 'Commercial',  cluster: 'Hair — Kochi' },
  { keyword: 'acne scar treatment Kochi',                 volume: 880,  intent: 'Commercial',  cluster: 'Derma — Kochi' },
  { keyword: 'melasma treatment Kochi',                   volume: 880,  intent: 'Commercial',  cluster: 'Derma — Kochi' },
  { keyword: 'laser hair removal Kochi',                  volume: 2900, intent: 'Commercial',  cluster: 'Derma — Kochi' },
  { keyword: 'pcos laser treatment Kochi',                volume: 220,  intent: 'Commercial',  cluster: 'Derma — Kochi' },
  { keyword: 'PRP for hair Kochi',                        volume: 1000, intent: 'Commercial',  cluster: 'PRP — Kochi' },
  { keyword: 'anti aging treatment Kochi',                volume: 590,  intent: 'Commercial',  cluster: 'Derma — Kochi' },
  { keyword: 'Botox treatment Kochi',                     volume: 310,  intent: 'Commercial',  cluster: 'Derma — Kochi' },
  { keyword: 'tattoo removal Kochi',                      volume: 880,  intent: 'Commercial',  cluster: 'Derma — Kochi' },
  { keyword: 'knee pain treatment Kochi',                 volume: 880,  intent: 'Commercial',  cluster: 'Ortho — Kochi' },
  { keyword: 'PRP injection Kochi',                       volume: 720,  intent: 'Commercial',  cluster: 'PRP — Kochi' },
  { keyword: 'sports injury clinic Kochi',                volume: 390,  intent: 'Commercial',  cluster: 'Ortho — Kochi' },
  { keyword: 'non-surgical knee Kochi',                   volume: 265,  intent: 'Commercial',  cluster: 'Ortho — Kochi' },
  { keyword: 'BMAC therapy Kerala',                       volume: 140,  intent: 'Commercial',  cluster: 'Regen — Kerala' },
  // ── CALICUT KEYWORDS ──────────────────────────────────────────────────────────
  { keyword: 'best dermatologist Calicut',                volume: 1000, intent: 'Navigat.',    cluster: 'Derma — Calicut' },
  { keyword: 'acne scar treatment Calicut',               volume: 320,  intent: 'Commercial',  cluster: 'Derma — Calicut' },
  { keyword: 'pcos laser Calicut',                        volume: 200,  intent: 'Commercial',  cluster: 'Derma — Calicut' },
  { keyword: 'PRP hair Calicut',                          volume: 220,  intent: 'Commercial',  cluster: 'PRP — Calicut' },
  { keyword: 'hair transplant Calicut',                   volume: 520,  intent: 'Transact.',   cluster: 'Hair — Calicut' },
  { keyword: 'knee pain doctor Calicut',                  volume: 880,  intent: 'Commercial',  cluster: 'Ortho — Calicut' },
  { keyword: 'knee pain treatment Calicut',               volume: 880,  intent: 'Commercial',  cluster: 'Ortho — Calicut' },
  { keyword: 'regenerative medicine Calicut',             volume: 145,  intent: 'Navigat.',    cluster: 'Regen — Calicut' },
  { keyword: 'stem cell therapy Calicut',                 volume: 110,  intent: 'Commercial',  cluster: 'Regen — Calicut' },
  { keyword: 'GFC therapy Calicut',                       volume: 260,  intent: 'Commercial',  cluster: 'GFC — Calicut' },
  { keyword: 'Botox Calicut',                             volume: 210,  intent: 'Commercial',  cluster: 'Derma — Calicut' },
  { keyword: 'melasma treatment Calicut',                 volume: 170,  intent: 'Commercial',  cluster: 'Derma — Calicut' },
  { keyword: 'laser hair removal Calicut',                volume: 320,  intent: 'Commercial',  cluster: 'Derma — Calicut' },
  { keyword: 'anti aging Calicut',                        volume: 170,  intent: 'Commercial',  cluster: 'Derma — Calicut' },
  { keyword: 'tattoo removal Calicut',                    volume: 140,  intent: 'Commercial',  cluster: 'Derma — Calicut' },
  // ── CHENNAI KEYWORDS ───────────────────────────────────────────────────────────
  { keyword: 'stem cell therapy Chennai',                 volume: 1200, intent: 'Commercial',  cluster: 'Regen — Chennai' },
  { keyword: 'regenerative medicine Chennai',             volume: 590,  intent: 'Commercial',  cluster: 'Regen — Chennai' },
  { keyword: 'acne scar treatment Chennai',               volume: 1900, intent: 'Commercial',  cluster: 'Derma — Chennai' },
  { keyword: 'pcos laser Chennai',                        volume: 300,  intent: 'Commercial',  cluster: 'Derma — Chennai' },
  { keyword: 'melasma treatment Chennai',                 volume: 880,  intent: 'Commercial',  cluster: 'Derma — Chennai' },
  { keyword: 'laser hair removal Chennai',                volume: 5400, intent: 'Commercial',  cluster: 'Derma — Chennai' },
  { keyword: 'hair loss treatment Chennai',               volume: 3000, intent: 'Commercial',  cluster: 'Hair — Chennai' },
  { keyword: 'GFC therapy Chennai',                       volume: 480,  intent: 'Commercial',  cluster: 'GFC — Chennai' },
  { keyword: 'Botox Chennai',                             volume: 1600, intent: 'Commercial',  cluster: 'Derma — Chennai' },
  { keyword: 'hair transplant Chennai',                   volume: 3600, intent: 'Transact.',   cluster: 'Hair — Chennai' },
  { keyword: 'ACL treatment Chennai',                     volume: 170,  intent: 'Commercial',  cluster: 'Ortho — Chennai' },
  { keyword: 'BMAC therapy Chennai',                      volume: 170,  intent: 'Commercial',  cluster: 'Regen — Chennai' },
  // ── KERALA REGIONAL KEYWORDS ───────────────────────────────────────────────────
  { keyword: 'best dermatologist Kerala',                 volume: 1100, intent: 'Navigat.',    cluster: 'Derma — Kerala' },
  { keyword: 'cartilage regeneration Kerala',             volume: 145,  intent: 'Commercial',  cluster: 'Regen — Kerala' },
  { keyword: 'best skin clinic Ernakulam',                volume: 590,  intent: 'Navigat.',    cluster: 'Derma — Kerala' },
  { keyword: 'PRP for hair fall India',                   volume: 1000, intent: 'Commercial',  cluster: 'PRP — National' },
  { keyword: 'RF microneedling Kerala',                   volume: 200,  intent: 'Commercial',  cluster: 'Derma — Kerala' },
  { keyword: 'Helios 785 pico laser Kerala',              volume: 70,   intent: 'Navigat.',    cluster: 'Tech — Kerala' },
  { keyword: 'carbon peel Kerala',                        volume: 160,  intent: 'Commercial',  cluster: 'Derma — Kerala' },
]

export const REGEN_POSITIONS = [
  // Original 15 keywords (indices 0–14)
  '1','NR','NR','3','9','NR','2','NR','NR','3','2','2','2','NR','NR',
  // New Kochi keywords (indices 15–28)
  'NR','NR','NR','NR','NR','NR','NR','NR','NR','2','NR','NR','2','NR',
  // New Calicut keywords (indices 29–43)
  'NR','NR','NR','2','NR','NR','NR','1','NR','NR','NR','NR','NR','NR','NR',
  // New Chennai keywords (indices 44–55)
  'NR','4','NR','NR','NR','NR','NR','NR','NR','NR','NR','NR',
  // New Kerala Regional keywords (indices 56–62)
  'NR','NR','NR','NR','NR','NR','NR',
]

export const LOCAL_POSITIONS: Record<number, string[]> = {
  1:  ['3','NR','4','NR','NR','NR','4','NR','NR','4','4','5','4','NR','NR'],
  2:  ['NR','NR','NR','4','1','2','NR','NR','NR','NR','NR','NR','NR','NR','NR'],
  3:  ['NR','NR','NR','2','NR','1','NR','NR','NR','NR','NR','NR','NR','NR','NR'],
  4:  ['NR','NR','NR','NR','7','NR','NR','NR','NR','NR','NR','NR','NR','NR','3'],
  5:  ['NR','NR','NR','NR','5','4','NR','NR','NR','NR','NR','NR','NR','NR','2'],
  6:  ['NR','NR','NR','NR','3','5','NR','NR','NR','NR','NR','NR','NR','NR','NR'],
  7:  ['NR','NR','NR','NR','NR','NR','NR','NR','NR','NR','NR','NR','NR','NR','1'],
  8:  ['5','NR','NR','NR','NR','NR','5','NR','NR','5','NR','5','6','NR','NR'],
  9:  ['NR','NR','NR','NR','8','NR','NR','NR','NR','NR','NR','NR','NR','NR','NR'],
  10: ['7','NR','NR','NR','NR','NR','7','NR','NR','7','NR','7','8','NR','NR'],
}

export const HOSP_POSITIONS: Record<number, string[]> = {
  11: ['NR','3','2','NR','NR','NR','NR','2','3','3','NR','NR','NR','NR','NR'],
  12: ['NR','4','3','NR','NR','NR','NR','3','4','4','NR','NR','NR','NR','NR'],
  13: ['NR','NR','4','NR','NR','NR','NR','4','5','5','NR','NR','NR','NR','NR'],
  14: ['NR','NR','NR','3','NR','NR','NR','5','NR','2','NR','NR','NR','NR','NR'],
  15: ['NR','2','NR','NR','NR','NR','NR','1','2','NR','NR','NR','NR','NR','NR'],
  16: ['NR','5','5','NR','NR','NR','5','6','6','6','NR','NR','5','NR','NR'],
  17: ['NR','6','NR','NR','NR','NR','NR','7','NR','7','NR','NR','NR','NR','NR'],
}

// ═══ CONTENT STRUCTURE ═══════════════════════════════════════════════════════
export interface ContentSite {
  name: string
  h1Pattern: string
  wordCount: number
  h2Count: number
  faq: string
  pricing: string
  doctorAuthored: string
  citations: string
  h2Structure: string
}

export const CONTENT_DATA: ContentSite[] = [
  { name: 'REGENCARE.IN (Current)',              h1Pattern: 'Brand/Treatment name — inconsistent',                             wordCount: 3200, h2Count: 4,  faq: 'No',      pricing: 'Partial', doctorAuthored: 'Yes',        citations: 'No',                 h2Structure: 'GFC Therapy | PRP | About Us | Contact (no condition/treatment depth)' },
  { name: 'Apollo Spectra — Regrow',             h1Pattern: '[Treatment Name] + [Hospital Brand]',                            wordCount: 1300, h2Count: 12, faq: 'Yes',     pricing: 'No',      doctorAuthored: 'Linked',      citations: 'No',                 h2Structure: 'Overview · What is Regrow? · Who qualifies? · Why conducted? · How implemented? · Benefits · Risks · Symptoms · Treatments · Specialities · Cities · Book Appointment' },
  { name: 'Manipal Hospitals — Stem Cell Blog',  h1Pattern: "Question format: 'Is [Topic] A Breakthrough?'",                 wordCount: 1300, h2Count: 7,  faq: 'Yes',     pricing: 'No',      doctorAuthored: 'Yes — named MD', citations: 'PubMed',           h2Structure: 'What are Stem Cells? · Characteristics · What is Stem Cell Therapy? · Therapeutic Use in Orthopaedics · Conditions Treated · Role of Mesenchymal Cells · FAQs' },
  { name: 'Kokilaben Hospital — PRP',            h1Pattern: '[Treatment] (plain, clean)',                                     wordCount: 2100, h2Count: 9,  faq: 'Yes',     pricing: 'No',      doctorAuthored: 'Named physician', citations: 'No',              h2Structure: 'What is PRP? · How does it work? · Conditions Treated · Benefits · PRP vs. Other Treatments · What to expect · Is it right for you? · Why Choose Kokilaben? · FAQs' },
  { name: 'Stem Cell Care India',                h1Pattern: '[Treatment] in [Country]',                                       wordCount: 8000, h2Count: 9,  faq: 'Yes',     pricing: 'No',      doctorAuthored: 'Team reference', citations: 'No',              h2Structure: 'Why Choose Us · Treat Your Diseases · Conditions Treated · Exosome Therapies · International Patient Guide · FAQs · Key Benefits' },
  { name: 'RegenOrthoSport — Knee Stem Cell',   h1Pattern: "Benefit-led: 'Breakthrough Non-Surgical Knee Treatments'",       wordCount: 1800, h2Count: 12, faq: 'Yes',     pricing: 'No',      doctorAuthored: '4 named MDs',    citations: 'No',              h2Structure: 'Regen Therapies for Pain · Commonly Treated Conditions · About Expertise · Non-Surgical Approach · Osteoarthritis · Meniscus Tears · ACL Tears · How Procedures Work · HCP Therapy · Stem Cell Therapy · FAQs' },
  { name: 'Chaitanya Stem Cell — Osteoarthritis', h1Pattern: '[Condition] Treatment in [Country]',                            wordCount: 3500, h2Count: 7,  faq: 'Yes',     pricing: 'No',      doctorAuthored: 'Named orthopedician', citations: '6 PubMed',    h2Structure: 'Stem Cell for Knee/Hip/Joints · What is OA? · OA Types · Signs and Symptoms · Affected Joints · Patient Testimonials · FAQs' },
  { name: 'DermaVue — GFC/PRP Kochi',           h1Pattern: '[Treatment] Near [City] — Benefit Claim',                       wordCount: 4900, h2Count: 8,  faq: 'No',      pricing: 'Yes',     doctorAuthored: 'Named MD DVL',   citations: 'Clinical meta-analysis', h2Structure: 'Why GFC? · What is GFC vs PRP? · Our Protocol · Before & After · Session Guide · Cost Guide · Book Consultation · Why DermaVue?' },
  { name: 'Oliva Clinic — Hair Fall Kochi',     h1Pattern: '[Condition] In [City]: Cost, Procedure, Results & Reviews',     wordCount: 3200, h2Count: 7,  faq: 'Yes',     pricing: 'Yes',     doctorAuthored: '4 named MDs',    citations: 'No',              h2Structure: 'Types of Hair Loss · V-Discover Process · Treatment Options · Cost · Results Timeline · Reviews · FAQs' },
  { name: 'Kokilaben — PRP vs Others',          h1Pattern: '(Comparison table embedded in PRP page)',                        wordCount: 2100, h2Count: 9,  faq: 'Yes',     pricing: 'No',      doctorAuthored: 'Named',          citations: 'No',              h2Structure: 'PRP vs Steroid Injection vs Surgery vs Hyaluronic Acid — table format showing superiority without making prohibited claims' },
]

export const PAGE_TEMPLATE = [
  { element: 'Title Tag',                   spec: '[Treatment] in [City] | Regencare',                                        schema: 'None',              content: '60 chars max. Include primary keyword first. City if location page.', evidence: 'Kokilaben, Oliva, Apollo Spectra — all lead with treatment + location' },
  { element: 'Meta Description',            spec: '160 chars. Include: treatment, location, doctor name, CTA.',               schema: 'None',              content: "Trigger SERP clicks — include 'Dr. Vineeth MB' and 'Book Free Consultation'.", evidence: 'All major hospital sites — conversion-optimised meta descriptions' },
  { element: 'H1 (one only)',               spec: '[Treatment] in [City] — [benefit or qualifier]',                           schema: 'None',              content: 'ONE H1. Contains primary keyword. Location included. Current Regencare has 7 H1s — fix immediately.', evidence: "Every top competitor: single H1. DermaVue: 'PRP & GFC Hair Treatment Near Kochi — 70x More Growth Factors'" },
  { element: 'Intro Para (100-150w)',        spec: "Direct answer to search query. Define treatment. State conditions. State Regencare's unique advantage.", schema: 'Speakable', content: 'Scannable, 2-3 sentences max per para. Targets featured snippet + voice answer.', evidence: 'Kokilaben, Apollo Spectra — intro directly answers the query in plain English' },
  { element: 'H2 — What is [Treatment]?',   spec: '40-60 word direct answer. Plain English. No jargon first.',               schema: 'FAQPage Q&A',       content: 'This exact format wins Google AI Overview citations and voice answers.', evidence: "Manipal: 'What are Stem Cells?' — plain definition, directly answers query" },
  { element: 'H2 — Conditions Treated',     spec: '6-10 conditions as cards or bullets. Brief description each.',            schema: 'MedicalIndication', content: 'Covers condition-level queries under one treatment page.', evidence: 'Stem Cell Care India: 50+ conditions listed. Apollo Spectra: eligibility criteria section' },
  { element: 'H2 — How Does It Work?',      spec: 'Numbered step-by-step process. 5-7 steps.',                               schema: 'HowTo',             content: 'HowTo schema eligible. Reassures patient. Reduces anxiety-driven bounce.', evidence: 'Kokilaben: numbered procedure steps. DermaVue: session-by-session guide' },
  { element: 'H2 — Benefits',               spec: '4-6 benefits. Short, scannable. Icons or bullets.',                       schema: 'None',              content: "Conversion-optimised section. Not a list of features — patient outcomes.", evidence: 'All top performers have this section' },
  { element: 'H2 — [Treatment] vs. Alternatives', spec: 'Comparison table: treatment vs surgery vs medication vs other.',   schema: 'None',              content: 'Positions Regencare as superior without making prohibited NMC superiority claims.', evidence: 'Kokilaben PRP page: PRP vs Steroid vs Surgery vs Hyaluronic Acid — strongest example found' },
  { element: 'H2 — Cost / What to Expect',  spec: "Price range or factors. 'Starting from ₹X' acceptable.",                schema: 'FAQPage',           content: "Captures 'GFC therapy cost Kerala' (170/mo) — currently no strong answer on SERPs.", evidence: 'DermaVue: only local competitor listing pricing. Gap for all others including hospitals.' },
  { element: 'H2 — Why Regencare?',         spec: "Dr. Vineeth MB credentials + branch locations + unique claims.",          schema: 'None',              content: "Differentiates from all 10 local clinics. Must include: 'South India's first', MS Ortho credentials, multi-branch.", evidence: "Every hospital has this section. Every local clinic lacks it. Regencare's current pages don't have it." },
  { element: 'H2 — FAQs (10-12 Q&A)',       spec: 'Direct question-answer format. 40-60 words per answer.',                 schema: 'FAQPage',           content: '10 Q&As = People Also Ask box eligibility for all 10 questions. Each answer is a featured snippet opportunity.', evidence: 'Manipal, Kokilaben, Apollo, Chaitanya, Stem Cell Care India — all use FAQPage schema' },
  { element: 'CTA Block (×3)',               spec: 'Book Appointment [Cal.com] + WhatsApp [MSG91] + Phone',                  schema: 'None',              content: 'Appear at: top of page, after benefits section, after FAQs. Never let user scroll without seeing a CTA.', evidence: 'DermaVue 3 CTAs, Oliva 4 CTAs, Kokilaben 5 CTAs — multiple conversion touchpoints' },
  { element: 'Doctor Authorship',            spec: "Named: 'Written/Reviewed by Dr. Vineeth MB, MBBS MS Ortho'",            schema: 'Person',            content: 'Links to /doctors/dr-vineeth-mb. JSON-LD Person schema on every clinical page.', evidence: 'Manipal: gold standard — Dr. Lokesh A Veerappa named with credentials on every blog' },
  { element: 'Academic Citation',            spec: '1-2 PubMed/peer-reviewed citations per treatment page.',                 schema: 'None',              content: "Builds E-E-A-T. Shows evidence basis. Required for Google's 'Your Money or Your Life' (YMYL) content.", evidence: 'Chaitanya: 6 PubMed citations — highest found. Manipal: 1 PubMed link on blog' },
  { element: 'Internal Links (5+)',          spec: 'Link to: related treatments, conditions, doctor profile, branch pages, blog posts.', schema: 'None', content: 'Passes authority to new pages. Reduces bounce. Hub-spoke architecture.', evidence: 'Apollo Spectra: 6 related treatment links in sidebar. Manipal: 4 internal links per blog' },
  { element: 'Breadcrumb Navigation',        spec: 'Home > Treatments > GFC Therapy > Kochi',                               schema: 'BreadcrumbList',    content: 'Appears in SERP as rich result. Helps Google understand page hierarchy.', evidence: 'Apollo Spectra: clear breadcrumb on every page. Improves CTR by 15-20%.' },
  { element: 'Schema Block (JSON-LD)',        spec: 'MedicalProcedure + FAQPage + Person + LocalBusiness + Breadcrumb',      schema: 'All types',         content: "Single JSON-LD block in <head>. Links all entities via @id. Google recommended format.", evidence: 'Apollo: full schema graph. DermaVue: 4 schema types. Regencare currently: partial only' },
]

// ═══ SEO STRATEGY MATRIX ═════════════════════════════════════════════════════
export const SEO_STRATEGIES = [
  'Single clean H1 per page',
  '2,500+ word treatment pages',
  'FAQPage schema',
  'MedicalProcedure schema',
  'BreadcrumbList schema',
  'LocalBusiness schema per branch',
  'Person schema (doctor)',
  'Named doctor with credentials on page',
  'Academic citations (PubMed)',
  'Internal hub-and-spoke linking',
  'Pricing / cost page',
  'Real online booking (not form)',
  'Treatment comparison table',
  'Patient review integration',
  'Location-specific pages',
  'Blog / research content section',
  'Video content embedded',
  'Google Business Profile optimised',
  'Breadcrumb navigation visible',
  'Mobile-first page speed',
]

export const SEO_SITES: { name: string; values: string[] }[] = [
  { name: 'REGENCARE.IN',        values: ['No','No','No','Partial','No','Partial','Partial','Yes','No','No','Partial','No','No','Partial','Partial','No','No','Partial','No','Yes'] },
  { name: 'Apollo Hospitals',    values: ['Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','No','Yes','No','Yes','Yes','Yes','No','Yes','Yes','Yes'] },
  { name: 'Apollo Spectra',      values: ['Yes','Partial','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','No','Yes','No','Yes','Yes','Yes','No','Yes','Yes','Yes'] },
  { name: 'Manipal Hospitals',   values: ['Yes','Partial','Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes'] },
  { name: 'Kokilaben Hospital',  values: ['Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','No','Yes','Yes','Yes','Partial','Yes','No','Yes','Yes','Yes'] },
  { name: 'Stem Cell Care India',values: ['Yes','Yes','Yes','Partial','Partial','Yes','Partial','Partial','No','Yes','No','Yes','No','Yes','Yes','Yes','No','Yes','Yes','Yes'] },
  { name: 'RegenOrthoSport',     values: ['Yes','Partial','Yes','Partial','Partial','Yes','Yes','Yes','No','Yes','No','Yes','No','Yes','Yes','Yes','Yes','Yes','Partial','Yes'] },
  { name: 'Chaitanya Stem Cell', values: ['Yes','Yes','Yes','Partial','Partial','Yes','Yes','Yes','Yes','Yes','No','Yes','No','Yes','Partial','Yes','No','Partial','Partial','Yes'] },
  { name: 'DermaVue',            values: ['Yes','Yes','No','Partial','Yes','Yes','Partial','Yes','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','No','Yes','Yes','Yes'] },
  { name: 'Oliva Clinic',        values: ['Yes','Yes','Partial','Yes','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes'] },
  { name: 'Orthogen Care',       values: ['Yes','Partial','No','No','No','No','Yes','Yes','No','Partial','No','Yes','No','Partial','No','Yes','No','Partial','No','Yes'] },
  { name: 'Cutis International', values: ['Partial','Partial','No','No','No','Yes','Yes','Yes','No','Yes','No','Yes','No','Yes','Yes','No','No','Yes','No','Yes'] },
]

// ═══ ON-PAGE SEO AUDIT ═══════════════════════════════════════════════════════
export interface AuditRow {
  name: string
  titleTag: string
  h1: string
  metaDesc: string
  schema: string
  faq: string
  wordCount: number
  pricing: string
  booking: string
  nmc: string
  cwv: string
  isRegen: boolean
}

export const AUDIT_ROWS: AuditRow[] = [
  { name: 'REGENCARE.IN (Client)', titleTag: 'Partial',  h1: 'No — 7 H1 tags',    metaDesc: 'Partial',  schema: 'Partial (no MedProc)',    faq: 'No',  wordCount: 3200, pricing: 'Partial', booking: 'No — form only', nmc: 'Yes',     cwv: 'Unknown',  isRegen: true },
  { name: 'Apollo Hospitals',      titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Strong',   schema: 'Strong (all types)',      faq: 'Yes', wordCount: 1300, pricing: 'No',      booking: 'Yes',            nmc: 'Yes',     cwv: 'Strong',   isRegen: false },
  { name: 'Apollo Spectra',        titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Strong',   schema: 'Breadcrumb+Medical',      faq: 'Yes', wordCount: 1300, pricing: 'No',      booking: 'Yes',            nmc: 'Yes',     cwv: 'Strong',   isRegen: false },
  { name: 'Manipal Hospitals',     titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Strong',   schema: 'Strong',                  faq: 'Yes', wordCount: 1300, pricing: 'No',      booking: 'Yes',            nmc: 'Yes',     cwv: 'Strong',   isRegen: false },
  { name: 'Kokilaben Hospital',    titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Strong',   schema: 'Strong',                  faq: 'Yes', wordCount: 2100, pricing: 'No',      booking: 'Yes',            nmc: 'Yes',     cwv: 'Strong',   isRegen: false },
  { name: 'Stem Cell Care India',  titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Strong',   schema: 'Partial',                 faq: 'Yes', wordCount: 8000, pricing: 'No',      booking: 'Yes',            nmc: 'Yes',     cwv: 'Medium',   isRegen: false },
  { name: 'RegenOrthoSport',       titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Strong',   schema: 'Partial',                 faq: 'Yes', wordCount: 1800, pricing: 'No',      booking: 'Yes',            nmc: 'Yes',     cwv: 'Unknown',  isRegen: false },
  { name: 'Chaitanya Stem Cell',   titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Partial',  schema: 'Partial',                 faq: 'Yes', wordCount: 3500, pricing: 'No',      booking: 'Yes',            nmc: 'Yes',     cwv: 'Unknown',  isRegen: false },
  { name: 'orthogencare.com',      titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Partial',  schema: 'None',                    faq: 'No',  wordCount: 2000, pricing: 'No',      booking: 'Yes',            nmc: 'Yes',     cwv: 'Unknown',  isRegen: false },
  { name: 'dermavue.com',          titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Strong',   schema: 'Strong (4 types)',        faq: 'No',  wordCount: 4900, pricing: 'Yes',     booking: 'Yes',            nmc: 'Yes',     cwv: 'Good',     isRegen: false },
  { name: 'olivaclinic.com',       titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Strong',   schema: 'Strong',                  faq: 'Yes', wordCount: 3200, pricing: 'Yes',     booking: 'Yes',            nmc: 'Yes',     cwv: 'Good',     isRegen: false },
  { name: 'cutisinternational.com',titleTag: 'Partial',  h1: 'Weak',               metaDesc: 'Partial',  schema: 'Partial',                 faq: 'No',  wordCount: 2100, pricing: 'No',      booking: 'Yes',            nmc: 'Partial', cwv: 'Unknown',  isRegen: false },
  { name: 'ladensitae.com',        titleTag: 'Partial',  h1: 'Yes',                metaDesc: 'Partial',  schema: 'None',                    faq: 'No',  wordCount: 1200, pricing: 'Partial', booking: 'Yes',            nmc: 'Partial', cwv: 'Unknown',  isRegen: false },
  { name: 'zaayaskinclinic.com',   titleTag: 'Strong',   h1: 'Yes',                metaDesc: 'Partial',  schema: 'None',                    faq: 'No',  wordCount: 2300, pricing: 'No',      booking: 'Yes',            nmc: 'Yes',     cwv: 'Unknown',  isRegen: false },
]

// ═══ AUTHORITY & TRUST ═══════════════════════════════════════════════════════
export interface AuthRow {
  name: string
  rating: number | null
  reviews: string | null
  da: number
  backlinkProfile: string
  accreditation: string
  doctorCredentials: string
  eeat: string
  contentAuth: string
  isRegen: boolean
}

export const AUTH_ROWS: AuthRow[] = [
  { name: 'REGENCARE.IN (Client)',  rating: 4.2, reviews: '150',      da: 18, backlinkProfile: 'Low',       accreditation: 'None visible',          doctorCredentials: 'Dr. Vineeth MB — MBBS MS Ortho (dedicated profile)', eeat: 'Medium',    contentAuth: 'Medium',    isRegen: true },
  { name: 'Apollo Hospitals',       rating: 4.7, reviews: '10,000+',  da: 72, backlinkProfile: 'Very High', accreditation: 'NABH, NABL, JCI',       doctorCredentials: 'Named specialists + full department',                eeat: 'Very High', contentAuth: 'Very High', isRegen: false },
  { name: 'Apollo Spectra',         rating: 4.6, reviews: '5,000+',   da: 65, backlinkProfile: 'Very High', accreditation: 'NABH, NABL',            doctorCredentials: 'Named specialists linked',                           eeat: 'Very High', contentAuth: 'Very High', isRegen: false },
  { name: 'Manipal Hospitals',      rating: 4.6, reviews: '10,000+',  da: 70, backlinkProfile: 'Very High', accreditation: 'NABH, NABL, ISO',       doctorCredentials: 'Dr. Lokesh A Veerappa named on page',               eeat: 'Very High', contentAuth: 'Very High', isRegen: false },
  { name: 'Kokilaben Hospital',     rating: 4.8, reviews: '5,000+',   da: 62, backlinkProfile: 'High',      accreditation: 'NABH, NABL, JCI',       doctorCredentials: 'Named physicians + 10yr experience',                 eeat: 'Very High', contentAuth: 'Very High', isRegen: false },
  { name: 'Stem Cell Care India',   rating: 4.5, reviews: null,       da: 44, backlinkProfile: 'Medium',    accreditation: 'NABH partner, GMP, ISO', doctorCredentials: 'Team reference (not individually named)',            eeat: 'High',      contentAuth: 'High',      isRegen: false },
  { name: 'RegenOrthoSport',        rating: 4.4, reviews: null,       da: 32, backlinkProfile: 'Medium',    accreditation: 'IOF Member',            doctorCredentials: '4 named MDs with specialties',                       eeat: 'High',      contentAuth: 'High',      isRegen: false },
  { name: 'Chaitanya Stem Cell',    rating: 4.5, reviews: null,       da: 28, backlinkProfile: 'Low',       accreditation: 'Awards listed',         doctorCredentials: 'Dr. Anant Bagul — named orthopedician',              eeat: 'Medium',    contentAuth: 'Medium',    isRegen: false },
  { name: 'orthogencare.com',       rating: null, reviews: null,      da: 22, backlinkProfile: 'Low',       accreditation: 'None',                  doctorCredentials: 'Dr. Vineeth MB — MBBS MS Ortho',                     eeat: 'Medium',    contentAuth: 'Medium',    isRegen: false },
  { name: 'dermavue.com',           rating: 4.8, reviews: '1,438+',   da: 34, backlinkProfile: 'Medium',    accreditation: 'IADVL, ISO',            doctorCredentials: 'Dr. Minu Liz Mathew — MBBS MD DVL',                  eeat: 'High',      contentAuth: 'High',      isRegen: false },
  { name: 'olivaclinic.com',        rating: 4.9, reviews: '1,475+',   da: 52, backlinkProfile: 'High',      accreditation: 'US-FDA equip.',         doctorCredentials: '4 MD Dermatologists listed (Kochi)',                  eeat: 'High',      contentAuth: 'Very High', isRegen: false },
  { name: 'cutisinternational.com', rating: 4.7, reviews: '500+',     da: 38, backlinkProfile: 'Medium',    accreditation: 'Claimed',               doctorCredentials: 'Multiple specialists',                               eeat: 'Medium',    contentAuth: 'Medium',    isRegen: false },
  { name: 'ladensitae.com',         rating: 4.5, reviews: null,       da: 29, backlinkProfile: 'Low',       accreditation: 'None',                  doctorCredentials: 'No named doctors on page',                           eeat: 'Low',       contentAuth: 'Low',       isRegen: false },
  { name: 'zaayaskinclinic.com',    rating: 4.6, reviews: null,       da: 18, backlinkProfile: 'Low',       accreditation: 'None',                  doctorCredentials: 'Unnamed TM consultant',                              eeat: 'Low',       contentAuth: 'Medium',    isRegen: false },
]

// ═══ SERVICE COVERAGE ════════════════════════════════════════════════════════
export const SERVICES = [
  'GFC Therapy',
  'PRP — Hair',
  'PRP — Ortho/Joints',
  'Stem Cell Therapy',
  'Hair Transplant (FUE)',
  'Exosome Therapy',
  'Sports Injury (Regen)',
  'Knee Pain (non-surgical)',
  'Spine / Back Pain',
  'UAE / Medical Tourism Page',
  'Named Doctor Profile',
  'Blog / Research',
  'Real Online Booking',
  'Cost / Pricing Page',
]

export const REGEN_SERVICES = ['Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','Partial','Yes','No','No','Partial']

export const HOSP_SERVICES: Record<number, string[]> = {
  11: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','Partial','Yes','Yes','Yes','No'],
  12: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','Partial','Yes','Yes','Yes','No'],
  13: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No'],
  14: ['No','No','Yes','No','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No'],
  15: ['No','No','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','Partial','Yes','Yes','No'],
  16: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No'],
  17: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No'],
}

export const LOCAL_SERVICES: Record<number, string[]> = {
  1:  ['No','No','Yes','Partial','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No'],
  2:  ['Yes','Yes','No','No','Yes','No','No','No','No','No','Yes','Yes','Yes','Yes'],
  3:  ['No','Yes','No','No','Yes','Yes','No','No','No','No','Yes','Yes','Yes','Yes'],
  4:  ['Yes','Yes','No','No','Yes','Yes','No','No','No','Yes','Yes','No','Yes','No'],
  5:  ['No','Yes','No','No','Yes','No','No','No','No','Yes','No','Partial','Yes','Partial'],
  6:  ['Yes','Yes','No','No','No','No','No','No','No','No','No','Yes','Yes','No'],
  7:  ['No','No','No','No','Yes','No','No','No','No','Yes','No','No','Yes','No'],
  8:  ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','No','Yes','Partial','Yes','No'],
  9:  ['Yes','Yes','No','No','No','No','No','No','No','No','No','No','Yes','Partial'],
  10: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','No','No','Partial','Yes','No'],
  // Kochi derma competitors (GFC,PRP-hair,PRP-ortho,SC,HT,Exosome,Sports,Knee,Spine,UAE,Doctor,Blog,Booking,Pricing)
  18: ['Yes','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','Yes'],
  19: ['Yes','Yes','Yes','No','No','No','No','No','No','No','Yes','Yes','Yes','No'],
  20: ['No','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','No'],
  21: ['Yes','Yes','Yes','No','No','Partial','No','No','No','No','Yes','Yes','Yes','No'],
  22: ['Yes','Yes','Yes','No','No','No','No','No','No','No','Yes','Yes','Yes','No'],
  23: ['No','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','No'],
  24: ['No','Yes','No','No','No','No','No','No','No','No','No','No','Yes','No'],
  25: ['No','Yes','No','No','No','No','No','No','No','No','No','No','Yes','No'],
  // Calicut derma competitors
  26: ['No','Yes','No','No','No','Yes','No','No','No','No','Yes','Yes','Yes','Partial'],
  27: ['No','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','No'],
  28: ['No','Yes','No','No','No','No','No','No','No','No','Yes','No','Yes','No'],
  29: ['No','Yes','No','No','Yes','No','No','No','No','No','Yes','No','Yes','No'],
  30: ['Yes','Yes','Yes','No','Yes','No','No','No','No','No','Yes','Yes','Yes','No'],
  31: ['No','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','No'],
  32: ['No','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','No'],
  33: ['Yes','Yes','No','No','Yes','No','No','No','No','No','No','Yes','Yes','No'],
  34: ['No','Yes','No','No','Yes','No','No','No','No','No','Yes','Yes','Yes','No'],
  // Chennai competitors
  35: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No'],
  36: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No'],
  37: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No'],
  38: ['Yes','Yes','Yes','No','No','No','No','No','No','Yes','Yes','Yes','Yes','No'],
  39: ['Yes','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','No'],
  40: ['No','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','Partial'],
  41: ['No','Yes','No','No','No','No','No','No','No','Yes','No','Yes','Yes','Partial'],
  42: ['No','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','Yes'],
  // Trivandrum / other
  43: ['No','Yes','No','No','No','No','No','No','No','No','Yes','Yes','Yes','No'],
  44: ['No','No','Yes','Yes','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No'],
}

// ═══ WHITE SPACE & GAPS ══════════════════════════════════════════════════════
export interface WhiteSpaceGap {
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  topic: string
  why: string
  volume: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  action: string
}

export const WHITE_SPACE_GAPS: WhiteSpaceGap[] = [
  { priority: 'CRITICAL', topic: 'Stem cell therapy Kerala — comprehensive guide',           why: 'Major hospitals (Apollo/Manipal) rank nationally but have no Kerala-specific stem cell page. Local clinics have nothing. Near-zero local competition.',           volume: 'High — 480+/mo',                 difficulty: 'Easy',   action: "Publish 3,500-word 'Stem Cell Therapy Kerala' page: what it is, conditions, eligibility, process, cost, FAQs (FAQ schema). Outranks all local competition immediately, challenges hospitals on location signal." },
  { priority: 'CRITICAL', topic: 'Ortho cannibalization resolution — orthogencare.com',       why: 'Same doctor on competing domain. No other competitor has this structural problem. Every fix to Regencare\'s ortho pages is partially undermined until resolved.',  volume: 'All ortho keywords',             difficulty: 'Easy',   action: "Define clear domain strategy: either 301 redirect orthogencare.com → regencare.in (if Dr. Vineeth MB agrees), OR create strict content differentiation. Implement within 30 days." },
  { priority: 'CRITICAL', topic: 'Treatment cost / pricing pages for all major treatments',  why: "No local clinic (except DermaVue partially) publishes prices. 'GFC therapy cost Kerala', 'PRP treatment cost Kochi' — all high-intent queries with no strong answer page.", volume: 'High — 170–480/mo each',      difficulty: 'Easy',   action: "Create /pricing page + individual treatment cost sections. Even 'starting from ₹X' with cost factors listed captures the transactional intent query cluster entirely." },
  { priority: 'CRITICAL', topic: 'GFC therapy — comprehensive hub (3,000+ words)',           why: 'DermaVue ranks #1 with 4,900 words. Regencare is at #9 with shorter content and no FAQ schema. Content depth is the ONLY gap — not domain authority.',              volume: '1,300/mo — GFC Kochi',          difficulty: 'Easy',   action: 'Rewrite GFC therapy page to 3,000+ words: What is GFC vs PRP (comparison table), 12+ H2 sections, 10 FAQs with FAQ schema, doctor quote, cost section. Target: #1-3 within 90 days.' },
  { priority: 'HIGH',     topic: 'UAE / NRI medical tourism landing page',                   why: "Cutis has UAE clinics but no Kerala NRI-facing regen content. Apollo has international pages but no Kerala-specific. Zero competition for 'regenerative medicine India for NRI'.", volume: 'Medium — 18 keywords', difficulty: 'Easy',   action: 'Build /medical-tourism/nri page: location (Kochi, Calicut, Chennai), treatments available, Dr. Vineeth MB credentials, how to book from UAE, accommodation guidance, WhatsApp CTA.' },
  { priority: 'HIGH',     topic: "Dr. Vineeth MB comprehensive authority hub",               why: "No competitor (including orthogencare) has a comprehensive doctor profile with original Q&A, research commentary, and media. This is Regencare's only uncopied competitive moat.", volume: 'Medium — all branded queries', difficulty: 'Easy', action: 'Build /doctors/dr-vineeth-mb: full credentials, interview-style Q&A, original clinical commentary, published works, speaking, media mentions. Person schema. Link from every treatment page.' },
  { priority: 'HIGH',     topic: 'Knee pain non-surgical treatment — regen approach (vs. Ayurveda)', why: "Ayurveda clinics dominate 'knee pain treatment without surgery Kerala'. No modern regen clinic has claimed this space. Regencare already ranks #2 — content upgrade secures #1.", volume: 'Medium — 720/mo', difficulty: 'Easy', action: 'Expand knee pain page: add comparison table (PRP vs Ayurveda vs Surgery vs Physiotherapy), add condition stages, patient eligibility criteria, FAQ schema (10 Q&As). 2,500+ words.' },
  { priority: 'HIGH',     topic: 'Calicut / Kozhikode treatment-specific pages',             why: 'All competitors focus content on Kochi. Calicut has 30-40% lower keyword competition for equivalent queries with no quality local answer pages.',                  volume: 'Medium — 260-390/mo Calicut',   difficulty: 'Easy',   action: 'Mirror Kochi treatment pages for Calicut: /gfc-therapy/calicut, /prp-treatment/calicut, /stem-cell-therapy/calicut — same content framework, location-specific text.' },
  { priority: 'HIGH',     topic: 'Sports injury treatment — regen medicine Kerala',          why: 'Physiotherapy and Ayurveda own this space. No regen clinic has a dedicated sports injury page targeting ACL, PCL, meniscal tear, tennis elbow.',                   volume: 'Medium — 300+/mo',              difficulty: 'Medium', action: 'Build /conditions/sports-injuries: list 8-10 conditions, explain PRP/stem cell approach for each, eligibility, timeline, FAQ schema.' },
  { priority: 'MEDIUM',   topic: 'GFC therapy vs. PRP vs. Stem Cell comparison page',        why: 'No competitor — local or national — has a comparison page for these three treatments. Featured snippet opportunity.',                                               volume: 'Medium — 170+/mo',              difficulty: 'Easy',   action: 'Build /treatments/gfc-vs-prp-vs-stem-cell: side-by-side table, condition suitability chart, cost comparison, which one Regencare recommends and why.' },
  { priority: 'MEDIUM',   topic: 'Chennai regenerative medicine — market entry content',     why: 'No competitor has strong Chennai-specific regen content. Chennai is the newest Regencare branch with the most search volume.',                                      volume: 'Medium — 480+/mo Chennai',      difficulty: 'Medium', action: 'Build Chennai treatment pages: /branches/chennai, /gfc-therapy/chennai, /prp-treatment/chennai. Optimise Chennai GBP. NAP consistency fix first.' },
  { priority: 'MEDIUM',   topic: 'Spine / back pain non-surgical — regen approach',          why: 'Physio and ortho hospitals own spine content. No regen clinic has a spine/back pain page. PRP for disc herniation, prolotherapy for chronic back pain — untapped.', volume: 'Medium',                        difficulty: 'Medium', action: 'Build /conditions/back-pain-spine: disc herniation, lumbar pain, sciatica — PRP/regen approach. Internal link from ortho and sports injury pages.' },
  { priority: 'MEDIUM',   topic: 'Research / outcomes blog — Regencare clinical commentary', why: "Manipal and Chaitanya use academic citations as E-E-A-T signals. No Kerala clinic publishes original commentary on regen research.",                               volume: 'Low vol, High authority',       difficulty: 'Medium', action: "Dr. Vineeth MB writes 4-6 research commentary articles/year. Reference PubMed studies. These build domain-wide E-E-A-T and earn natural backlinks." },
  { priority: 'LOW',      topic: 'Google AI Overview + ChatGPT citation strategy (GEO)',     why: 'No Kerala regen clinic is being cited by AI engines. Apollo and Manipal are cited nationally. Publishing structured answer content trains LLMs to cite Regencare.',  volume: 'AI traffic — growing',          difficulty: 'Hard',   action: "Publish citation-bait content: 'What is the best regenerative medicine clinic in Kerala?' structured as factual entity — consistent NAP, Wikipedia-style About page, Google Knowledge Panel claim." },
  { priority: 'LOW',      topic: 'Video SERPs — YouTube SEO for treatment keywords',         why: 'Video carousels appear for GFC, PRP, and knee pain keywords. No Kerala regen clinic has YouTube presence. Manipal and Apollo have videos but not Kochi-specific.',   volume: 'Video SERP gap',                difficulty: 'Medium', action: 'Film Dr. Vineeth MB procedure walkthroughs: GFC session, PRP process, knee stem cell. YouTube SEO: keyword titles, chapters, location tags. Embed on treatment pages.' },
]

// ═══ SEO BLUEPRINT — URL ARCHITECTURE ════════════════════════════════════════
export interface ArchEntry {
  url: string
  pageType: string
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  schema: string
  targetKeywords: string
  competitiveModel: string
  contentLength: string
}

export const ARCH_ENTRIES: ArchEntry[] = [
  { url: '/',                                  pageType: 'Homepage',           priority: 'CRITICAL', schema: 'MedicalClinic + LocalBusiness + Organization', targetKeywords: 'regenerative medicine Kerala / Regencare',             competitiveModel: 'Apollo Hospitals homepage structure',            contentLength: '2,000+ words' },
  { url: '/treatments/gfc-therapy/',           pageType: 'Treatment Hub',      priority: 'CRITICAL', schema: 'MedicalProcedure + FAQPage',                  targetKeywords: 'GFC therapy Kerala / GFC therapy Kochi',              competitiveModel: 'DermaVue 4,900-word GFC page',                   contentLength: '3,000+ words' },
  { url: '/treatments/gfc-therapy/kochi/',     pageType: 'Treatment + Location', priority: 'HIGH',   schema: 'MedicalProcedure + LocalBusiness',            targetKeywords: 'GFC therapy Kochi (1,300/mo)',                        competitiveModel: 'Apollo Spectra location pages',                  contentLength: '2,000+ words' },
  { url: '/treatments/gfc-therapy/calicut/',   pageType: 'Treatment + Location', priority: 'HIGH',   schema: 'MedicalProcedure + LocalBusiness',            targetKeywords: 'GFC therapy Calicut (260/mo)',                        competitiveModel: 'Apollo Spectra location pages',                  contentLength: '1,800+ words' },
  { url: '/treatments/prp-therapy/',           pageType: 'Treatment Hub',      priority: 'HIGH',     schema: 'MedicalProcedure + FAQPage',                  targetKeywords: 'PRP treatment Kerala (1,600/mo)',                     competitiveModel: 'Kokilaben PRP page — 9 H2 model',                contentLength: '2,500+ words' },
  { url: '/treatments/stem-cell-therapy/',     pageType: 'Treatment Hub',      priority: 'HIGH',     schema: 'MedicalTherapy + FAQPage',                   targetKeywords: 'stem cell therapy Kerala (480/mo)',                   competitiveModel: 'Chaitanya + Stem Cell Care India',               contentLength: '3,500+ words' },
  { url: '/treatments/stem-cell-therapy/kerala/', pageType: 'Treatment + Location', priority: 'HIGH',schema: 'MedicalTherapy + LocalBusiness',             targetKeywords: 'stem cell therapy Kerala — local',                   competitiveModel: 'Manipal + Apollo Spectra pattern',               contentLength: '2,000+ words' },
  { url: '/conditions/knee-pain/',             pageType: 'Condition Hub',      priority: 'HIGH',     schema: 'MedicalCondition + FAQPage',                 targetKeywords: 'knee pain treatment without surgery (720/mo)',        competitiveModel: 'RegenOrthoSport 12-H2 model',                    contentLength: '2,500+ words' },
  { url: '/conditions/hair-loss/',             pageType: 'Condition Hub',      priority: 'HIGH',     schema: 'MedicalCondition + FAQPage',                 targetKeywords: 'hair loss treatment Kochi (2,400/mo)',                competitiveModel: 'Oliva Clinic: Cost+Procedure+Results+Reviews',   contentLength: '2,500+ words' },
  { url: '/conditions/sports-injuries/',       pageType: 'Condition Hub',      priority: 'MEDIUM',   schema: 'MedicalCondition + FAQPage',                 targetKeywords: 'sports injury treatment Kerala',                      competitiveModel: 'RegenOrthoSport structure',                      contentLength: '2,000+ words' },
  { url: '/conditions/spine-back-pain/',       pageType: 'Condition Hub',      priority: 'MEDIUM',   schema: 'MedicalCondition + FAQPage',                 targetKeywords: 'back pain non-surgical Kerala',                       competitiveModel: 'Gap — no competitor owns it',                    contentLength: '2,000+ words' },
  { url: '/doctors/dr-vineeth-mb/',            pageType: 'Doctor Profile',     priority: 'HIGH',     schema: 'Person + MedicalBusiness',                   targetKeywords: 'Dr. Vineeth MB regenerative medicine',                competitiveModel: 'Manipal named-doctor model',                     contentLength: '1,500+ words' },
  { url: '/branches/kochi/',                   pageType: 'Branch Page',        priority: 'HIGH',     schema: 'LocalBusiness + MedicalClinic',               targetKeywords: 'regenerative medicine Kochi (170/mo)',                competitiveModel: 'Apollo location page pattern',                   contentLength: '1,200+ words' },
  { url: '/branches/calicut/',                 pageType: 'Branch Page',        priority: 'HIGH',     schema: 'LocalBusiness + MedicalClinic',               targetKeywords: 'regenerative medicine Calicut (260/mo)',              competitiveModel: 'Apollo location page pattern',                   contentLength: '1,200+ words' },
  { url: '/branches/chennai/',                 pageType: 'Branch Page',        priority: 'HIGH',     schema: 'LocalBusiness + MedicalClinic',               targetKeywords: 'regenerative medicine Chennai (480/mo)',              competitiveModel: 'Apollo location page pattern',                   contentLength: '1,200+ words' },
  { url: '/medical-tourism/',                  pageType: 'NRI Hub',            priority: 'MEDIUM',   schema: 'MedicalClinic + FAQPage',                    targetKeywords: 'regenerative medicine India for NRI',                 competitiveModel: 'Cutis International UAE positioning',            contentLength: '2,000+ words' },
  { url: '/treatments/compare/',              pageType: 'Comparison Page',    priority: 'MEDIUM',   schema: 'FAQPage',                                    targetKeywords: 'GFC vs PRP vs Stem Cell',                             competitiveModel: 'Gap — no competitor owns it',                    contentLength: '1,500+ words' },
  { url: '/pricing/',                          pageType: 'Pricing Page',       priority: 'HIGH',     schema: 'FAQPage',                                    targetKeywords: 'GFC therapy cost Kerala / PRP cost Kochi',            competitiveModel: 'Gap — no competitor owns it',                    contentLength: '1,000+ words' },
  { url: '/blog/',                             pageType: 'Blog Hub',           priority: 'HIGH',     schema: 'Blog + Article + Person',                    targetKeywords: 'Informational keywords — long tail',                  competitiveModel: 'Manipal + Apollo blog structure',                contentLength: 'N/A — ongoing' },
  { url: '/research/',                         pageType: 'Research Hub',       priority: 'MEDIUM',   schema: 'ScholarlyArticle + Person',                  targetKeywords: 'clinical evidence / regen medicine research',         competitiveModel: 'Manipal PubMed citation model',                  contentLength: 'N/A — ongoing' },
]

// ═══ ACTION PRIORITIES ════════════════════════════════════════════════════════
export interface ActionItem {
  num: number
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  action: string
  evidence: string
  owner: string
  gtmStep: string
  outcome: string
}

export const ACTIONS: ActionItem[] = [
  { num: 1,  priority: 'CRITICAL', action: 'Resolve orthogencare.com brand cannibalization',         evidence: 'Same doctor appears on identical SERPs. Every other fix is partially undermined until this is resolved. No other competitor has this structural problem.',                                             owner: 'Strategy + Dev', gtmStep: 'Step 2A', outcome: 'Stop splitting SERP authority for all ortho/regen queries between two domains owned by the same doctor' },
  { num: 2,  priority: 'CRITICAL', action: 'Fix 7 H1 tags on homepage → single H1',                  evidence: 'All 17 competitors studied have a single, keyword-containing H1. Apollo, Manipal, Kokilaben, DermaVue — every site studied. Regencare is the only exception.',                                     owner: 'Dev',            gtmStep: 'Step 2A', outcome: 'Primary keyword signal restored. Estimated ranking improvement within 2-3 crawl cycles (2-4 weeks)' },
  { num: 3,  priority: 'CRITICAL', action: 'Restore Blog (404) + Resources (404)',                    evidence: 'Manipal, Apollo, Oliva, DermaVue all use blog content to rank for informational keywords. Regencare\'s blog is entirely absent — the primary long-tail traffic surface is missing.',               owner: 'Dev + Content',  gtmStep: 'Step 2A', outcome: 'Primary content authority surface restored — prerequisite for all content production in Steps 3A/3B' },
  { num: 4,  priority: 'CRITICAL', action: 'Replace contact form with Cal.com real booking',          evidence: 'Every major hospital (Apollo, Kokilaben) and top clinic (DermaVue, Oliva) has real appointment booking. Regencare\'s Book button leads to a form. Zero conversion tracking.',                      owner: 'Dev',            gtmStep: 'Step 3A', outcome: 'Direct bookings tracked and confirmed. Estimated 40-60% improvement in conversion rate from organic traffic' },
  { num: 5,  priority: 'CRITICAL', action: 'Fix Chennai NAP inconsistency',                           evidence: 'NAP consistency is a local pack ranking factor. All studied competitors have clean NAP. Chennai email domain mismatch identified in baseline audit conflicts with GBP.',                             owner: 'Marketing',      gtmStep: 'Step 2A', outcome: 'Chennai local pack eligibility restored. GBP and citations aligned.' },
  { num: 6,  priority: 'CRITICAL', action: 'Rewrite GFC Therapy page to 3,000+ words with 10 H2s + FAQ schema', evidence: 'DermaVue ranks #1 with 4,900-word page. Regencare is #9 with shorter content. Content depth is the ONLY gap — not DA, not backlinks.',                                           owner: 'Content',        gtmStep: 'Step 3B', outcome: 'Move #9 → Top 3 for GFC Kochi (1,300/mo). Capture 5+ People Also Ask boxes. Estimated 90 days to page 1 position.' },
  { num: 7,  priority: 'HIGH',     action: 'Implement full schema graph on every page',               evidence: 'Apollo, Manipal, Kokilaben all use MedicalProcedure + FAQPage + BreadcrumbList + Person schema as standard. DermaVue uses 4 schema types and outranks Regencare on every shared keyword.',       owner: 'Dev',            gtmStep: 'Step 3A', outcome: 'SERP rich result eligibility: FAQ rich results, breadcrumb display, local pack enhancement, voice answer candidacy' },
  { num: 8,  priority: 'HIGH',     action: "Publish stem cell therapy Kerala comprehensive guide (3,500 words)",evidence: "Apollo/Manipal rank nationally but have no Kerala-specific stem cell page. Chaitanya's 3,500-word guide with 6 academic citations is the model to beat.",                          owner: 'Content',        gtmStep: 'Step 3B', outcome: "#1-3 for 'stem cell therapy Kerala' (480/mo) — no quality local competitor. Challenge national hospital sites with location signal." },
  { num: 9,  priority: 'HIGH',     action: 'Publish transparent pricing pages for all major treatments', evidence: "No competitor — local or national — lists prices online. 'GFC therapy cost Kerala' (170/mo), 'stem cell therapy cost India' (480/mo) — zero strong answers on SERPs.",                     owner: 'Content',        gtmStep: 'Step 3B', outcome: 'Capture entire cost-query cluster. Highest-converting traffic type (transactional intent). Zero competition currently.' },
  { num: 10, priority: 'HIGH',     action: 'Build Dr. Vineeth MB comprehensive authority hub',         evidence: "Manipal's gold standard: named doctor with credentials on every clinical page. Apollo links every treatment page to specialist profiles.",                                                         owner: 'Content + SEO',  gtmStep: 'Step 3A', outcome: 'Domain-wide E-E-A-T signal improvement. Every treatment page ranking improves when authored by a credentialed, schema-marked doctor profile.' },
  { num: 11, priority: 'HIGH',     action: 'Build UAE/NRI medical tourism landing page',               evidence: 'Cutis International has UAE clinics. Apollo has international pages. But no Kerala-based regen clinic has an NRI-facing regen page. 18 keywords, near-zero local competition.',                  owner: 'Content',        gtmStep: 'Step 3A', outcome: 'Capture UAE segment — highest patient LTV. No current competitor. Positions Regencare ahead of Cutis for NRI regen queries.' },
  { num: 12, priority: 'HIGH',     action: 'Optimise Google Business Profile for all 3 branches',      evidence: 'DermaVue (7-clinic GBP network) and Oliva dominate local packs. Kokilaben\'s GBP is fully optimised. Regencare GBPs have incomplete service listings, low review counts, NAP issues.',          owner: 'Marketing',      gtmStep: 'Step 4A', outcome: 'Local pack presence for Kochi, Calicut, Chennai. Drives call and walk-in conversions directly.' },
  { num: 13, priority: 'HIGH',     action: 'Build Calicut-specific treatment pages',                   evidence: 'All 10 local competitors focus content on Kochi. Calicut has 30-40% lower keyword competition. Apollo Spectra\'s location-page model is the playbook.',                                          owner: 'Content',        gtmStep: 'Step 3B', outcome: 'Page-1 rankings for Calicut keywords with 40% less content investment than equivalent Kochi pages.' },
  { num: 14, priority: 'HIGH',     action: 'Build knee pain non-surgical treatment page (2,500+ words)', evidence: 'Regencare already ranks #2 — a content upgrade secures #1. Ayurveda clinics dominate with thin pages. RegenOrthoSport 12-H2 model shows the content depth needed.',                        owner: 'Content',        gtmStep: 'Step 3B', outcome: "Secure #1 for 'knee pain treatment without surgery Kerala' (720/mo). Treatment comparison table adds commercial intent capture." },
  { num: 15, priority: 'MEDIUM',   action: 'Build sports injury treatment hub',                        evidence: "RegenOrthoSport's 12-H2 model covers ACL, PCL, meniscal, tennis elbow. No Kerala clinic has this. Physiotherapy owns the space with thin content.",                                             owner: 'Content',        gtmStep: 'Step 3B', outcome: 'Capture sports injury segment — high commercial intent, no regen competitor in Kerala' },
  { num: 16, priority: 'MEDIUM',   action: 'Add academic citations to all treatment pages (1-2 PubMed per page)', evidence: 'Chaitanya uses 6 PubMed citations — highest E-E-A-T signal found. Manipal links to PubMed. These signal to Google that content meets YMYL quality standards.',                   owner: 'Content',        gtmStep: 'Step 3B', outcome: 'E-E-A-T improvement across all treatment pages. Particularly important for Google\'s medical content quality assessment.' },
  { num: 17, priority: 'LOW',      action: 'Begin AI citation / GEO strategy (ChatGPT, Gemini, Perplexity)', evidence: 'No Kerala clinic is cited by AI engines. Apollo and Manipal are cited nationally. Publishing structured answer content + consistent entity data trains LLMs.',                        owner: 'Content + SEO',  gtmStep: 'Step 5C', outcome: 'Regencare cited in AI Overviews, ChatGPT, and Perplexity for regenerative medicine Kerala queries — growing traffic surface' },
]
