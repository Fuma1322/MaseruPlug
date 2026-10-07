# MaseruPlug

**Connecting Customers to Local Businesses Across Lesotho**

MaseruPlug is a digital business discovery platform designed to help small businesses increase their online visibility and attract more customers. The platform enables customers to discover trusted local service providers while giving businesses a professional online presence without the cost and complexity of managing a full website.

---

## 🌍 About The Project

Many businesses in Lesotho rely primarily on word-of-mouth referrals and social media to attract customers. While effective, these channels often make it difficult for potential customers to discover businesses when actively searching online.

MaseruPlug solves this problem by providing:

* Professional business profiles
* Search engine optimized listings
* Business categorization and discovery
* Direct customer contact options
* Business image galleries
* Local search visibility

Our mission is simple:

> Help local businesses become easier to find online and connect them with more customers.

---

## ✨ Features

### Business Discovery

* Browse businesses by category
* Search businesses by name or location
* View detailed business profiles

### Business Profiles

* Business information
* Contact details
* WhatsApp integration
* Social media links
* Business galleries

### SEO Optimization

* Search engine friendly URLs
* Dynamic metadata
* Sitemap generation
* Google Search Console integration

### Dashboard Management

* Category management
* Business management
* Image uploads
* Content management

---

## 🛠️ Tech Stack

### Frontend

* Next.js 14
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* Next.js Server Actions
* Prisma ORM
* MongoDB

### Authentication

* Next Auth

### File Storage

* UploadThing

### Analytics & SEO

* Google Analytics
* Google Search Console

### Deployment

* Vercel

---

## 📂 Project Structure

```bash
app/
├── (back)
├── dashboard

├── (front)
├── business
├── categories
├── contact
├── search

├── api
├── fonts

components/
├── ui
├── Forms
├── Frontend
├── Dashboard
├── FormInputs

actions/
├── businesses.ts
├── categories.ts

lib/
├── db.ts
├── utils.ts
├── category-icons.ts
├── uploadthing.ts

prisma/
├── schema.prisma
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* MongoDB Database
* Next Auth Account
* UploadThing Account

### Installation

Clone the repository:

```bash
git clone https://github.com/Fuma1322/maseruplug.git
```

Navigate to the project directory:

```bash
cd maseruplug
```

Install dependencies:

```bash
npm install
```

Create your environment variables:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_AUTH_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

Run Prisma:

```bash
npx prisma generate
```

Start the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 📈 Roadmap

### Phase 1

* Business Listings
* Categories
* SEO Foundation

### Phase 2

* Featured Businesses
* Business Verification
* Analytics Dashboard

### Phase 3

* Reviews & Ratings
* Customer Recommendations

### Phase 4

* Online Bookings
* Lead Tracking

### Phase 5

* Marketplace Expansion
* Advertising Platform

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome.

If you would like to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 👨‍💻 Founders

**Tankiso Leonard Fuma**

Founder & Lead Developer of MaseruPlug

**Lemohang Makintane**

Head Backend Engineer

---

## 📜 License

This project is licensed under the MIT License.

---

## 🇱🇸 Built in Lesotho

MaseruPlug is proudly built in Lesotho with a vision to empower local businesses and strengthen the country's digital economy.