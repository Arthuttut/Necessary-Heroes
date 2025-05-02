StartupEvents.registry('palladium:condition_serializer', (event) => {
    event.create('nc:damage_source')

            .addProperty("damage_type", "string", null, "The damage source you want to detect, list of possible damage source in mc : lightningBolt | fall | inFire | onFire | magic | indirectMagic | arrow | wither | mob | inWall | drown |")

            .test((entity, properties) => {
                    const damage_search = properties.get("damage_type");
                    const damage_source = entity.lastDamageSource;
                    if (damage_search.length == 0) return false;

                    if (!damage_source) return false;

                    console.error(damage_source);

                    const type_damage = damage_source.type().msgId();

                    console.error(type_damage);
                    console.error(type_damage == damage_search)

                    return type_damage == damage_search;

            });
});