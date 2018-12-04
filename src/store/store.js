import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        scrollDown: false,
        units: [
            {
                name: 'Archer',
                Cost: {
                    wood: 25,
                    gold: 45,
                    stone: 0,
                    food: 0,
                },
                HP: 30,
                Attack: 4,
                ArmorPierce: '0/0',
                Range: 4,
                goodAgainst: [ 'Pikeman', 'Monk', 'Hand Cannoneer', 'Demolition Ships', 'Fire Ships'],
                weakAgainst: ['Skimisher','Onager', 'Scorpion', 'Longbowman', 'War Wagon', 'Huskarls'],
                imageUrl: `/src/assets/unitsimages/Archer.png`
            },
            {

                name: 'Crossbowman',
                Cost: {
                    wood: 25,
                    gold: 45,
                    stone: 0,
                    food: 0,
                },
                HP: 35,
                Attack: 5,
                ArmorPierce: '0/0',
                Range: 5,
                goodAgainst: [ 'Pikemen', 'Monk', 'Hand Cannoneer', 'Demolition Ships', 'Fire Ships'],
                weakAgainst: ['Skirmisher','Onager', 'Scorpion', 'Longbowman', 'War Wagon', 'Huskarls'],
                imageUrl: `/src/assets/unitsimages/Archer.png`
            },
            {

                name: 'Arbalest',
                Cost: {
                    wood: 25,
                    gold: 45,
                    stone: 0,
                    food: 0,
                },
                HP: 40,
                Attack: 6,
                ArmorPierce: '0/0',
                Range: 5,
                goodAgainst: ['Crossbowman', 'Arbalest'],
                weakAgainst: ['Crossbowman', 'Arbalest'],
                imageUrl: `/src/assets/unitsimages/Archer.png`
            },
            {

                name: 'Skirmisher',
                Cost: {
                    wood: 35,
                    gold: 0,
                    stone: 0,
                    food: 25,
                },
                HP: 30,
                Attack: 2,
                ArmorPierce: '0/3',
                Range: 4,
                goodAgainst: ['Archer','Crossbowman', 'Arbalest', 'Cavalry Archer', 'Hand Canoneer'],
                weakAgainst: ['Pikeman', 'Swordsman, Knight'],
                imageUrl: `/src/assets/unitsimages/Skirmisher.png`
            },
            {

                name: 'Elite Skirmisher',
                Cost: {
                    wood: 35,
                    gold: 0,
                    stone: 0,
                    food: 25,
                },
                HP: 35,
                Attack: 3,
                ArmorPierce: '0/4',
                Range: 5,
                goodAgainst: ['Archer','Crossbowman', 'Arbalest', 'Cavalry Archer', 'Hand Canoneer'],
                weakAgainst: ['Pikeman', 'Swordsman, Knight'],
                imageUrl: `/src/assets/unitsimages/Skirmisher.png`
            },
            {

                name: 'Onager',
                Cost: {
                    wood: 35,
                    gold: 0,
                    stone: 0,
                    food: 25,
                },
                HP: 35,
                Attack: 3,
                ArmorPierce: '0/4',
                Range: 5,
                goodAgainst: ['Archer','Crossbowman', 'Arbalest', 'Cavalry Archer', 'Hand Canoneer'],
                weakAgainst: ['Pikeman', 'Swordsman, Knight'],
                imageUrl: `/src/assets/unitsimages/Onager.png`
            },
            {

                name: 'Scorpion',
                Cost: {
                    wood: 35,
                    gold: 0,
                    stone: 0,
                    food: 25,
                },
                HP: 35,
                Attack: 3,
                ArmorPierce: '0/4',
                Range: 5,
                goodAgainst: ['Archer','Crossbowman', 'Arbalest', 'Cavalry Archer', 'Hand Canoneer'],
                weakAgainst: ['Pikeman', 'Swordsman, Knight'],
                imageUrl: `/src/assets/unitsimages/Scorpion.png`
            },
            {

                name: 'Swordsman',
                Cost: {
                    wood: 35,
                    gold: 0,
                    stone: 0,
                    food: 25,
                },
                HP: 35,
                Attack: 3,
                ArmorPierce: '0/4',
                Range: 5,
                goodAgainst: ['Archer','Crossbowman', 'Arbalest', 'Cavalry Archer', 'Hand Canoneer'],
                weakAgainst: ['Pikeman', 'Swordsman, Knight'],
                imageUrl: `/src/assets/unitsimages/Swordsman.png`
            },
            {

                name: 'Pikeman',
                Cost: {
                    wood: 35,
                    gold: 0,
                    stone: 0,
                    food: 25,
                },
                HP: 35,
                Attack: 3,
                ArmorPierce: '0/4',
                Range: 5,
                goodAgainst: ['Archer','Crossbowman', 'Arbalest', 'Cavalry Archer', 'Hand Canoneer'],
                weakAgainst: ['Pikeman', 'Swordsman, Knight'],
                imageUrl: `/src/assets/unitsimages/Pikeman.png`
            },
            
            {

                name: 'Hand Cannoneer',
                Cost: {
                    wood: 0,
                    gold: 50,
                    stone: 0,
                    food: 45,
                },
                HP: 35,
                Attack: 17,
                ArmorPierce: '1/0',
                Range: 7,
                goodAgainst: ['Crossbowman', 'Arbalest'],
                weakAgainst: ['Crossbowman', 'Arbalest'],
                imageUrl: `/src/assets/unitsimages/HandCannoneer.png`
            },
            {

                name: 'Cavalry Archer',
                Cost: {
                    wood: 40,
                    gold: 60,
                    stone: 0,
                    food: 0,
                },
                HP: 50,
                Attack: 6,
                ArmorPierce: '0/0',
                Range: 4,
                goodAgainst: ['Crossbowman', 'Arbalest'],
                weakAgainst: ['Crossbowman', 'Arbalest'],
                imageUrl: `/src/assets/unitsimages/CavalryArcher.png`
            },
            {

                name: 'Knight',
                Cost: {
                    wood: 40,
                    gold: 60,
                    stone: 0,
                    food: 0,
                },
                HP: 50,
                Attack: 6,
                ArmorPierce: '0/0',
                Range: 4,
                goodAgainst: ['Crossbowman', 'Arbalest'],
                weakAgainst: ['Crossbowman', 'Arbalest'],
                imageUrl: `/src/assets/unitsimages/Knight.png`
            },
            {

                name: 'Heavy Cavalry Archer',
                Cost: {
                    wood: 40,
                    gold: 60,
                    stone: 0,
                    food: 0,
                },
                HP: 60,
                Attack: 7,
                ArmorPierce: '1/0',
                Range: 4,
                goodAgainst: ['Crossbowman', 'Arbalest'],
                weakAgainst: ['Crossbowman', 'Arbalest'],
                imageUrl: `/src/assets/unitsimages/Skirmisher.png`
            },
        ],
        foundUnit: '',
    },
    getters: {
        getGoodAgainst() {
            let goodAgainstUnits = store.state.foundUnit.goodAgainst.map(unitName => {
                return store.state.units.filter((unit) => {
                    return unit.name === unitName;
                })
            })
            return [].concat.apply([], goodAgainstUnits);
        },
        getWeakAgainst() {
            let weakAgainstUnits = store.state.foundUnit.weakAgainst.map(unitName => {
                return store.state.units.filter((unit) => {
                    return unit.name === unitName;
                })
            })
            return [].concat.apply([], weakAgainstUnits);
        }
    }
})

export default store