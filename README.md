# 🚀 Zippy Lite

A modern, local courier delivery MVP built with Next.js, TypeScript, and Tailwind CSS. Track packages from sender to receiver with real-time status updates and a clean, intuitive interface.

## ✨ Completed Features

### 📋 Package Management
- **Comprehensive Package Form**: Create packages with sender/receiver details, pickup/delivery locations, and package type
- **Real-time Validation**: Client-side form validation with instant error feedback
- **Package Listing**: View all created packages with status indicators and detailed information
- **Status Tracking**: Track packages through Pending → In Transit → Delivered → Cancelled states

### 🎨 User Interface
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Clean Architecture**: Separated UI components from business logic
- **Visual Status Indicators**: Color-coded badges for package status and type
- **Form Sections**: Organized into logical groups (Sender, Receiver, Location, Package Details)

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Custom Hooks**: Reusable form logic with `usePackageForm`
- **Storage Abstraction**: localStorage service with easy database migration path
- **Error Handling**: Comprehensive error states and user feedback

## 🚧 Planned Features

### Phase 2: Enhanced Package Management
- [ ] Package editing and updates
- [ ] Bulk operations (delete multiple packages)
- [ ] Package search and filtering
- [ ] Export packages to CSV/PDF

### Phase 3: Backend Integration
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] RESTful API endpoints
- [ ] Real-time updates with WebSockets
- [ ] Package tracking with unique IDs

### Phase 4: Authentication & Multi-tenancy
- [ ] User authentication (NextAuth.js)
- [ ] User-specific package management
- [ ] Role-based access control
- [ ] Organization/team management

### Phase 5: Advanced Features
- [ ] Courier service integration
- [ ] Real-time GPS tracking
- [ ] Email/SMS notifications
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

## 🧠 Tech Stack

- **Framework**: Next.js 15.3.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with Tailwind
- **State Management**: React hooks (useState, useEffect)
- **Storage**: localStorage (with service abstraction)
- **Icons**: Lucide React, React Icons
- **Linting**: ESLint with Next.js config
- **Development**: Turbopack for fast builds

## 📁 Folder Structure

```
zippy-lite/
├── app/
│   ├── api/packages/          # API routes
│   ├── components/            # Reusable UI components
│   │   └── PackageFormUI.tsx
│   ├── features/packages/     # Feature-specific logic
│   │   └── hooks/
│   │       └── usePackageForm.ts
│   ├── packages/              # Package pages
│   │   ├── new/page.tsx      # Create package
│   │   └── page.tsx          # Package listing
│   ├── services/              # Business logic services
│   │   └── packageStorage.ts
│   ├── types/                 # TypeScript definitions
│   │   └── package.ts
│   └── globals.css           # Global styles
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zippy-lite.git
   cd zippy-lite
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧪 Testing Logic

### Form Validation
The application includes comprehensive client-side validation:

- **Name Fields**: Letters, spaces, periods, and hyphens only (max 50 chars)
- **Phone Numbers**: International format validation
- **Location Fields**: Required with 100 character limit
- **Package Type**: Required selection from predefined options
- **Status**: Required selection from status options

### Error Handling
- Real-time validation with instant feedback
- Error states clear as user types
- Submit error handling with user-friendly messages
- Graceful localStorage error handling

### Data Persistence
- Packages stored in localStorage with service abstraction
- Unique ID generation for each package
- Timestamp tracking (created/updated)
- Easy migration path to database storage

## 🧭 Development Roadmap

### ✅ Phase 1: Core Form & UI (Completed)
- [x] Package creation form with all required fields
- [x] Form validation and error handling
- [x] Package listing and display
- [x] localStorage data persistence
- [x] Responsive UI design

### 🔜 Phase 2: Enhanced Features (Next)
- [ ] Package editing and updates
- [ ] Search and filtering capabilities
- [ ] Bulk operations
- [ ] Export functionality

### 🏗️ Phase 3: Backend Integration
- [ ] Database setup and migration
- [ ] RESTful API development
- [ ] Real-time updates
- [ ] Advanced package tracking

### 🔐 Phase 4: Authentication & Multi-tenancy
- [ ] User authentication system
- [ ] User-specific package management
- [ ] Role-based permissions
- [ ] Team/organization features

## 🌐 Deployment

### Local Development
The app runs locally on `http://localhost:3000` with hot reloading enabled.

### Future Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Production deployment
vercel --prod
```

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```env
# Future database configuration
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
```

## 🧠 Architecture Highlights

### Clean Code Principles
- **Separation of Concerns**: UI, logic, and data layers are clearly separated
- **Custom Hooks**: Reusable form logic with `usePackageForm`
- **Type Safety**: Full TypeScript implementation
- **Service Layer**: Abstracted data storage for easy migration

### Scalability
- **Modular Structure**: Easy to add new features and pages
- **Service Abstraction**: Simple switch from localStorage to database
- **Component Reusability**: Form components can be reused for editing
- **Type Definitions**: Centralized types for consistency

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Credits

**Author**: [@Benjaminkissa1](https://github.com/Benjaminkissa1)

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.

---

**Zippy Lite** - Making local courier delivery simple and efficient! 🚀📦