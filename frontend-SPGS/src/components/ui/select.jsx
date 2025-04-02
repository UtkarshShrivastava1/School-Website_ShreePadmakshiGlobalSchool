import React, { createContext, useContext, useState, useRef } from "react";

// Create context
const SelectContext = createContext({});

const Select = ({ children, value, onValueChange, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || "");
  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (newValue) => {
    setSelectedValue(newValue);
    setIsOpen(false); // Close dropdown on selection
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <SelectContext.Provider value={{ value: selectedValue, onValueChange: handleValueChange, isOpen, setIsOpen, toggleDropdown }}>
      {children}
    </SelectContext.Provider>
  );
};

const SelectTrigger = React.forwardRef(({ className = "", children, ...props }, ref) => {
  const { toggleDropdown, isOpen } = useContext(SelectContext);
  
  return (
    <button
      ref={ref}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={toggleDropdown} // Toggle dropdown on click
      {...props}
    >
      {children}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? "rotate-180" : ""}`}
      >
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = React.forwardRef(({ className = "", placeholder, ...props }, ref) => {
  const { value } = useContext(SelectContext);
  
  return (
    <span className={`block truncate ${value ? "" : "text-muted-foreground"} ${className}`} {...props}>
      {value || placeholder || "Select an option"}
    </span>
  );
});
SelectValue.displayName = "SelectValue";

const SelectContent = React.forwardRef(({ className = "", children, ...props }, ref) => {
  const { isOpen } = useContext(SelectContext);

  if (!isOpen) return null; // Hide dropdown if it's not open

  return (
    <div
      ref={ref}
      className={`absolute z-50 min-w-[8rem] mt-2 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 ${className}`}
      {...props}
    >
      <div className="w-full p-1">{children}</div>
    </div>
  );
});
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef(({ className = "", children, value, ...props }, ref) => {
  const { onValueChange, value: selectedValue } = useContext(SelectContext);
  const isSelected = selectedValue === value;

  return (
    <div
      ref={ref}
      className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground ${
        isSelected ? "bg-accent text-accent-foreground" : ""
      } ${className}`}
      onClick={() => onValueChange(value)}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-4 w-4"
          >
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        )}
      </span>
      <span className="truncate">{children}</span>
    </div>
  );
});
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };


