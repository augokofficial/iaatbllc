@echo off
REM IAATB LLC - One-Click Deploy Script for Windows
REM This script will push all updates to GitHub

echo ========================================
echo   IAATB LLC - Automated GitHub Push
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed
    echo Download from: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo This will push the following updates:
echo   - Hero image cutoff fix
echo   - Logo integration (header, footer, About)
echo   - Production build fixes
echo.

set /p CONFIRM="Continue? (Y/N): "
if /i not "%CONFIRM%"=="Y" (
    echo Cancelled
    pause
    exit /b 0
)

set REPO_URL=https://github.com/augokofficial/iaatbllc.git

echo.
echo Setting up repository...

REM Initialize git if needed
if not exist ".git" (
    git init
    echo   - Git initialized
)

REM Add remote if needed
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    git remote add origin %REPO_URL%
    echo   - Remote added
) else (
    git remote set-url origin %REPO_URL%
    echo   - Remote updated
)

echo.
echo Staging files...
git add -A
echo   - Files staged

echo.
echo Creating commit...
git commit -m "Fix hero image cutoff and integrate brand logo" -m "- Fixed hero image left side cutoff by adjusting object-position" -m "- Integrated Triumphant Butterfly PNG logo in header" -m "- Integrated logo in footer" -m "- Added subtle logo watermark in About section background" -m "- Enhanced Logo component to support both PNG and SVG fallback" -m "- Fixed production build for Netlify deployment"

if %errorlevel% equ 0 (
    echo   - Commit created
) else (
    echo   - No new changes to commit
)

echo.
echo ========================================
echo   IMPORTANT: GitHub Authentication
echo ========================================
echo When prompted for password, use your
echo Personal Access Token, NOT your password!
echo.
echo Create token at:
echo https://github.com/settings/tokens
echo ========================================
echo.
pause

echo Pushing to GitHub...
git push origin main --force

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   SUCCESS! Updates pushed to GitHub
    echo ========================================
    echo.
    echo Next steps:
    echo   1. Check GitHub: %REPO_URL%
    echo   2. Watch Netlify build (2-3 minutes^)
    echo   3. Visit your live site to verify
    echo.
    echo Expected on live site:
    echo   - Hero image shows both people (no cutoff^)
    echo   - Logo in header navigation
    echo   - Logo in footer
    echo   - No more loading screen stuck
    echo.
) else (
    echo.
    echo ========================================
    echo   Push failed!
    echo ========================================
    echo Common issues:
    echo   1. Authentication: Use Personal Access Token
    echo   2. Network: Check internet connection
    echo   3. Permissions: Verify repo access
    echo.
    echo Check documentation: PUSH-TO-GITHUB-GUIDE.md
    echo.
)

pause
