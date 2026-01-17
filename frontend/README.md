# Punith Pindi - Portfolio Website

A modern, professional portfolio website showcasing my expertise in AI/ML, Full-Stack Development, and Data Analytics.

## 🌐 Live Demo

**Portfolio**: [pindipunith.vercel.app](https://pindipunith.vercel.app)

## 📋 About

I'm Punith Pindi, a Computer Science graduate from Vellore Institute of Technology with specialized expertise in:
- **Artificial Intelligence & Machine Learning**
- **Deep Learning** (YOLOv11, Computer Vision)
- **Full-Stack Web Development** (React, Node.js, MongoDB)
- **Data Analytics** (Python, Pandas, NumPy)

This portfolio showcases my projects, experience, and certifications in these domains.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Contact Form**: Integrated email functionality using EmailJS
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Built With

- **Frontend**: React 19, Tailwind CSS
- **UI Components**: Shadcn/ui, Lucide Icons
- **Email Service**: EmailJS
- **Deployment**: Vercel
- **Typography**: Barlow Condensed, Inter

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/       # React components
│   ├── data/            # Portfolio data
│   ├── hooks/           # Custom hooks
│   ├── services/        # Email service
│   └── App.js           # Main app file
├── public/              # Static assets
└── package.json         # Dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/pindipunith/portfolio.git

# Navigate to project directory
cd portfolio/frontend

# Install dependencies
yarn install

# Start development server
yarn start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
# Create production build
yarn build
```

## 📝 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
# EmailJS Configuration (for contact form)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Customization

To customize the portfolio with your own information:

1. **Update Personal Data**: Edit `/src/data/mock.js`
2. **Modify Colors**: Update color values in `/src/App.css` and `/src/index.css`
3. **Change Content**: Modify component files in `/src/components/`

## 📦 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Configure:
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Output Directory: `build`
4. Add environment variables
5. Deploy

For detailed deployment instructions, see [QUICK_DEPLOY.md](../QUICK_DEPLOY.md)

## 📞 Contact

**Punith Pindi**
- Email: pindipunith444@gmail.com
- LinkedIn: [linkedin.com/in/pindipunith](https://linkedin.com/in/pindipunith)
- GitHub: [github.com/pindipunith](https://github.com/pindipunith)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

**© 2025 Punith Pindi. All rights reserved.**
