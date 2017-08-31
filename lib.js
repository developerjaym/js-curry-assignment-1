'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings  =>
    carts => {
      //go through each cart
        //go through each item in the cart
          //get the listing's price and add it to a running total
      return carts.reduce(//turns my carts array into an array of {customer, total} (this is the desired output)
        //callback function
        (arrayToReturn, currentCart) => //currentElement is a cart
        {
          const lovelyTotal = currentCart.items.reduce(//this should return a lovely total of everything in the cart
            (runningTotal, currentItem) =>//cur will be an item from the currentElement cart, prev will be the running total
            {
              //now I need to go through each listing and add its price to my total
                listings.reduce//should return false if the item is not there, otherwise it just runs through and does some totalling
                (//this reduce function doesn't actually return anything
                  (whetherFailed, currentListing) =>//c is a listing (name, price)
                  {
                    runningTotal = runningTotal + listedPrice(currentListing)(currentItem)//listedPrice(listing)(item) returns the price of that item
                  },
                  false//start as false, if it's not in there, it will return false (this should not happen)
                )
                return runningTotal;//the running total
              }
              ,0//start the running total at 0
          )
          //get name
          arrayToReturn.push({customer: currentCart.customer, total: lovelyTotal})
          return arrayToReturn
        }
        , []//initial value
      )    
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
