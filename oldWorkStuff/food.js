const food = (wetDry, brand, flavor, dietaryType, animalType) => ({
  wetDry, brand, flavor, dietaryType, animalType,
  printInfo() {
    console.log(
      ${ this.animalType } food
      ---------------------------
    Diet: ${ this.dietaryType }
      Brand: ${ this.brand }
      Type: ${ this.wetDry }
      Flavor: ${ this.flavor }
    )
  }
})

const toy = (animalType, size, itemName, color, shape, material) => ({
  animalType, size, itemName, color, shape, material,
  printInfo() {
    console.log(

      ${ itemName } for ${ animalType }
      ---------------------------
      Size: ${ this.size }
    Color: ${ this.color }
    Shape: ${ this.shape }
    Material: ${ this.material }
    )
  }
})

const food1 = food("dry", "Purina One", "chicken", "puppy", "dog")

const toy1 = toy("cat", "small", "mouse-on-a-stick", "red", "mouse", "cloth with catnip")

// console.log(food1)
// console.log(toy1)

food1.printInfo()
toy1.printInfo()