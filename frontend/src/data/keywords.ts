export type KeywordLocation = 'Kochi' | 'Calicut' | 'Chennai' | 'Kerala Regional' | 'UAE' | 'Conversational'
export type KeywordPriority = 'Critical' | 'High' | 'Medium' | 'Low'
export type KeywordIntent = 'Brand' | 'Transactional' | 'Informational' | 'Navigational' | 'Question' | 'Symptom' | 'Comparison'

export interface Keyword {
  id: number
  keyword: string
  position: string
  rankingUrl: string
  intent: KeywordIntent
  topCompetitor: string
  volume: string
  priority: KeywordPriority
  actionRequired: string
  location: KeywordLocation
}

export const SCORECARD = [
  { area: 'Technical SEO',      score: '2/10', note: '7 H1 tags, empty sitemap, blog 404, zero schema across all pages' },
  { area: 'Keyword Rankings',   score: '5/10', note: 'Strong for brand terms — absent from PRP hair, GFC, sports, back pain' },
  { area: 'Brand Protection',   score: '2/10', note: 'orthogencare.com outranking Regencare for Dr. Vineeth MB' },
  { area: 'GEO / AI Engines',   score: '1/10', note: 'Not cited in ChatGPT, Gemini, or Perplexity — zero schema' },
  { area: 'Local SEO',          score: '4/10', note: 'Good reviews (4.8★) — GBP incomplete, Chennai email mismatch' },
  { area: 'Content',            score: '2/10', note: '1 blog post, no research articles, no complete doctor profiles' },
  { area: 'Patient Conversion', score: '1/10', note: 'No booking system, no chatbot, no callback — contact form only' },
]

export const LOCATION_SUMMARY = [
  { location: 'Kochi' as KeywordLocation,         count: 31, desc: 'All Kochi location — service, condition, and doctor keywords' },
  { location: 'Calicut' as KeywordLocation,        count: 16, desc: 'All Calicut / Kozhikode location keywords' },
  { location: 'Chennai' as KeywordLocation,        count: 16, desc: 'All Chennai location and service keywords' },
  { location: 'Kerala Regional' as KeywordLocation,count: 21, desc: 'State-wide Kerala search terms' },
  { location: 'UAE' as KeywordLocation,            count: 13, desc: 'NRI / Dubai / Medical tourism keywords' },
  { location: 'Conversational' as KeywordLocation, count: 45, desc: 'Question-based, symptom, cost & comparison keywords' },
]

let _id = 1
const kw = (
  keyword: string,
  position: string,
  rankingUrl: string,
  intent: KeywordIntent,
  topCompetitor: string,
  volume: string,
  priority: KeywordPriority,
  actionRequired: string,
  location: KeywordLocation
): Keyword => ({ id: _id++, keyword, position, rankingUrl, intent, topCompetitor, volume, priority, actionRequired, location })

export const KEYWORDS: Keyword[] = [
  // ── KOCHI ────────────────────────────────────────────────────────────────
  kw('regenerative medicine Kochi','#1','regencare.in','Brand','orthogencare.com','1,000–2,000','High','Add MedicalClinic schema — lock in position','Kochi'),
  kw('PRP therapy Kochi Kerala','#1','regencare.in','Transactional','orthogencare.com','1,000–2,000','High','Add FAQPage schema to secure featured snippet','Kochi'),
  kw('hair loss regenerative medicine Kochi','#1','regencare.in','Transactional','DermaVue','500–1,000','High','Build dedicated hair loss landing page','Kochi'),
  kw('erectile dysfunction treatment Kochi','#1','regencare.in/erectile-dysfunction-regenerative-medicine','Transactional','Silverline Hospital','500–1,000','Medium','Sensitive page — needs DPDP compliance review','Kochi'),
  kw('osteoarthritis treatment without surgery Kerala','#1','regencare.in/ortho/osteochondritis-treatment-kerala','Transactional','Ayurveda clinics','1,000–2,000','High','Add MedicalProcedure schema immediately','Kochi'),
  kw('avascular necrosis treatment Kerala','#1','regencare.in/ortho/avascular-necrosis-treatment','Transactional','Chaitanya Stem Cell','200–500','Medium','Niche high-intent — add schema','Kochi'),
  kw('can I avoid knee surgery with PRP Kerala','#1','regencare.in/ortho/knee-pain-treatment-without-surgery','Question','orthogencare.com','1,000–2,000','High','Perfect intent match — add FAQ schema immediately','Kochi'),
  kw('regenerative medicine near me Kerala','#1','regencare.in','Navigational','orthogencare.com, Epione','2,000–5,000','High',"'Near me' high intent — optimise all 3 GBP profiles",'Kochi'),
  kw('knee pain treatment without surgery Kochi','#2','regencare.in/ortho/knee-pain-treatment-without-surgery','Transactional','Physiotherapy blog','2,000–5,000','High','Strong opportunity — schema + content to claim #1','Kochi'),
  kw('stem cell therapy Kochi Kerala','#2','regencare.in/stem-cell-therapy','Transactional','orthogencare.com (#1)','500–1,000','Critical','Brand conflict — orthogencare.com #1, resolve urgently','Kochi'),
  kw('tendonitis treatment Kerala regenerative','#3','regencare.in/ortho/chronic-tendonitis-treatment','Informational','orthogencare.com','200–500','Medium','Add FAQ section to improve position','Kochi'),
  kw('shin splints treatment Kochi Kerala','#3','regencare.in/ortho/shin-splints-treatment','Transactional','orthogencare.com (#2)','200–500','Medium','Brand conflict — orthogencare.com above','Kochi'),
  kw('non surgical treatment near me Kochi','#3','regencare.in/about-us','Transactional','Almeka, Skinessence','1,000–2,000','High','About Us ranking — build dedicated non-surgical hub page','Kochi'),
  kw('GFC therapy Kochi','#9','regencare.in/gfc-therapy','Transactional','Almeka, Hair Wellness, DermaVue','1,000–2,000','High','5 hair clinics above — rewrite page for ortho + hair GFC','Kochi'),
  kw('PRP treatment Kochi','Not in Top 10','—','Transactional','DermaVue, Oliva, Hair Tree','5,000–10,000','Critical','Highest volume keyword — hair clinics dominate, create dedicated PRP page','Kochi'),
  kw('hair fall doctor Kochi','Not in Top 10','—','Transactional','DermaVue, Oliva, Twacha','2,000–5,000','High','High patient volume — build Dr. Aswathi profile page','Kochi'),
  kw('knee pain doctor Kochi','Not in Top 10','—','Transactional','Lybrate, Amrita, Lourdes','2,000–5,000','High','Very high intent — create doctor profile with ortho keywords','Kochi'),
  kw('joint pain treatment Kochi','Not in Top 10','—','Transactional','orthogencare.com, Ayurveda','2,000–5,000','High','Build joint pain landing page with LocalBusiness schema','Kochi'),
  kw('back pain treatment Kochi','Not in Top 10','—','Transactional','Kumar Centre, Ayurveda','2,000–5,000','High','No page exists — create spine/back pain condition page','Kochi'),
  kw('shoulder pain treatment Kochi','Not in Top 10','—','Transactional','orthogencare.com, Ayurveda','1,000–2,000','High','orthogencare.com has dedicated page — Regencare does not','Kochi'),
  kw('sports injury doctor Kochi','Not in Top 10','—','Transactional','MIOC Ortho, Aster, VPS','2,000–5,000','High','Hospital brands dominate — need sports medicine content hub','Kochi'),
  kw('hair thinning treatment Kochi','Not in Top 10','—','Transactional','DermaVue, Oliva, Zaaya','1,000–2,000','High','High volume — hair clinics fully dominate, need trichology page','Kochi'),
  kw('knee replacement alternative Kochi','Not in Top 10','—','Transactional','Kinder Hospital, VPS','1,000–2,000','High','Core Regencare audience — patients avoiding surgery','Kochi'),
  kw('pain relief clinic Kochi','Not in Top 10','—','Transactional','Amrita, Kumar Centre, Aster','2,000–5,000','High','Hospital brands dominate — need pain management page','Kochi'),
  kw('skin doctor Kochi dermatologist','Not in Top 10','—','Navigational','Practo, Aster, Twacha','5,000–10,000','Medium','Very high volume — Dr. Aswathi profile page with schema needed','Kochi'),
  kw('acne scar treatment Kochi','Not in Top 10','—','Transactional','Skinessence, Oliva, DermaVue','2,000–5,000','Medium','High volume — dedicated acne scar treatment page needed','Kochi'),
  kw('plantar fasciitis treatment Kochi','Not in Top 10','—','Transactional','orthogencare.com','500–1,000','Medium','orthogencare.com has dedicated page — Regencare must match','Kochi'),
  kw('orthopedic doctor Kochi without surgery','Not in Top 10','—','Transactional','MIOC Ortho, Amrita','1,000–2,000','High','Perfect Regencare audience — non-surgical ortho page needed','Kochi'),
  kw('diabetic foot ulcer treatment Kochi','Not in Top 10','—','Transactional','Bethaniya Clinic, Medfin','500–1,000','Medium','Service exists — page not optimised for this keyword','Kochi'),
  kw('rotator cuff injury treatment Kochi','Not in Top 10','—','Transactional','International sites dominate','500–1,000','Medium','Regencare treats this — no dedicated page exists','Kochi'),
  kw('hair fall PRP Kochi','Not in Top 10','—','Transactional','Oliva, Pristyn, DermaVue','2,000–5,000','High','High intent — regencare.in/gfc-therapy not targeting this','Kochi'),

  // ── CALICUT ──────────────────────────────────────────────────────────────
  kw('regenerative medicine Calicut','#1','regencare.in','Brand','D Lapp Hair Clinic','500–1,000','High','Ranking #1 — optimise GBP Calicut branch','Calicut'),
  kw('regenerative medicine Kozhikode','#1','regencare.in','Brand','D Lapp Hair Clinic','500–1,000','High','Ranking #1 — add LocalBusiness schema for Calicut','Calicut'),
  kw('PRP treatment Calicut','#2','regencare.in','Transactional','Face360, BHC, DHI India','1,000–2,000','High','Hair clinics above — create dedicated Calicut PRP page','Calicut'),
  kw('PRP treatment Kozhikode','#2','regencare.in','Transactional','Face360, Hair Tree','500–1,000','High','Create dedicated Kozhikode branch treatment page','Calicut'),
  kw('knee pain treatment Calicut','Not in Top 10','—','Transactional','Meitra Hospital, GMC, Lybrate','2,000–5,000','High','Hospital brands dominate — need Calicut knee condition page','Calicut'),
  kw('knee pain doctor Calicut Kozhikode','Not in Top 10','—','Transactional','Meitra Hospital, Lybrate','1,000–2,000','High','High intent — Dr. Vineeth Calicut profile page needed','Calicut'),
  kw('hair loss treatment Calicut','Not in Top 10','—','Transactional','DHI, La Densitae, Charmam','1,000–2,000','High','Hair transplant clinics dominate — build hair treatment Calicut page','Calicut'),
  kw('sports injury treatment Calicut','Not in Top 10','—','Transactional','Meitra Hospital, GMC','500–1,000','Medium','Hospital brands dominate — build sports medicine Calicut content','Calicut'),
  kw('hair fall doctor Calicut Kozhikode','Not in Top 10','—','Transactional','Practo, Lybrate, Charmam','500–1,000','High','No Regencare presence — add dermatologist Calicut profile','Calicut'),
  kw('GFC therapy Calicut','Not in Top 10','—','Transactional','Hair clinics, DHI','500–1,000','High','Regencare offers GFC in Calicut — no dedicated Calicut GFC page','Calicut'),
  kw('joint pain treatment Calicut','Not in Top 10','—','Transactional','Meitra Hospital, Lybrate','500–1,000','High','Create Calicut joint pain landing page with local schema','Calicut'),
  kw('stem cell therapy Calicut','Not in Top 10','—','Transactional','Not many competitors','200–500','Medium','Low competition — opportunity to rank with dedicated page','Calicut'),
  kw('osteoarthritis treatment Calicut','Not in Top 10','—','Transactional','Ayurveda clinics','500–1,000','High',"Ayurveda dominates — Regencare's non-surgical approach differentiates",'Calicut'),
  kw('back pain treatment Kozhikode','Not in Top 10','—','Transactional','Maana Health, Ayurveda','1,000–2,000','High','High volume — spine treatment page for Calicut needed','Calicut'),
  kw('skin clinic Calicut Kozhikode','Not in Top 10','—','Navigational','Criniere Dermis, DHI','1,000–2,000','Medium','Dermatology presence — Dr. Aswathi Calicut page needed','Calicut'),
  kw('PRP cost Calicut Kozhikode','Not in Top 10','—','Transactional','Various hair clinics','500–1,000','High','Cost comparison page for Calicut branch needed','Calicut'),

  // ── CHENNAI ──────────────────────────────────────────────────────────────
  kw('PRP treatment Chennai regenerative','#3','regencare.in','Transactional','Regen Ortho Care (#1)','2,000–5,000','High','Dedicated Chennai PRP page can push to #1','Chennai'),
  kw('regenerative medicine Chennai','#4','regencare.in','Brand','Regen Ortho Care, IIRM','1,000–2,000','High','Chennai branch page with full local schema needed','Chennai'),
  kw('stem cell therapy Chennai','Not in Top 10','—','Transactional','Tosh Hospital, Apollo Spectra','2,000–5,000','High','Hospital brands dominate — build Chennai stem cell page','Chennai'),
  kw('GFC therapy Chennai','Not in Top 10','—','Transactional','VK Allure, Mahi Clinic','2,000–5,000','High','Hair clinics dominate — Regencare not appearing at all','Chennai'),
  kw('joint pain treatment Chennai non surgical','Not in Top 10','—','Transactional','Epione Pain, Synapse Clinic','2,000–5,000','High','Epione dominates — Chennai ortho condition page needed','Chennai'),
  kw('knee pain treatment Chennai','Not in Top 10','—','Transactional','Epione, Bharat Ortho, Rathi','5,000–10,000','Critical','Very high volume — Chennai knee pain page is a major gap','Chennai'),
  kw('hair loss treatment Chennai','Not in Top 10','—','Transactional','Multiple hair clinics','5,000–10,000','High','Very high volume — need Chennai hair treatment landing page','Chennai'),
  kw('PRP hair treatment Chennai','Not in Top 10','—','Transactional','Mahi Clinic, Ram Skin','2,000–5,000','High','High intent — no Regencare Chennai hair page exists','Chennai'),
  kw('sports injury treatment Chennai','Not in Top 10','—','Transactional','Practo, Hospital brands','2,000–5,000','Medium','Hospital brands dominate — need sports medicine Chennai page','Chennai'),
  kw('skin doctor Chennai dermatologist','Not in Top 10','—','Navigational','Practo, Hospitals','10,000+','Medium','Extremely high volume — Dr. Aswathi Chennai profile needed','Chennai'),
  kw('osteoarthritis treatment Chennai','Not in Top 10','—','Transactional','Epione, Bharat Ortho','2,000–5,000','High','Build Chennai condition pages — large elderly population','Chennai'),
  kw('non surgical orthopedic Chennai','Not in Top 10','—','Transactional','Epione Pain and Spine','1,000–2,000','High','Epione dominates — Regencare has no Chennai ortho page','Chennai'),
  kw('regenerative medicine doctor Chennai','Not in Top 10','—','Navigational','Regen Ortho Care','500–1,000','High','Doctor profile page for Chennai branch needed with Person schema','Chennai'),
  kw('plantar fasciitis treatment Chennai','Not in Top 10','—','Transactional','Practo, Hospital brands','500–1,000','Medium','Build condition pages for Chennai branch','Chennai'),
  kw('avascular necrosis treatment Chennai','Not in Top 10','—','Transactional','Practo, Hospitals','200–500','Medium','Extend AVN page to target Chennai','Chennai'),
  kw('PRP cost Chennai price','Not in Top 10','—','Transactional','SBJ Ortho, Practo','2,000–5,000','High','High intent — patients compare costs before booking in Chennai','Chennai'),

  // ── KERALA REGIONAL ──────────────────────────────────────────────────────
  kw('regenerative medicine clinic Kerala','#1','regencare.in','Informational','DH Clinic, Epione','2,000–5,000','High','Core brand keyword — add MedicalClinic schema','Kerala Regional'),
  kw('PRP therapy Kerala','#1','regencare.in','Transactional','orthogencare.com','2,000–5,000','High','Add FAQPage schema to protect position','Kerala Regional'),
  kw('osteoarthritis treatment Kerala','#1','regencare.in/ortho/osteochondritis-treatment-kerala','Transactional','Ayurveda clinics','2,000–5,000','High','Ranking #1 — add schema and expand FAQ section','Kerala Regional'),
  kw('avascular necrosis treatment Kerala','#1','regencare.in/ortho/avascular-necrosis-treatment','Transactional','Chaitanya Stem Cell','500–1,000','Medium','Niche high intent — protect with schema','Kerala Regional'),
  kw('stem cell therapy Kerala','#2','regencare.in/stem-cell-therapy','Transactional','orthogencare.com (#1)','1,000–2,000','Critical','Brand conflict — orthogencare.com #1, resolve immediately','Kerala Regional'),
  kw('non surgical orthopedic treatment Kerala','#2','regencare.in/about-us','Transactional','Physiotherapy clinics','1,000–2,000','High','About Us page ranking — build dedicated non-surgical hub page','Kerala Regional'),
  kw('knee pain without surgery Kerala','#2','regencare.in/ortho/knee-pain-treatment-without-surgery','Transactional','Physiotherapy blog','2,000–5,000','High','Strong opportunity to reach #1 with schema','Kerala Regional'),
  kw('GFC therapy Kerala','#3','regencare.in/gfc-therapy','Transactional','Hair clinics','1,000–2,000','High','Hair clinics above — expand GFC page to cover ortho + hair','Kerala Regional'),
  kw('rheumatoid arthritis treatment Kerala','Not in Top 10','—','Transactional','Ayurveda clinics dominate','2,000–5,000','High','Ayurveda owns this — Regencare regenerative angle underserved','Kerala Regional'),
  kw('diabetic foot ulcer treatment Kerala','Not in Top 10','—','Transactional','Bethaniya, Sanjeevanam','1,000–2,000','Medium','Service exists — dedicated page with schema needed','Kerala Regional'),
  kw('sports injury treatment Kerala','Not in Top 10','—','Transactional','Aster, Hospital brands','2,000–5,000','High','Hospital brands dominate — sports medicine content hub needed','Kerala Regional'),
  kw('hair fall treatment Kerala PRP','Not in Top 10','—','Transactional','DermaVue, Oliva','5,000–10,000','Critical','Very high volume — Regencare absent from this query','Kerala Regional'),
  kw('joint pain doctor Kerala','Not in Top 10','—','Transactional','Hospital brands','2,000–5,000','High','High intent — build Kerala joint pain hub with doctor profiles','Kerala Regional'),
  kw('back pain specialist Kerala','Not in Top 10','—','Transactional','Kumar Centre, Maana','2,000–5,000','High','High volume — spine treatment content needed','Kerala Regional'),
  kw('skin specialist Kerala dermatologist','Not in Top 10','—','Navigational','Aster, Hospitals, Practo','5,000–10,000','Medium','Very high volume — Dr. Aswathi Kerala profile page needed','Kerala Regional'),
  kw('plantar fasciitis treatment Kerala','Not in Top 10','—','Transactional','orthogencare.com','500–1,000','Medium','orthogencare.com has dedicated page — build equivalent','Kerala Regional'),
  kw('shoulder pain treatment Kerala','Not in Top 10','—','Transactional','Ayurveda, orthogencare.com','1,000–2,000','Medium','orthogencare.com ranks — Regencare needs a shoulder page','Kerala Regional'),
  kw('anti aging treatment Kerala','Not in Top 10','—','Transactional','Aesthetic clinics','2,000–5,000','Medium','Dermatology opportunity — anti-aging content hub needed','Kerala Regional'),
  kw('PRP for hair growth Kerala','Not in Top 10','—','Transactional','DermaVue, Hair clinics','2,000–5,000','High','High volume — Regencare invisible despite offering service','Kerala Regional'),
  kw('IV therapy Kerala wellness','Not in Top 10','—','Transactional','Ageon, VCare','500–1,000','Low','Service exists — needs dedicated landing page','Kerala Regional'),
  kw('alopecia treatment Kerala dermatologist','Not in Top 10','—','Transactional','DermaVue, Lybrate, Practo','1,000–2,000','High','Clinical term — Dr. Aswathi profile should target this','Kerala Regional'),

  // ── UAE ───────────────────────────────────────────────────────────────────
  kw('Kerala doctor treatment UAE','Not in Top 10','—','Navigational','Ayurveda clinics Dubai','500–1,000','Medium','Malayalee NRI segment — returning to Kerala for treatment','UAE'),
  kw('PRP therapy Kerala doctor Dubai','Not in Top 10','—','Transactional','Dubai hair clinics','500–1,000','Medium','NRI patients search before travelling to Kerala','UAE'),
  kw('regenerative medicine Kerala visit','Not in Top 10','—','Transactional','Not many competitors','200–500','Medium','Low competition — NRI landing page opportunity','UAE'),
  kw('stem cell therapy India Kerala','Not in Top 10','—','Transactional','Chaitanya, Kokilaben','500–1,000','Medium','Medical tourism angle — Regencare can target NRI segment','UAE'),
  kw('knee pain treatment India Kerala visit','Not in Top 10','—','Transactional','Medical tourism portals','200–500','Medium','NRIs returning for treatment — dedicated NRI page opportunity','UAE'),
  kw('hair treatment India Kerala visit','Not in Top 10','—','Transactional','Cutis International (UAE+Kerala)','200–500','Medium','Cutis has UAE branch — Regencare needs NRI targeting strategy','UAE'),
  kw('non surgical treatment Kerala medical tourism','Not in Top 10','—','Transactional','Medical tourism portals','200–500','Low','Long-term — build Kerala medical tourism content','UAE'),
  kw('orthopedic treatment Kerala India UAE patient','Not in Top 10','—','Transactional','Not many competitors','200–500','Low','Low competition — UAE Malayalee audience','UAE'),
  kw('regencare appointment UAE patient','Not in Top 10','—','Navigational','—','< 200','Low','Branded search from UAE — needs WhatsApp booking and NRI page','UAE'),
  kw('best hospital Kerala joint pain UAE NRI','Not in Top 10','—','Transactional','Medical tourism portals','200–500','Low','Medical tourism — low competition, niche NRI audience','UAE'),
  kw('PRP treatment cost Kerala Dubai comparison','Not in Top 10','—','Informational','Dubai clinic sites','200–500','Medium','NRI comparing cost before travelling — needs cost comparison content','UAE'),
  kw('Malayalam speaking doctor knee pain UAE','Not in Top 10','—','Navigational','HeliumDoc, Aster UAE','200–500','Low','Malayalam NRI — Dr. Vineeth profile helps','UAE'),
  kw('regencare Kochi online consultation','Not in Top 10','—','Transactional','Practo, Lybrate','200–500','Medium','NRI or outstation patient wanting online consult before visit','UAE'),

  // ── CONVERSATIONAL ────────────────────────────────────────────────────────
  kw('is PRP treatment safe India','Not in Top 10','—','Question','DHI India, Oliva, Apollo','5,000–10,000','High','Very high volume FAQ — write dedicated PRP safety blog post','Conversational'),
  kw('PRP vs surgery knee pain India','Not in Top 10','—','Question','Manipal, Alleviate Pain','2,000–5,000','High','High intent — write PRP vs surgery article targeting Kerala','Conversational'),
  kw('which is better PRP or GFC for hair India','Not in Top 10','—','Question','Multiple comparison sites','5,000–10,000','Critical','Extremely high volume — write PRP vs GFC comparison page','Conversational'),
  kw('how to stop hair fall naturally Kochi','Not in Top 10','—','Question','Oliva, Sanjeevanam','2,000–5,000','High','Blog post drives top-of-funnel patients to GFC/PRP page','Conversational'),
  kw('why is my hair falling out Kochi Kerala','Not in Top 10','—','Question','Oliva, DermaVue, Zaaya','2,000–5,000','High','Very common patient query — hair loss cause + treatment blog needed','Conversational'),
  kw('knee pain home remedy Kerala','Not in Top 10','—','Question','Ayurveda clinics dominate','5,000–10,000','High','Massive volume — blog post comparing home remedies vs PRP','Conversational'),
  kw('hair fall after pregnancy treatment Kochi','Not in Top 10','—','Question','Oliva, DermaVue, Twacha','1,000–2,000','High','Specific patient segment — postpartum hair loss blog needed','Conversational'),
  kw('what is regenerative medicine India','Not in Top 10','—','Question','Wikipedia, Mayo Clinic','5,000–10,000','High','Top-of-funnel educational query — cornerstone blog opportunity','Conversational'),
  kw('what is PRP therapy how does it work India','Not in Top 10','—','Question','Apollo, DHI, Oliva','5,000–10,000','High','Very high volume — PRP explainer article needed on Regencare blog','Conversational'),
  kw('what is stem cell therapy India','Not in Top 10','—','Question','Apollo, Health portals','5,000–10,000','High','Informational — write authoritative stem cell explainer article','Conversational'),
  kw('what is GFC treatment for hair India','Not in Top 10','—','Question','Various comparison sites','2,000–5,000','High','High volume — GFC explainer article targets this perfectly','Conversational'),
  kw('how many PRP sessions needed knee India','Not in Top 10','—','Question','Various ortho sites','1,000–2,000','Medium','FAQ content on treatment page answers this — wins snippet','Conversational'),
  kw('does PRP work for hair loss India','Not in Top 10','—','Question','DHI, Oliva, DermaVue','5,000–10,000','Critical','Extremely high volume — PRP effectiveness blog needed urgently','Conversational'),
  kw('how long does PRP treatment last Kerala','Not in Top 10','—','Question','Various sites','1,000–2,000','Medium','FAQ content — add to PRP treatment page to capture snippet','Conversational'),
  kw('can stem cell therapy cure arthritis India','Not in Top 10','—','Question','Health portals, Apollo','1,000–2,000','High','High intent — write stem cell for arthritis article with NMC-compliant framing','Conversational'),
  kw('knee pain walking stairs treatment Kochi','Not in Top 10','—','Symptom','Ayurveda, Practo, Lybrate','1,000–2,000','High','Symptom-specific — blog post targeting this query needed','Conversational'),
  kw('knee swelling treatment Kochi doctor','Not in Top 10','—','Symptom','Ayurveda clinics, Aster','1,000–2,000','High','Symptom-driven — add knee swelling to condition page content','Conversational'),
  kw('hair thinning on top of head treatment Kochi','Not in Top 10','—','Symptom','Hair specialty clinics','1,000–2,000','High','Specific symptom — write targeted hair thinning blog post','Conversational'),
  kw('sudden hair fall reason treatment Kerala','Not in Top 10','—','Symptom','Oliva, Ayurveda sites','2,000–5,000','High','Top-of-funnel symptom search — educational blog needed','Conversational'),
  kw('back of knee pain treatment Kochi','Not in Top 10','—','Symptom','Ayurveda, Practo','500–1,000','Medium','Specific symptom — add to knee condition page FAQ','Conversational'),
  kw('heel pain treatment Kochi Kerala','Not in Top 10','—','Symptom','orthogencare.com, Ayurveda','1,000–2,000','High','Plantar fasciitis often searched as heel pain — optimise page','Conversational'),
  kw('elbow pain treatment Kochi without surgery','Not in Top 10','—','Symptom','orthogencare.com','500–1,000','Medium','Tennis elbow — orthogencare.com has page, Regencare does not','Conversational'),
  kw('neck pain treatment Kochi without surgery','Not in Top 10','—','Symptom','Maana Health, Kumar Centre','1,000–2,000','Medium','High volume — create neck and spine condition page','Conversational'),
  kw('ankle pain treatment Kochi Kerala','Not in Top 10','—','Symptom','Practo, Physiotherapy clinics','500–1,000','Medium','Sports and injury related — add to sports medicine page','Conversational'),
  kw('skin pigmentation treatment Kochi Kerala','Not in Top 10','—','Symptom','Skinessence, DermaVue, Aster','2,000–5,000','Medium','Dermatology gap — add pigmentation content to skin pages','Conversational'),
  kw('PRP treatment cost Kerala price','Listed','regencare.in/prp-procedure','Transactional','Oliva, Hair O Craft, DermaVue','5,000–10,000','Critical','Cost page exists but not ranking top 3 — add clear cost section','Conversational'),
  kw('GFC therapy cost Kerala price','Not in Top 10','—','Transactional','Hair Wellness, DermaVue','2,000–5,000','High','High volume — add clear pricing section to GFC page','Conversational'),
  kw('stem cell therapy cost India Kerala','Not in Top 10','—','Transactional','National portals dominate','2,000–5,000','High','Patients compare costs before booking — add cost FAQ to stem cell page','Conversational'),
  kw('hair loss treatment cost Kochi','Not in Top 10','—','Transactional','Oliva, DermaVue, Pristyn','2,000–5,000','High','Very high intent — patients ready to book, need pricing info','Conversational'),
  kw('PRP injection knee cost Kerala','Not in Top 10','—','Transactional','orthogencare.com, Practo','1,000–2,000','High','High intent — add PRP knee cost section to treatment page','Conversational'),
  kw('acne treatment cost Kochi Kerala','Not in Top 10','—','Transactional','Oliva, Pristyn, Skinessence','2,000–5,000','Medium','Dermatology cost query — add pricing to acne treatment page','Conversational'),
  kw('PRP vs stem cell therapy India','Not in Top 10','—','Comparison','Health portals, Apollo','2,000–5,000','High','Patients comparing options — write comparison article on blog','Conversational'),
  kw('stem cell vs PRP knee India','Not in Top 10','—','Comparison','Alleviate Pain, Orthobiologix','1,000–2,000','High','High intent comparison — blog article drives traffic to both pages','Conversational'),
  kw('knee replacement vs PRP Kerala','Not in Top 10','—','Comparison','Hospital brands, Manipal','1,000–2,000','High','Core Regencare audience — patients avoiding surgery','Conversational'),
  kw('hair transplant vs PRP Kochi Kerala','Not in Top 10','—','Comparison','Hair transplant clinics','2,000–5,000','High','Comparison content — Regencare can win on non-surgical angle','Conversational'),
  kw('hair transplant vs GFC which is better Kerala','Not in Top 10','—','Comparison','DHI, La Densitae','1,000–2,000','High','Patients weighing options — comparison blog drives bookings','Conversational'),
  kw('regenerative medicine for athletes Kerala','Not in Top 10','—','Informational','RegenOrthoSport','200–500','Medium','Sports niche — Regencare treats athletes, no sports page exists','Conversational'),
  kw('non surgical joint pain clinic near me Kerala','Not in Top 10','—','Transactional','Maana Health, Epione','1,000–2,000','High',"'Near me' high intent — optimise GBP and add LocalBusiness schema",'Conversational'),
  kw('stem cell therapy for knee cartilage India','Not in Top 10','—','Informational','Apollo, Shri Bone & Joint','1,000–2,000','High','Specific clinical query — write cartilage regeneration article','Conversational'),
  kw('PRP therapy for sports injury India','Not in Top 10','—','Informational','Manipal, Max Hospital','1,000–2,000','High','High authority sites rank — Regencare can rank with Kerala angle','Conversational'),
  kw('male pattern baldness treatment Kerala','Not in Top 10','—','Transactional','DHI, Hair transplant clinics','1,000–2,000','High','Regencare offers PRP/GFC for this — no dedicated page exists','Conversational'),
  kw('female hair loss treatment Kochi Kerala','Not in Top 10','—','Transactional','DermaVue, Oliva, Zaaya','2,000–5,000','High',"Women hair loss growing segment — dedicated women's hair page needed",'Conversational'),
  kw('hair fall stress treatment Kochi','Not in Top 10','—','Informational','Oliva, Twacha, DermaVue','1,000–2,000','Medium','Stress hair loss is common — blog post targets this cause','Conversational'),
  kw('hair baldness treatment men Kochi','Not in Top 10','—','Transactional','DermaVue, Oliva, Hair clinics','1,000–2,000','High','Male pattern baldness — dedicated men\'s hair loss page needed','Conversational'),
]
