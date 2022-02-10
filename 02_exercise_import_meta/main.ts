import { fetchGitHubDescription } from "./mod.ts";

console.log(await fetchGitHubDescription("microsoft"));

// what's happen running
// deno run --allow-net main.ts

// it will log
// GitHub Fetcher 1.0
// Open source projects and samples from Microsoft
