(function(){
    let CuriosTrinketsUtil = Java.loadClass('net.threetag.palladium.compat.curiostinkets.CuriosTrinketsUtil');
    let EnergyHelper = Java.loadClass('net.threetag.palladium.energy.EnergyHelper');
    
    StartupEvents.registry('palladium:abilities', (event) => {

        event.create('nc:drain_per_tick')
        .icon(palladium.createItemIcon('palladium:vibranium_circuit'))

        .addProperty('energy', 'integer', 10, 'Amount of energy to drain per tick')
        .addProperty('id', 'string', "nc:reactor", 'Item to look for in curios slot')
        .addProperty('curios_slot', 'string', "body", 'curios slot id')


        .tick((entity, entry, holder, enabled) => {
            if (!enabled) {return}
            const energyamnt = entry.getPropertyByName('energy');
            const id = entry.getPropertyByName('id');
            const curios_slot = entry.getPropertyByName('curios_slot');
            
            const items = CuriosTrinketsUtil.getInstance().getItemsInSlot(entity, Platform.isForge() ? curios_slot : 'chest/cape');
                
                
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                
                if (item && !item.isEmpty() && item.id === id) {
                    //Utils.server.tell(item.id)

                    let holderWrapper = EnergyHelper.getFromItemStack(item)

                    if (holderWrapper.isPresent()) {
                        let energyHolder = holderWrapper.get()

                        energyHolder.withdrawEnergy(energyamnt, false);
                    }

                }
            }
        })
    });
})()