import type { NextConfig } from "next";

// Check for required environment variables at build time
if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  console.warn(
    '\x1b[33m%s\x1b[0m',
    '⚠️  WARNING: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not set.\n' +
    'Authentication features will not work. Get your key at:\n' +
    'https://dashboard.clerk.com/last-active?path=api-keys\n'
  );
}

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
