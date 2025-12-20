# Next.js E-Commerce Application

A modern, full-stack e-commerce web application built with Next.js 15, featuring a complete shopping experience for clothing and apparel.

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)
![React](https://img.shields.io/badge/React-19.1.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

## 🌟 Features

- **Product Catalog**: Browse a wide selection of clothing items with detailed descriptions
- **Product Filtering**: Filter products by category, size, color, and price
- **Search Functionality**: Find products quickly with the integrated search bar
- **Shopping Cart**: Add items to cart with size and color selection
- **Cart Management**: Review, modify, and remove items from your cart
- **Multi-Step Checkout**: Streamlined checkout process with shipping and payment forms
- **Form Validation**: Client-side validation using Zod and React Hook Form
- **User Authentication**: Secure sign-in and sign-up using Clerk authentication
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile
- **Toast Notifications**: User-friendly feedback for actions
- **State Management**: Persistent cart state using Zustand with localStorage

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.4.5** - React framework with App Router
- **React 19.1.4** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Icon library

### State & Forms
- **Zustand** - Lightweight state management
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation

### Authentication
- **Clerk** - Complete authentication solution

### UI/UX
- **React Toastify** - Toast notifications
- **Next.js Font** - Optimized font loading

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/HassanSaid21/Next.js-e-commerce.git
cd Next.js-e-commerce
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
# or
yarn install
# or
pnpm install
```

> **Note**: The `--legacy-peer-deps` flag may be required due to React 19 compatibility with some dependencies.

### 3. Environment Setup

Create a `.env.local` file in the root directory and add your Clerk authentication keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# Clerk Redirect URLs (optional, for custom domains)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

**To get your Clerk keys:**
1. Sign up at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your API keys from the dashboard
4. Paste them into your `.env.local` file

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
Next.js-e-commerce/
├── public/              # Static assets (images, logos)
│   ├── products/        # Product images
│   ├── featured.png     # Featured banner image
│   └── logo.png         # Application logo
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── cart/        # Shopping cart page and components
│   │   ├── components/  # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductList.tsx
│   │   │   ├── Filter.tsx
│   │   │   └── ...
│   │   ├── orders/      # Orders page (future development)
│   │   ├── products/    # Product listing and detail pages
│   │   ├── sign-in/     # Clerk sign-in page
│   │   ├── sign-up/     # Clerk sign-up page
│   │   ├── layout.tsx   # Root layout with providers
│   │   └── page.tsx     # Home page
│   ├── store/           # Zustand state management
│   │   └── cartStore.tsx
│   ├── types.tsx        # TypeScript types and Zod schemas
│   └── middleware.ts    # Clerk authentication middleware
├── .eslintrc.json       # ESLint configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎯 Key Features Explained

### Shopping Cart
The cart is managed using Zustand and persists data in localStorage:
- Add items with specific size and color variants
- Automatically updates quantities for duplicate items
- Remove individual items or clear entire cart
- Persists across page refreshes

### Checkout Process
Three-step checkout flow:
1. **Review Cart**: View all items, quantities, and total price
2. **Shipping Information**: Enter shipping details with validation
3. **Payment Method**: Enter payment information (UI only - not processed)

### Authentication
Clerk provides:
- Email/password authentication
- Social login options
- Protected routes via middleware
- User profile management

### Product Management
Products are currently stored as static data in the application. Each product includes:
- Multiple color and size variants
- Detailed descriptions
- High-quality images
- Price information

## 🧪 Development

### Run Linter

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## 🔐 Security

This project has been updated to address security vulnerabilities:
- Updated Next.js to v15.4.5 with latest security patches
- All dependencies are up-to-date
- Clerk handles authentication securely

## 🚧 Future Enhancements

- [ ] Backend API integration for products
- [ ] Real payment processing (Stripe, PayPal)
- [ ] Order management and history
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Advanced search and filtering

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key | Yes |
| `CLERK_SECRET_KEY` | Clerk secret key | Yes |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Sign-in page path | No |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Sign-up page path | No |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Redirect after sign-in | No |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Redirect after sign-up | No |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Hassan Said**
- GitHub: [@HassanSaid21](https://github.com/HassanSaid21)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Authentication by [Clerk](https://clerk.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Shopping! 🛍️**

