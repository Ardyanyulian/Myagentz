describe('static', ()=> { 
    class usually {
        static NAME: string = 'Iyan CEO'
        static AGE: number = 18
        static GENDER: string= 'laki-laki'
    }
    class Mathutil {

        static sum(...values: number[]): number {
            let total = 0;
            for(let value of values){
                total += value;
            } 
            return total;
        }
    }
    
    it('should be retuorn static', () => {
        console.info(usually.NAME)
        console.info(usually.AGE)
        console.info(usually.GENDER)
    })
    
    it('should be retuorn methods static', () => {
        console.info(Mathutil.sum(1,2,3,4,5,))

    })
})