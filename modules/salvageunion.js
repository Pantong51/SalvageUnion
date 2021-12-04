import SUItemSheet from "./sheets/SUItemSheet.js";

Hooks.once("init", async function() {
    console.log("Salvage Union | INIT");
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("salvageunion", SUItemSheet, 
    {
        makeDefault: true,
         label: "SU.SheetClassItem"
    });
});