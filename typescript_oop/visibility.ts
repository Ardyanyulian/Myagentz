describe('visibility', () => {
    class Counter {
        private count: number = 0;
        protected count1: number = 0;
        public increment(): void{
            this.count++;
        }

        // public Negativecounter(): void {
        //     this.counter--
        // }
        public getCounter(): number {
            return this.count;
        }
    }
    class Doublecounter extends Counter
    {
        public getdouble(): number{
            return this.count1;
        }
    }
        it('should be a return of increments', ()=> {
        const counter = new Counter()
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter);
    });

    it('should be a return of increments', ()=> {
        const counter = new Doublecounter()
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getdouble);
    });
});