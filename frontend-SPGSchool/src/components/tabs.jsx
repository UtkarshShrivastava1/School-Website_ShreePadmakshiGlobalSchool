import React from "react";

const Tabs = ({ children, className = "" }) => {
  return <div className={`w-full ${className}`}>{children}</div>;
};

const TabsList = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-200 p-1 text-gray-600 ${className}`}
    >
      {children}
    </div>
  );
};

const TabsTrigger = ({ children, className = "", isActive, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive ? "bg-white text-black shadow-sm" : "text-gray-500"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, className = "", isActive }) => {
  return (
    <div
      className={`mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isActive ? "block" : "hidden"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };