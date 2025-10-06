@echo off
echo 🚀 Building your website...
call npm run build

echo.
echo 📦 Installing dependencies...
call npm install express

echo.
echo 🌐 Starting server on your network...
echo.
echo ✅ Your website will be available at:
echo    📱 Local: http://localhost:3000
echo    🌐 Network: http://YOUR_IP_ADDRESS:3000
echo.
echo 📋 Share the network URL with others to access your website!
echo 🛑 Press Ctrl+C to stop the server
echo.

node server.js