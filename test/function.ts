describe('Function', function(){
    it('should be function but no complicated parameters', function (){
        function SayHello(name: string):string  {
            return `Hello ${name}`;
        }
        console.info(SayHello("iyan"));
        function printHello(name: string): void{
            console.info(name)
        }
        printHello("iyan");
    })

    it('should be function with  default parameter ', function (){
        function Notsay(name: string = "Guest"): string {
            return `Hello are you ${name}`;
        };
        expect(Notsay("iyan")).toBe("Hello are you iyan");
        expect(Notsay()).toBe("Hello are you Guest");

        

    })
    it('should optional parameters', function (){
        function Banana (smell: string , taste?: string): string {
            if (taste)
                return `The ${smell} banana and have a ${taste}`;
            else
            return `The ${smell} banana and have a taste`;
        };
            expect(Banana("pahit", "asam")).toBe("The pahit banana and have a asam");
            expect(Banana("pahit")).toBe("The pahit banana and have a taste");
    })

    it('should be a function overloading', function (){
        function Callme(value: number): number;
        function Callme(value: string):string;
        function Callme(value: any) {
            if(typeof value === "string"){
                return value;
            } else if (typeof value === "number") {
                return value;
            }
        }
        expect(Callme(12)).toBe(12);
        // expect(Callme("Iyan")).toBe("Iyan")
    })

    it('should be functios as a parameters', function(){
        function sayHello(name: string, filter : (name: string) => string) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name: string):string {
            return name.toUpperCase();
        }

        expect(sayHello("iyan", toUpper)).toBe("Hello IYAN");

    })
    it('should be a anonymus function', function (){
        function Sayhello(name: string , filter: (name: string) => string){
            return `Hello ${filter(name)}`;
        }

        expect(Sayhello("iyan", function (name:string): string {
            return name.toUpperCase();        
        })).toBe("Hello IYAN");

    })

    it('should be Arrow function', function (){
        function sayHello(name: string, filter: (name: string) => string){
            return `Oii ${filter(name)}`;
        }

        expect(sayHello("iyan", (name: string): string => name.toUpperCase()))
        .toBe("Oii IYAN")
    })
})