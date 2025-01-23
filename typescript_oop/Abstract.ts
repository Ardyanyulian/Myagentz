describe('Abstract', () => {
    abstract class Customer {
        abstract name: string
        readonly id: number;
        constructor(id: number){
            this.id = id;
        }

        abstract sayhello(name: string): void;
    }

    class Regularcustomer extends Customer {
        name: string;

        constructor(id: number,name: string){
            super(id)
            this.name = name
        }

    sayhello(name: string): void{
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
    }



    it('should be return abstract class', ()=> {
        const customer1 = new Regularcustomer(1, 'iyan')
        customer1.sayhello('iyan')
    })
})