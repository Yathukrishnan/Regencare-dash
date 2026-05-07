"""
Seed the database with all Regencare research data.
Run: python seed.py
"""
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from app.core.database import SessionLocal, engine, Base
from app.core.auth import hash_password
from app.models.models import User, Keyword, RankHistory, Competitor, AuditItem

Base.metadata.create_all(bind=engine)
db = SessionLocal()

# ── Users ─────────────────────────────────────────────────────────────────────
if not db.query(User).first():
    db.add_all([
        User(email="admin@regencare.in", name="Admin", hashed_password=hash_password("regencare2026"), role="admin"),
        User(email="team@ntglobal.net", name="NT Global Team", hashed_password=hash_password("ntglobal2026"), role="viewer"),
    ])
    db.commit()
    print("[OK] Users seeded")

# ── Keywords ──────────────────────────────────────────────────────────────────
KEYWORDS = [
    # KOCHI
    ("stem cell therapy kochi", "Medical Procedure", "Kochi", 1900, "Commercial", 8),
    ("prp treatment kochi", "Medical Procedure", "Kochi", 1600, "Commercial", 12),
    ("gfc treatment kochi", "Medical Procedure", "Kochi", 1300, "Commercial", 9),
    ("regenerative medicine kochi", "Medical Procedure", "Kochi", 880, "Informational", 5),
    ("knee pain treatment kochi", "Medical Procedure", "Kochi", 2400, "Commercial", 15),
    ("sports injury treatment kochi", "Medical Procedure", "Kochi", 720, "Commercial", 7),
    ("hair loss treatment kochi", "Medical Procedure", "Kochi", 3600, "Commercial", 18),
    ("prp hair treatment kochi", "Medical Procedure", "Kochi", 2200, "Commercial", 14),
    ("gfc hair treatment kochi", "Medical Procedure", "Kochi", 1800, "Commercial", 9),
    ("orthopedic doctor kochi", "Medical Procedure", "Kochi", 5400, "Commercial", 22),
    ("shoulder pain specialist kochi", "Medical Procedure", "Kochi", 480, "Commercial", 6),
    ("orthobiologics kochi", "Medical Procedure", "Kochi", 320, "Informational", 4),
    ("platelet rich plasma kochi", "Medical Procedure", "Kochi", 740, "Commercial", 11),
    ("dr vineeth mb kochi", "Brand", "Kochi", 320, "Navigational", 1),
    ("regencare kochi", "Brand", "Kochi", 590, "Navigational", 1),
    # CALICUT
    ("stem cell therapy calicut", "Medical Procedure", "Calicut", 880, "Commercial", 4),
    ("prp treatment calicut", "Medical Procedure", "Calicut", 720, "Commercial", 7),
    ("gfc hair treatment calicut", "Medical Procedure", "Calicut", 590, "Commercial", 6),
    ("regenerative medicine calicut", "Medical Procedure", "Calicut", 390, "Informational", 3),
    ("knee pain treatment calicut", "Medical Procedure", "Calicut", 1300, "Commercial", 11),
    ("hair loss treatment calicut", "Medical Procedure", "Calicut", 1900, "Commercial", 16),
    ("orthopedic specialist calicut", "Medical Procedure", "Calicut", 960, "Commercial", 9),
    ("sports medicine calicut", "Medical Procedure", "Calicut", 480, "Commercial", 5),
    ("regencare calicut", "Brand", "Calicut", 260, "Navigational", 1),
    # CHENNAI
    ("stem cell therapy chennai", "Medical Procedure", "Chennai", 2400, "Commercial", 19),
    ("prp treatment chennai", "Medical Procedure", "Chennai", 2900, "Commercial", 24),
    ("gfc treatment chennai", "Medical Procedure", "Chennai", 1900, "Commercial", 21),
    ("regenerative medicine chennai", "Medical Procedure", "Chennai", 1300, "Informational", 17),
    ("knee pain treatment chennai", "Medical Procedure", "Chennai", 4400, "Commercial", 28),
    ("hair loss treatment chennai", "Medical Procedure", "Chennai", 8100, "Commercial", 35),
    ("prp hair treatment chennai", "Medical Procedure", "Chennai", 3200, "Commercial", 31),
    ("orthopedic doctor chennai", "Medical Procedure", "Chennai", 9900, "Commercial", 44),
    ("sports injury treatment chennai", "Medical Procedure", "Chennai", 1600, "Commercial", 26),
    ("regencare chennai", "Brand", "Chennai", 170, "Navigational", 2),
    # KERALA REGIONAL
    ("stem cell therapy kerala", "Medical Procedure", "Kerala", 2900, "Commercial", 9),
    ("regenerative medicine kerala", "Medical Procedure", "Kerala", 1600, "Informational", 6),
    ("prp treatment kerala", "Medical Procedure", "Kerala", 2200, "Commercial", 13),
    ("gfc treatment kerala", "Medical Procedure", "Kerala", 1300, "Commercial", 8),
    ("best orthopedic hospital kerala", "Medical Procedure", "Kerala", 6600, "Commercial", 42),
    ("sports medicine doctor kerala", "Medical Procedure", "Kerala", 720, "Commercial", 4),
    ("stem cell therapy cost kerala", "Cost/Price", "Kerala", 1100, "Informational", None),
    ("prp treatment cost kerala", "Cost/Price", "Kerala", 1900, "Commercial", None),
    ("gfc vs prp kerala", "Conversational", "Kerala", 590, "Informational", None),
    # UAE
    ("stem cell therapy dubai", "Medical Procedure", "UAE", 3600, "Commercial", None),
    ("prp treatment dubai", "Medical Procedure", "UAE", 5400, "Commercial", None),
    ("gfc treatment dubai", "Medical Procedure", "UAE", 1900, "Commercial", None),
    ("indian orthopedic doctor dubai", "Medical Procedure", "UAE", 480, "Commercial", None),
    ("regenerative medicine uae", "Medical Procedure", "UAE", 1300, "Informational", None),
    ("stem cell therapy abu dhabi", "Medical Procedure", "UAE", 1600, "Commercial", None),
    # CONVERSATIONAL & COST
    ("how much does prp treatment cost in india", "Conversational", "All", 2400, "Informational", None),
    ("is stem cell therapy safe", "Conversational", "All", 3600, "Informational", None),
    ("stem cell therapy cost india", "Cost/Price", "All", 4400, "Commercial", None),
    ("gfc treatment cost india", "Cost/Price", "All", 1300, "Commercial", None),
    ("what is regenerative medicine", "Conversational", "All", 2900, "Informational", None),
    ("prp vs gfc which is better", "Conversational", "All", 880, "Informational", None),
    ("stem cell therapy for knee pain", "Conversational", "All", 5400, "Informational", None),
    ("prp treatment side effects", "Conversational", "All", 2200, "Informational", None),
    ("how many sessions of prp for hair loss", "Conversational", "All", 1900, "Informational", None),
    ("is gfc better than prp for hair", "Conversational", "All", 1300, "Informational", None),
    ("stem cell therapy success rate india", "Conversational", "All", 1600, "Informational", None),
    ("best doctor for stem cell therapy india", "Conversational", "All", 720, "Commercial", None),
]

if not db.query(Keyword).first():
    for kw_data in KEYWORDS:
        kw = Keyword(
            keyword=kw_data[0], category=kw_data[1], branch=kw_data[2],
            volume=kw_data[3], intent=kw_data[4], current_rank=kw_data[5],
            best_rank=kw_data[5], target_rank=1,
        )
        db.add(kw)
        db.flush()
        if kw_data[5]:
            db.add(RankHistory(keyword_id=kw.id, rank=kw_data[5]))
    db.commit()
    print(f"✓ {len(KEYWORDS)} keywords seeded")

# ── Competitors ───────────────────────────────────────────────────────────────
LOCAL = [
    ("orthogencare.com", "OrthogenCare", "Local", 18, "Orthopedic/Regen",
     "CRITICAL: Same doctor Dr. Vineeth MB — brand cannibalization on identical SERPs. Regencare must resolve this through canonical strategy or consolidation.",
     55, "Basic", 72, 4.3,
     "Same doctor credibility|Low DA means less authority|Targets same keywords",
     "stem cell therapy kochi|prp treatment kochi|regenerative medicine kochi|dr vineeth mb"),
    ("dermavue.com", "DermaVue", "Local", 34, "Dermatology",
     "4,900-word GFC page ranks #1 for 'gfc hair treatment kochi' — Regencare at #9. Content depth is the primary gap. Despite being a dermatology clinic, dominates regenerative hair terms.",
     88, "Advanced", 91, 4.7,
     "4,900-word GFC page|Professional photography|Strong FAQ sections|FAQ schema|Advanced schema markup",
     "gfc treatment kochi|gfc hair treatment kerala|prp hair treatment kochi|hair loss treatment kochi"),
    ("olivaclinic.com", "Oliva Clinic", "Local", 42, "Dermatology",
     "National chain with 50+ locations. High DA and brand trust dominates hair loss SERPs across all Kerala cities. Consistent multi-location SEO playbook.",
     85, "Advanced", 89, 4.5,
     "National chain authority (DA 42)|Multi-location schema|Consistent NAP|Video content|Before/after gallery",
     "hair loss treatment kochi|hair loss treatment calicut|hair loss treatment chennai|prp hair loss kerala"),
    ("cutisinternational.com", "Cutis International", "Local", 28, "Dermatology",
     "Strong local presence in Kochi for skin/hair treatments. Growing blog with consistent publishing cadence.",
     72, "Moderate", 78, 4.4,
     "Active blog (2+ posts/month)|Local citations well built|Good GBP profile",
     "skin treatment kochi|hair treatment kochi|prp kochi"),
    ("ladensitae.com", "La Densitae", "Local", 22, "Hair Clinic",
     "Specialist hair clinic ranking for GFC and PRP terms in Kochi despite lower DA. Content specialisation beats generalist sites.",
     65, "Basic", 74, 4.2,
     "Hair loss specialization|Dedicated GFC landing page|Social proof sections",
     "gfc treatment kochi|hair transplant kochi|prp hair kochi"),
    ("zaayaskinclinic.com", "Zaaya Skin Clinic", "Local", 19, "Dermatology",
     "Kochi-based clinic competing for local hair and skin keywords. Lower DA but strong local citations.",
     58, "Basic", 68, 4.1,
     "Strong Google reviews (4.1)|Local Kochi citations|Photo-rich GBP",
     "skin treatment kochi|hair loss kochi|prp skin kochi"),
    ("dhiinternational.com", "DHI International", "Local", 48, "Hair Clinic",
     "International hair transplant brand. High DA dominates hair transplant searches across Kerala. Strong schema and multi-location presence.",
     82, "Advanced", 86, 4.6,
     "International brand authority (DA 48)|Multi-language content|Advanced schema|Video testimonials|Strong backlinks from health portals",
     "hair transplant kochi|hair transplant kerala|prp hair loss treatment|gfc hair treatment"),
    ("dh-clinic.com", "DH Clinic", "Local", 21, "Hair Clinic",
     "Local Kochi hair clinic. Competes for PRP and hair loss keywords. Basic schema only.",
     54, "None", 65, 4.0,
     "Kochi location signals|Basic local SEO",
     "hair clinic kochi|prp hair kochi"),
    ("hairwellnessclinic.com", "Hair Wellness Clinic", "Local", 17, "Hair Clinic",
     "Targets PRP hair loss keywords locally. Lowest DA in the set — content freshness is main advantage.",
     48, "None", 62, 3.9,
     "Fresh content updates|Competitive pricing content",
     "prp hair loss kochi|hair loss treatment kochi"),
    ("paincentre.in", "Pain Centre India", "Local", 25, "Pain Management",
     "Competes for knee pain and sports injury keywords. Well-structured condition pages beat general hospital pages for specific pain terms.",
     61, "Basic", 70, 4.1,
     "Condition-specific pages|Knee pain detailed content|FAQ sections|Patient journey pages",
     "knee pain treatment kochi|sports injury kochi|back pain specialist kochi"),
]

HOSPITALS = [
    ("apollohospitals.com", "Apollo Hospitals", "Hospital", 72, "Multi-specialty Hospital",
     "DCGI-approved branded treatments (OSSGROW for bone, CARTIGROW for cartilage). Massive content depth (10,000+ words on stem cell pages). Full schema graph. Best-in-class E-E-A-T.",
     95, "Full Graph", 94, 4.8,
     "DCGI-approved branded treatments|Full schema graph|Doctor profiles with credentials|Clinical study citations|Video explainer content|Dedicated stem cell centre pages|Multi-city pages",
     "stem cell therapy india|stem cell treatment knee|orthopedic stem cell|regenerative medicine india"),
    ("apollospectra.com", "Apollo Spectra", "Hospital", 65, "Specialty Hospital",
     "Hub-and-spoke content model — treatment cluster pages dominate specialty search terms. Best internal linking architecture. Each treatment has 5+ supporting blog articles.",
     92, "Full Graph", 92, 4.7,
     "Hub-and-spoke content clusters|5+ supporting articles per treatment|Advanced internal linking|Procedure comparison tables|Named specialist profiles|FAQPage schema on every page",
     "prp treatment india|sports medicine india|knee replacement vs prp|stem cell knee treatment"),
    ("manipalhospitals.com", "Manipal Hospitals", "Hospital", 70, "Multi-specialty Hospital",
     "Named doctor authorship on every page — best E-E-A-T implementation in the set. Structured data for every article. Patient outcome data published.",
     93, "Full Graph", 91, 4.7,
     "Named doctor byline on every page|Patient outcome statistics|Academic citations per page|Structured author markup|E-E-A-T best practice|Multi-specialty cross-linking",
     "stem cell therapy bangalore|regenerative medicine india|orthopedic specialist india|knee pain specialist"),
    ("kokilabenhospital.com", "Kokilaben Hospital", "Hospital", 62, "Specialty Hospital",
     "Treatment comparison tables (PRP vs Surgery vs Steroids) are a standout feature — extremely high click-through from comparison search queries. Strong schema and video content.",
     88, "Advanced", 88, 4.6,
     "Treatment comparison tables (PRP vs Surgery vs Steroids)|Video patient testimonials|Clinical photography|Procedure timeline infographics|Strong FAQ schema",
     "prp vs surgery|stem cell vs surgery|knee pain treatment mumbai|prp treatment india"),
    ("stemcellcareindia.com", "Stem Cell Care India", "Hospital", 44, "Specialty Clinic",
     "8,000+ word homepage ranks for competitive national stem cell terms. Condition-specific landing pages for 15+ diseases. Ranks #1-3 for most stem cell therapy India queries.",
     84, "Moderate", 79, 4.4,
     "8,000+ word homepage|15+ disease-specific landing pages|Free consultation CTA|WhatsApp chat integration|Condition severity content",
     "stem cell therapy india|stem cell therapy cost india|stem cell treatment cerebral palsy|stem cell knee india"),
    ("regenorthosport.in", "RegenOrthoSport", "Hospital", 32, "Regen Medicine",
     "Direct competitor in regenerative medicine and sports injury space. Ranks well for sports medicine terms. Good technical SEO despite lower DA.",
     74, "Moderate", 76, 4.3,
     "Sports medicine content depth|Athletes case studies|Video procedure walkthroughs|Good page speed",
     "sports injury treatment india|regenerative medicine bangalore|prp sports injury|stem cell sports"),
    ("chaitanyastemcell.com", "Chaitanya Stem Cell", "Hospital", 28, "Stem Cell Clinic",
     "6 PubMed citations per page — best academic credibility signals in the local/mid-tier set. Trust signals significantly boost ranking despite lower DA. Blueprint for Regencare to copy.",
     78, "Basic", 72, 4.2,
     "6 PubMed citations per page|Academic research references|Clinical evidence positioning|Doctor credentials prominently displayed|Condition-specific clinical evidence",
     "stem cell therapy hyderabad|stem cell treatment india|chaitanya stem cell|prp stem cell"),
]

if not db.query(Competitor).first():
    for d in LOCAL + HOSPITALS:
        db.add(Competitor(
            domain=d[0], name=d[1], type=d[2], da_score=d[3], category=d[4],
            description=d[5], content_score=d[6], schema_level=d[7],
            mobile_score=d[8], gbp_rating=d[9], key_strengths=d[10], keywords_ranking=d[11],
        ))
    db.commit()
    print(f"✓ {len(LOCAL + HOSPITALS)} competitors seeded")

# ── Audit Checklist ───────────────────────────────────────────────────────────
AUDIT = [
    # Site Architecture
    ("Site Architecture", "Remove 7 H1 tags on homepage — keep exactly 1 (brand name + primary keyword)", "Critical"),
    ("Site Architecture", "Fix blog page 404 error — restore or redirect to working blog", "Critical"),
    ("Site Architecture", "Fix resources page 404 error — restore or redirect", "Critical"),
    ("Site Architecture", "Implement hub-and-spoke URL structure: /treatments/stem-cell-therapy/, /treatments/prp/, /treatments/gfc/ etc.", "High"),
    ("Site Architecture", "Create dedicated city landing pages: /kochi/, /calicut/, /chennai/ with unique content per branch", "High"),
    ("Site Architecture", "Add breadcrumb navigation to all inner pages", "Medium"),
    ("Site Architecture", "Implement XML sitemap covering all pages — submit to Google Search Console", "High"),
    # Technical SEO
    ("Technical SEO", "Achieve Largest Contentful Paint (LCP) < 2.5s on all key pages", "High"),
    ("Technical SEO", "Achieve Cumulative Layout Shift (CLS) < 0.1 on all pages", "High"),
    ("Technical SEO", "Achieve Interaction to Next Paint (INP) < 200ms", "Medium"),
    ("Technical SEO", "Fix all broken internal links (404 errors)", "Critical"),
    ("Technical SEO", "Implement canonical tags on all pages to prevent duplicate content", "High"),
    ("Technical SEO", "Configure robots.txt correctly — ensure treatment pages are crawlable", "High"),
    ("Technical SEO", "Enable HTTPS with valid SSL certificate on all subdomains", "Critical"),
    ("Technical SEO", "Compress and serve WebP images — reduce image payload", "Medium"),
    # On-Page SEO
    ("On-Page SEO", "Write unique title tags for every page (55-60 chars) with primary keyword + location", "Critical"),
    ("On-Page SEO", "Write unique meta descriptions for every page (150-160 chars) with CTA", "High"),
    ("On-Page SEO", "Ensure every page has exactly 1 H1 tag", "Critical"),
    ("On-Page SEO", "Add descriptive alt text to all images (include keyword + location where natural)", "Medium"),
    ("On-Page SEO", "Expand all treatment pages to minimum 1,500 words (DermaVue benchmark: 4,900 words)", "High"),
    ("On-Page SEO", "Add FAQ section (minimum 5 questions) to all treatment pages", "High"),
    ("On-Page SEO", "Add treatment comparison section (e.g. PRP vs GFC vs Stem Cell) — Kokilaben model", "High"),
    # Content Strategy
    ("Content Strategy", "Add Dr. Vineeth MB author bio with full credentials (MBBS, MS Ortho) to all pages", "Critical"),
    ("Content Strategy", "Add 2+ academic citations (PubMed/Google Scholar) per treatment page — Chaitanya model", "High"),
    ("Content Strategy", "Publish minimum 2 blog posts per month — target conversational + informational keywords", "High"),
    ("Content Strategy", "Create 'About the Doctor' dedicated page with credentials, experience, publications", "High"),
    ("Content Strategy", "Add NMC-compliant patient success stories (outcomes, not cure claims)", "Medium"),
    ("Content Strategy", "Create hub content: 'Complete Guide to Regenerative Medicine' (3,000+ words)", "High"),
    # Schema Markup
    ("Schema Markup", "Implement MedicalClinic schema on all 3 branch pages with full address, phone, hours", "Critical"),
    ("Schema Markup", "Implement MedicalProcedure schema on all treatment pages", "Critical"),
    ("Schema Markup", "Add FAQPage schema to every FAQ section", "High"),
    ("Schema Markup", "Add Person schema for Dr. Vineeth MB (credentials, affiliation, sameAs links)", "High"),
    ("Schema Markup", "Implement BreadcrumbList schema site-wide", "Medium"),
    # Local SEO
    ("Local SEO", "Fix Chennai NAP inconsistency — ensure Name/Address/Phone matches exactly across all citations", "Critical"),
    ("Local SEO", "Verify and fully optimise Google Business Profile for all 3 branches", "Critical"),
    ("Local SEO", "Build 20+ local citations: Justdial, Practo, Sulekha, IMA, Apollo, 1mg, Lybrate", "High"),
    ("Local SEO", "Respond to all Google reviews within 48 hours — set up notification alerts", "Medium"),
    # Backlinks
    ("Backlinks", "Submit to 5 medical directories: IMA, Practo, NMC registry, Lybrate, 1mg", "High"),
    ("Backlinks", "Publish 2 guest articles on health/medical blogs with backlinks to treatment pages", "Medium"),
    # GEO & AEO
    ("GEO & AEO", "Replace contact form with cal.com booking system — improve conversion and crawlability", "High"),
    ("GEO & AEO", "Add Speakable schema to key FAQ answers for voice search optimisation", "Medium"),
    ("GEO & AEO", "Create structured 'What is X' definitions per treatment for AI Overview eligibility", "High"),
    # Measurement
    ("Measurement", "Set up Google Search Console for regencare.in — verify all 3 branch pages", "Critical"),
    ("Measurement", "Configure GA4 with medical conversion goals (form fills, calls, bookings)", "Critical"),
    ("Measurement", "Set up Google Tag Manager for clean tracking management", "High"),
]

if not db.query(AuditItem).first():
    for item in AUDIT:
        db.add(AuditItem(pillar=item[0], item=item[1], priority=item[2], status="Pending"))
    db.commit()
    print(f"✓ {len(AUDIT)} audit items seeded")

db.close()
print("\n✅ Database seeded successfully.")
print("   Login: admin@regencare.in / regencare2026")
