const rows = 2;
const columns = 2;

const myArray1 = [];

for ( let i=0; i<rows; i++ ){
    myArray1[i]= [];
    for (let j=0; j < columns; j++){
        myArray1[i][j]= null;
    }
}
console.log(myArray1);

const myArray2= new Array(rows);

for(let i=0; i< myArray2.length; i++){
    myArray2[i]= new Array(columns);
}

console.log(myArray2);


 