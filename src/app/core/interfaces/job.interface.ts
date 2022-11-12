export interface JobInterface {
  id: string;
  name: string;
  email: string;
  phone:string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: LocationInterface;
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
}

export interface LocationInterface {
  lat: number;
  long: number;
}
