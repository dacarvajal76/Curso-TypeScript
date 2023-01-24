class User{
  
  private username: string;
  private age: number;

  constructor (username: string, age: number){
    this.username = username;
    this.age = age;
  }

  protected futureAge(multiplier: number): void {
    this.age = this.age * multiplier;
  }

  Addition(x: number, y:number): number{
    return x + y
  }

  

  public getAge(){
    return this.age;
  }

}

class Admin extends User{
  public ageTrigger(){
    this.futureAge(5);
  }
}

const user = new User('hackerman',21);

const admin = new Admin('Singapore', 10);

admin.ageTrigger();

console.log(admin.getAge())
