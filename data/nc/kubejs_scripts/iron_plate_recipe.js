ServerEvents.recipes(event => {
    event.shaped('nc:plates/iron_plate', [
        '#i'
    ], {
        '#': Item.of('nc:hammer'),
        'i': 'minecraft:iron_ingot'
    }).damageIngredient('#');
});
