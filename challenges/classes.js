// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
class CubiodMaker{
    constructor(length,width,height){
      this.length = length;
      this.width = width;
      this.height = height;
    }
    volume(){
      return this.length * this.width * this.height;
    }
    // step 3
    surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
  }
      
  
  //Step 4
  const newCubiod = new CubiodMaker(4,5,5);
  
  console.log(newCubiod);
  
  console.log(newCubiod.surfaceArea()); //130
  console.log(newCubiod.volume()); //100
  
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CubiodMaker{
    constructor(length,width,height){
        super(length,width,height);
    }
    cubeVolume(){
        return this.length * this.length * this.length;
    }
    cubeSurfaceArea(){
        return 6 * this.length * this.length;
    }
}

const newCube = new CubeMaker(3,2,5);

console.log(newCube);

console.log(newCube.cubeSurfaceArea())

