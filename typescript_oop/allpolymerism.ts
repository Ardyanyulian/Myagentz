describe('polymerism', () => {
    class Employee{
        constructor(public name: string){}

    }
    class Manager extends Employee{}
    class Vicepresident extends Manager{}
    function sayHello(employe : Employee): void{
        console.info(`Helllo ${employe.name}`);
    }
    //function assertin and polymerism
    function Sayhello( employe : Employee){
        if(employe instanceof Vicepresident){
            const vp = employe as Vicepresident;
            console.info(`Hello VP ${vp.name}`)
        }else if(employe instanceof Manager){
            const manager = employe as Manager
            console.info(`Hello manager ${manager.name}`)
        }else {
            console.info(`Hello Emplyee ${employe.name}`)
        }
    }
    function Sayhellowrong( employe : Employee){
        if(employe instanceof Manager){
            const mamager = employe as Manager;
            console.info(`Hello manager ${mamager.name}`)
        }else if(employe instanceof Vicepresident){
            const vp = employe as Vicepresident
            console.info(`Hello vp ${vp.name}`)
        }else {
            console.info(`Hello Emplyee ${employe.name}`)
        }
    }

    it('sholud be a polmerism', () => {
        let employe: Employee = new Employee('Darax');
        console.info(employe)

        employe = new Manager('Yagrex')
        console.info(employe)
        employe = new Vicepresident('sayarth')
        console.info(employe)
    })

    it('should be methods polymorism' , ()=> {
        Sayhello(new Employee('HAMLAS'));
        Sayhello(new Manager('adalm'));
        Sayhello(new Vicepresident ('joko'))
    })

    it('should be  wrong methods polymorism' , ()=> {
        Sayhellowrong(new Employee('HAMLAS'));
        Sayhellowrong(new Manager('adalm'));
        Sayhellowrong(new Vicepresident ('joko'))
    })

})