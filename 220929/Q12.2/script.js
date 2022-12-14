// Instructions
// Here is a candyStore object:
  const candyStore = {
    candies: [
      {
        name: "mint gum",
        id: "as12f",
        price: 2,
        amount: 2
      },
      {
        name: "twix",
        id: "5hd7y",
        price: 5,
        amount: 4
      },
    ],
    cashRegister: 200
  }

  // 1. Implement the following getCandy function:
  // The function should return the candy element with
  // the specified id.
  function getCandy(candyStore, id){
    return candyStore.candies.find(candy => (candy.id === id));
}

console.log(getCandy(candyStore,"as12f"))
// Output: { name: 'mint gum', id: 'as12f', price: 2, amount: 2 }

// 2. Implement the following getPrice function:
//   The function should return the price (number) of the
// candy with the specified id.

  function getPrice(candyStore, id){
    let candyByID = candyStore.candies.find(candy => (candy.id===id))
    return candyByID.price;
}
console.log("Price is: " + getPrice(candyStore,"as12f"))
//Price is: 2

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy
// list in candyStore with a default amount of 1. The
// function will not return anything.
  function addCandy(candyStore, id, name, price){
    candyStore.candies.push({name: name, id: id, price:price, amount: 1})
}
addCandy(candyStore, "13579a", "Peanut Butter M&M's", 5.99)
console.log(candyStore.candies)
// 4. Implement the following buy function: The function
// should add the candy price to the cashRegister, and
// decrease the amount property of the relevant candy.

  function buy(candyStore, id){
  if (getCandy(candyStore, id).amount > 0 ) {
    // console.log((getCandy(candyStore, id)))
    // console.log(candyStore.cashRegister)
    getCandy(candyStore, id).amount -= 1
    candyStore.cashRegister += getCandy(candyStore, id).price
    // console.log((getCandy(candyStore, id)))
    // console.log(candyStore.cashRegister)
  }else{
    return false
  }
}

buy(candyStore, "5hd7y")
// output: (of console logs)
// { name: 'twix', id: '5hd7y', price: 5, amount: 4 }
// 200
// { name: 'twix', id: '5hd7y', price: 5, amount: 3 }
// 205
