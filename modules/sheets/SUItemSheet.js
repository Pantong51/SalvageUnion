export default class SUItemSheet extends ItemSheet{
    get template()
    {
        return `systems/salvageunion/tempaltes/sheets/${this.item.data.data}-sheet.html`;
    }
}