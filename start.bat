@echo off
echo Starting Regencare Intelligence Dashboard...
echo.

cd /d %~dp0

echo [1/2] Starting backend (FastAPI)...
start "Regencare Backend" cmd /k "cd backend && pip install -r requirements.txt -q && python -X utf8 seed.py && uvicorn main:app --reload --port 8000"

timeout /t 4 /nobreak > nul

echo [2/2] Starting frontend (React)...
start "Regencare Frontend" cmd /k "cd frontend && npm install && npm run dev"

echo.
echo Dashboard will open at: http://localhost:5173
echo API running at:          http://localhost:8000
echo.
echo Login: admin@regencare.in / regencare2026
echo.
pause
