StartupEvents.registry('palladium:abilities', event => {
  event.create('nc:store_armor')
    .icon(palladium.createItemIcon('minecraft:leather_chestplate'))
    .firstTick((entity, data, holder, level) => {
      if (!data.has('saved_armor')) {
        data.put('stored_armor', entity.getArmorItems());
        entity.setArmorItems([
          ItemStack.EMPTY,
          ItemStack.EMPTY,
          ItemStack.EMPTY,
          ItemStack.EMPTY
        ]);
        data.put('saved_armor', true);
      }
    })
    .lastTick((entity, data, holder, level) => {
      if (data.has('stored_armor')) {
        entity.setArmorItems(data.get('stored_armor'));
        data.remove('stored_armor');
        data.remove('saved_armor');
      }
    });
});
