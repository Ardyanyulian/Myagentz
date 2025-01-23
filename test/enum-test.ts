import { customer_subs,customer_person } from "../sc/enum"

describe('enum', function (){
    it('should be enum in typescript', function (){
        
        const Customer : customer_person = {
            nama: "muhamad",
            ktp: "091y3b",
            subs: customer_subs.GOLD
        }

        console.info(Customer)
        
    })
})