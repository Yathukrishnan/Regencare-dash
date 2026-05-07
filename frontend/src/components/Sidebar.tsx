import { NavLink, useNavigate } from 'react-router-dom'
import { Search, BarChart3, LogOut, Activity } from 'lucide-react'
import { useAuthStore } from '../stores/authStore'
import clsx from 'clsx'

const NAV = [
  { to: '/keywords',    label: 'Keyword Study',         icon: Search },
  { to: '/competitive', label: 'Competitive Study',     icon: BarChart3 },
]

export default function Sidebar() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <aside className="w-64 min-h-screen bg-navy flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-navy-light">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Regencare</p>
            <p className="text-gold text-xs mt-0.5">Intelligence Dashboard</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-gold text-white'
                  : 'text-slate-300 hover:bg-navy-light hover:text-white',
              )
            }
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Study meta */}
      <div className="px-4 py-3 mx-3 mb-3 rounded-lg bg-navy-light text-xs text-slate-400 space-y-1">
        <p className="text-slate-300 font-semibold">Regencare.in</p>
        <p>Baseline · April 2026</p>
        <p>142 keywords · 17 competitors</p>
      </div>

      {/* User */}
      <div className="px-3 py-4 border-t border-navy-light">
        <div className="flex items-center gap-3 px-3 py-2 mb-1">
          <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
            <span className="text-gold text-xs font-bold">{user?.name?.[0]?.toUpperCase()}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-medium truncate">{user?.name}</p>
            <p className="text-slate-400 text-xs truncate">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-navy-light text-sm transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>
    </aside>
  )
}
