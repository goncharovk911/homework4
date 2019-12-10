
var persons = [], a = {
    name:"Vova",
    surname:"Aleksandr"
  }, b = {
    name:"Lena",
    surname:"Sokolova"
  }, c = {
    name:"Petya",
    surname:"Zlobin"
  }
persons.push(a, b, c)

console.log(persons);


var str = "<table border='1'>"
for (let i=0;i<persons.length;i++){
    str += `<tr><td>${persons[i].name}</td><td>${persons[i].surname}</td></tr>`
}
str += "</table>"

console.log(str)
document.write(str)
