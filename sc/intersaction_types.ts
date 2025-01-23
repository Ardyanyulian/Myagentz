export interface Hasname {
    name: string;
}

export interface Hasid {
    id: number
}

export type Domain = Hasname & Hasid;