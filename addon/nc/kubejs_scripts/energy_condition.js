(function() {
    // Carrega as classes necessárias do Palladium
    let CuriosTrinketsUtil = Java.loadClass('net.threetag.palladium.compat.curiostinkets.CuriosTrinketsUtil');
    let EnergyHelper = Java.loadClass('net.threetag.palladium.energy.EnergyHelper');

    // Evento de registro para criar uma nova condição personalizada
    StartupEvents.registry('palladium:condition_serializer', (event) => {
        // Define a nova condição com propriedades configuráveis
        event.create('nc:energy_condition')
            .addProperty('energy', 'integer', 10, 'Amount of energy to compare') // Define a quantidade mínima de energia necessária
            .addProperty('id', 'string', 'nc:arc_reactor', 'Item to look for in curios slot') // Define o ID do item que será procurado
            .addProperty('curios_slot', 'string', 'body', 'Curios slot id') // Define o slot de curios que será verificado
            .addProperty('trinket_slot', 'string', 'chest/cape', 'Trinket slot id') // Define o slot de trinket que será verificado

            // Função de teste que verifica se as condições são atendidas
            .test((entity, props) => {
                // Verifica se as propriedades necessárias estão presentes
                if (props.containsKey('id') && props.containsKey('energy') && props.containsKey('curios_slot')) {
                    // Define os valores das propriedades
                    let curiosSlot = props.get('curios_slot');
                    let trinketSlot = props.get('trinket_slot');
                    let requiredEnergy = props.get('energy');
                    let itemId = props.get('id');

                    // Obtém os itens do slot apropriado com base na plataforma (Forge ou outra)
                    let items = CuriosTrinketsUtil.getInstance().getItemsInSlot(entity, Platform.isForge() ? curiosSlot : trinketSlot);

                    // Itera sobre os itens encontrados no slot
                    for (let item of items) {
                        // Verifica se o item tem o ID especificado
                        if (item.id === itemId) {
                            // Obtém o holder de energia do item, se disponível
                            let holderWrapper = EnergyHelper.getFromItemStack(item);

                            // Se o holder de energia estiver presente, verifica a quantidade de energia
                            if (holderWrapper.isPresent()) {
                                let energyHolder = holderWrapper.get();

                                // Verifica se o item possui energia suficiente
                                if (energyHolder.getEnergyAmount() >= requiredEnergy) {
                                    return true; // Retorna verdadeiro se todas as condições forem atendidas
                                }
                            }
                        }
                    }
                }
                return false; // Retorna falso se as condições não forem atendidas
            });
    });
})();
