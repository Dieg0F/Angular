
import {MenuItem} from '../menu-item/menu-item.model'
import {CartItem} from './CartItem.model'

export class ShoppingCartService{

  items: CartItem[] = []

  clear()
  {
    this.items = []
  }

  addItem(item: MenuItem){
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

    if(foundItem){
      foundItem.quantity = foundItem.quantity + 1
    }
    else{
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

  removeQuantity(item: MenuItem){
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

    if(foundItem){
      foundItem.quantity = foundItem.quantity - 1
      if(foundItem.quantity === 0){
        this.removeItem(foundItem)
      }
    }
    else{
      this.items.push(new CartItem(item))
    }


  }

  total(): number{
    return this.items
    .map(item => item.value())
    .reduce((prev, value) => prev + value, 0)
  }

}
