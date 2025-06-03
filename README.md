# 🚀 Zippy Lite

A lightweight logistics MVP that allows users to create and manage package deliveries. Built with modern web technologies and a focus on user experience.

## ✨ Features

### ✅ Completed Features

#### 📝 Add Package Form
- Create new package entries with:
  - Sender information
  - Receiver information
  - Delivery status
- Form validation:
  - Required field validation
  - Special character validation
  - Length validation (50 characters max)
- Real-time error feedback
- Success notifications
- Automatic form reset after submission

### 🚧 Planned Features

| Feature | Description | Status |
|---------|-------------|--------|
| 📦 Dashboard | List all packages with status updates | Planned |
| 🔁 Update Delivery Status | Change package status (e.g., "In Transit", "Delivered") | Planned |
| 🔍 Search & Filter | Quickly search by name, status, etc. | Planned |
| 🔒 Authentication | User authentication and authorization | Planned |
| ☁️ Database Integration | MongoDB or Supabase integration | Planned |

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Database:** MongoDB/Supabase (planned)
- **ORM:** Prisma (planned)

## 📁 Directory Structure

```
app/
├── api/
│   └── packages/
│       └── route.ts           # Package creation API
├── components/
│   ├── PackageFormUI.tsx     # Package form component
│   ├── Header.tsx            # Navigation header
│   └── FeatureCard.tsx       # Feature display component
├── features/
│   └── packages/
│       └── hooks/
│           └── usePackageForm.ts  # Form logic hook
├── packages/
│   ├── page.tsx              # Packages list page
│   └── new/
│       └── page.tsx          # New package form page
└── page.tsx                  # Home page
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/zippy-lite.git
cd zippy-lite
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧪 Testing

The application includes comprehensive form validation testing:

1. **Empty Form Validation**
   - Tests required field validation
   - Verifies error messages

2. **Special Character Validation**
   - Validates name format
   - Restricts special characters

3. **Length Validation**
   - Enforces 50-character limit
   - Provides clear error messages

4. **Status Validation**
   - Verifies status selection
   - Tests all status options

## 📈 Roadmap

### Phase 1: Add Package Form ✅
- ✅ Form UI with sender, receiver, and status fields
- ✅ Form validation (required fields, special characters, length)
- ✅ Success/error handling
- ✅ Basic API structure

### Phase 2: Dashboard 📦
- [ ] Package list view
- [ ] Status overview
- [ ] Basic statistics
- [ ] Recent activity feed

### Phase 3: Update Status 🔁
- [ ] Status change functionality
- [ ] Status history tracking
- [ ] Update notifications
- [ ] Status change validation

### Phase 4: Search & Filter 🔍
- [ ] Search by sender/receiver
- [ ] Filter by status
- [ ] Sort by date/status
- [ ] Advanced search options

### Phase 5: Authentication 🔒 (Optional)
- [ ] User registration/login
- [ ] Role-based access
- [ ] User profile management
- [ ] Secure routes

### Phase 6: Database Integration ☁️
- [ ] Database setup (MongoDB/Supabase)
- [ ] Prisma integration
- [ ] Data migration
- [ ] Backup strategy

## 🌐 Deployment

The project is Vercel-ready. Deployment instructions will be added once database integration is complete.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
