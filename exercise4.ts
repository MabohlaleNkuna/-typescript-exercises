//1. Create a Person class with name and age properties. Implement a method to return
//the person's name.
// 2. Add a private property socialSecurityNumber to the Person class and a method
//to get the age.
class person{
  public name: string;
  public age: number;
  #socialSecurityNumber: string;

  constructor(name:string, age:number,socialSecurityNumber: string) 
  {
    this.name=name;
    this.age=age;
    this.#socialSecurityNumber=socialSecurityNumber;
  }

  public getName(): string
  {
    return this.name;
  }

  public getAge(): number
  {
    return this.age;
  }
}


