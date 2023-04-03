
class Liloo {

  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.show()
    console.log(this.json())
  }

  show (){
    alert('Liloo ok')
  }

  json(){
    return {
      Name: "Felipe",
      Lastname: "Oliveira"
    }
  }

}
export default Liloo