PalladiumEvents.registerAnimations((event) => {
    event.register('custom/shadow_choice', 10, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'custom:shadow', 'shadow_choice_animation', builder.getPartialTicks());
        if (builder.isFirstPerson()) {      
            builder.get('right_arm').setXRotDegrees(90).animate('InOutCubic', progress);
        } else {
            builder.get('right_arm').setXRotDegrees(90).animate('InOutCubic', progress);
        }
    });
});