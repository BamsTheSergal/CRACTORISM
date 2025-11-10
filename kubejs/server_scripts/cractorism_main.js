ServerEvents.recipes(event => {
    // Remove recipes
    event.remove({ id: 'garnished:crushing/crushed_salt' })
    event.remove({ id: 'tfmg:crushing/limestone' })
    event.remove({ id: 'additional_recipes:coppernuggetlimestone' })
    event.remove({ id: 'immersive_weathering:paper_from_birch_bark' })
    event.remove({ id: 'tfmg:crafting/kinetics/copper_spool' })
    event.remove({ id: 'tfmg:crafting/kinetics/aluminum_spool' })
    event.remove({ id: 'tfmg:crafting/kinetics/constantan_spool' })
    // Add recipes
    event.recipes.createCrushing([Item.of('tfmg:limesand'),Item.of('create:copper_nugget').withChance(0.25),Item.of('minecraft:sand').withChance(0.05),Item.of('garnished:crushed_salt').withChance(0.05)],'create:limestone').processingTime(250).id('bamsy:limesand_compat');
    event.shaped(Item.of('minecraft:paper', 3),['AA','A '],{A: '#immersive_weathering:bark'}).id('bamsy:immersive_paper_fix');
    event.shaped(Item.of('tfmg:copper_spool', {Amount:1000}), ['AAA', 'ABA', 'AAA'], { A: 'tfmg:copper_wire', B: 'tfmg:empty_spool' }).id('bamsy:tfmg_copper_spool_fix');
    event.shaped(Item.of('tfmg:aluminum_spool', {Amount:1000}), ['AAA', 'ABA', 'AAA'], { A: 'tfmg:aluminum_wire', B: 'tfmg:empty_spool' }).id('bamsy:tfmg_aluminum_spool_fix');
    event.shaped(Item.of('tfmg:constantan_spool', {Amount:1000}), ['AAA', 'ABA', 'AAA'], { A: 'tfmg:constantan_wire', B: 'tfmg:empty_spool' }).id('bamsy:tfmg_constantan_spool_fix');
})
