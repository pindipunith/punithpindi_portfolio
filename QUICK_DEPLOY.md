# 🚀 GitHub & Vercel Deployment - Quick Start Guide

## ⚡ Quick Commands

### 1. Push to GitHub (First Time)

```bash
# Navigate to project root
cd /app

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "feat: Professional portfolio with React, animations, and EmailJS integration"

# Create repository on GitHub, then:
git remote add origin https://github.com/pindipunith/portfolio.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel (Automatic)

Once pushed to GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub
4. Select your repository
5. Configure:
   - **Root Directory**: `frontend`
   - **Framework**: Create React App (auto-detected)
6. Add Environment Variables:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_value
   REACT_APP_EMAILJS_TEMPLATE_ID=your_value
   REACT_APP_EMAILJS_PUBLIC_KEY=your_value
   ```
7. Click "Deploy"

## 📋 Pre-Deployment Checklist

- [ ] EmailJS account created at [emailjs.com](https://www.emailjs.com/)
- [ ] Email service configured in EmailJS
- [ ] Email template created with required variables
- [ ] Public key obtained from EmailJS
- [ ] GitHub repository created
- [ ] Vercel account created
- [ ] All files committed to git
- [ ] .env.example file reviewed

## 🔑 EmailJS Setup (5 Minutes)

### Step 1: Create Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up (free tier)

### Step 2: Add Email Service
1. Dashboard → "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or your provider)
4. Authenticate
5. **Copy Service ID**

### Step 3: Create Template
1. Dashboard → "Email Templates"
2. Click "Create New Template"
3. Add these variables:
   ```
   From: {{from_name}}
   Email: {{from_email}}
   Message: {{message}}
   To: {{to_name}}
   ```
4. **Copy Template ID**

### Step 4: Get Public Key
1. Dashboard → "Account" → "General"
2. Find "Public Key" section
3. **Copy Public Key**

## 🌐 Vercel Environment Variables

Add these in Vercel Dashboard → Project Settings → Environment Variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

**Important**: Add for all environments (Production, Preview, Development)

## ✅ Post-Deployment Verification

Test these features on live site:

1. **Homepage loads** ✓
2. **All sections visible** ✓
3. **Animations working** ✓
4. **Mobile responsive** ✓
5. **Contact form submits** ✓
6. **Email received** ✓
7. **Resume downloads** ✓
8. **All links work** ✓

## 🔄 Future Updates

### Update Content
```bash
# Edit src/data/mock.js
# Then:
git add .
git commit -m "update: Updated project information"
git push
# Vercel auto-deploys
```

### Update Resume PDF
1. Upload new resume to cloud storage
2. Get public link
3. Update `resumeLink` in `/frontend/src/data/mock.js`
4. Commit and push

## 🐛 Common Issues & Fixes

### Contact Form Not Sending Emails
**Fix**: Verify EmailJS environment variables in Vercel dashboard

### Build Fails on Vercel
**Fix**: Check build logs, ensure all dependencies in package.json

### 404 on Page Refresh
**Fix**: Already configured in vercel.json

### Environment Variables Not Working
**Fix**: Redeploy after adding variables, check variable names

## 📞 Support Resources

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev/

## 🎯 Your Live URLs

After deployment:
- **Vercel URL**: `https://your-project.vercel.app`
- **Custom Domain**: (configure in Vercel dashboard)

## 📊 Optional Enhancements

### Add Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `/frontend/public/index.html`

### Add Custom Domain
1. Buy domain from provider
2. Add in Vercel → Project Settings → Domains
3. Update DNS records as instructed

### Enable Vercel Analytics
1. Go to Vercel project → Analytics tab
2. Click "Enable"
3. Free for hobby projects

---

## 🎉 That's It!

Your portfolio is now:
- ✅ Version controlled on GitHub
- ✅ Deployed on Vercel
- ✅ Auto-deploying on every push
- ✅ Contact form functional
- ✅ Fully responsive
- ✅ SEO optimized

**Share your portfolio and land your dream job! 🚀**
