describe('All declaration', function(){
    it('should be if else statements', function (){
        const examvalue = 80;
        if (examvalue > 80){
            console.info("A")
        } else if (examvalue >= 60 && examvalue >= 80){
            console.info("B")
        } else {
            console.info("c")
        }
    })

    it('should be tenary operator', function(){
        let value: number
        value = 10
        const say = value  > 5 ? "Sucess": "try again";
    })

    it('should be a switcj statements', function(){
        function Apalah(name: string): string
        {
            switch(name){
                case "Iyan":
                    return "Iyan is tampan boy"
                case "Linda":
                    return "Linda is beautiful girl"
                default:
                return "Takdir memyatuka kita bersua di ikatan yang halal"
                
            }
        }
        console.info(Apalah("Iyan"))
        console.info(Apalah("Linda"))
        console.info(Apalah("Takdir"))
    })

    it('should be for loop', function(){
        const name = ["iyan", "Linda", "Takdir"]

        for (let i = 0; i < name.length; i++ ){
            console.info(name[i])
        }
        // for of
        for(const names of name){
            console.info(name);
        }
        // for in
        for(const index in name){
            console.info(name[index])
        }
    })

    it('should be a while and do-while', function(){
            let count = 1;
            while(count < 10){
                console.info(count)
                count++
            }

            let papapo = 10;
            do{
                console.info(papapo)
                papapo--
            } while (papapo > 20)
            
    })

    it('should be break', function (){
        let count = 0;
        do{
            count++

            if (count == 10){
                break;
            }
            if (count % 2 == 0){
                continue;
            }
            console.info(count)
        }while (true)
    })
})
