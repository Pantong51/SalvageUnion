import {su} from "../config.js";

export default class SUActorheet extends ActorSheet{
    get template() {
        return `/systems/salvageunion/templates/sheets/actors/${this.actor.data.type}-sheet.hbs`;
    }

    getData(){
        const data = super.getData();

        data.config = CONFIG.su;

        return data;
    }
}