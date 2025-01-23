describe('super constructor', () =>{
    class Person {
        name: string
        id: number
        constructor(name: string, id: number){
            this.name = name
            this.id = id
        }
    }

    class Employee extends Person {
        departement: string
        
        constructor(name:string, id: number,departement: string){
            super(name, id)
            this.departement = departement
        }
    }it('should return super inheritance', ()=> {
        const employee = new Employee('iyan', 18, 'CEO')
        console.info(employee.name)
        console.info(employee.departement)
    })


})   