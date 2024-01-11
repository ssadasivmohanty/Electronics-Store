export class User {
    username: string;
    firstName : string;
    lastName : string;
    email: string;
    password: string;
    user_type: string;
    phone: string;
    gender: string;
    dob: string;
  
  
    constructor(username: string, firstName: string, lastName : string, email: string, password: string, user_type: string, phone: string, gender: string, dob: string ) {
      this.username = username;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.user_type = user_type;
      this.phone = phone;
      this.gender = gender;
      this.dob = dob;
    }
  
  }