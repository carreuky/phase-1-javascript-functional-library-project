const myEach = function(collection, callback){
    const newCollection = standardize(collection)
        let i = 0;
        while(i< newCollection.length){
            callback(newCollection[i]);
            i = i+1;
        } return collection;
    };

function myMap (collection, callback){
  const newCollection = standardize(collection);
    let i;
    let modArray = []
    for( i = 0; i < newCollection.length; i++){
        modArray.push(callback(newCollection[i]));
    } 
    return modArray
};

function myReduce(collection, callback, val=0){
  let newCollection = standardize(collection);
  for(let i = 0; i < newCollection.length; i++){
    const no = newCollection[i]
    val = (callback(val, newCollection[i], newCollection))
  } 
  return val
}

  function myReduce(collection, callback, val) {
    let currentCollection = standardize(collection)
    let current = val
    if(typeof val !== "number"){
      current = currentCollection[0]
      for(let i = 1; i < currentCollection.length; i++) {
        current = callback(current, currentCollection[i], currentCollection)
      }
    } else { 
      for(let i = 0; i < currentCollection.length; i++) {
        current = callback(current, currentCollection[i], currentCollection)
      }
    }
    return current
  }


function myFind(collection, callback){
  let newCollection = standardize(collection)
  for(let i = 0; i < newCollection.length; i++){
    if(callback(newCollection[i]) ===true){
      return newCollection[i]
    }
  }
}

function myFilter(collection, callback){
  let newCollection =  standardize(collection)
  let filterResult = []

  for(let i = 0; i < newCollection.length; i++){
    if(callback(newCollection[i]) === true){
      filterResult.push(newCollection[i])
    }
  }
  return filterResult

}

function mySize(collection){
  let newCollection = standardize(collection)
  if(typeof(newCollection) === 'object'){
    return Object.keys(newCollection).length
  } else {
    return newCollection.length
  }
}


function myFirst(collection, index){
  let newCollection = standardize(collection)
  let firstElem = []
  if(index === undefined){
    return newCollection[0]
  } else{
    for(let i = 0; i < index; i++){
      firstElem.push(newCollection[i])
    }
    return firstElem
  }

}

function myLast(collection, index){
  let newCollection = standardize(collection)
  let lastElem = []
  if(index === undefined){
    return newCollection[newCollection.length -1]
  } else{
    return newCollection.slice(-index)
  }
}


function myKeys(collection){
  let keyys = []

  for(let key in collection){
    keyys.push(`${key}`)
  }
  return keyys
}

let pl = {
  name : "Paul", 
  gender : "male"
}

function myValues(collection){
  let values = []
  for(let key in collection){
    values.push(collection[`${key}`])
  }
  return values
}

console.log(myValues(pl))


function standardize (collection){
    if(Array.isArray(collection)){
        return collection
    } else {
        return Object.values(collection)
} };

