  function fullName(fio) {
    while (i < fio.length) {
      if (fio[i]=== a) {
              fio[i].fullName = "Vova Gubin Aleksandr"
      }else if (fio[i]=== b) {
          fio[i].fullName = "Lena Sokolova Sergeevna"
      }else if (fio[i]=== c) {
        fio[i].fullName = "Petya Zlobin Vasilev"
      }


      i++
    }
  }
 function fieldsCheck (name)
{
    for (var i in name){
      if (i === 'age'  ) {
         alert(name.name +' '+ name.age +" лет!")
      }
    }
}//fields check
function loopOfName (pers) {
  while (i < pers.length) {
    console.log(pers[i])

    i++
  }
}
function loopName (pers) {

  while (i < pers.length) {
    console.log(pers[i].name + " " + pers[i].surname)

    i++
  }
}
var a = {
  name:"Vova",
  surname:"Gubin Aleksandr"
}, b = {
  name:"Lena",
  surname:"Sokolova"
}, c = {
  name:"Petya",
  surname:"Zlobin"
}//3 persons
a.age = 18
b.age = 23
c.age = 27
fieldsCheck(a)
fieldsCheck(b)
fieldsCheck(c)
var persons=[]
persons.push(a)
persons.push(b)
persons.push(c)//array of persons
var i = 0
while (i < persons.length) {
  console.log(persons[ i ])
  i++
}//loop of persons
loopOfName(persons)
loopName(persons)//loop of name and surname
fullName(persons)//fullName

var d = {
  name: "Pavel",
  surname: "Belov"
}
var jsonD =  JSON.stringify(d)
persons.push(jsonD)//deserialize
var json = JSON.stringify(persons)//serialize

alert(json)
