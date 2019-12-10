
var persons = [], a = {
    name:"Vova",
    surname:"Aleksandr",
    age: 18,
    fathername: "Sergeevich"
  }, b = {
    name:"Lena",
    surname:"Sokolova",
    age: 23,
    fathername: "Vitalievna"
  }, c = {
    name:"Petya",
    surname:"Zlobin",
    age: 21,
    fathername: "Grigorievich"
  }
persons.push(a, b, c)

console.log(persons);


var str = "<table border='1'>"
for (let i=0;i<persons.length;i++){
    str += `<tr><td bgcolor="red">${persons[i].name}</td><td bgcolor="green">${persons[i].surname}</td><td bgcolor="gray">${persons[i].age}</td><td bgcolor="blue">${persons[i].fathername}</td></tr>`
}
str += "</table>"

console.log(str)
document.write(str)
