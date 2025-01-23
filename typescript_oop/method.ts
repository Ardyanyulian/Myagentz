describe('Method and properties', () => {
        class PersonV {
            readonly vvip ?: string
            name : string
            id: number

            constructor(name: string, id: number, vvip?: string) {
                    this.name = name
                    this.id = id
            }

            sayHello(name   : string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
            }
        }
        


    it('sholud be a properties', function () {
        class PersonV {
            name: string
            id: number

            constructor (name: string , id: number) {
                this.name = name
                this.name = name
            }
        }

        const customer = new PersonV('iyan', 12)
        console.info (customer.name)
    })
    it('should be have a methods', () => {
        const person = new PersonV ("iyan", 2)
    })
});