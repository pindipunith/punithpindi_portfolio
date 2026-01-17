# Punith Pindi - Portfolio Website

![Portfolio Screenshot](https://via.placeholder.com/1200x600/1e40af/ffffff?text=Professional+Portfolio)

> A modern, responsive portfolio website showcasing Computer Science expertise in AI/ML, Full-Stack Development, and Data Analytics.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **3D Animations**: Floating geometric shapes and interactive elements
- **Scroll Animations**: Smooth transitions between sections
- **Contact Form**: Integrated with EmailJS for direct communication
- **Fast Loading**: Optimized performance with CSS-based animations
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS3 & Intersection Observer API
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📋 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Professional summary and education
3. **Experience** - Work history and internships
4. **Skills** - Technical skills categorized by domain
5. **Projects** - Featured projects with live demos
6. **Certifications** - Professional certifications
7. **Contact** - Contact form and social links

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/pindipunith/portfolio.git

# Navigate to frontend directory
cd portfolio/frontend

# Install dependencies
yarn install

# Create environment file
cp .env.example .env

# Start development server
yarn start
```

The application will open at `http://localhost:3000`

## ⚙️ Configuration

### EmailJS Setup (Required for Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Punith Pindi)
4. Get your Public Key from Account settings
5. Update `.env` file:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📦 Build for Production

```bash
# Create production build
yarn build

# The build folder is ready to be deployed
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pindipunith/portfolio)

#### Manual Deployment:

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Add Environment Variables** in Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add the EmailJS configuration variables

#### Vercel Configuration:

- **Framework Preset**: Create React App
- **Build Command**: `yarn build`
- **Output Directory**: `build`
- **Install Command**: `yarn install`
- **Root Directory**: `frontend`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Configure:
   - **Build command**: `yarn build`
   - **Publish directory**: `frontend/build`
   - **Base directory**: `frontend`
6. Add environment variables in Netlify dashboard

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── mock.js          # Portfolio data
│   ├── hooks/
│   │   ├── use-toast.js
│   │   └── useScrollAnimation.js
│   ├── services/
│   │   └── emailService.js  # EmailJS integration
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `/src/data/mock.js` to update:
- Personal details
- Work experience
- Projects
- Skills
- Certifications

### Modify Colors

Edit `/src/index.css` to change the color scheme:
```css
:root {
  --primary: 222.2 47.4% 11.2%;  /* Dark blue */
  --secondary: 210 40% 96.1%;    /* Light gray */
}
```

### Add/Remove Sections

Modify `/src/App.js` to add or remove sections.

## 🐛 Troubleshooting

### Contact Form Not Working

- Verify EmailJS configuration in `.env`
- Check browser console for errors
- Ensure EmailJS service and template are active

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Animations Not Working

- Check if JavaScript is enabled
- Clear browser cache
- Verify browser compatibility (use modern browsers)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Punith Pindi**

- GitHub: [@pindipunith](https://github.com/pindipunith)
- LinkedIn: [pindipunith](https://linkedin.com/in/pindipunith)
- Email: pindipunith444@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for icons
- [EmailJS](https://www.emailjs.com/) for email service
- [Vercel](https://vercel.com/) for hosting

---

**Built with ❤️ by Punith Pindi**