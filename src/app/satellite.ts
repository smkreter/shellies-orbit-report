export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;



 //here is the first way I had this: constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {   
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        name = this.name;
        type = this.type;
        launchDate = this.launchDate
        orbitType = this.orbitType;
        operational = this.operational;
    }

}

