//1-  Classification de paquets robotisée


 
    let isEncombrant=false;
     let isLourd=false;
     let isBadDim=false;
 
     if(width >= 150 || height >= 150 || length >= 150 ){
        isBadDim=true;
     }

     if(width*height*length>=1000000 || isBadDim===true){
        isEncombrant=true;
     }

     if(mass >= 20){
        isLourd=true;
     }
  
     if(!isEncombrant && !isLourd){
        return 'STANDARD';
     }
     if(isEncombrant ===true && isLourd ===true){
        return 'REJECTED';
     }
     if(isEncombrant ===true || isLourd ===true){
        return 'SPECIAL';
     }

//2- Suppression de doublons

//sol 1

function filterDuplicates(data) {
	let uniqueValue = [...new Set(data)];
	return uniqueValue;
}


//sol 2

/*

The indexOf() method returns the index of the 
first occurrence of the element in the array:

*/

function filterDuplicates(data) {

	let uniqueValue = data.filter((element, index) => {
        return data.indexOf(element) === index;
    });

    return uniqueValue;
}

//sol 3

function filterDuplicates(data) {

	let uniqueValue = [];
    data.forEach((element) => {
        if (!uniqueValue.includes(element)) {
            uniqueValue.push(element);
        }
    });
    return uniqueValue;
}


//3- Filtrage des mots

function filterWords(words, letters) {
	let count=0;
    let result=[];
    for(let i=0;i<words.length;i++){
        count=0;
        for(let j=0;j<letters.length;j++){
            if(words[i].includes(letters[j])){
                count++;
            }
        }
        if(count>=1){
            result.push(words[i]);
        }
     

    }
return result;
}

//4- Fréquences des mots !!!


   function countFrequencies(words) {
    console.log(words)
    if(words.length==1){
        return [1];
       }
       let indexes=[];
        let count=1;
        let result=[];
        words.sort();
        console.log(words.length);

        for(let i=0;i<words.length;i++){
            count=1;
            if(!indexes.includes(i)){
                   for(let j=i+1;j<words.length ;j++){
                    if(words[i].toUpperCase()===words[j].toUpperCase()){
                        count++;
                        indexes.push(i);
                        
                    }
                   }
                   result.push(count);
            }
        }
    
    return result;
}


//5- average

// sol 1

function average(table) {
 
  if(table.length===0)
     return 0;

  let average =0;
  for(let i=0;i<table.length;i++){
    average=average+table[i];
  }

  return average/table.length

}

// sol 2

 const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
  return average(table);


//6- findSumPair
function findSumPair(numbers, k) {

    let result =[];
    console.log('numbers : ',numbers);
    console.log('k       : ',k);
  
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
                 if(numbers[i]+numbers[j]===k){
                     result.push(i);
                     result.push(j);
                     break;
                    }
        }

    }
    console.log('result      : ',result);
    if(result.length===0)
        return [0,0];

    return result;
}

//7- is Twin

if(a.length!==b.length)
       return false;
  
const arrA=  Array.from(a).sort(function (a, b) {
            let x = a.toUpperCase(),
            y = b.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
  });

  const arrB=  Array.from(b).sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;
 });
  
    console.log('arrA : ',arrA) ;
    console.log('arrB : ',arrB) ;

    let count=0;
    for(let i=0;i<arrA.length;i++){
        if(arrA[i]===arrB[i])
            count++;
    }

    if(count===arrA.length)
       return true;
   
   return false;
