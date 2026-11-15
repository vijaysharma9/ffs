import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-surface-pale">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-2xl border border-surface-line shadow-card">
        <span className="text-6xl font-display font-extrabold text-blue-brand block mb-2">
          404
        </span>
        <h1 className="text-2xl font-display font-extrabold text-navy-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed mb-6">
          The page you are looking for does not exist or may have been moved. Return to our homepage
          to explore our loan assistance options.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="blue" size="md" href="/">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Go to Homepage</span>
          </Button>
          <Button variant="outline" size="md" href="/loan-products">
            <span>Explore Loan Products</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
