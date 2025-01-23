import {admin} from "../sc/admin"
import {employee, manager} from "../sc/employe"
import {Domain} from "../sc/intersaction_types"
import {person} from "../sc/person"
describe('admin', function(){
    it('should be a admin in apps', function(){
        const Admin : admin = {
            name: "agents",
            id: "234",
            ID: "ELIZA",
            tipe: 1


        }

        console.info(Admin)
    })

    it('should be', function (){
        interface function_Interface {
            (value1 : string, value2: number)
        }

        const add: function_Interface = (value1: string, value2 : number) => {
            return value1 + value2;
        }

        console.info(add("iyan",1));
    })
    //regular not object
    it('Array with interface', function (){
        interface Agentic {
            [index: number]: string;
        }
        
        const new_agent: Agentic = ["iyan", "1209"]
        console.info(new_agent[0])
        console.info(new_agent[1])
    })

    //this is Object
    it('Object_Array', function (){
        interface input_agent {
            [index: string]: string
        }
        
        let hasil_agent: input_agent = {
            nama: "Elbird",
            no: "230pd",
            task: "Admins in WA(locker 1)"
        }

        console.info(hasil_agent["nama"]) //result is undefined
        console.info(hasil_agent["no"])  //result is undefined

        expect(hasil_agent["nama"]).toBe("Elbird")
        expect(hasil_agent["no"]).toBe("230pd")

    })

    it('should be employee with extend to manager', function (){
            const employe_: employee = {
                nama: "Indah",
                id: 1208,
                division: "IT"
            }
            console.info(employe_)

            const manager_ : manager = {
                nama: "Andrew",
                id: 2306,
                division : "Manager Commercial",
                Task: "coordinate"
            }

            console.info(manager_)

    })
    
    it('should be function in interface', function(){
        
        const person_ : person = {
            name: "Iyan",
            sayHello: function (name: string): string {
                return `Hello, ${name}, say ni to ${this.name}`;
            }
        }
        console.info(person_.sayHello("Linda"))
    })

    it('should be intersaction with types', function (){
        const domain: Domain = {
            name: "Void",
            id: 123
        }
        console.info(domain)
    })

    it('should be Assertion', function(){
        const person_: any = {
            name: "iyan",
            No: 12
        }
        const person2: person = person_ as person;
        console.info(person2.name)
    })
})