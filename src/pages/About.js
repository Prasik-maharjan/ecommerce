import { Ecomus } from "../sections/About/Ecomus"
import { Gadgets } from "../sections/About/Gadgets"
import { Mission } from "../sections/About/Mission"
import { Quality } from "../sections/About/Quality"
import { Customer } from "../sections/About/Customer"
import { Tech } from "../sections/About/Tech"

export function About(){
    return(
        <div>
        <div >
            <Gadgets/>
        </div>
        <div className="px-7  sm:px-10  md:px-16">
            <Ecomus/>
            <Mission/>
            <Quality/>
            <Customer/>
            <div><Tech/></div>
        </div>
        </div>
    )
}