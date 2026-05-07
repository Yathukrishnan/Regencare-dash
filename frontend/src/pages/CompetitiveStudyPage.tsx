import { useState } from 'react'
import {
  LOCAL_COMPETITORS, HOSPITAL_COMPETITORS,
  RANKING_KEYWORDS, REGEN_POSITIONS, LOCAL_POSITIONS, HOSP_POSITIONS,
  CONTENT_DATA, PAGE_TEMPLATE,
  SEO_STRATEGIES, SEO_SITES,
  AUDIT_ROWS,
  AUTH_ROWS,
  SERVICES, REGEN_SERVICES, HOSP_SERVICES, LOCAL_SERVICES,
  WHITE_SPACE_GAPS,
  ARCH_ENTRIES,
  ACTIONS,
} from '../data/competitive'

const TABS = [
  'Local Competitors',
  'Hospital Sites',
  'Keyword Ranking Map',
  'Content Structure',
  'SEO Strategy Matrix',
  'On-Page SEO Audit',
  'Authority & Trust',
  'Service Coverage',
  'White Space & Gaps',
  'SEO Blueprint',
  'Action Priorities',
]

const threatColor: Record<string, string> = {
  CRITICAL: 'bg-red-100 text-red-700 border border-red-200',
  HIGH:     'bg-amber-100 text-amber-700 border border-amber-200',
  MED:      'bg-teal-100 text-teal-700 border border-teal-200',
}

const prioColor: Record<string, string> = {
  CRITICAL: 'bg-red-100 text-red-700 border border-red-200',
  HIGH:     'bg-amber-100 text-amber-700 border border-amber-200',
  MEDIUM:   'bg-teal-100 text-teal-700 border border-teal-200',
  LOW:      'bg-gray-100 text-gray-600 border border-gray-200',
}

function TC({ v, small }: { v: string; small?: boolean }) {
  const map: Record<string, string> = {
    Yes:       'bg-green-100 text-green-700',
    No:        'bg-red-100 text-red-700',
    Partial:   'bg-amber-100 text-amber-700',
    Unknown:   'bg-gray-100 text-gray-500',
    Strong:    'bg-green-100 text-green-700',
    Weak:      'bg-amber-100 text-amber-700',
    None:      'bg-red-100 text-red-700',
    High:      'bg-green-100 text-green-700',
    Medium:    'bg-amber-100 text-amber-700',
    Low:       'bg-red-100 text-red-700',
    'Very High':'bg-green-100 text-green-800 font-bold',
    'Very Low': 'bg-red-100 text-red-800',
    Good:      'bg-green-100 text-green-700',
  }
  const label: Record<string, string> = {
    Yes: '✓ Yes', No: '✗ No', Partial: '~ Partial', Unknown: '? Unknown',
    Strong: '✓ Strong', Weak: '~ Weak', None: '✗ None',
  }
  const cls = map[v] ?? 'bg-gray-100 text-gray-700'
  return (
    <span className={`inline-block px-1.5 py-0.5 rounded text-xs font-medium ${cls} ${small ? '' : ''}`}>
      {label[v] ?? v}
    </span>
  )
}

function PosBadge({ pos }: { pos: string }) {
  if (pos === 'NR' || pos === 'Not Ranking') return <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-semibold">NR</span>
  if (pos === 'Regencare') return <span className="text-xs bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded font-bold">RC</span>
  try {
    const n = parseInt(pos)
    if (n <= 3) return <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">#{n}</span>
    if (n <= 7) return <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">#{n}</span>
    return <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-semibold">#{n}</span>
  } catch { return <span className="text-xs text-gray-400">{pos}</span> }
}

function DaBadge({ da }: { da: number }) {
  const cls = da >= 60 ? 'bg-green-100 text-green-800' : da >= 35 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
  return <span className={`text-xs px-2 py-0.5 rounded font-bold ${cls}`}>{da}</span>
}

// ── LOCAL COMPETITORS ─────────────────────────────────────────────────────────
function LocalCompetitorsTab() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500">10 sites outranking Regencare on Kerala keywords — identified by SERP frequency analysis</p>
      <div className="space-y-3">
        {LOCAL_COMPETITORS.map(c => (
          <div key={c.id} className="bg-white rounded-xl border p-4">
            <div className="flex flex-wrap items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#0D2B55] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{c.id}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-bold text-[#0D2B55]">{c.name}</span>
                  <span className="text-sm text-teal-700">{c.domain}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${threatColor[c.threat]}`}>{c.threat}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{c.type}</span>
                </div>
                <div className="text-xs text-gray-500 mb-1">{c.locations}</div>
                <div className="text-sm text-gray-700">{c.notes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── HOSPITAL SITES ────────────────────────────────────────────────────────────
function HospitalSitesTab() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500">7 major hospital & national regen sites — rank on page 1 nationally for stem cell / regen keywords</p>
      <div className="space-y-3">
        {HOSPITAL_COMPETITORS.map(c => (
          <div key={c.id} className="bg-white rounded-xl border p-4">
            <div className="flex flex-wrap items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-purple-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{c.id}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-bold text-[#0D2B55]">{c.name}</span>
                  <span className="text-sm text-teal-700">{c.domain}</span>
                  <DaBadge da={c.da} />
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{c.type}</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">{c.locations}</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2 text-xs">
                  <div><span className="text-gray-400">Word Count: </span><span className={`font-semibold ${c.wordCount >= 3000 ? 'text-green-700' : c.wordCount >= 1500 ? 'text-amber-700' : 'text-red-700'}`}>{c.wordCount.toLocaleString()}</span></div>
                  <div><span className="text-gray-400">H2 Count: </span><span className={`font-semibold ${c.h2Count >= 9 ? 'text-green-700' : c.h2Count >= 6 ? 'text-amber-700' : 'text-red-700'}`}>{c.h2Count}</span></div>
                  <div><span className="text-gray-400">Schema: </span><TC v={c.schema} /></div>
                  <div><span className="text-gray-400">FAQ: </span><TC v={c.faq} /></div>
                </div>
                <div className="text-xs text-gray-500 mb-1"><span className="font-medium">Doctor Credentials:</span> {c.doctorCredentials}</div>
                <div className="flex gap-2 text-xs mb-2">
                  <span className="text-gray-400">Backlinks:</span><TC v={c.backlinkProfile} />
                  <span className="text-gray-400 ml-2">E-E-A-T:</span><TC v={c.eeat} />
                </div>
                <div className="text-sm text-gray-700">{c.notes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── KEYWORD RANKING MAP ───────────────────────────────────────────────────────
function KeywordRankingMapTab() {
  const localNames = LOCAL_COMPETITORS.map(c => c.name.split(' ')[0])
  const hospNames = HOSPITAL_COMPETITORS.map(c => c.name.split(' ')[0])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-200 inline-block" /> #1–#3 (top positions)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-200 inline-block" /> #4–#7 (mid)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-200 inline-block" /> #8–#10 / Not Ranking</span>
      </div>
      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="text-xs w-full min-w-[900px]">
          <thead>
            <tr className="bg-[#0D2B55] text-white">
              <th className="px-3 py-2 text-left font-semibold sticky left-0 bg-[#0D2B55] z-10 min-w-[200px]">Keyword</th>
              <th className="px-2 py-2 text-center font-semibold">Vol</th>
              <th className="px-2 py-2 text-center bg-teal-700 font-bold">Regencare</th>
              {LOCAL_COMPETITORS.map(c => (
                <th key={c.id} className="px-2 py-2 text-center font-semibold min-w-[60px]">{c.name.split(' ')[0]}</th>
              ))}
              {HOSPITAL_COMPETITORS.map(c => (
                <th key={c.id} className="px-2 py-2 text-center font-semibold bg-purple-800 min-w-[60px]">{c.name.split(' ')[0]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RANKING_KEYWORDS.map((kw, ki) => (
              <tr key={ki} className={ki % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className={`px-3 py-2 font-medium text-[#0D2B55] sticky left-0 z-10 ${ki % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>{kw.keyword}</td>
                <td className="px-2 py-2 text-center text-gray-600">{kw.volume.toLocaleString()}</td>
                <td className="px-2 py-2 text-center bg-teal-50"><PosBadge pos={REGEN_POSITIONS[ki]} /></td>
                {LOCAL_COMPETITORS.map(c => (
                  <td key={c.id} className="px-2 py-2 text-center">
                    <PosBadge pos={LOCAL_POSITIONS[c.id]?.[ki] ?? 'NR'} />
                  </td>
                ))}
                {HOSPITAL_COMPETITORS.map(c => (
                  <td key={c.id} className="px-2 py-2 text-center bg-purple-50">
                    <PosBadge pos={HOSP_POSITIONS[c.id]?.[ki] ?? 'NR'} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-gray-400">NR = Not Ranking on page 1 · Positions estimated from live SERP analysis</div>
    </div>
  )
}

// ── CONTENT STRUCTURE ─────────────────────────────────────────────────────────
function ContentStructureTab() {
  const [showTemplate, setShowTemplate] = useState(false)
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">How top competitors build pages that rank — H1 patterns, word count, content structure</p>
      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="text-xs w-full min-w-[700px]">
          <thead>
            <tr className="bg-[#0D2B55] text-white">
              {['Site', 'H1 Pattern', 'Word Count', 'H2s', 'FAQ', 'Pricing', 'Doctor Authored', 'Citations'].map(h => (
                <th key={h} className="px-3 py-2 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CONTENT_DATA.map((c, i) => (
              <tr key={i} className={c.name.includes('REGENCARE') ? 'bg-teal-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-3 py-2 font-semibold text-[#0D2B55]">{c.name}</td>
                <td className="px-3 py-2 text-gray-600 max-w-[160px]">{c.h1Pattern}</td>
                <td className="px-3 py-2 text-center">
                  <span className={`font-bold ${c.wordCount >= 3000 ? 'text-green-700' : c.wordCount >= 1500 ? 'text-amber-700' : 'text-red-700'}`}>{c.wordCount.toLocaleString()}</span>
                </td>
                <td className="px-3 py-2 text-center">
                  <span className={`font-bold ${c.h2Count >= 9 ? 'text-green-700' : c.h2Count >= 6 ? 'text-amber-700' : 'text-red-700'}`}>{c.h2Count}</span>
                </td>
                <td className="px-3 py-2 text-center"><TC v={c.faq} /></td>
                <td className="px-3 py-2 text-center"><TC v={c.pricing} /></td>
                <td className="px-3 py-2 text-center"><TC v={c.doctorAuthored} /></td>
                <td className="px-3 py-2 text-center">
                  <span className={`text-xs font-semibold ${c.citations !== 'No' ? 'text-green-700' : 'text-red-600'}`}>{c.citations}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => setShowTemplate(!showTemplate)}
        className="text-sm font-semibold text-[#0D2B55] underline"
      >
        {showTemplate ? 'Hide' : 'Show'} Winning Page Template (18 elements)
      </button>
      {showTemplate && (
        <div className="space-y-2">
          <h3 className="font-bold text-[#0D2B55]">Winning Page Structure — derived from Kokilaben + Apollo + DermaVue + Chaitanya</h3>
          {PAGE_TEMPLATE.map((t, i) => (
            <div key={i} className={`rounded-lg border p-3 text-sm ${i % 2 === 0 ? 'bg-blue-50 border-blue-100' : 'bg-white'}`}>
              <div className="flex flex-wrap gap-2 items-start">
                <span className="font-bold text-blue-800 min-w-[160px]">{t.element}</span>
                {t.schema !== 'None' && <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">{t.schema}</span>}
              </div>
              <div className="text-gray-700 mt-1">{t.content}</div>
              <div className="text-xs text-gray-400 mt-1">Source: {t.evidence}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── SEO STRATEGY MATRIX ───────────────────────────────────────────────────────
function SEOStrategyTab() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">Which SEO strategies each competitor uses — ✓ Implemented · ~ Partial · ✗ Missing</p>
      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="text-xs w-full min-w-[800px]">
          <thead>
            <tr className="bg-[#0D2B55] text-white">
              <th className="px-3 py-2 text-left font-semibold sticky left-0 bg-[#0D2B55] z-10 min-w-[220px]">SEO Strategy</th>
              {SEO_SITES.map((s, i) => (
                <th key={i} className={`px-2 py-2 text-center font-semibold min-w-[90px] ${s.name === 'REGENCARE.IN' ? 'bg-teal-700' : ''}`}>
                  {s.name.replace('.IN', '').replace(' Hospitals', '').replace(' Hospital', '').replace(' Clinic', '')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SEO_STRATEGIES.map((strat, si) => (
              <tr key={si} className={si % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className={`px-3 py-2 font-medium text-[#0D2B55] sticky left-0 z-10 ${si % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>{strat}</td>
                {SEO_SITES.map((s, ci) => (
                  <td key={ci} className={`px-2 py-2 text-center ${s.name === 'REGENCARE.IN' ? 'bg-teal-50' : ''}`}>
                    <TC v={s.values[si]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── ON-PAGE SEO AUDIT ─────────────────────────────────────────────────────────
function OnPageAuditTab() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">Technical on-page metrics: title, H1, meta, schema, FAQ, booking, NMC compliance</p>
      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="text-xs w-full min-w-[800px]">
          <thead>
            <tr className="bg-[#0D2B55] text-white">
              {['Competitor', 'Title Tag', 'H1', 'Meta Desc', 'Schema', 'FAQ', 'Word Count', 'Pricing', 'Booking', 'NMC', 'CWV'].map(h => (
                <th key={h} className="px-2 py-2 text-center font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AUDIT_ROWS.map((r, i) => (
              <tr key={i} className={r.isRegen ? 'bg-teal-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className={`px-3 py-2 font-semibold text-left ${r.isRegen ? 'text-teal-800' : 'text-[#0D2B55]'}`}>{r.name}</td>
                <td className="px-2 py-2 text-center"><TC v={r.titleTag} /></td>
                <td className="px-2 py-2 text-center">
                  <span className={`text-xs font-semibold ${r.h1.includes('No') ? 'text-red-600' : 'text-green-700'}`}>{r.h1.length > 20 ? r.h1.slice(0, 20) + '…' : r.h1}</span>
                </td>
                <td className="px-2 py-2 text-center"><TC v={r.metaDesc} /></td>
                <td className="px-2 py-2 text-center">
                  <span className={`text-xs font-semibold ${r.schema.includes('Strong') ? 'text-green-700' : r.schema.includes('Partial') ? 'text-amber-700' : 'text-red-600'}`}>{r.schema.length > 18 ? r.schema.slice(0, 18) + '…' : r.schema}</span>
                </td>
                <td className="px-2 py-2 text-center"><TC v={r.faq} /></td>
                <td className="px-2 py-2 text-center">
                  <span className={`font-bold ${r.wordCount >= 3000 ? 'text-green-700' : r.wordCount >= 1500 ? 'text-amber-700' : 'text-red-700'}`}>{r.wordCount.toLocaleString()}</span>
                </td>
                <td className="px-2 py-2 text-center"><TC v={r.pricing} /></td>
                <td className="px-2 py-2 text-center"><TC v={r.booking} /></td>
                <td className="px-2 py-2 text-center"><TC v={r.nmc} /></td>
                <td className="px-2 py-2 text-center"><TC v={r.cwv} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── AUTHORITY & TRUST ─────────────────────────────────────────────────────────
function AuthorityTab() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">Google ratings, review counts, Domain Authority, backlinks, E-E-A-T scores</p>
      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="text-xs w-full min-w-[700px]">
          <thead>
            <tr className="bg-[#0D2B55] text-white">
              {['Competitor', 'Google ★', 'Reviews', 'DA', 'Backlinks', 'Accreditation', 'Doctor Credentials', 'E-E-A-T', 'Content Auth.'].map(h => (
                <th key={h} className="px-2 py-2 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AUTH_ROWS.map((r, i) => (
              <tr key={i} className={r.isRegen ? 'bg-teal-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className={`px-3 py-2 font-semibold ${r.isRegen ? 'text-teal-800' : 'text-[#0D2B55]'}`}>{r.name}</td>
                <td className="px-2 py-2 text-center">
                  {r.rating ? (
                    <span className={`font-bold ${r.rating >= 4.7 ? 'text-green-700' : r.rating >= 4.3 ? 'text-amber-700' : 'text-red-600'}`}>{r.rating} ★</span>
                  ) : <span className="text-gray-400">—</span>}
                </td>
                <td className="px-2 py-2 text-center text-gray-600">{r.reviews ?? '—'}</td>
                <td className="px-2 py-2 text-center"><DaBadge da={r.da} /></td>
                <td className="px-2 py-2 text-center"><TC v={r.backlinkProfile} /></td>
                <td className="px-2 py-2 text-xs text-gray-600 max-w-[120px]">{r.accreditation}</td>
                <td className="px-2 py-2 text-xs text-gray-700 max-w-[160px]">{r.doctorCredentials}</td>
                <td className="px-2 py-2 text-center"><TC v={r.eeat} /></td>
                <td className="px-2 py-2 text-center"><TC v={r.contentAuth} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── SERVICE COVERAGE ──────────────────────────────────────────────────────────
function ServiceCoverageTab() {
  const hospIds = HOSPITAL_COMPETITORS.map(c => c.id)
  const localIds = LOCAL_COMPETITORS.slice(0, 5).map(c => c.id)

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">Treatments offered — local clinics vs. national hospitals vs. Regencare</p>
      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="text-xs w-full min-w-[800px]">
          <thead>
            <tr className="bg-[#0D2B55] text-white">
              <th className="px-3 py-2 text-left font-semibold min-w-[200px]">Service / Treatment</th>
              <th className="px-2 py-2 text-center bg-teal-700 font-bold">Regencare</th>
              {HOSPITAL_COMPETITORS.map(c => (
                <th key={c.id} className="px-2 py-2 text-center bg-purple-800 font-semibold min-w-[70px]">{c.name.split(' ')[0]}</th>
              ))}
              {LOCAL_COMPETITORS.slice(0, 5).map(c => (
                <th key={c.id} className="px-2 py-2 text-center font-semibold min-w-[70px]">{c.name.split(' ')[0]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SERVICES.map((svc, si) => (
              <tr key={si} className={si % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-3 py-2 font-semibold text-[#0D2B55]">{svc}</td>
                <td className="px-2 py-2 text-center bg-teal-50"><TC v={REGEN_SERVICES[si]} /></td>
                {hospIds.map(id => (
                  <td key={id} className="px-2 py-2 text-center bg-purple-50"><TC v={HOSP_SERVICES[id]?.[si] ?? '?'} /></td>
                ))}
                {localIds.map(id => (
                  <td key={id} className="px-2 py-2 text-center"><TC v={LOCAL_SERVICES[id]?.[si] ?? '?'} /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-gray-400">Showing first 5 local competitors. ✓ = dedicated page · ~ = mentioned but no page · ✗ = not offered/visible</div>
    </div>
  )
}

// ── WHITE SPACE & GAPS ────────────────────────────────────────────────────────
function WhiteSpaceTab() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">What no competitor owns well — Regencare's fastest page-1 opportunities</p>
      <div className="space-y-3">
        {WHITE_SPACE_GAPS.map((g, i) => (
          <div key={i} className={`rounded-xl border p-4 ${g.priority === 'CRITICAL' ? 'bg-red-50 border-red-200' : g.priority === 'HIGH' ? 'bg-amber-50 border-amber-200' : g.priority === 'MEDIUM' ? 'bg-teal-50 border-teal-200' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex flex-wrap items-start gap-2 mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${prioColor[g.priority]}`}>{g.priority}</span>
              <span className="font-semibold text-[#0D2B55]">{g.topic}</span>
              <span className={`ml-auto text-xs px-2 py-0.5 rounded font-semibold ${g.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : g.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>{g.difficulty}</span>
              <span className="text-xs text-teal-700 font-semibold">{g.volume}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{g.why}</p>
            <div className="text-sm bg-white rounded-lg border p-3 text-gray-700">
              <span className="font-semibold text-[#0D2B55]">Action: </span>{g.action}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── SEO BLUEPRINT ─────────────────────────────────────────────────────────────
function SEOBlueprintTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-[#0D2B55] mb-3">A. Site Architecture — Hub-and-Spoke URL Structure</h3>
        <p className="text-sm text-gray-500 mb-3">Derived from Apollo Spectra + Manipal model — every URL is evidence-backed</p>
        <div className="overflow-x-auto rounded-xl border shadow-sm">
          <table className="text-xs w-full min-w-[700px]">
            <thead>
              <tr className="bg-[#0D2B55] text-white">
                {['URL Pattern', 'Page Type', 'Priority', 'Schema Required', 'Target Keywords', 'Model', 'Content Length'].map(h => (
                  <th key={h} className="px-2 py-2 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ARCH_ENTRIES.map((a, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                  <td className="px-3 py-2 font-mono text-blue-700 font-semibold">{a.url}</td>
                  <td className="px-2 py-2 text-gray-600">{a.pageType}</td>
                  <td className="px-2 py-2"><span className={`text-xs px-1.5 py-0.5 rounded font-bold ${prioColor[a.priority]}`}>{a.priority}</span></td>
                  <td className="px-2 py-2 text-teal-700 text-xs">{a.schema}</td>
                  <td className="px-2 py-2 text-gray-700">{a.targetKeywords}</td>
                  <td className="px-2 py-2 text-gray-500 text-xs">{a.competitiveModel}</td>
                  <td className="px-2 py-2">
                    <span className={`text-xs font-semibold ${a.contentLength.includes('3,000') || a.contentLength.includes('3,500') ? 'text-green-700' : a.contentLength.includes('2,') ? 'text-amber-700' : 'text-gray-600'}`}>{a.contentLength}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ── ACTION PRIORITIES ─────────────────────────────────────────────────────────
function ActionPrioritiesTab() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">17 ranked actions with competitive evidence — every action is evidence-backed from the 17 competitor sites studied</p>
      <div className="space-y-3">
        {ACTIONS.map(a => (
          <div key={a.num} className={`rounded-xl border p-4 ${a.priority === 'CRITICAL' ? 'bg-red-50 border-red-200' : a.priority === 'HIGH' ? 'bg-amber-50 border-amber-200' : a.priority === 'MEDIUM' ? 'bg-teal-50 border-teal-200' : 'bg-gray-50'}`}>
            <div className="flex flex-wrap items-start gap-2 mb-2">
              <span className="w-7 h-7 rounded-full bg-[#0D2B55] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{a.num}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${prioColor[a.priority]}`}>{a.priority}</span>
              <span className="font-semibold text-[#0D2B55]">{a.action}</span>
              <div className="ml-auto flex gap-2 text-xs">
                <span className="bg-[#0D2B55] text-white px-2 py-0.5 rounded font-medium">{a.gtmStep}</span>
                <span className="bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-medium">{a.owner}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{a.evidence}</p>
            <div className="text-sm bg-white rounded-lg border p-2.5 text-gray-700">
              <span className="font-semibold text-green-700">Expected Outcome: </span>{a.outcome}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function CompetitiveStudyPage() {
  const [activeTab, setActiveTab] = useState(0)

  const tabContent = [
    <LocalCompetitorsTab />,
    <HospitalSitesTab />,
    <KeywordRankingMapTab />,
    <ContentStructureTab />,
    <SEOStrategyTab />,
    <OnPageAuditTab />,
    <AuthorityTab />,
    <ServiceCoverageTab />,
    <WhiteSpaceTab />,
    <SEOBlueprintTab />,
    <ActionPrioritiesTab />,
  ]

  return (
    <div className="p-6 space-y-5 min-h-full bg-[#f4f7fb]">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#0D2B55]">Competitive Intelligence Study</h1>
        <p className="text-sm text-gray-500 mt-1">v2.0 · May 2026 · 17 competitors (10 local + 7 national hospitals) · 12 analysis sheets</p>
      </div>

      {/* Tab Bar */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="flex flex-wrap border-b">
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === i
                  ? 'border-[#0D2B55] text-[#0D2B55] bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-[#0D2B55] hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-5">
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  )
}
