function convertTagToPowerID(tag) {
  const firstDot = tag.indexOf('.');
  if (firstDot === -1) return tag;

  const namespace = tag.substring(0, firstDot);
  const rest = tag.substring(firstDot + 1).replace(/\./g, '/');
  return `${namespace}:${rest}`;
}

function convertPowerIDToTag(powerId) {
  const firstColon = powerId.indexOf(':');
  if (firstColon === -1) return powerId;

  const namespace = powerId.substring(0, firstColon);
  const rest = powerId.substring(firstColon + 1).replace(/\//g, '.');
  return `${namespace}.${rest}`;
}

ItemEvents.rightClicked('nc:syringe', event => {
  const player = event.getPlayer();
  const hand = event.hand;
  const itemStack = player.getItemInHand(hand);

  if (player.level.isClientSide()) return;

  const nbt = itemStack.getOrCreateTag();

  if (nbt.contains("StoredPower")) {
    const stored = nbt.getString("StoredPower");
    const powerId = convertTagToPowerID(stored);

    player.tell(`§aPoder restaurado: §f${powerId}`);

    player.server.runCommandSilent(`superpower add ${powerId} @p`);

    nbt.remove("StoredPower");
    itemStack.setNbt(nbt);

  } else {
    const powers = palladium.powers.getPowerIds(player) ?? [];
    if (powers.length === 0) {
      player.tell("§cNenhum poder ativo.");
      return;
    }

    const powerId = String(powers[0]);
    const tagValue = convertPowerIDToTag(powerId);

    nbt.putString("StoredPower", tagValue);
    itemStack.setNbt(nbt);

    player.tell(`§aPoder salvo como: §f${tagValue}`);

    palladium.superpowers.removeSuperpower(player, new ResourceLocation(powerId));
    player.tell("§ePoder removido.");
  }
});
