import SUItemSheet from "./modules/sheets/SUItemSheet.js";

Hooks.one("init", function()
{
    console.log("Salvage Union | INIT");
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("salvageunion", SUItemSheet, {makeDefault: true});
});