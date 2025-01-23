describe('Inherintence', () =>{
    // inheritance
    class Employee {
        name: string
        id: number

        constructor(name: string, id: number) {
            this.name = name
            this.id = id
        }
    }

    class Manager extends Employee {

    }

    class Staff extends Manager {
        division: string
        constructor(name : string, id: number, division : string) {
            super('iyan', 12)
        }
    }

    it ('should be have inheritce', () => {
        const employee = new Employee ('John', 12)
        const staff = new Staff ('Daruks', 1, 'IT')
        console.info(employee)
        console.info(staff)
    })

    // interface inheritace 
    interface brain {
        nural: string
    }

    interface brain2 {
        sayHello(name: string)
    }

    class Agents implements brain, brain2 {
        nural: string

        constructor(nural: string){
            this.nural = nural
        }

        sayHello(name: string): void{
            console.info(`Hello ${name}, my name ${this.nural}`)
        }
    }
    it ('should be a interface inheritance', () => {
        const agent = new Agents('Iyan')
            agent.sayHello('linda')
    }
)
    })




