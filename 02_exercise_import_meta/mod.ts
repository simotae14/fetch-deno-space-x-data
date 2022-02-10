export async function fetchGitHubDescription(name : string) {
  const response = await fetch("https://api.github.com/orgs/" + name);
  const body = await response.json();
  return body.description;
}

console.log("GitHub Fetcher 1.0");
if (import.meta.main) {
  console.log("Welcome to GitHub Fetcher");
  console.log(await fetchGitHubDescription("google"));
}

// what's happen running
// deno run --allow-net mod.ts

// it will log
// GitHub Fetcher 1.0
// Welcome to GitHub Fetcher
// Google ❤️ Open Source
