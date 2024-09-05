import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function createId(length: number = 5) {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let result = "";
  let counter = 0;

  while (counter < length) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    counter += 1;
  }

  return result;
}

export function getMonth(date: Date) {
  return Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
}

export function getDay(date: Date) {
  return Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date);
}

export function getTime(date: Date) {
  return Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).format(
    date,
  );
}

export function slugify(str: string) {
  return str.toLowerCase().replace(/[\W_\s]+/g, "-");
}

export function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
