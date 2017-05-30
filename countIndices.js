function countIndices(some_string) {
 let myObject =  {}
 let position = 0;
 //let noSpaces = some_string.split(" ").join("");

 //loop to add each letter as a key
 for (let i of some_string)
 {
  if (i != ' ')
  {
    if (typeof myObject[i] == 'undefined')
      myObject[i] = [position];
    else
      myObject[i].push(position);
  }
  position++;
 }
 //console.log(Object.keys(myObject));
 return myObject;
};



//main
let myObject = countIndices("lighthouse in the house");
console.log(myObject);
