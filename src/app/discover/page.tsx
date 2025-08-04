import React from "react";
import { Discover } from "@/components/dashboard/discover";

/**
 * Discover Page Route
 * 
 * This page demonstrates how the Discover component can be used
 * in a standalone route. In your main dashboard, you would import
 * and use the Discover component directly in your routing system.
 */
export default function DiscoverPage() {
  return (
    <div className="min-h-screen w-full bg-black dark">
      <div className="p-[15px] lg:p-[20px] xl:p-[25px]">
        <Discover />
      </div>
    </div>
  );
}
