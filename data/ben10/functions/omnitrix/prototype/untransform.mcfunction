superpower remove ben10:prototype/aliens/pyronite
superpower remove ben10:prototype/aliens/vulpimancer
superpower remove ben10:prototype/aliens/petrosapien
superpower remove ben10:prototype/aliens/kineceleran
superpower remove ben10:prototype/aliens/galvan
superpower remove ben10:prototype/aliens/tetramand
superpower remove ben10:prototype/aliens/lepidopterran
superpower remove ben10:prototype/aliens/piscciss_volann
superpower remove ben10:prototype/aliens/galvanic_mechamorph
superpower remove ben10:prototype/aliens/ectonurite
superpower remove ben10:prototype/aliens/arburian_pelarota
superpower remove ben10:prototype/aliens/florauna
superpower remove ben10:prototype/aliens/loboan
superpower remove ben10:prototype/aliens/thep_khufan
superpower remove ben10:prototype/aliens/transylian
superpower remove ben10:prototype/aliens/gourmand
superpower remove ben10:prototype/aliens/splixson
superpower remove ben10:prototype/aliens/opticoid
superpower remove ben10:prototype/aliens/to_kustar
superpower remove ben10:prototype/aliens/polar_manzardill
superpower remove ben10:prototype/aliens/conductoid
superpower remove ben10:prototype/aliens/nosedeenian
superpower remove ben10:prototype/aliens/sphoeroid
scoreboard players reset @s kineceleran_speed
tag @s remove transformed
playsound ben10:prototype.transform player @s
execute as @s if score @s omnitrix_timer matches 0 run execute as @s run particle ben10:red_glitter ~ ~1 ~ 0.5 0.5 0.5 0 250 force
execute as @s if entity @s[tag=master_control] run execute as @s run particle ben10:green_glitter ~ ~1 ~ 0.5 0.5 0.5 0 250 force