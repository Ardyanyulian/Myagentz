describe('object_and_option', function(){
    it('should be object in typescript', function(){
        const person: {nama: string, nomer: number} = {
            nama : 'iayn',
            nomer : 12

        }
    });

    it('should be option in typecript', function(){
        const human: {name: string, age: number, gender: string, likes?: string} ={
            name: "Nodare",
            age: 19,
            gender: "male"
        }
    })
});