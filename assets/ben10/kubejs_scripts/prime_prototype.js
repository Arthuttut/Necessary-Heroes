PalladiumEvents.registerAnimations((event) => {
    event.register('ben10:prime_prototype', 10, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'ben10:prototype/prototype', 'prime_animation', builder.getPartialTicks());
        if (builder.isFirstPerson()) {
            builder.get('left_arm').setXRotDegrees(-60).setYRotDegrees(30).setZRotDegrees(10).setX(7).setY(0).setZ(3).animate('InOutBack', progress);builder.get('right_arm').setXRotDegrees(-75).setYRotDegrees(-25).setZRotDegrees(-30).setX(-8).setY(-3).setZ(0).animate('InOutBack', progress);
        } else {
            builder.get('right_arm').setXRotDegrees(-90).animate('InOutCubic', progress);
            builder.get('right_arm').setYRotDegrees(-40).animate('InOutCubic', progress);
            builder.get('left_arm').setXRotDegrees(-90).animate('InOutCubic', progress);
            builder.get('left_arm').setZRotDegrees(-40).animate('InOutCubic', progress);
            builder.get('left_arm').setYRotDegrees(50).animate('InOutCubic', progress);
        }
        if (abilityUtil.isEnabled(builder.getPlayer(), 'ben10:prototype/prototype', 'dial_cycle_animation')) {
            if (!builder.isFirstPerson()) {
                builder.get('right_arm')
            }
            else {
                builder.get('right_arm')
            }
        }
    });
});