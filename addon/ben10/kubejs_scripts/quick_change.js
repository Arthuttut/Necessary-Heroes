StartupEvents.registry('palladium:abilities', (event) => {
    event.create('ben10:quick_change')
      .icon(palladium.createItemIcon('minecraft:diamond'))
      .tick((entity, entry, holder, enabled) => {
        entity.runCommandSilent('function ben10:omnitrix/prototype/untransform');
  
        let random = Math.floor(Math.random() * 10);
  
        if (random === 0) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/pyronite');
        } else if (random === 1) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/vulpimancer');
        } else if (random === 2) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/petrosapien');
        } else if (random === 3) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/kineceleran');
        } else if (random === 4) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/galvan');
        } else if (random === 5) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/tetramand');
        } else if (random === 6) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/lepidopteran');
        } else if (random === 7) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/piscciss_volann');
        } else if (random === 8) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/galvanic_mechamorph');
        } else if (random === 9) {
          entity.runCommandSilent('function ben10:omnitrix/prototype/ectonurite');
        }
      });
  });
  