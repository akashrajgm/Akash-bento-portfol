---
import { getCurrentTimeInIST, formatTimeForIST } from "../lib/helpers";
import Card from "./Card/index.astro";

let timeDisplay;

function updateClock() {
  const now = getCurrentTimeInIST();
  if (timeDisplay) {
    timeDisplay.textContent = formatTimeForIST(now);
    timeDisplay.setAttribute("datetime", now.toISOString());
  }
}

setInterval(updateClock, 1000);
---

<Card colSpan="lg:col-span-2" rowSpan="md:row-span-2" title="Time Zone">
  <time
    id="timeDisplay"
    class="text-2xl xl:text-5xl xl:whitespace-nowrap w-50 xl:w-100 h-[calc(100%-28px)] font-serif flex justify-center items-center"
  >
    {formatTimeForIST(getCurrentTimeInIST())}
  </time>
</Card>
