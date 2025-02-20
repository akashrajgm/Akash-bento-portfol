export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInIST(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Indian Standard Time (IST)
  const offsetIST = 5.5; // IST is UTC+5:30
  now.setMinutes(now.getUTCMinutes() + offsetIST * 60);

  return now;
}

export function formatTimeForIST(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 12-hour format with AM/PM
    timeZone: "Asia/Kolkata",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  formattedTime += " IST"; // Append IST time zone

  return formattedTime;
}

export function getCurrentTimeInItaly(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Italy's time
  const offsetItaly = 2; // Italy is in Central European Summer Time (UTC+2), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetItaly);

  return now;
}

export function formatTimeForItaly(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Europe/Rome",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  formattedTime += " CET"; // Append CET time zone

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const LINKS = {
  github: "https://github.com/akashrajgm",
  linkedin: "https://www.linkedin.com/in/g-m-akash-raj-a35860275/",
  email: "akashrajgm68@gmail.com", // Fixed email format (removed "<")
};

export const loaderAnimation = [
  ".loader",
  { opacity: [1, 0], pointerEvents: "none" },
  { easing: "ease-out" },
];
