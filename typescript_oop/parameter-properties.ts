describe('Parameter properties', () => {
    class Person {
        constructor(public name: string = "") {
        }
    }
    it('should return parameters properties', () => {
    const person = new Person();
    person.name = 'iyan'
    console.info(person.name)
    })
})