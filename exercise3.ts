// 1. Write a function that takes two numbers as parameters and returns their sum
function sumOfNums(a: number,b: number): number{
  return a+b;
}

// 2. Write a function that returns a fixed number
function fixedNum():number{
  return 24;
}

// 3. Write a function that takes a string and an optional boolean parameter. If the boolean
//is true, return the string in uppercase; otherwise, return it in lowercase.

function gender(female:string, isTrue?:true): string {
    if(isTrue)
      {
        return female.toUpperCase();
      }
      else
      return female.toLowerCase();
}
