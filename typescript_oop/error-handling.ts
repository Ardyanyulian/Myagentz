describe('Validation error', () => {
    class ValidationError extends Error {
        constructor(public masssage: string){
            super(masssage)
        }
    }

    function DoubleIt(value: number): number {
        if(value < 0){
            throw new ValidationError('Value cannot be lees than 0')
        } 
        return value = 2
    }
    it('should be eror handling', () => {
        try {
            const result = DoubleIt(-1)
            console.info(result)
        } catch (e){
            if ( e instanceof ValidationError){
                console.error(e.masssage)
            }
        }
    })
})