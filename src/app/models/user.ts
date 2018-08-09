export class User {
    name: string;
    email: string;
  
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }
  }

  export interface Login {
    // client_id?: string,
    // grant_type?: string,
    username: string;
    password: string;
  }