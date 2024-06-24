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

export function getYouTubePreview(url: string) {
  let { searchParams } = new URL(url);

  return `https://img.youtube.com/vi/${searchParams.get("v")}/hqdefault.jpg`;
}
