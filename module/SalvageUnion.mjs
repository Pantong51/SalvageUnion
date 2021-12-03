//import document classes
import {SalvageUnionActor} from "./documents/actor.mjs";
//import {SalvageUnionItem} from "./documents/equipment.mjs";
//import sheet classes
import {SalvageUnionActorSheet} from "./sheets/actor-sheet.mjs";
//import {SalvageUnionItemSheet} from "./sheets/item-sheet.mjs";
//import helper.utility classes and constants
import {preloadHandlebarsTemplates} from "./helpers/templates.mjs";
import {SALVAGEUNION} from "./helpers/config.mjs";

Hooks.once("init", async function()
{
    game.SalvageUnion = 
    {
        SalvageUnionActor,
        //SalvageUnionItem
    };

    CONFIG.SALVAGEUNION = SALVAGEUNION;

    CONFIG.Actor.documentClass = SalvageUnionActor;
    //CONFIG.Item.documentClass = SalvageUnionItem;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("pilot", SalvageUnionActorSheet, {makeDefault: true});
    //Items.unregisterSheet("core", ItemSheet);
    //Items.registerSheet("salvageunion", SalvageUnionItemSheet);

    return preloadHandlebarsTemplates();
});

Hooks.once("ready", async function()
{
});