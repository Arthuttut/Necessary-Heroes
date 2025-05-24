ServerEvents.recipes(event => {
  event.remove({ output: 'palladium:lead_circuit' });
  event.remove({ output: 'palladium:quartz_circuit' });
  event.remove({ output: 'palladium:vibranium_circuit' });
  event.remove({ output: 'palladium:lead_flux_capacitor' });
  event.remove({ output: 'palladium:quartz_flux_capacitor' });
  event.remove({ output: 'palladium:vibranium_flux_capacitor' });

  event.shaped('palladium:lead_circuit', [
    'III',
    'RLR',
    'WWW'
  ], {
    'W': 'nc:wires/gold_wire',
    'R': 'minecraft:redstone',
    'L': 'nc:plates/lead_plate',
    'I': 'nc:plates/iron_plate'
  });
  event.shaped('palladium:quartz_circuit', [
    'PPP',
    'QLQ',
    'CCC'
  ], {
    'Q': 'nc:plates/quartz_plate',
    'L': 'palladium:lead_circuit',
    'C': 'nc:wires/copper_wire',
    'P': 'nc:plates/iron_plate'
  });
   event.shaped('palladium:vibranium_circuit', [
    'III',
    'PQP',
    'WWW'
  ], {
    'I': 'nc:plates/iron_plate',
    'Q': 'palladium:quartz_circuit',
    'W': 'nc:wires/diamond_wire',
    'P': 'nc:plates/vibranium_plate'
  });
  event.shaped('palladium:lead_flux_capacitor', [
   'RPR',
   'WCW',
   'PRP'
  ], {
    'R': 'palladium:redstone_flux_crystal',
    'C': 'palladium:lead_circuit',
    'W': 'nc:wires/gold_wire',
    'P': 'nc:plates/lead_plate'
  });
  event.shaped('palladium:quartz_flux_capacitor', [
   'RQR',
   'CLC',
   'QRQ'
  ], {
    'R': 'palladium:redstone_flux_crystal',
    'L': 'palladium:lead_flux_capacitor',
    'C': 'nc:wires/copper_wire',
    'Q': 'nc:plates/quartz_plate'
  });
  event.shaped('palladium:vibranium_flux_capacitor', [
   'RVR',
   'DQD',
   'VRV'
  ], {
    'R': 'palladium:redstone_flux_crystal',
    'V': 'nc:plates/vibranium_plate',
    'D': 'nc:wires/diamond_wire',
    'Q': 'palladium:quartz_flux_capacitor'
  });
});
