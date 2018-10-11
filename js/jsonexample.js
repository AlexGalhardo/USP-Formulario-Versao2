function MyClass(){
    // atributo privado
    this._attr = "foo";
}
// prototype para criar um método para esse objeto
MyClass.prototype = {
  getAttr: function(){
    return this._attr;
  }
};

var myClass = new MyClass();
var json = JSON.stringify(myClass);
var newMyClass = JSON.parse(json);
newMyClass.__proto__ = MyClass.prototype;
console.log(newMyClass instanceof MyClass, newMyClass.getAttr());

//Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;



// In JSON, functions are not allowed as object values.
// The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
// This can be omitted if you convert your functions into strings before running the JSON.stringify() function.

var obj = { name: "John", age: function () {return 30;}, city: "New York" };
obj.age = obj.age.toString();
var myJSON = JSON.stringify(obj);

document.getElementById("demo").innerHTML = myJSON;