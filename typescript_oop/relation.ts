describe('relation in typescript', () => {
    class Person {
        constructor(name: string){

        }
    }
    class Students {
        constructor(name: string){
            
        }
    }

    it('should be relation', () => {
        const person: Person = new Students('iyan');
        console.info(person)
    })
})