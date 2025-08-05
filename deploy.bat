@echo off
echo 🚀 Deploying Civil Engineering Website...
echo.

echo 📦 Building the project...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo ✅ Build successful!

echo 🔥 Deploying to Firebase...
firebase deploy
if %errorlevel% neq 0 (
    echo ❌ Deployment failed!
    echo.
    echo Please make sure you are logged in to Firebase:
    echo firebase login
    pause
    exit /b 1
)

echo.
echo 🎉 Deployment successful!
echo.
echo 🌐 Your website is live at: https://civil-website-7dc1a.web.app
echo 🔐 Admin panel: https://civil-website-7dc1a.web.app/admin
echo.
pause 