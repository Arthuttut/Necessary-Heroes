execute as @p at @s run particle minecraft:smoke ~ ~1 ~ 2 2 2 0.01 200 force @s
execute as @p at @s run fill ~-5 ~-5 ~-5 ~5 ~5 ~5 air replace fire
execute at @p run playsound minecraft:entity.generic.extinguish_fire master @p ~ ~ ~ 1 1 1