'use client'

import React from "react";
import { CreatorFilterSection } from "@/components/sections/CreatorFilterSection/CreatorFilterSection";
import { CreatorListSection } from "@/components/sections/CreatorListSection/CreatorListSection";
import { MetricsTitleSection } from "@/components/sections/MetricsTitleSection/MetricsTitleSection";
import { useCreatorData } from "@/hooks/useCreatorData";

export default function DiscoverPage(): JSX.Element {
  const creatorData = useCreatorData();
  
  return (
    <div className="min-h-screen w-full bg-black dark">
      <div className="flex flex-col gap-[15px] lg:gap-[20px] xl:gap-[25px] w-full h-full p-[15px] lg:p-[20px] xl:p-[25px]">
        {/* Page Header with Metrics */}
        <MetricsTitleSection creatorData={creatorData} />
        
        {/* Filter Controls */}
        <CreatorFilterSection creatorData={creatorData} />
        
        {/* Creator List/Cards */}
        <CreatorListSection creatorData={creatorData} />
      </div>
    </div>
  );
}