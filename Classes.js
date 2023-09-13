
class Student {

    constructor( name , roll){
        this.name = name 
        this.roll = roll
    }
   method_get(){
    return this.name ,  this.roll

   }

}
class Person extends Student {
    name = super.name
    roll = super.roll
    get (){
        
    }
}

a = new Student("Aniket" , 56  )
b = new Person(a)

console.log(b.name)
