import {su} from "../config.js";

export default class SUItemSheet extends ItemSheet{
    get template() {
        return `/systems/salvageunion/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();

        data.config = CONFIG.su;

        return data;
    }
}