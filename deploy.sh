#!/bin/bash
# IAATB LLC - One-Click Deploy Script
# This script will push all updates to GitHub

echo "🚀 IAATB LLC - Automated GitHub Push"
echo "===================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed"
    echo "Install from: https://git-scm.com/downloads"
    exit 1
fi

echo "📋 This will push the following updates:"
echo "  ✅ Hero image cutoff fix"
echo "  ✅ Logo integration (header, footer, About)"
echo "  ✅ Production build fixes"
echo ""

# Prompt for confirmation
read -p "Continue? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cancelled"
    exit 0
fi

# Repository URL
REPO_URL="https://github.com/augokofficial/iaatbllc.git"

echo ""
echo "📁 Setting up repository..."

# Initialize git if needed
if [ ! -d ".git" ]; then
    git init
    echo "  ✅ Git initialized"
fi

# Add remote if needed
if ! git remote | grep -q "origin"; then
    git remote add origin $REPO_URL
    echo "  ✅ Remote added"
else
    git remote set-url origin $REPO_URL
    echo "  ✅ Remote updated"
fi

echo ""
echo "📦 Staging files..."
git add -A
echo "  ✅ Files staged"

echo ""
echo "💾 Creating commit..."
git commit -m "Fix hero image cutoff and integrate brand logo

- Fixed hero image left side cutoff by adjusting object-position
- Integrated Triumphant Butterfly PNG logo in header
- Integrated logo in footer  
- Added subtle logo watermark in About section background
- Enhanced Logo component to support both PNG and SVG fallback
- Fixed production build for Netlify deployment

Updates:
- Hero image now shows both people in coaching session clearly
- Consistent brand identity throughout website
- Professional logo display in navigation, footer, and backgrounds
- No more 'Loading your experience...' stuck screen"

if [ $? -eq 0 ]; then
    echo "  ✅ Commit created"
else
    echo "  ℹ️  No new changes to commit (might already be committed)"
fi

echo ""
echo "🔐 Pushing to GitHub..."
echo ""
echo "⚠️  IMPORTANT: When prompted for password,"
echo "    use your GitHub Personal Access Token, NOT your password!"
echo "    Create token at: https://github.com/settings/tokens"
echo ""

# Push to GitHub
git push origin main --force

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Updates pushed to GitHub"
    echo ""
    echo "🎉 Next steps:"
    echo "  1. Check GitHub: $REPO_URL"
    echo "  2. Watch Netlify build (2-3 minutes)"
    echo "  3. Visit your live site to verify"
    echo ""
    echo "Expected on live site:"
    echo "  ✅ Hero image shows both people (no cutoff)"
    echo "  ✅ Logo in header navigation"
    echo "  ✅ Logo in footer"
    echo "  ✅ No more loading screen stuck"
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "  1. Authentication: Use Personal Access Token as password"
    echo "  2. Network: Check internet connection"
    echo "  3. Permissions: Verify you have access to the repo"
    echo ""
    echo "Need help? Check the documentation:"
    echo "  PUSH-TO-GITHUB-GUIDE.md"
fi
