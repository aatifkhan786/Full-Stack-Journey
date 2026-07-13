const myArr=["Superman","Batman","SexualMan","HornyMan"];

myArr.forEach( function(val,index,arr){
    console.log(val,index,arr);
})

myArr.forEach( (val) => console.log(val));