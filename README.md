# AgentOS Premiere Plus Realty

A modern, professional real estate website for Tony & Laura Harvey - Premiere Plus Realty serving Southwest Florida.

## 🏠 About

This is a Next.js 14 application built with TypeScript, featuring a complete real estate website with:

- **Homepage** with hero section, featured properties, and area highlights
- **Properties Listing** with static property data
- **Areas Overview** covering all 8 Southwest Florida communities
- **About Page** with Tony & Laura Harvey bios
- **Contact Page** with lead capture form
- **Blog** with real estate tips and market insights
- Fully responsive mobile-first design
- SEO optimized
- Fast page loads with Next.js optimization

## 🗺️ Service Areas

- Naples, FL
- Estero, FL
- Bonita Springs, FL
- Fort Myers, FL
- Cape Coral, FL
- Lehigh Acres, FL
- Marco Island, FL
- Golden Gate Estates, FL

## 📞 Contact Information

**Premiere Plus Realty**
- **Phone:** 239-777-0155
- **Email:** info@premiereplus.com
- **Agents:** Tony & Laura Harvey
- **Location:** Southwest Florida

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Database:** Supabase (PostgreSQL) - Ready but using static data for cost savings

## 📦 Project Structure

```
agentos-premiere-plus/
├── app/
│   ├── about/          # About Tony & Laura Harvey
│   ├── areas/          # Southwest Florida communities
│   ├── blog/           # Real estate blog
│   ├── contact/        # Contact form
│   ├── properties/     # Property listings
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── AreaCard.tsx    # Community card component
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Site header & navigation
│   ├── PropertyCard.tsx # Property listing card
│   └── QuickSearch.tsx  # Property search widget
├── public/
│   └── images/         # Static images
└── lib/                # Utilities
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/CR-AudioViz-AI/agentos-premiere-plus.git
   cd agentos-premiere-plus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to http://localhost:3000

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 🎨 Customization

### Colors
The site uses Premiere Plus Realty blue (#0066cc) as the primary color. To change:
- Edit `tailwind.config.ts`
- Update the `primary` color values

### Content
All content is in the respective page files:
- `/app/page.tsx` - Homepage content
- `/app/about/page.tsx` - Agent bios
- `/app/properties/page.tsx` - Property listings
- `/app/areas/page.tsx` - Community information

### Adding Properties
Edit the `properties` array in:
- `/app/page.tsx` (featured properties)
- `/app/properties/page.tsx` (all properties)

## 📱 Features

✅ Responsive mobile-first design
✅ SEO optimized with metadata
✅ Fast loading with Next.js Image optimization
✅ Static data (no database costs)
✅ Property search widget
✅ Lead capture forms
✅ Blog system
✅ Area pages for all communities
✅ Agent profiles
✅ Click-to-call and email links

## 🔮 Future Enhancements

- AI-powered chatbot
- Property detail pages
- Advanced filtering
- Supabase database integration
- Admin dashboard
- Automated MLS integration
- Email notifications
- User authentication
- Saved searches

## 📄 License

Copyright © 2025 Premiere Plus Realty. All rights reserved.

Built by Roy Henderson - CR AudioViz AI

## 🤝 Support

For questions or support, contact:
- Email: info@premiereplus.com
- Phone: 239-777-0155

---

**AgentOS Premiere Plus Realty** - Your Southwest Florida Real Estate Experts
