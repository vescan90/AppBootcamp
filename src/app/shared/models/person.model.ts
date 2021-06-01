export interface Person {
  id: {
    value:string,
  },
  name : {
    first: string;
    last: string;
    title: string;
  },
  gender: string;
  phone: string;
  cell: string;
  email: string;
  picture?: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  }
  dob:{
    age: number;
    date: Date;
  }
}
