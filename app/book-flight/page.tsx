import type { Metadata } from "next";
import { BookingSection } from "@/components/BookingSection";
import { FlightSearchSection } from "@/components/FlightSearchSection";
import { PropertyGrid } from "@/components/PropertyGrid";
import { CommunityBanner } from "@/components/CommunityBanner";

export const metadata: Metadata = {
  title: "Book Flight & Joyride",
  description: "Book your private jet flight, airplane joyride, pilgrimage charter, or air ambulance with AeroLux. 30+ aircrafts ready for immediate departure.",
};

export default function BookFlightPage() {
  return (
    <main className="bg-white">
      {/* Hero Section: Homepage Booking Section with sky background, clouds & authentic window form (status bar stripped) */}
      <BookingSection showTrustBar={false} isHero={true} />

      {/* Interactive Flight Search & Charter Booking Component (IndiGo Style) */}
      <div id="flight-search" className="pt-4">
        <FlightSearchSection />
      </div>

      {/* Community Banner */}
      <CommunityBanner />

      {/* Charter Fleet Showcase */}
      <PropertyGrid />
    </main>
  );
}
