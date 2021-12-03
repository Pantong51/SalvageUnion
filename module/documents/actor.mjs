export class SalvageUnionActor extends Actor 
{
    prepareData()
    {
        super.prepareData();
    }

    prepareBaseData()
    {

    }

    prepareDerivedData()
    {
        const actorData = this.data;
        const flags = actorData.flags.salvageUnion || {};

        this._preparePilotData(actorData);
        this._prepareMechData(actorData);
    }

    _preparePilotData(actorData)
    {
        if(actorData.type !== 'pilot') return;
    }

    _prepareMechData(actorData)
    {
        if(actorData.type !== 'mech') return;
    }

    getRollData()
    {
        const data = super.getRollData();
        this._getPilotRollData(data);
        this._getMechRollData(data);
    }

    _getPilotRollData(data)
    {
        if(actorData.type !== 'pilot') return;

        if(data.Pilot)
        {
            for(let [key,value] of Object.entries(data.pilotstats))
            {
                data[key] = foundry.utils.deepClone(value);
            }
        }
    }

    _getMechRollData(data)
    {
        if(actorData.type !== 'mech') return;
        
        if(data.Mech)
        {
            for(let [key,value] of Object.entries(data.mechstats))
            {
                data[key] = foundry.utils.deepClone(value);
            }
        }
    }
}