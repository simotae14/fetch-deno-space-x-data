import * as log from "https://deno.land/std/log/mod.ts";
// import lodash
import * as _ from "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/lodash.js";

// define a Map
interface Launch {
    flightNumber: number;
    mission: string;
    rocket: string;
    customers: Array<string>;
}
const launches = new Map<number, Launch>();

export async function downloadLaunchData() {
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
        const payloads = launch["rocket"]["second_stage"]["payloads"];
        const customers = _.flatMap(payloads, (payload : any) => payload["customers"]);
        const flightData = {
            flightNumber: launch["flight_number"],
            mission: launch["mission_name"],
            rocket: launch["rocket"]["rocket_name"],
            customers
        };
        launches.set(flightData.flightNumber, flightData);
        log.info(JSON.stringify(flightData));
    }
}

// execute this loggin even when importing the previous function
if (import.meta.main) {
    downloadLaunchData();
    log.info(JSON.stringify(import.meta));
    // retrieve number elements
    log.info(`Downloaded data for ${launches.size} SpaceX launches.`);
}

// run with
// deno run --allow-net=api.spacexdata.com mod.ts

// reload imports with flag --reload
// deno run --reload --allow-net=api.spacexdata.com mod.ts
