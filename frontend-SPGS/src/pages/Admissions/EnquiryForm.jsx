"use client"; // for Next.js App Router

import { useEffect } from "react";

const EnquiryForm = () => {
  useEffect(() => {
    window.location.href =
      "https://entab.online/Registration/RegistrationGroupClass";
  }, []);

  return <p>Redirecting to Enquiry Form...</p>;
};

export default EnquiryForm;
