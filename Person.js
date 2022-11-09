class Persons{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
    display(){
        console.log("Name:-"+this.name);
        console.log("Age:-"+this.age);

    }
}

class Students extends Persons{
    constructor(name,age,course,marks){
        super(name,age);
        this.course= course;
        this.marks= marks;
    }
    display2(){
        this.display();
        console.log("Course:-"+this.course);
        console.log("Course:-"+this.marks);

    }
}
let students= new Students("vishal",20,"It",80);
students.display2();
