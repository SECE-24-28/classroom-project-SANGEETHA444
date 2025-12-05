//functions used inside the object

let student={
    name:"sree",
    age:22,
    marks:68,
demo:function()
{
console.log("hi this is "+this.name+"and my age is"+this.age)
}

}
console.log(student)
student.demo()

