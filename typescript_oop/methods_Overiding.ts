describe('Methods Overiding', () =>{
    class Employee {
        name: string;
        id: number;

        constructor(name: string , id: number) {
            this.name = name;
            this.id = id;
        }

        sayhello(name: string): void{
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name} you're my wife`);
        }
    }
    // use super for call
    class Ceo extends Employee {
        sayHello(name: string, id: number): void {
            super.sayhello(name)
            console.info('And iam a CEO')
        }
    } 

    it('should call the all methods', () => {
        const manager = new Manager('iyan', 18)
        manager.sayHello('Linda');

        const ceo = new Ceo('iyan', 18)
        ceo.sayHello('linda', 17)
    })
})