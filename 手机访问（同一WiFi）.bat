@echo off
chcp 65001 >nul
title 面试背诵 - 手机访问服务
set PORT=8899
set APPDIR=D:\LI\interview-app
set PY=D:\python\python.exe
if not exist "%PY%" set PY=python

rem 取当前联网网卡的 IP（UDP 探测路由，不发包，不会把 VMware 虚拟网卡也算进来）
for /f "delims=" %%i in ('"%PY%" -c "import socket;s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM);s.connect(('8.8.8.8',80));print(s.getsockname()[0])" 2^>nul') do set LANIP=%%i

echo ============================================
echo   面试背诵 - 手机访问（同一 Wi-Fi / 手机热点下使用）
echo ============================================
echo.
if defined LANIP (
  echo   手机浏览器打开这个地址：
  echo.
  echo       http://%LANIP%:%PORT%/index.html
) else (
  echo   没探测到本机 IP，请用 ipconfig 自己看一眼无线网卡地址。
)
echo.
echo 说明：
echo   1. 手机要和这台电脑在同一个网络（同一 WiFi，或电脑连手机热点）。
echo   2. 本窗口不要关闭，关掉手机就访问不了了。
echo   3. 手机打不开：先看 Windows 防火墙弹窗是否选了「允许访问」；
echo      仍不行说明这个 WiFi 开了设备隔离，改用「电脑连手机热点」再试。
echo --------------------------------------------
netstat -ano | findstr ":%PORT%" | findstr "LISTENING" >nul
if not errorlevel 1 (
  echo   端口 %PORT% 已在监听：说明服务已经在跑，直接用上面的地址打开即可。
  echo   这个窗口可以直接关掉，不影响手机访问。
  pause
  exit /b
)
"%PY%" -m http.server %PORT% --directory "%APPDIR%" --bind 0.0.0.0
pause
