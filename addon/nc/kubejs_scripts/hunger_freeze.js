StartupEvents.registry('palladium:abilities', event => {
    event.create('nc:hunger_freeze')
        .tick((player, data) => {
            player.foodData.setExhaustion(0);
        });
});
