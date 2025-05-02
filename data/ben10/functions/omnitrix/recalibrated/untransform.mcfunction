superpower remove nc:ben10/recalibrated/aliens/methanosian
superpower remove nc:ben10/recalibrated/aliens/sonorosian
superpower remove nc:ben10/recalibrated/aliens/vaxasaurian
superpower remove nc:ben10/recalibrated/aliens/aerophibian
superpower remove nc:ben10/recalibrated/aliens/necrofriggian
superpower remove nc:ben10/recalibrated/aliens/crystalsapien
scoreboard players reset @s absorbed_energy
superpower remove nc:ben10/recalibrated/aliens/cerebrocrustacean
superpower remove nc:ben10/recalibrated/aliens/arachnichimp
superpower remove nc:ben10/recalibrated/aliens/polymorph
superpower remove nc:ben10/recalibrated/aliens/celestialsapien
tag @s remove transformed
playsound nc:recalibrated.destransform player @s
execute as @s if score @s omnitrix_timer matches 0 run execute as @s run particle nc:red_glitter ~ ~1 ~ 0.5 0.5 0.5 0 250 force
execute as @s if entity @s[tag=master_control] run particle nc:green_glitter ~ ~1 ~ 0.5 0.5 0.5 0 250 force