# Punith Pindi - Portfolio Website

A professional portfolio website built with React, featuring modern UI/UX, 3D animations, and responsive design.

## 🚀 Quick Deploy

### Option 1: Deploy Frontend Only (Recommended for Vercel)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Deploy to Vercel
vercel
```

### Option 2: Full Stack Setup (For Local Development)

```bash
# Install frontend dependencies
cd frontend
yarn install

# Install backend dependencies (optional)
cd ../backend
pip install -r requirements.txt

# Start frontend
cd ../frontend
yarn start
```

## 📁 Project Structure

```
├── frontend/           # React application (Deploy this to Vercel)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md      # Detailed frontend documentation
├── backend/           # FastAPI server (Not needed for Vercel)
│   ├── server.py
│   └── requirements.txt
└── README.md          # This file
```

## 🌐 Deployment Instructions

### Vercel Deployment (Frontend Only)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/pindipunith/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - **Root Directory**: `frontend`
     - **Framework Preset**: Create React App
     - **Build Command**: `yarn build`
     - **Output Directory**: `build`
   - Add environment variables for EmailJS
   - Click "Deploy"

3. **Configure EmailJS** (Required for contact form):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create email service and template
   - Add environment variables in Vercel:
     - `REACT_APP_EMAILJS_SERVICE_ID`
     - `REACT_APP_EMAILJS_TEMPLATE_ID`
     - `REACT_APP_EMAILJS_PUBLIC_KEY`

## 📝 Environment Variables

Create `.env` file in frontend directory:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🛠️ Technologies

### Frontend
- React 19
- Tailwind CSS
- Shadcn/ui
- EmailJS
- Lucide Icons

### Backend (Optional)
- FastAPI
- MongoDB
- Python

## 📖 Documentation

For detailed documentation, see:
- [Frontend README](./frontend/README.md) - Complete frontend documentation
- [Deployment Guide](./frontend/README.md#deployment) - Step-by-step deployment
- [Customization Guide](./frontend/README.md#customization) - How to customize

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **GitHub**: https://github.com/pindipunith
- **LinkedIn**: https://linkedin.com/in/pindipunith

## 📧 Contact

Punith Pindi - pindipunith444@gmail.com

## 📄 License

MIT License - See LICENSE file for details

---

**Note**: The backend is optional. For Vercel deployment, only the frontend is needed as the contact form uses EmailJS (client-side email service).