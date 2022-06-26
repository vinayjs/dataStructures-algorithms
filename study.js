/*

//Arrays- arrays are lists of ordered, stored data, They can hold items that are of any data type.



let cars = ['audi','benz','ferrari','bmw'];

//property.length

console.log(cars.length);

//index

console.log(cars[1]);

//Method.push()

cars.push('tata');
console.log(cars);

//Method.pop()

cars.pop();
console.log(cars);

//Mutable property -arrays

const games =['cricket','football','tennis'];
games.push('rugby');

console.log(games);


//Loops

//While Loop
//The while loop creates a loop that is executed as long as a specified condition evaluates to true. The loop will continue to run until the condition evaluates to false. The condition is specified before the loop, and usually, some variable is incremented or altered in the while loop body to determine when the loop should stop.

let x = 0;

while(x<10){
    console.log(x*2);
    x++;
}

//for loop

const activity =['cricket','football','tennis'];

for (let i = activity.length -1 ; i >= 0;i-=1){
    
    console.log(`${[i]}.${activity[i]}`);
    
}

for(let z = 0; z< 8; z++){
    console.log(z*2);
}

//Do..While

// first executes the blocka and then check for the condition.

y= 0;
o = 0;

do{
    y = y + o;
    console.log(y);
    o++;
}while(o<5);

//Break

for(let i = 0 ; i<=100; i++){
    if(i>5){
        break;
    }
    console.log(i);
}


// Nested For loop
for( let y = 0 ; y <2; y+=1){
    for ( let c = 0 ;c<3; c+=1){
        console.log(`${y}-${c}`);
    }
}
*/
// functions

// functions are first-class objects.
//have built-in propertiesa and methods.
//properties and methods can be added to them.
// func can be passed as arguments and returned from other functions.
//They can be assigned to variables,array elements and other objects.

const isEven = (n)=>{
    return n % 2 ==0;
};

console.log(isEven(46));



//Assign a function to a variable 

const xyz = (num)=>{ return num+2};

console.log(xyz(3));


//Re- assign the function to a new varaible

const reassgn= xyz;
console.log(reassgn(2));

//Access the function's name property
console.log(reassgn.name);

//return the function's body as a string
 let sam = ['hi']
 console.log(sam);
 console.log(sam.toString());

 //.reduce(method)- iterates through am array and returns a single value.

 const vehicle = [1,2,3,4,5,6]

 const sum = vehicle.reduce((sumed, currrentvalue)=>{
    return sumed + currrentvalue;
 });

console.log(sum);

// .forEach() Method

const num= [ 23,34,43,22,12,14];

num.forEach(num=>{
    console.log(num);
});

//.filter() method;
const random = [2,3,4,5,6,7];

let filt = random.filter(n=>{
    return n>4
});
console.log(filt);



