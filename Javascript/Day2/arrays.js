let arr=[1,2,3,45,27,34];

console.log('for of');
//for of - foreach
for(let num of arr){
	console.log(num);
}

console.log('for in');
//for in - for
for(let num in arr){
	console.log('item='+num);
}

let newarr= arr.map((val,indx)=>{
	return val*2;
})
console.log('Map example');
console.log(newarr);

let students= [{name:'koteswar', marks:'37'},{name:'srikanth', marks:'37'},{name:'venkat', marks:'10'}];

console.log(students);
let filterStudents= students.map((student,index)=>(
{
	...student, remark:'pass'
}
));
console.log(filterStudents);

//spread operator
console.log('spread operator');
let num1=[1,2,3,6,7];
let num2=[4,5];
let num3=[...num1,...num2]
for(let num of num3){
	console.log(num);
}

//Rest operator
console.log('Rest operator');
function sum(...numbers)
{
	return numbers.reduce((total,n)=>total+n,0);
}
console.log(sum(1,2,3,4));




