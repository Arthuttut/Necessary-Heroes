StartupEvents.registry('palladium:abilities', (event) => {
    event.create('nc:clone')
        .icon(palladium.createItemIcon('minecraft:bone'))
        .addProperty('wolf_name', 'string', 'Clone Name', 'Clone Name')
        .addProperty('wolf_tag', 'string', 'Clone Tag', 'Clone Tag')
        .addProperty('piglin_name', 'string', 'Clone Name', 'Clone Name')
        .addProperty('piglin_tag', 'string', 'Clone Tag', 'Clone Tag')
        .addProperty('superpower', 'string', 'namespace:power', 'namespace:power')
        .firstTick((entity, entry, holder) => {
            const wolfName = entry.getPropertyByName('wolf_name');
            const wolfTag = entry.getPropertyByName('wolf_tag');
            const piglinName = entry.getPropertyByName('piglin_name');
            const piglinTag = entry.getPropertyByName('piglin_tag');
            const superpower = entry.getPropertyByName('superpower');

            const playerPos = `${entity.x} ${entity.y} ${entity.z}`;

            // SUMMON WOLF
            entity.level.server.runCommandSilent(`summon minecraft:wolf ${playerPos} {CustomName:"[{\\"text\\":\\"${wolfName}\\"}]",Silent:1b,Tags:["${wolfTag}"],ActiveEffects:[{Id:14b,Amplifier:1b,Duration:20000000,ShowParticles:0b}]}`);

            // SCALE WOLF
            entity.level.server.runCommandSilent(`execute positioned ${playerPos} run scale set pehkui:hitbox_height 2 @e[tag=${wolfTag},limit=1,sort=nearest]`);

            // SUMMON PIGLIN
            entity.level.server.runCommandSilent(`summon minecraft:piglin ${playerPos} {NoAI:1b,Invulnerable:1b,IsImmuneToZombification:1b,Silent:1b,ArmorItems:[{},{},{},{}],Tags:["${piglinTag}"],CustomName:"[{\\"text\\":\\"${piglinName}\\"}]"}`);

            // SCALE PIGLIN
            entity.level.server.runCommandSilent(`execute positioned ${playerPos} run scale set pehkui:hitbox_height -0.5 @e[tag=${piglinTag},limit=1,sort=nearest]`);

            // GIVE SUPERPOWER TO PIGLIN
            entity.level.server.runCommandSilent(`execute positioned ${playerPos} run superpower add ${superpower} @e[type=minecraft:piglin,sort=nearest,limit=1,tag=${piglinTag}]`);

            // SET PIGLIN WALKING TARGET TO WOLF POSITION
            entity.level.server.runCommandSilent(`execute as @e[type=minecraft:piglin,tag=${piglinTag},limit=1,sort=nearest] at @s run execute as @e[type=minecraft:wolf,tag=${wolfTag},limit=1,sort=nearest] at @s run data modify entity @e[type=minecraft:piglin,tag=${piglinTag},limit=1,sort=nearest] Brain.memories.minecraft:walking_target.value set from entity @e[type=minecraft:wolf,tag=${wolfTag},limit=1,sort=nearest] Pos`);
        });
});
