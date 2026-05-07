# Regencare Intelligence Dashboard

Digital strategy tracking platform for Regencare.in — built by NT Global Digital.

## Quick Start

```
Double-click start.bat
```

Or manually:

**Backend:**
```bash
cd backend
pip install -r requirements.txt
python seed.py
uvicorn main:app --reload --port 8000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Open: http://localhost:5173  
Login: `admin@regencare.in` / `regencare2026`

## AI Assistant Setup

1. Get an Anthropic API key from console.anthropic.com
2. Edit `backend/.env`:
   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```
3. Restart the backend

## Modules

| Module | Description |
|--------|-------------|
| Dashboard | KPI overview, rank distribution, critical issues |
| Keywords | 60+ keywords — search, filter, sort, CRUD |
| Competitive Study | 10 local + 7 hospital competitors with full analysis |
| SEO Audit | 38-item checklist across 9 SEO pillars with progress tracking |
| AI Assistant | Claude-powered assistant with full Regencare context |
