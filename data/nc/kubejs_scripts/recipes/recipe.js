ServerEvents.recipes(event => {
    // Iron Plate
    event.shaped('nc:plates/iron_plate', [
        '#i'
    ], {
        '#': 'nc:hammer',
        'i': 'minecraft:iron_ingot'
    }).damageIngredient('nc:hammer', 5);

    // Iron Wire
    event.shaped(Item.of('nc:wires/iron_wire', 3), [
        '#i'
    ], {
        '#': 'nc:wire_cutter',
        'i': 'nc:plates/iron_plate'
    }).damageIngredient('nc:wire_cutter', 5);

    // Gold Plate
    event.shaped('nc:plates/gold_plate', [
        '#i'
    ], {
        '#': 'nc:hammer',
        'i': 'minecraft:gold_ingot'
    }).damageIngredient('nc:hammer', 5);

    // Gold Wire
    event.shaped(Item.of('nc:wires/gold_wire', 3), [
        '#i'
    ], {
        '#': 'nc:wire_cutter',
        'i': 'nc:plates/gold_plate'
    }).damageIngredient('nc:wire_cutter', 5);

    // Copper Plate
    event.shaped('nc:plates/copper_plate', [
        '#i'
    ], {
        '#': 'nc:hammer',
        'i': 'minecraft:copper_ingot'
    }).damageIngredient('nc:hammer', 5);

    // Copper Wire
    event.shaped(Item.of('nc:wires/copper_wire', 3), [
        '#i'
    ], {
        '#': 'nc:wire_cutter',
        'i': 'nc:plates/copper_plate'
    }).damageIngredient('nc:wire_cutter', 5);

    // Tin Plate
    event.shaped(Item.of('nc:plates/tin_plate'), [
        '#i'
    ], {
        '#': 'nc:hammer',
        'i': 'nc:ingots/tin_ingot'
    }).damageIngredient('nc:wire_cutter', 5);

        // Tin Wire
    event.shaped(Item.of('nc:wires/tin_wire', 3), [
        '#i'
    ], {
        '#': 'nc:wire_cutter',
        'i': 'nc:plates/tin_plate'
    }).damageIngredient('nc:wire_cutter', 5);

    // Coal Dust
        event.shaped(Item.of('nc:dust/coal_dust', 3), [
        '#i'
    ], {
        '#': 'nc:hammer',
        'i': 'minecraft:coal'
    }).damageIngredient('nc:hammer', 5);
});
