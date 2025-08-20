"use client"; // for Next.js App Router

import { useEffect } from "react";

const EnquiryForm = () => {
  useEffect(() => {
    window.location.href = "https://entab.online/Logon/Index";
  }, []);

  return <p>Redirecting to Enquiry Form...</p>;
};

export default EnquiryForm;
