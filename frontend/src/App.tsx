import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import KeywordStudyPage from './pages/KeywordStudyPage'
import CompetitiveStudyPage from './pages/CompetitiveStudyPage'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token)
  return token ? <>{children}</> : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/keywords" replace />} />
          <Route path="keywords" element={<KeywordStudyPage />} />
          <Route path="competitive" element={<CompetitiveStudyPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/keywords" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
