ItemEvents.rightClicked(event => {
    const player = event.getPlayer();
    const mainHand = player.getMainHandItem();
    const offHand = player.getOffHandItem();

    // Verifica se algum dos dois itens é o protótipo
    const isPrototypeMain = mainHand.getId() === 'ben10:prototype';
    const isPrototypeOff = offHand.getId() === 'ben10:prototype';

    if (isPrototypeMain || isPrototypeOff) {
        if (
            !palladium.superpowers.hasSuperpower(player, 'ben10:prototype/prototype') &&
            !palladium.superpowers.hasSuperpower(player, 'ben10:recalibrated/recalibrated')
        ) {
            player.runCommandSilent('superpower add ben10:prototype/prototype @p');
            player.runCommandSilent('scoreboard objectives add omnitrix_timer dummy');
            player.runCommandSilent('scoreboard players set @p omnitrix_timer 6000');
            player.runCommandSilent('playsound ben10:prototype.prime player @p');

            // Remove o item da mão correta
            if (isPrototypeMain) {
                player.getInventory().removeItem(mainHand);
            } else {
                player.getInventory().removeItem(offHand);
            }
        }
    }
});
