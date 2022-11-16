const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  
  cats;
  console.log(cats.push(name));
}

  
function destructivelyPrependCat(name){
  cats;
  console.log(cats.unshift(name));
}


function destructivelyRemoveLastCat(){
  cats;
  console.log(cats.pop())
}


function destructivelyRemoveFirstCat(){
cats;
console.log(cats.shift());
}


function appendCat(name){
  cats;
  const newCat = [...cats, name];
  return newCat;
}

function prependCat(name){
  cats;
  const newCat = [name, ...cats];
  return newCat;
}

function removeLastCat()
{
  cats;
  const newCat = cats.slice(0,2);
  return newCat;
}

function removeFirstCat(){
  cats;
  const newCat = cats.slice(1);
  return newCat;
}
