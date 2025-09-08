@echo off
:: Check if port 3000 is already in use
netstat -ano | findstr :3000 >nul
if %errorlevel%==0 (
    echo React server is already running on port 3000.
    pause
    exit
)

:: If not running, start project
cd /d "D:\xampp\htdocs\capstone\my-react"
npm start
pause
