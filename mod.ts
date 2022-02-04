import * as log from "https://deno.land/std/log/mod.ts";

// define a Map
interface Launch {
    flightNumber: number;
    mission: string;
}
const launches = new Map<number, Launch>();

async function downloadLaunchData() {
    log.info("Downloading launch data...");
    log.warning("THIS IS A WARNING");
    const response = await fetch("https://api.spacexdata.com/v3/launches", {
        method: "GET"
    });
    if (!response.ok) {
        log.warning("Problem downloading launch data.");
        throw new Error("Launch data download failed.");
    }
    const launchData = await response.json();
    for (const launch of launchData) {
        const flightData = {
            flightNumber: launch["flight_number"],
            mission: launch["mission_name"]
        };
        launches.set(flightData.flightNumber, flightData);
        log.info(JSON.stringify(flightData));
    }
}

downloadLaunchData();
// run with
// deno run --allow-net=api.spacexdata.com mod.ts

// reload imports with flag --reload
// deno run --reload --allow-net=api.spacexdata.com mod.ts
