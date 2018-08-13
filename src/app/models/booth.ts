export interface Booths {
    state: State;
    district: District;
    assembly: Assembly;
    mandala: Mandala;
    booth: Booth;
    fullName: string;
    mobileNumber: string;
    membershipNumber: number;
    gender: string;
    email: string;
    epicNumber: number;
    responsibility: string;
    incharge: string;
    bikeStatus: boolean;
    address: string;
    pincode: number;
    category: string;
    caste: string;
    whatsappNo: number;
    education: number;
    profession: string;
    assemblyConstituency: string;
    parentBooth: Booth;
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

export interface Booth {
    code: string;
    id: number;
    name: string;
}