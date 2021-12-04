
import {su} from "./config.js";
import {preloadHandlebarsTemplates} from "./templates.js";

import SUItemSheet from "./sheets/SUItemSheet.js";

Hooks.once("init", async function() {
    console.log("Salvage Union | INIT");
    
    CONFIG.su = su;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("salvageunion", SUItemSheet, 
    {
        makeDefault: true,
        label: "SU.SheetClassItem"
    });

    return preloadHandlebarsTemplates();
});