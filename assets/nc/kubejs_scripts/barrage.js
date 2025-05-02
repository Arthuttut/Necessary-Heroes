PalladiumEvents.registerAnimations(event => {
    event.register('nc:barrage', 10, builder => {
        const progress = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(),
            'nc:ben10/prototype/aliens/kineceleran',
            'barrage_animation',
            builder.getPartialTicks()
        );

        if (progress > 0.0) {
            const time = builder.getPlayer().tickCount + builder.getPartialTicks();
            const speed = 40; // Velocidade dos socos
            const amplitude = 0.3; // Distância segura para frente e trás

            const offset = Math.sin(time * speed) * amplitude;

            // Braço direito
            builder.get('right_arm')
                .setXRotDegrees(-90)
                .translateZ(offset)
                .translateY(-0.1); // Opcional: estabiliza altura do braço

            // Braço esquerdo
            builder.get('left_arm')
                .setXRotDegrees(-90)
                .translateZ(-offset)
                .translateY(-0.1); // Opcional: estabiliza altura do braço
        }
    });
});
