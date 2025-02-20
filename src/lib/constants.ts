---
import Card from ("./Card/index.astro");
import Button from ("./Button.astro");
import { LINKS } from ("../lib/constants"); // ✅ Ensure correct import
import { Icon } from ("astro-icon/components");
---

<Card class="md:col-span-3 md:row-span-4"> <!-- ✅ No colSpan prop -->
  <div class="flex w-full h-full">
    <div class="flex flex-col justify-between md:max-h-[300px] gap-4">
      <div class="flex flex-col h-full">
        <h6 class="text-sm font-light m-0 text-gray-500">Welcome</h6>
        <p class="m-0 font-light text-xl">
          Hi, I'm <b class="font-bold">Akash Raj</b>, a full-stack developer who focuses on building smooth and efficient applications with great user experiences.
          I'm also a video editor, creating engaging content through precise editing and storytelling!
        </p>
      </div>
      <div class="flex gap-4">
        <!-- GitHub Button -->
        <a href={LINKS.github} aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
          <Button aria-label="GitHub Profile">
            <Icon name="ri:github-fill" class="h-6" />
            <span class="sr-only">GitHub Profile</span>
          </Button>
        </a>

        <!-- LinkedIn Button -->
        <a href={LINKS.linkedin} aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
          <Button aria-label="LinkedIn Profile">
            <Icon name="ri:linkedin-box-fill" class="h-6" />
            <span class="sr-only">LinkedIn Profile</span>
          </Button>
        </a>
      </div>
    </div>
  </div>
</Card>
