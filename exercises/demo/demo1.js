class Pet {
    constructor(props) {
        this.props = props;
    }
    getName() {
        return this.props.name;
    }
    getSpecies() {
        return this.props.species;
    }
    getSpeech() {
        return "";
    }
}

class Cat  extends Pet {
    constructor(props){
        super(props);
        this.props.species = "cat"
    }
}
class Dog extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "dog";

    }
}
    function sayName(pet) {
        console.log('My name is ${pet.getName()}, and I am a ${pet.getSpecies}')
    }
