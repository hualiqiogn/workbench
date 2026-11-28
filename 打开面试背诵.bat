@echo off
rem ===== Interview Recite App - desktop launcher =====
rem Starts a tiny local web server (needed for PWA install / offline cache)
rem then opens the app in an Edge app window (no address bar).

set PORT=8899
set APPDIR=D:\LI\interview-app
rem 每次打开都带随机参数，绕过 Edge 里旧 Service Worker 的缓存，避免看到旧页面
set URL=http://localhost:%PORT%/index.html?fresh=%RANDOM%%RANDOM%
set EDGE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
set PY=D:\python\python.exe

if not exist "%PY%" set PY=python

rem start server minimized (harmless if already running on that port)
start "interview-app-server" /min "%PY%" -m http.server %PORT% --directory "%APPDIR%" --bind 0.0.0.0
timeout /t 1 >nul

if exist "%EDGE%" (
  start "" "%EDGE%" --app=%URL%
) else (
  start "" "%URL%"
)
exit
