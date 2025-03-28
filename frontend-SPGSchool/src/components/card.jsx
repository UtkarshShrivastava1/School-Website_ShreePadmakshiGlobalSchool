import React from "react";

// Card Component
export function Card({ children, className }) {
  return (
    <div className={`bg-gray-900 rounded-2xl shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
}

// Card Content Component
export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
