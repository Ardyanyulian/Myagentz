import {person, kebiasaan } from "../sc/alias";

describe('trial Alias', function(){
    it('should be type alias', function(){
        const Person: person = {
                nama : "iyan",
                nomor: 18,
                ktp: 12
        }

        const Kebiasaan : kebiasaan = {
            hobby: "Olahraga",
            ktp: "13bg194001iw6gey197y"
        }

        console.info(Person.nama)
        console.info(Kebiasaan.ktp)
        console.info(Person.ktp)
    })

})