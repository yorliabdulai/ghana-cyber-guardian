# Ghana Cyber Guardian

A comprehensive cybersecurity management platform designed to protect and monitor digital infrastructure in Ghana. This platform provides real-time threat detection, incident management, and security analytics to help organizations maintain robust cybersecurity postures.

## 🛡️ Overview

Ghana Cyber Guardian is a modern web application built to address the growing cybersecurity challenges in Ghana's digital landscape. The platform offers a centralized solution for threat monitoring, incident response, and security analytics, empowering organizations to defend against cyber threats effectively.

## ✨ Features

- **Real-time Threat Monitoring**: Continuous surveillance of potential security threats
- **Incident Management**: Streamlined workflow for handling security incidents
- **Analytics Dashboard**: Comprehensive insights into security metrics and trends
- **Threat Intelligence**: Up-to-date information on emerging cyber threats
- **Research Tools**: Advanced research capabilities for cybersecurity analysis
- **Reporting System**: Automated and manual reporting for compliance and analysis
- **User Management**: Secure authentication and role-based access control
- **Responsive Design**: Optimized for desktop and mobile devices

## 🚀 Live Demo

Visit the live application: [https://cyberguardiangh.netlify.app/](https://cyberguardiangh.netlify.app/)

## 📊 Related Projects

- **Anomaly Detection System**: [GitHub Repository](https://github.com/yorliabdulai/anomaly-detection) - Machine learning models for detecting cybersecurity anomalies
- **Research Notebook**: [Google Colab](https://colab.research.google.com/drive/1myUjE4ktOgEtkjv0gYPFveJsmQyTREhx) - Interactive research and analysis notebook

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Charts & Analytics**: Recharts
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yorliabdulai/ghana-cyber-guardian.git
   cd ghana-cyber-guardian
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run build:dev` - Build the application in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## 📁 Project Structure

```
ghana-cyber-guardian/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   └── Layout.tsx     # Main layout component
│   ├── contexts/          # React contexts for state management
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Application pages/routes
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── package.json           # Project dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_APP_TITLE=Ghana Cyber Guardian
VITE_API_BASE_URL=your_api_base_url
```

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.ts`.

## 🚀 Deployment

### Netlify (Current)

The application is currently deployed on Netlify. To deploy:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Other Platforms

The application can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the build folder to an S3 bucket

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Ensure code passes ESLint checks
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abdulai Yorli Iddrisu**
- GitHub: [@yorliabdulai](https://github.com/yorliabdulai)
- Project: [Ghana Cyber Guardian](https://github.com/yorliabdulai/ghana-cyber-guardian)

## 🙏 Acknowledgments

- shadcn/ui for the excellent component library
- Radix UI for accessible component primitives
- Tailwind CSS for the utility-first CSS framework
- The React and TypeScript communities for their amazing tools and resources

## 📞 Support

If you have any questions or need support, please:

1. Check the [Issues](https://github.com/yorliabdulai/ghana-cyber-guardian/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact the maintainer for urgent matters

---

**Ghana Cyber Guardian** - Protecting Ghana's Digital Future 🛡️🇬🇭