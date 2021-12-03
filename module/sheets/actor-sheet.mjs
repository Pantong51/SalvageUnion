export class SalvageUnionActorSheet extends ActorSheet
{
    static get defaultOptions()
    {
        return mergeObject(super.defaultOptions, {
            classes: ["salvageunion", "sheet", "actor"],
            template: "systems/salvageunion/templates/actor/actor-sheet.html",
            width: 600,
            height: 600,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "equipment"}]
        });
    }

    get template()
    {
        return `systems/salvageunion/templates/actor-${this.actor.data.type}-sheet.html`;
    }

    getData()
    {
        const context = super.getData();
        const actorData = context.actor.data;

        context.data = actorData.data;
        context.flags = actorData.flags;

        if(actorData.type == 'pilot')
        {
            this._preparePilotItems(context);
            this._preparePilotData(context);
        }
        else if( actorData.type == 'mech')
        {
            this._prepareMechItems(context);
            this._prepareMechData(context);
        }

        context.rollData = context.actor.getRollData();
        //context.effects = prepareActiveEffectCategories(this.actor.effects);
        
        return context;
    }

    _preparePilotData(context)
    {
        for (let [k, v] of Object.entries(context.data.pilotstats)) {
            v.label = game.i18n.localize(CONFIG.SALVAGEUNION.pilotstats[k]) ?? k;
        }
    }

    _prepareMechData(context)
    {
        for (let [k, v] of Object.entries(context.data.mechstats)) {
            v.label = game.i18n.localize(CONFIG.SALVAGEUNION.mechstats[k]) ?? k;
        }
    }

    _preparePilotItems(context)
    {
        const equipment = [];
        const abilities = [];
        for(let i of context.items)
        {
            i.img = i.img || DEFALUT_TOKEN;

            if(i.type === 'equipment')
            {
                equipment.push(i);
            }
            else if(i.type === 'ability')
            {
                abilities.push(i);
            }

        }
        context.equipment = equipment;
        context.abilities = abilities;
    }

    _prepareMechItems(context)
    {
        const systems = [];
        const modules = [];
        for(let i of context.items)
        {
            if(i.type === 'system')
            {
                systems.push(i);
            }
            else if(i.type === 'module')
            {
                modules.push(i);
            }
        }
        context.systems = systems;
        context.modules = modules;
    }

    activateListeners(html)
    {
        super.activateListeners(html);
        
        html.find('.item-edit').click(ev =>             
        {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.items.get(li.data("itemId"));
            item.sheet.render(true);
        });

        if(!this.isEditable) return;

        html.find('item-create').click(this._onItemCreate.bind(this));

        html.find('.item-delete').click(ev =>
        {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.items.get(li.data('.itemId'));
            item.delete();
            li.slideUp(200, ()=> this.render(false));
        });

        html.find('.effect-control').click(ev=>onManageActiveEffect(ev, this.actor));

        html.find('.rollable').click(this._onRoll.bind(this));

        if(this.actor.owner)
        {
            let handler = ev => this._onDragStart(ev);
            html.find('li.item').each((i, li) => 
            {
                li.setAttribute("draggable", true);
                li.addEventListener("dragstart", handler, false);
            });
        }
    }

    async _onItemCreate(event)
    {
        event.preventDefault();
        const header = event.currentTarget;
        const type = header.dataset.type;
        const data = duplicate(header.dataset);
        const name = `New ${type.capitalize()}`;
        const itemData = {
            name: name,
            type: type,
            data: data
        };

        delete itemData.data["type"];

        return await Item.create(itemData, {parent: this.actor});
    }
}