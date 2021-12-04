import {su} from "../config.js";

export default class SUItemSheet extends ItemSheet{

    static get defaultOptions(){
        return foundry.utils.mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["salvageunion", "sheet", "equipment"]
        });
    }

    get template() {
        return `/systems/salvageunion/templates/sheets/items/${this.item.data.type}-sheet.hbs`;
    }

    getData(){
        const data = super.getData();

        data.config = CONFIG.su;

        return data;
    }
}