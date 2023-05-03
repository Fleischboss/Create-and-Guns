ServerEvents.recipes(event => {
	// Change recipes here
	event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'}),
	event.remove({id: 'alexs_mobs:transmutation_table'}),
	event.remove({id: 'ars_nouveau:warp_scroll'}),
	event.remove({id: 'ars_nouveau:stable_warp_scroll'}),
	event.remove({id: 'immersiveengineering:crafting/storage_steel_to_ingot_steel'}),
	event.remove({id: 'immersiveengineering:crafting/plate_copper_hammering'}),
	event.remove({id: 'immersiveengineering:crafting/plate_iron_hammering'}),
	event.custom({
		"type": "minecraft:stonecutting",
		"ingredient": {
		  "tag": "forge:storage_blocks/steel"
		},
		"result": "createindustry:drill_head",
		"count": 1
	  })
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
     event.get('forge:plates/steel').add('createindustry:heavy_plate'),

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	event.get('forge:ingots/steel').remove('immersiveengineering:ingot_steel'),
	event.get('forge:ingots/steel').remove('ad_astra:steel_ingot')
	event.get('forge:ingots/steel').remove('createindustry:steel_ingot')
	event.get('forge:plates/steel').remove('immersiveengineering:plate_steel'),
	event.get('forge:plates/steel').remove('ad_astra:steel_plate')
	event.get('forge:plates/copper').remove('immersiveengineering:plate_copper'),
	event.get('forge:plates/iron').remove('immersiveengineering:plate_iron'),
	event.get('forge:plates/iron').remove('ad_astra:iron_plate')
	
})

ServerEvents.tags('fluid', event => { 
	event.get('forge:ethanol').add('createaddition:bioethanol')


})