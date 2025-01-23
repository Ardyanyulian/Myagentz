describe('Union_type', function(){
    it('should be union regular', function(){
        let person: string | number = "Muhmad Ardyan Y";

        console.info(person)

        person = 10;
        console.info(person)
    })

    it('should be union_function_ifelse', function (){
        function process(value: string | number | boolean){
            if(typeof value === 'string'){
                return value.toUpperCase();
            } else if(typeof value === 'number'){
                return value + 1;
            } else {
                return !value;
            }
        }
        expect(process("Iyan")).toBe("IYAN");
        expect(process(10)).toBe(11);
    })
})