describe('opperato Instance', () => {
    class manager {}
    class Employee {}
    it('should be aanswer', () => {
        const budi = new manager()
        const eko = new Employee()
        console.info(typeof manager)
        expect(budi instanceof manager).toBe(true);
        expect(budi instanceof Employee).toBe(false);
    })
})