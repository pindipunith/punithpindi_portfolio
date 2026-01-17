# Deployment Guide - Punith Pindi Portfolio

This guide will help you deploy the portfolio website to GitHub and Vercel.

## Prerequisites

- Git installed on your computer
- GitHub account
- Vercel account (free tier is sufficient)

## Step 1: Prepare Your Repository

### 1.1 Initialize Git Repository (if not already done)

```bash
cd /app
git init
```

### 1.2 Create .gitignore

The .gitignore file is already configured. Verify it includes:
```
node_modules/
.env
build/
dist/
.DS_Store
```

## Step 2: Push to GitHub

### 2.1 Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click "+" in top right → "New repository"
3. Name: `portfolio` (or any name you prefer)
4. Description: "Professional portfolio website"
5. Keep it Public
6. **Do NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### 2.2 Link Local Repository to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website with React and animations"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure EmailJS

### 3.1 Sign Up for EmailJS

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for free account
3. Verify your email

### 3.2 Set Up Email Service

1. Go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow authentication steps
5. Copy the **Service ID**

### 3.3 Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up template with these variables:
   ```
   Subject: New Contact from {{from_name}}
   
   Body:
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Save and copy the **Template ID**

### 3.4 Get Public Key

1. Go to "Account" → "General"
2. Find "Public Key" section
3. Copy your **Public Key**

## Step 4: Deploy to Vercel

### 4.1 Connect GitHub Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect settings

### 4.2 Configure Build Settings

Verify these settings (Vercel should auto-detect):

```
Framework Preset: Create React App
Root Directory: frontend
Build Command: yarn build
Output Directory: build
Install Command: yarn install
```

### 4.3 Add Environment Variables

1. In Vercel project settings, go to "Environment Variables"
2. Add the following variables:

```
REACT_APP_EMAILJS_SERVICE_ID = [Your Service ID from Step 3.2]
REACT_APP_EMAILJS_TEMPLATE_ID = [Your Template ID from Step 3.3]
REACT_APP_EMAILJS_PUBLIC_KEY = [Your Public Key from Step 3.4]
```

**Important**: Add these for all environments (Production, Preview, Development)

### 4.4 Deploy

1. Click "Deploy"
2. Wait for deployment to complete (2-3 minutes)
3. Your site will be live at: `https://your-project-name.vercel.app`

## Step 5: Custom Domain (Optional)

### 5.1 Add Custom Domain in Vercel

1. Go to Project Settings → "Domains"
2. Add your domain
3. Follow DNS configuration instructions

### 5.2 Update DNS Records

Add these records to your domain provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Step 6: Verify Deployment

### 6.1 Test Website Features

✅ Check all sections load correctly
✅ Test responsive design on mobile
✅ Test contact form submission
✅ Verify all links work
✅ Check animations and transitions
✅ Test resume download

### 6.2 Test Contact Form

1. Go to your live website
2. Scroll to Contact section
3. Fill out the form
4. Submit
5. Check your email for the message

## Step 7: Update Resume PDF

### 7.1 Upload Resume to Cloud Storage

1. Upload your resume PDF to:
   - Google Drive (make sure it's publicly accessible)
   - Or any cloud storage service
2. Get the direct download link

### 7.2 Update Resume Link in Code

Edit `/frontend/src/data/mock.js`:

```javascript
export const personalInfo = {
  // ... other fields
  resumeLink: "YOUR_NEW_RESUME_LINK_HERE"
};
```

### 7.3 Push Changes

```bash
git add .
git commit -m "Update resume link"
git push
```

Vercel will automatically redeploy.

## Troubleshooting

### Issue: Contact Form Not Working

**Solution:**
1. Verify EmailJS environment variables in Vercel
2. Check browser console for errors
3. Ensure EmailJS service and template are active
4. Test EmailJS directly on their website

### Issue: Build Fails on Vercel

**Solution:**
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Try clearing Vercel cache and redeploying

### Issue: Environment Variables Not Working

**Solution:**
1. Make sure variables are added for all environments
2. Redeploy after adding variables
3. Check variable names match exactly (case-sensitive)

### Issue: 404 Error on Refresh

**Solution:**
Create `vercel.json` in frontend directory:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## Maintenance

### Updating Content

1. Edit `/frontend/src/data/mock.js`
2. Commit and push changes
3. Vercel auto-deploys

### Updating Design

1. Edit component files in `/frontend/src/components/`
2. Test locally: `yarn start`
3. Commit and push
4. Vercel auto-deploys

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify all environment variables
4. Test locally first with `yarn start`

## Production Checklist

- [x] Code pushed to GitHub
- [x] EmailJS configured
- [x] Deployed to Vercel
- [x] Environment variables set
- [x] Contact form tested
- [x] All links verified
- [x] Mobile responsive tested
- [x] Resume link updated
- [ ] Custom domain configured (optional)
- [ ] Analytics added (optional)

## Next Steps

1. Share your portfolio URL
2. Add to resume and LinkedIn
3. Monitor contact form submissions
4. Update content regularly
5. Add new projects as you complete them

---

**Congratulations! Your portfolio is now live! 🎉**

Your portfolio URL: `https://your-project-name.vercel.app`
