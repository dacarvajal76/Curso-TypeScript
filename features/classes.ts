// * Public * -> This method can be called anywhere, any time.

// * Private * -> This method can only be called by other methods in this class.

// * Protected * -> This method can be called by other methods in this class,
//                  or by other methods in child classes.
class Vehicle {
  /* color: string;

  constructor(color: string){
    this.color = color; */
  
  constructor(public color: string) {}

  protected honk(): void{
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle{
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive():void {
    console.log('vroom');
  }

  startDrivingProcess(): void{
    this.drive();
    this.honk();
  };
}

const car = new Car(4,'red');

car.startDrivingProcess();
