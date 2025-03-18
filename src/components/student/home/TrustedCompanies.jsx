import React from "react";
import { assets } from "../../../assets/assets";

const TrustedCompanies = () => {
  return (
    <div className="pt-24">
      <h2 className="text-13 text-fontGray font-medium md:text-base">
        Trusted by learners from
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 pt-9 md:gap-16">
        <img
          src={assets.microsoft_logo}
          alt="microsoft_logo"
          className="max-w-20 md:max-w-full"
        />
        <img
          src={assets.walmart_logo}
          alt="walmart_logo"
          className="max-w-20 md:max-w-full"
        />
        <img
          src={assets.accenture_logo}
          alt="accenture_logo"
          className="max-w-20 md:max-w-full"
        />
        <img
          src={assets.adobe_logo}
          alt="adobe_logo"
          className="max-w-20 md:max-w-full"
        />
        <img
          src={assets.paypal_logo}
          alt="paypal_logo"
          className="max-w-20 md:max-w-full"
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
