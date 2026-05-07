import { useState, useMemo } from 'react'
import { ChevronUp, ChevronDown, ChevronsUpDown, Search, X } from 'lucide-react'
import { KEYWORDS, SCORECARD, LOCATION_SUMMARY, type Keyword, type KeywordLocation, type KeywordPriority, type KeywordIntent } from '../data/keywords'

const priorityColor: Record<KeywordPriority, string> = {
  Critical: 'bg-red-100 text-red-700 border border-red-200',
  High:     'bg-amber-100 text-amber-700 border border-amber-200',
  Medium:   'bg-teal-100 text-teal-700 border border-teal-200',
  Low:      'bg-gray-100 text-gray-600 border border-gray-200',
}

const intentColor: Record<KeywordIntent, string> = {
  Transactional: 'text-green-700',
  Brand:         'text-blue-700',
  Informational: 'text-indigo-600',
  Navigational:  'text-purple-600',
  Question:      'text-orange-600',
  Symptom:       'text-red-600',
  Comparison:    'text-teal-600',
}

function positionBadge(pos: string) {
  if (pos === '#1' || pos === '#2' || pos === '#3') return 'bg-green-100 text-green-700 font-bold'
  if (pos.startsWith('#')) return 'bg-amber-100 text-amber-700 font-bold'
  if (pos === 'Listed') return 'bg-blue-100 text-blue-700 font-bold'
  return 'bg-red-100 text-red-700 font-semibold'
}

// Numeric sort value for position column
function positionSortValue(pos: string): number {
  if (pos.startsWith('#')) {
    const n = parseInt(pos.slice(1))
    return isNaN(n) ? 99 : n
  }
  if (pos === 'Listed') return 50
  return 999 // Not in Top 10
}

// Numeric sort value for volume column (use lower bound of range)
function volumeSortValue(vol: string): number {
  if (vol === '< 200') return 100
  if (vol === '10,000+') return 10000
  const match = vol.replace(/,/g, '').match(/^(\d+)/)
  return match ? parseInt(match[1]) : 0
}

const LOCATIONS: (KeywordLocation | 'All')[] = ['All', 'Kochi', 'Calicut', 'Chennai', 'Kerala Regional', 'UAE', 'Conversational']
const INTENTS: (KeywordIntent | 'All')[] = ['All', 'Transactional', 'Question', 'Symptom', 'Comparison', 'Informational', 'Brand', 'Navigational']
const PRIORITIES: (KeywordPriority | 'All')[] = ['All', 'Critical', 'High', 'Medium', 'Low']
const POSITIONS = ['All', 'Top 3 (#1–#3)', 'Mid Rank (#4–#10)', 'All Ranked (#1–#10)', 'Not Ranked', 'Listed']

// Priority sort order
const PRIORITY_ORDER: Record<string, number> = { Critical: 1, High: 2, Medium: 3, Low: 4 }

type SortKey = keyof Keyword
type SortDir = 'asc' | 'desc'

function scorecardScoreColor(score: string) {
  const n = parseInt(score)
  if (n <= 2) return { bar: 'bg-red-500', text: 'text-red-600', bg: 'bg-red-50 border-red-200' }
  if (n <= 4) return { bar: 'bg-amber-500', text: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' }
  return { bar: 'bg-green-500', text: 'text-green-600', bg: 'bg-green-50 border-green-200' }
}

function sortRows(rows: Keyword[], key: SortKey, dir: SortDir): Keyword[] {
  return [...rows].sort((a, b) => {
    let cmp = 0
    if (key === 'position') {
      cmp = positionSortValue(a.position) - positionSortValue(b.position)
    } else if (key === 'volume') {
      cmp = volumeSortValue(a.volume) - volumeSortValue(b.volume)
    } else if (key === 'priority') {
      cmp = (PRIORITY_ORDER[a.priority] ?? 5) - (PRIORITY_ORDER[b.priority] ?? 5)
    } else {
      cmp = String(a[key]).localeCompare(String(b[key]), undefined, { numeric: true })
    }
    return dir === 'asc' ? cmp : -cmp
  })
}

export default function KeywordStudyPage() {
  const [location, setLocation]   = useState<KeywordLocation | 'All'>('All')
  const [intent, setIntent]       = useState<KeywordIntent | 'All'>('All')
  const [priority, setPriority]   = useState<KeywordPriority | 'All'>('All')
  const [posFilter, setPosFilter] = useState('All')
  const [search, setSearch]       = useState('')
  const [sortKey, setSortKey]     = useState<SortKey>('id')
  const [sortDir, setSortDir]     = useState<SortDir>('asc')
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const filtered = useMemo(() => {
    let rows = KEYWORDS
    if (location !== 'All')       rows = rows.filter(r => r.location === location)
    if (intent !== 'All')         rows = rows.filter(r => r.intent === intent)
    if (priority !== 'All')       rows = rows.filter(r => r.priority === priority)
    if (posFilter === 'Top 3 (#1–#3)')      rows = rows.filter(r => ['#1','#2','#3'].includes(r.position))
    if (posFilter === 'Mid Rank (#4–#10)') rows = rows.filter(r => r.position.startsWith('#') && !['#1','#2','#3'].includes(r.position))
    if (posFilter === 'All Ranked (#1–#10)') rows = rows.filter(r => r.position.startsWith('#'))
    if (posFilter === 'Not Ranked')        rows = rows.filter(r => r.position === 'Not in Top 10')
    if (posFilter === 'Listed')            rows = rows.filter(r => r.position === 'Listed')
    if (search)                   rows = rows.filter(r =>
      r.keyword.toLowerCase().includes(search.toLowerCase()) ||
      r.topCompetitor.toLowerCase().includes(search.toLowerCase())
    )
    return sortRows(rows, sortKey, sortDir)
  }, [location, intent, priority, posFilter, search, sortKey, sortDir])

  const totalKeywords = KEYWORDS.length
  const top3      = KEYWORDS.filter(r => ['#1','#2','#3'].includes(r.position)).length
  const top10     = KEYWORDS.filter(r => r.position.startsWith('#')).length
  const notRanked = KEYWORDS.filter(r => r.position === 'Not in Top 10').length
  const critical  = KEYWORDS.filter(r => r.priority === 'Critical').length

  const activeFilters: { label: string; clear: () => void }[] = []
  if (location !== 'All')   activeFilters.push({ label: `Location: ${location}`,      clear: () => setLocation('All') })
  if (intent !== 'All')     activeFilters.push({ label: `Intent: ${intent}`,           clear: () => setIntent('All') })
  if (priority !== 'All')   activeFilters.push({ label: `Priority: ${priority}`,       clear: () => setPriority('All') })
  if (posFilter !== 'All')  activeFilters.push({ label: `Position: ${posFilter}`,      clear: () => setPosFilter('All') })
  if (search)               activeFilters.push({ label: `Search: "${search}"`,         clear: () => setSearch('') })

  function clearAll() {
    setLocation('All'); setIntent('All'); setPriority('All'); setPosFilter('All'); setSearch('')
  }

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <ChevronsUpDown className="w-3 h-3 opacity-40" />
    return sortDir === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
  }

  return (
    <div className="p-6 space-y-6 min-h-full bg-[#f4f7fb]">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#0D2B55]">Keyword Baseline Study</h1>
        <p className="text-sm text-gray-500 mt-1">April 2026 · Before snapshot · 142 keywords across 6 segments</p>
      </div>

      {/* Scorecard */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
        {SCORECARD.map(s => {
          const c = scorecardScoreColor(s.score)
          const n = parseInt(s.score)
          return (
            <div key={s.area} className={`rounded-xl border p-3 ${c.bg}`} title={s.note}>
              <div className="text-xs text-gray-500 font-medium leading-tight mb-2">{s.area}</div>
              <div className={`text-2xl font-bold ${c.text}`}>{s.score}</div>
              <div className="mt-2 h-1.5 rounded-full bg-gray-200">
                <div className={`h-full rounded-full ${c.bar}`} style={{ width: `${n * 10}%` }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
        <div className="bg-white rounded-xl border p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-[#0D2B55]">{totalKeywords}</div>
          <div className="text-xs text-gray-500 mt-1">Total Keywords</div>
        </div>
        <div className="bg-green-50 rounded-xl border border-green-200 p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-green-700">{top3}</div>
          <div className="text-xs text-gray-500 mt-1">Ranking #1–#3</div>
        </div>
        <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-amber-700">{top10}</div>
          <div className="text-xs text-gray-500 mt-1">Ranking #1–#10</div>
        </div>
        <div className="bg-red-50 rounded-xl border border-red-200 p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-red-700">{notRanked}</div>
          <div className="text-xs text-gray-500 mt-1">Not in Top 10</div>
        </div>
        <div className="bg-red-100 rounded-xl border border-red-300 p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-red-800">{critical}</div>
          <div className="text-xs text-gray-500 mt-1">Critical Priority</div>
        </div>
      </div>

      {/* Location Segments */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {LOCATION_SUMMARY.map(s => (
          <button
            key={s.location}
            onClick={() => setLocation(location === s.location ? 'All' : s.location)}
            className={`rounded-xl border p-3 text-left transition-all ${location === s.location ? 'bg-[#0D2B55] text-white border-[#0D2B55]' : 'bg-white hover:border-[#0D2B55] hover:bg-blue-50'}`}
          >
            <div className={`text-xl font-bold ${location === s.location ? 'text-[#C9A02D]' : 'text-[#0D2B55]'}`}>{s.count}</div>
            <div className={`text-sm font-semibold ${location === s.location ? 'text-white' : 'text-gray-700'}`}>{s.location}</div>
            <div className={`text-xs mt-0.5 leading-tight ${location === s.location ? 'text-blue-200' : 'text-gray-400'}`}>{s.desc}</div>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border p-4 shadow-sm space-y-3">
        <div className="flex flex-wrap gap-3 items-end">
          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <label className="text-xs text-gray-500 font-medium block mb-1">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                className="w-full pl-9 pr-8 py-2 text-sm border rounded-lg focus:outline-none focus:border-[#0D2B55]"
                placeholder="Keyword or competitor…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2"><X className="w-3 h-3 text-gray-400" /></button>}
            </div>
          </div>

          {/* Intent */}
          <div>
            <label className="text-xs text-gray-500 font-medium block mb-1">Intent</label>
            <select
              className={`text-sm border rounded-lg px-3 py-2 focus:outline-none focus:border-[#0D2B55] ${intent !== 'All' ? 'border-[#0D2B55] bg-blue-50 font-semibold text-[#0D2B55]' : ''}`}
              value={intent}
              onChange={e => setIntent(e.target.value as typeof intent)}
            >
              {INTENTS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="text-xs text-gray-500 font-medium block mb-1">Priority</label>
            <select
              className={`text-sm border rounded-lg px-3 py-2 focus:outline-none focus:border-[#0D2B55] ${priority !== 'All' ? 'border-[#0D2B55] bg-blue-50 font-semibold text-[#0D2B55]' : ''}`}
              value={priority}
              onChange={e => setPriority(e.target.value as typeof priority)}
            >
              {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          {/* Position */}
          <div>
            <label className="text-xs text-gray-500 font-medium block mb-1">Position Status</label>
            <select
              className={`text-sm border rounded-lg px-3 py-2 focus:outline-none focus:border-[#0D2B55] ${posFilter !== 'All' ? 'border-[#0D2B55] bg-blue-50 font-semibold text-[#0D2B55]' : ''}`}
              value={posFilter}
              onChange={e => setPosFilter(e.target.value)}
            >
              {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>

        {/* Active filter chips */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1 items-center">
            <span className="text-xs text-gray-400 font-medium">Active filters:</span>
            {activeFilters.map(f => (
              <button
                key={f.label}
                onClick={f.clear}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0D2B55] text-white hover:bg-red-600 transition-colors"
              >
                {f.label} <X className="w-3 h-3" />
              </button>
            ))}
            <button onClick={clearAll} className="text-xs text-red-500 underline ml-1">Clear all</button>
          </div>
        )}

        {/* Result count */}
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span className="font-semibold text-[#0D2B55]">{filtered.length}</span> of {totalKeywords} keywords shown
          {filtered.length === 0 && activeFilters.length > 0 && (
            <span className="text-amber-600 text-xs">
              — no keywords match all active filters. Try removing one above.
            </span>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0D2B55] text-white text-xs">
                {([
                  ['keyword',       'Keyword',        'text-left min-w-[220px]'],
                  ['position',      'Position',       'text-center'],
                  ['intent',        'Intent',         'text-center'],
                  ['volume',        'Volume',         'text-center'],
                  ['priority',      'Priority',       'text-center'],
                  ['location',      'Location',       'text-center'],
                  ['topCompetitor', 'Top Competitor', 'text-left'],
                ] as [SortKey, string, string][]).map(([key, label, cls]) => (
                  <th
                    key={key}
                    className={`px-3 py-3 font-semibold cursor-pointer hover:bg-[#1a3a6e] select-none ${cls}`}
                    onClick={() => toggleSort(key)}
                  >
                    <span className="inline-flex items-center gap-1">{label}<SortIcon col={key} /></span>
                  </th>
                ))}
                <th className="px-3 py-3 font-semibold text-left">Ranking URL</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <>
                  <tr
                    key={row.id}
                    className={`border-b cursor-pointer transition-colors ${expandedRow === row.id ? 'bg-blue-50' : idx % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-[#f9fafc] hover:bg-gray-50'}`}
                    onClick={() => setExpandedRow(expandedRow === row.id ? null : row.id)}
                  >
                    <td className="px-3 py-2.5 font-medium text-[#0D2B55] max-w-[260px]">
                      <span className="line-clamp-2">{row.keyword}</span>
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${positionBadge(row.position)}`}>
                        {row.position === 'Not in Top 10' ? 'Not Ranked' : row.position}
                      </span>
                    </td>
                    <td className={`px-3 py-2.5 text-center text-xs font-medium ${intentColor[row.intent]}`}>
                      {row.intent}
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs text-gray-600">{row.volume}</td>
                    <td className="px-3 py-2.5 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${priorityColor[row.priority]}`}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <span className="inline-block px-2 py-0.5 rounded-md text-xs bg-[#0D2B55]/10 text-[#0D2B55] font-medium">
                        {row.location}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-gray-600 max-w-[200px]">
                      <span className="line-clamp-1">{row.topCompetitor}</span>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-teal-700 max-w-[200px]">
                      {row.rankingUrl !== '—'
                        ? <span className="line-clamp-1">{row.rankingUrl}</span>
                        : <span className="text-gray-400">—</span>
                      }
                    </td>
                  </tr>
                  {expandedRow === row.id && (
                    <tr key={`${row.id}-exp`} className="bg-blue-50 border-b border-blue-100">
                      <td colSpan={8} className="px-4 py-3">
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div>
                            <span className="text-xs text-gray-500 font-medium block">Action Required</span>
                            <span className="text-[#0D2B55]">{row.actionRequired}</span>
                          </div>
                          {row.rankingUrl !== '—' && (
                            <div>
                              <span className="text-xs text-gray-500 font-medium block">Full URL</span>
                              <span className="text-teal-700 break-all">{row.rankingUrl}</span>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center">
                    <p className="text-gray-500 font-medium">No keywords match the current filters.</p>
                    {activeFilters.length > 0 && (
                      <p className="text-xs text-amber-600 mt-1">
                        Active: {activeFilters.map(f => f.label).join(' + ')}
                      </p>
                    )}
                    <button onClick={clearAll} className="mt-3 text-sm text-[#0D2B55] underline font-semibold">
                      Clear all filters
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-gray-500 pb-4">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-400 inline-block" /> Ranking #1–#3 (protect)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-amber-400 inline-block" /> Ranking #4–#10 (improvable)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-400 inline-block" /> Not in Top 10 (gap)</span>
        <span className="text-gray-400">· Click any row to expand Action Required · Click column headers to sort</span>
      </div>
    </div>
  )
}
