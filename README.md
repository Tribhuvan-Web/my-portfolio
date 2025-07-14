# 🌟 Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, achievements, and professional experience as a software developer.

![Portfolio Screenshot](./public/logo.png)

## 🚀 Live Demo

🔗 **[View Live Portfolio](https://my-portfolio-76.vercel.app/)** *(Replace with your actual deployment URL)*

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional interface with gradient themes
- Glass-morphism design elements
- Smooth animations and hover effects
- Mobile-first responsive design

### 📱 **Responsive Layout**
- Optimized for all device sizes
- Mobile navigation with hamburger menu
- Adaptive image handling for mobile devices
- Fluid typography and spacing

### 🧭 **Smooth Navigation**
- Fixed navbar with smooth scrolling
- Automatic scroll offset for fixed header
- Active section highlighting
- Mobile-friendly navigation menu

### 📧 **Contact Integration**
- Functional contact form with EmailJS
- Auto-disappearing success messages
- Clickable email and phone links
- Social media integration

### 🏆 **Achievement Showcase**
- Professional achievement cards
- Proof links for certifications
- Verification IDs for credentials
- Category-based organization

### 🔗 **Social Media Integration**
- Sticky sidebar with social links
- Platform-specific hover colors
- Direct links to profiles and portfolios
- Professional networking integration

## 🛠️ Built With

### **Frontend Technologies**
- **[React 19.1.0](https://reactjs.org/)** - UI Library
- **[Vite 7.0.4](https://vitejs.dev/)** - Build Tool & Dev Server
- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Utility-First CSS Framework

### **Libraries & Packages**
- **[@emailjs/browser](https://www.emailjs.com/)** - Email functionality
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[Google Fonts](https://fonts.google.com/)** - Typography (Winky Rough, Raleway Dots, Edu AU VIC WA NT Dots)

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting
- **[Vite React Plugin](https://github.com/vitejs/vite-plugin-react)** - React integration

## 📁 Project Structure

```
my-project/
├── public/
│   ├── certificates/          # Certificate PDFs and images
│   ├── logo.png              # Site logo
│   └── vite.svg              # Vite icon
├── src/
│   ├── components/           # React components
│   │   ├── About.jsx         # About section
│   │   ├── Achievement.jsx   # Achievement showcase
│   │   ├── Body.jsx          # Hero section
│   │   ├── Contact.jsx       # Contact form
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Navbar.jsx        # Navigation header
│   │   ├── Project.jsx       # Project portfolio
│   │   ├── Sidebar.jsx       # Social media sidebar
│   │   └── Skills.jsx        # Skills section
│   ├── assets/               # Static assets
│   │   └── react.svg         # React icon
│   ├── App.jsx               # Main app component
│   ├── App.css               # Custom styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### **Prerequisites**
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tribhuvan-Web/my-portfolio.git
   cd my-portfolio/my-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### **Build for Production**
```bash
npm run build
# or
yarn build
```

### **Preview Production Build**
```bash
npm run preview
# or
yarn preview
```

## ⚙️ Configuration

### **EmailJS Setup**
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Update credentials in `src/components/Contact.jsx`:
   ```javascript
   const serviceId = "your_service_id";
   const templateId = "your_template_id";
   const publicKey = "your_public_key";
   ```

### **Social Media Links**
Update your profile URLs in `src/components/Sidebar.jsx`:
```javascript
const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  leetcode: "https://leetcode.com/yourusername",
  hackerrank: "https://hackerrank.com/yourusername"
};
```

### **Achievement Proofs**
1. Add certificate PDFs to `public/certificates/`
2. Update proof links in `src/components/Achievement.jsx`
3. Replace verification URLs with actual certificate links

## 🎨 Customization

### **Color Scheme**
The portfolio uses an orange/amber gradient theme. To change colors, update the Tailwind classes:
- Primary: `from-orange-500 to-amber-500`
- Hover: `from-orange-600 to-amber-600`
- Backgrounds: `bg-orange-50`, `bg-orange-100`

### **Typography**
Custom Google Fonts are configured in `index.html` and applied in `index.css`:
- **Primary**: Winky Rough
- **Accent**: Raleway Dots
- **Special**: Edu AU VIC WA NT Dots

### **Content Updates**
- **Personal Info**: Update `src/components/About.jsx`
- **Projects**: Modify the projects array in `src/components/Project.jsx`
- **Skills**: Update skills list in `src/components/Skills.jsx`
- **Achievements**: Add/modify achievements in `src/components/Achievement.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

Key responsive features:
- Collapsible mobile navigation
- Adaptive grid layouts
- Scalable typography
- Touch-friendly interactive elements

## 🔧 Troubleshooting

### **Common Issues**

**Development server won't start:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**EmailJS not working:**
- Verify service ID, template ID, and public key
- Check EmailJS dashboard for API limits
- Ensure CORS settings allow your domain

**Fonts not loading:**
- Check Google Fonts URL in `index.html`
- Verify font names in CSS classes
- Clear browser cache

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Tribhuvan** - [Your Email](mailto:your.email@example.com)

**Project Link**: [https://github.com/Tribhuvan-Web/my-portfolio](https://github.com/Tribhuvan-Web/my-portfolio)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - For the amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Vite](https://vitejs.dev/) - For the blazing fast build tool
- [EmailJS](https://www.emailjs.com/) - For email functionality
- [React Icons](https://react-icons.github.io/react-icons/) - For the beautiful icons
- [Google Fonts](https://fonts.google.com/) - For the typography

---

⭐ **If you found this project helpful, please give it a star!** ⭐e

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
