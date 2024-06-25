/*Create a basic calculator class in TypeScript that can perform addition, subtraction,
multiplication, and division. The class should include validation to ensure that the inputs are
valid numbers and that division by zero is handled correctly.
Requirements:
1. Class Definition:
○ Create a Calculator class with methods for addition, subtraction,
multiplication, and division.
2. Validation:
○ Implement input validation to ensure the provided values are numbers.
○ Ensure that the division method handles division by zero appropriately.
3. Methods:
○ Add function
○ Minus function
○ Divide function
○ Multiply function
*/
class Calculator{
  add(a:number, b:number):number{
    this.checkNumbers(a, b);
    return a+b;
  }

  subtract(a:number, b:number):number{
    this.checkNumbers(a, b);
    return b-a;
  }

  multiply(a:number, b:number):number{
    this.checkNumbers(a, b);
    return a*b;
  }

  devide(a:number, b:number):number{
    this.checkNumbers(a, b);
    if(b===0)
      {
        console.log(`cannot devide by zero!`);
      }
    return a/b;
  }
  private checkNumbers(...num:number[]):void{
    for(let i of num){
      if(isNaN(i))
        {
          throw new console.error(`entered an invalid number`);
        }
       
    }
  }
}


