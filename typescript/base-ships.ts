class Spacecraft{
  public propulsor: string
  constructor(propulsor : string)
  {
    this.propulsor = propulsor
  }
  jumpIntoHyperSpace(){
    console.log(`Entering into Hyper Space with ${this.propulsor}`)
  }
}

interface Containership{
  cargoContainers: number
}



export {Spacecraft, Containership}
