---
import { getCurrentTimeInIST, formatTimeForIST } from "../lib/helpers";
import Card from "./Card/index.astro";
---

<script>
  import { onCleanup, onMount } from "solid-js";

  let interval;

  function updateClock() {
    const timeDisplay = document.getElementById("timeDisplay");
    const now = getCurrentTimeInIST(); // Use correct function

    if (timeDisplay) {
      timeDisplay.textContent = formatTimeForIST(now);
      timeDisplay.setAttribute("datetime", now.toISOString());
    }
  }

  onMount(() => {
    interval = setInterval(updateClock, 1000);
  });

  onCleanup(() => {
    clearInterval(interval);
  });
</script>

<Card colSpan="lg:col-span-2" rowSpan="md:row-span-2" title="Time Zone">
  <time
    datetime=""
    id="timeDisplay"
    class="text-2xl xl:text-5xl xl:whitespace-nowrap w-50 xl:w-100 h-[calc(100%-28px)] font-serif flex justify-center items-center"
  >
    {formatTimeForIST(getCurrentTimeInIST())} <!-- Use correct function names -->
  </time>
</Card>
