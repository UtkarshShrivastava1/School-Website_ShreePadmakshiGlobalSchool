import React from "react";

const Card = ({ className = "", children }) => {
  return (
    <div className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ className = "", children }) => {
  return <div className={`flex flex-col space-y-2 p-6 ${className}`}>{children}</div>;
};

const CardTitle = ({ className = "", children }) => {
  return <h3 className={`text-2xl font-semibold tracking-tight ${className}`}>{children}</h3>;
};

const CardDescription = ({ className = "", children }) => {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
};

const CardContent = ({ className = "", children }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

const CardFooter = ({ className = "", children }) => {
  return <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>;
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
