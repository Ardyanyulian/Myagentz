export enum customer_subs{
    GOLD = 'GOLD',
    REGULARS = 'REGULAR' ,
    SILVER = 'SIlVER',
    BRONZE = 'BRONZE'
}


export type customer_person ={
    nama: string,
    ktp: string,
    alamat?:string,
    subs: customer_subs

}