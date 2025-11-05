ServerEvents.recipes(event => {
    // Remove recipes
    event.remove({ id: 'garnished:crushing/crushed_salt' })
    event.remove({ id: 'tfmg:crushing/limestone' })
    event.remove({ id: 'additional_recipes:coppernuggetlimestone' })
    event.remove({ id: 'immersive_weathering:paper_from_birch_bark' })
    event.recipes.createCrushing(
        [
            Item.of('tfmg:limesand'),
            Item.of('create:copper_nugget').withChance(0.25),
            Item.of('minecraft:sand').withChance(0.05),
            Item.of('garnished:crushed_salt').withChance(0.05)
        ],
        'create:limestone'
    ).processingTime(250).id('bamsy:limesand_compat');
    event.shaped(
            Item.of('minecraft:paper', 3),
            [
            'AA',
            'A '
            ],
        {
            A: '#immersive_weathering:bark'
        }
    ).id('bamsy:immersive_paper_fix');
})
