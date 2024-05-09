import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseDate(date: string) {
  return new Date(date).toLocaleDateString("en-gb", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
