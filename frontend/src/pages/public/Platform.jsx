import React from "react";
import CardPlatform from "../../components/CardPlatform";
import { AllPlatform } from "../../contexts/ExamplePost";

export default function Platform() {
  return (
    <div className="platform-page">
      <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">
        PLATFORM
      </h1>
      {/* platform image card goes here */}

      <div className="py-6 md:py-10 grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-4  ">
        {AllPlatform.map((platform) => (
          <CardPlatform key={platform.id} platform={platform} />
        ))}
        ;
      </div>
      {/* platform goes here */}
      <div></div>
    </div>
  );
}

// this page will reload a content that related to the console platform (console/mobile/etc)
