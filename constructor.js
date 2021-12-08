function Potions (effect, grade) {
  this.effect = effect
  this.grade = grade
}

function Weapons (type, handed, magical){
  this.type = type
  this.handed = handed
  this.magical = magical
}

const lessHealth = new Potions('Healing', 'Lesser')
const greatHealth = new Potions('Healing', 'Greater')
const lessMana = new Potions('Mana', 'Lesser')
const greatMana = new Potions('Mana', 'Greater')

const gAxe = new Weapons('Greataxe', '2-handed', 'Fire Magic')
const gSword = new Weapons('Greatsword', '2-handed', 'Frost Magic')
const mace = new Weapons('Mace', '1-handed', 'Non-Magic')
const warHammer = new Weapons('Warhammer', '2-handed', 'Non-Magic')

console.log(lessHealth)
console.log(greatHealth)
console.log(lessMana)
console.log(greatMana)

console.log(gAxe)
console.log(gSword)
console.log(mace)
console.log(warHammer)