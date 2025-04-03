"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

const GoogleAnalytic = () => {
  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId="G-N2BRKLFGR9" // Optional, can be set in .env
        debugMode={false} // Enable for debugging
      />
    </>
  );
};
export default GoogleAnalytic