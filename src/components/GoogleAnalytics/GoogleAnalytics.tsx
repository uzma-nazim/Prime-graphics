"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const GoogleAnalytic = () => {
  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId="G-TBYGY27D7W" // Optional, can be set in .env
        debugMode={false} // Enable for debugging
      />
    </>
  );
};