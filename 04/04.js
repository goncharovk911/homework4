var womenBag = {
phone: "iPhone 11",
document: "Паспорт",
accessories: "Ключи от дома",
takeThing(take){
take = prompt('Что бы вы хотели досать с сумки?', )


delete womenBag.take
}

},
putThing(put){
put = prompt('Что бы вы хотели положить в сумки?', )
return womenBag.put
}
}
womenBag.takeThing()
//womenBag.putThing()
console.log(womenBag);
