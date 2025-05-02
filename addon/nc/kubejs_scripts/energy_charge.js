// Registro de habilidades customizadas no Palladium
StartupEvents.registry('palladium:abilities', (event) => {
    // Criação da habilidade com um nome único
    event.create('nc:energy_charge')
        .icon(palladium.createItemIcon('palladium:vibranium_circuit')) // Define o ícone da habilidade
        .tick((ability, player) => {
            // Solicita ao jogador a quantidade de energia e o slot
            player.tell("Digite a quantidade de energia para carregar:");
            player.input((energyToAdd) => {
                player.tell("Digite o slot do curios (ex: curios:body):");
                player.input((curiosSlot) => {
                    const maxEnergy = 100000; // Energia máxima que o item pode armazenar

                    // Obtém o componente curios do jogador
                    const curiosHandler = player.getComponent('curios:curios');

                    // Verifica se o componente curios está disponível e se o slot específico existe
                    if (curiosHandler && curiosHandler.getCurios().hasSlot(curiosSlot)) {
                        // Obtém o item no slot específico do curios
                        let curiosItem = curiosHandler.getCurios().getCurio(curiosSlot);

                        // Verifica se o item existe e se suporta a capacidade de energia
                        if (curiosItem && curiosItem.hasEnergyCapability()) {
                            // Obtém a quantidade atual de energia do item
                            let currentEnergy = curiosItem.getEnergyStored();

                            // Calcula a nova quantidade de energia
                            let newEnergy = Math.min(currentEnergy + parseInt(energyToAdd), maxEnergy);

                            // Define o novo valor de energia no item
                            curiosItem.setEnergyStored(newEnergy);

                            // Notifica o jogador sobre a carga do item (opcional)
                            player.tell(`Carregou ${curiosSlot} com ${energyToAdd} RF. Nova energia: ${newEnergy} RF.`);
                        } else {
                            // Mensagem de erro se o item não suportar RF
                            player.tell(`Nenhum item com suporte a RF encontrado no slot: ${curiosSlot}.`);
                        }
                    } else {
                        // Mensagem de erro se o slot do curios não estiver presente
                        player.tell(`Slot curios ${curiosSlot} não encontrado.`);
                    }
                });
            });
        });
});
