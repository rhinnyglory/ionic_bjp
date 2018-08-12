export interface Booths {
    state: State;
    district: District;
    assembly: Assembly;
    mandala: Mandala;
    boothNumber: number;
    fullName: string;
    mobile: string;
    membershipNumber: number;
    gender: string;
    email: string;
    epicNumber: number;
    myResponsibility: string;
    incharge: string;
    bikeStatus: boolean;
    address: string;
    pincode: number;
    category: string;
    caste: string;
    whatsAppNumber: number;
    education: number;
    profession: string;
    assemblyConstituency: string;
    parentBooth: string;
}

export interface State {
    code: string;
    id: number;
    name: string;
}

export interface District {
    code: string;
    id: number;
    name: string;
}


export interface Assembly {
    code: string;
    id: number;
    name: string;
}

export interface Mandala {
    code: string;
    id: number;
    name: string;
}