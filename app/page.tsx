// app/page.tsx

import Link from 'next/link';
import { FaTruck, FaHistory, FaPlusCircle } from 'react-icons/fa';
import { FeatureCard } from './components/FeatureCard';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <section className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Modern Package Tracking for Logistics Teams
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Create, track, and manage deliveries with real-time status updates — built for businesses and internal teams.
        </p>
        <Link
          href="/packages"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Launch Dashboard →
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        <FeatureCard
          icon={<FaTruck className="text-blue-600 text-3xl mb-4" />}
          title="Real-Time Tracking"
          description="Monitor your package statuses as they update live — no refresh needed."
        />
        <FeatureCard
          icon={<FaHistory className="text-blue-600 text-3xl mb-4" />}
          title="Access History"
          description="Every package, every status, every update — always at your fingertips."
        />
        <FeatureCard
          icon={<FaPlusCircle className="text-blue-600 text-3xl mb-4" />}
          title="Fast Package Creation"
          description="Enter delivery info quickly with our smart, minimal form system."
        />
      </section>
    </main>
  );
}
  