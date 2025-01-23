describe('Getter and setter', () =>{
    class Product {
        _name: string

        get name(): string {
            if(this._name){
                return this._name
            } else {
                return "empty";
            }
        }
        set name(value: string) {
            if(value !== ""){
                this._name = value
            }
        }
    }

    it('should be retrun getter and setter', ()=>{
        const  product = new Product()

        console.info(product._name)

        product._name = "makanan"
        console.info(product._name)

        product._name = ""
        console.info(product._name)
    })
})
    

