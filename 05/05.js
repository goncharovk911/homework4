var womenBag = {
phone: "iPhone 11",
document: "Паспорт",
accessories: "Ключи от дома",
take(key) {
var result = womenBag[key];
delete womenBag[key];
return result;
},
put(item) {
// put = prompt('Что бы вы хотели положить в сумки?')
// return womenBag.put
}
};

var key = prompt('Wat?');
var value = womenBag.take(key);
console.log('Result of ' + key + ' is ' + value);
console.log('Result sate of the bag ', womenBag);
