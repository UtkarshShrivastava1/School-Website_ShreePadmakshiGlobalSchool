import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with conditional logic.
 * @param {...string} inputs - Class names and conditional class objects.
 * @returns {string} - A merged and optimized Tailwind class string.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
