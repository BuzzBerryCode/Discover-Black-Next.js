# 🚀 Discover Page V4 - Creator Discovery Platform

A modern, responsive Next.js-based discover page for creators, built with TypeScript, Tailwind CSS, and Supabase. This component is designed for seamless integration into larger dashboard applications.

## 🔒 Security Notice

**IMPORTANT**: This repository is configured for secure deployment. Never commit your actual `.env` file to version control.

**⚠️ SECURITY UPDATE**: If you are using the Supabase credentials from previous versions of this repository, please rotate your API keys immediately as they may have been exposed in the git history. Generate new keys from your Supabase dashboard.

## 🛠️ Quick Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account (free tier available)

### 1. Clone the Repository
```bash
git clone https://github.com/BuzzBerryCode/Discover-Black-Next.js.git
cd Discover-Black-Next.js
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your actual credentials:
   ```bash
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

### 4. Get Your Supabase Credentials
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or select existing one
3. Go to Settings → API
4. Copy your Project URL and anon/public key

### 5. Run the Development Server
```bash
npm run dev
```

Visit `http://localhost:3000/discover` to see your application.

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key | ✅ |

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your GitHub repository to Netlify
2. Add environment variables in Netlify dashboard
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Manual Deployment
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── discover/          # Discover page route
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── dashboard/         # Dashboard integration components
│   ├── sections/          # Section components
│   └── ui/                # UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Library configurations
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🎯 Dashboard Integration

This component is designed for easy integration into larger Next.js dashboards:

### Standalone Usage
```tsx
import { Discover } from "@/components/dashboard/discover";

export default function DiscoverPage() {
  return (
    <div className="min-h-screen w-full bg-black dark">
      <div className="p-[15px] lg:p-[20px] xl:p-[25px]">
        <Discover />
      </div>
    </div>
  );
}
```

### Dashboard Integration
```tsx
import { Discover } from "@/components/dashboard/discover";

export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Discover />
      </main>
    </div>
  );
}
```

## 🎨 Features

### Core Functionality
- ✅ **Creator Discovery**: Browse and filter creators
- ✅ **Advanced Filtering**: Platform, location, buzz score, engagement
- ✅ **AI Recommendations**: Smart creator matching
- ✅ **Pagination**: Server-side pagination for performance
- ✅ **Sorting**: Multiple sort options with server-side implementation
- ✅ **Dark Theme**: Modern dark mode design
- ✅ **Responsive Design**: Mobile-first approach

### UI Components
- ✅ **Creator Cards**: Grid and list view modes
- ✅ **Expanded Profiles**: Detailed creator information
- ✅ **Filter Dropdowns**: Advanced filtering interface
- ✅ **Metrics Dashboard**: Real-time creator statistics
- ✅ **Loading States**: Skeleton loading for better UX

### Data Management
- ✅ **Supabase Integration**: Real-time data from database
- ✅ **Server-side Operations**: Efficient data fetching
- ✅ **State Management**: React hooks for data handling
- ✅ **Error Handling**: Graceful error states

## 🔐 Security Features

### Environment Variables
- ✅ `.env` file is properly gitignored
- ✅ `.env.example` provided with placeholders
- ✅ No sensitive data in codebase
- ✅ Environment variables properly configured

### Code Security
- ✅ All debug console statements removed
- ✅ No hardcoded secrets
- ✅ Proper error handling
- ✅ Input validation implemented

### Dependencies
- ✅ Security vulnerabilities fixed
- ✅ Dependencies up to date
- ✅ Next.js updated to latest secure version (14.2.31)

### Deployment Security
- ✅ HTTPS enforced in production
- ✅ Proper CORS configuration
- ✅ Security headers implemented
- ✅ Rate limiting ready

## 🚨 Security Checklist

Before deploying to production:

- [ ] Rotate all API keys if they were ever exposed
- [ ] Enable Row Level Security (RLS) in Supabase
- [ ] Configure proper CORS policies
- [ ] Set up monitoring and logging
- [ ] Enable security headers
- [ ] Implement rate limiting
- [ ] Test all authentication flows
- [ ] Review third-party dependencies

## 📚 Documentation

- [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) - Detailed setup guide
- [SUPABASE_INTEGRATION.md](./SUPABASE_INTEGRATION.md) - Supabase integration details
- [SECURITY.md](./SECURITY.md) - Security guidelines and best practices

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Tech Stack
- **Framework**: Next.js 14.2.31 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **State Management**: React Hooks
- **UI Components**: Custom components with Radix UI primitives

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Security Contact

If you discover a security vulnerability, please:
1. **DO NOT** create a public issue
2. Contact the maintainers privately
3. Provide detailed reproduction steps
4. Allow time for investigation and fix

## 🔄 Security Updates

This project is regularly updated for security:
- Dependencies are monitored for vulnerabilities
- Security patches are applied promptly
- Regular security audits are performed
- Best practices are followed

For more details, see [SECURITY.md](./SECURITY.md)
