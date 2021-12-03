export const preloadHandlebarsTemplates = async function()
{
    return loadTempaltes([
        "systems/SalvageUnion/templates/actor/parts/actor-features.html",
        "systems/SalvageUnion/templates/actor/parts/actor-items.html", 
    ]);
};