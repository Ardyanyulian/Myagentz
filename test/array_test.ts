describe('array_type', function (){
    it('should to be a array', function (){
        const name: string[] = ["iyan", "nomor", "satu"];
        let angka: number[] = [1, 2, 3];

        console.info(name);
    })

    it('should be readonly array', function(){
        const hobby: ReadonlyArray<string> = ["manusia", "rakun", "kumbang"];
        console.info(hobby);
    })

    it('shoud be a tuples', function (){
        const gudang: readonly [string, number, number] = ["Potatao chips", 2, 5];
        console.info(gudang[0]);
        console.info(gudang[1]);
        console.info(gudang[2]); 
    })

    it('should be any', function(){
        const person: any = {
            id : 1,
            nama : "iyan",
            age : 18
        };
        person.age = 12
        person.address = "Wonogiri"
        console.info(person)
    })

})





