export interface employee  {
    nama: string,
    id: number, 
    division: string
}

export interface manager extends employee  {
    Task: string
}