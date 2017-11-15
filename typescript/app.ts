
import {Spacecraft, Containership} from './base-ships'
import {MillennumFalcon} from './starfighters'

import * as _ from 'lodash'
console.log(_.pad("typescript exemples",  40, "="))


let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

let falcon = new MillennumFalcon()
falcon.jumpIntoHyperSpace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers >= 2
console.log(`Is MillennumFalcon good for the job? ${goodForTheJob(falcon)? 'yes': 'no'}`)
