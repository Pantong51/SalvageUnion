
import {su} from "./config.js";
import {preloadHandlebarsTemplates} from "./templates.js";

import SUItemSheet from "./sheets/SUItemSheet.js";
import SUActorheet from "./sheets/SUActorSheet.js";

Hooks.once("init", async function() {
    console.log("Salvage Union | INIT");
    
    CONFIG.su = su;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("salvageunion", SUItemSheet, 
    {
        makeDefault: true,
        label: "SU.SheetClassItem"
    });
    
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("salvageunion", SUActorheet,
    {
        makeDefault: true,
        label: "SU.SheetClassActor"
    });

    Handlebars.registerHelper("times", function (n, content)
    {
        let result = "";
        for(let i = 0 ; i < n ; ++i)
        {
            result += content.fn(i);
        }

        return result;
    });
    
    return preloadHandlebarsTemplates();
});