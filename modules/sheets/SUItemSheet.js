export default class SUItemSheet extends ItemSheet{
    get template() {
        return `../../systems/salvageunion/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}