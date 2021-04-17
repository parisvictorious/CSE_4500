// Utilizes JSON.parse and JSON.stringify
//Prints list of information on the student
//Translates the object into uppercase before returned back
//Created by Paris Klein

const student = {
    name: "Paris",
    age: 25,
    sex:"Female"

};

const studentObjStr = JSON.stringify(student);
console.log(studentObjStr);

// creates a string containing the following
//{"name:","Paris","age:","25,"sex:","Female"}

const jsObject = JSON.parse( studentObjStr, function(key, value) {
    if (typeof value == "string"){
        return value.toUpperCase();
    } else{
        return value;
    }
});
console.log(jsObject);

// Turns the above string into an object and changes all strings into uppercase format.
