describe('Class', () => {
        class Person {

        }
        class Weapon {

        }

        const person: Person = new Person();
        const weapon: Weapon = new Weapon();

    it('should be a class with constructor', function () {
        class Person {
            constructor(){
                console.info("create ambatukam")
            }
        }
        new Person();
    })

    it('should be a class with attributes', function(){
        class Person{
            name: string
            age: number
            id?: string
            constructor(name: string, age: number){
                this.name = name
                this.age = age
            }
        }
        
        class Person_class {
            name: string 
            age: number
            rank: string = "Private class" //default type
            id: string;
            constructor(name_: string, age_: number, rank_: string = "Private class", id_: string ){
                        this.name = name_
                        this.age = age_
                        this.rank = rank_ 
                        this.id = id_
            }

        }
        const new_person = new Person('Iyan', 23)
        const expertise_person = new Person_class("Iyan", 18, "Private class", '234')
        new_person.id = '123'
        console.info(new_person)
        console.info(expertise_person)
        
    })

})