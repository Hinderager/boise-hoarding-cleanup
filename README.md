# Hoarding Cleanup Boise - Microsite

SEO-focused microsite for hoarding cleanup services targeting Boise, Meridian, Nampa, Caldwell, and Eagle, Idaho.

## Pages

### Service Area Pages
- **Home** (`/`) - Main landing page with general hoarding cleanup info
- **Boise** (`/boise`) - City-specific page targeting Boise keywords
- **Meridian** (`/meridian`) - City-specific page targeting Meridian keywords
- **Nampa** (`/nampa`) - City-specific page targeting Nampa keywords
- **Caldwell** (`/caldwell`) - City-specific page for Caldwell
- **Eagle** (`/eagle`) - City-specific page for Eagle

### Educational Resources
- **About Hoarding** (`/about-hoarding`) - What is hoarding disorder
- **Hoarding Signs** (`/hoarding-signs`) - Warning signs and levels of hoarding
- **Helping a Hoarder** (`/helping-a-hoarder`) - How to support a loved one

### Blog
- **Blog Index** (`/blog`) - List of all blog posts
- 5 SEO-optimized blog posts covering hoarding topics

## Target Keywords

Primary keywords targeted:
- hoarding cleanup [city]
- hoarder cleanout [city]
- hoarding cleanup services [city] Idaho
- hoarding help [city]
- estate cleanout [city]
- clutter removal [city]

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment file and configure:
   ```bash
   cp .env.example .env.local
   ```

3. Update `.env.local` with your GHL webhook URL:
   ```
   NEXT_PUBLIC_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_ACTUAL_WEBHOOK_ID
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## GHL Integration

The scheduling form submits to a GoHighLevel webhook. Configure the webhook URL in your `.env.local` file.

Form data submitted includes:
- Contact info (name, phone, email)
- Service address
- Preferred date
- Description
- Service type: `hoarding_cleanup`
- Source city and website

## Deployment

This site is designed to be deployed on Vercel or similar platforms.

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Color Scheme

Uses the Top Shelf brand colors:
- Dark Blue: `#10477d`
- Light Blue: `#0b7fb6`
- Brand Yellow: `#FFC845`
- CTA Rose: `#F66256`
- Gunmetal: `#1F201D`

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Lucide Icons
