function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum.apply(null, numbers));

//syntex tinh tong
console.log(sum(...numbers));

//syntex push
let a = [1,2];
let b = [4,5,6];
a.push(...b);
console.log(a)

//syntex copy mảng
let a1 = [2,5];
let b1 = [2,5,3,7];
a1 = [...b1];
console.log(b1)

//syntex copy object
let obj1 = {a:1 ,b:2};
let obj2 = {...obj1};
console.log(obj2);

//syntex nối 2 mảng
let arr1 = [1, 6, 8];
let arr2 = [2, 7, 9];
let c = [...arr1, ...arr2];
console.log(c)