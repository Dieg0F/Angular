
import {Spacecraft, Containership} from './base-ships'


class MillennumFalcon extends Spacecraft implements Containership{
  cargoContainers: number
  constructor()
  {
    super('hyperdrive')
    this.cargoContainers = 2
  }
  jumpIntoHyperSpace()
  {
    if(Math.random() > 0.5){
      super.jumpIntoHyperSpace()
    }else{
      console.log('Failed to jump into Hyperspace')
    }
  }
}

export {MillennumFalcon}
