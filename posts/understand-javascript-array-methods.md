---
title: 'JavaScript Array Methods'
excerpt: 'There are several methods that can be used to manipulate arrays in JavaScript.'
date: '2020-01-01'
---

1. **concat()**

The conact() method creates a new array by merging (concatenating) existing arrays. This method does not modify the original arrays.

```
const a = [1, 2, 3, 4]

const b = [5, 6, 7, 8]

const c = a.concat(b)

console.log(c) //[1, 2, 3, 4, 5, 6, 7, 8]
```


You can also pass more than one arrays as parameters in the method. If you don’t pass any parameter in the concat() method, it will create a copy of the original array.

This method can also push elements to an array:

```
const nums = [5, 6, 7, 8]

const res = nums.concat(9, 10)

console.log(res) //[5, 6, 7, 8, 9, 10]
```


**2. fill()**

This method changes all the elements in an array with a provided value. You can also specify a range of elements to fill.

```
const nums = [1, 2, 3, 4, 5]
nums.fill(0) //Changes all elements in nums to 0

nums.fill(0, 1, 4) //Changes items between index 1 & 4 to 0
```


**3. indexOf()**

This method returns the index of the **first occurrence** of an element in an array. It returns ***-1*** if the element does not exist in the array.

```
const pals = ['Steve', 'Tom', 'Vinny', 'Abram', 'Tom'] 

console.log(pals.indexOf('Tom') //1
```


**4. lastIndexOf()**

This method returns the index of the **last occurrence** of an element in an array.

```
const pals = ['Steve', 'Tom', 'Vinny', 'Abram', 'Tom']

console.log(pals.lastIndexOf('Tom') //4
```


**5. push()**

This method allows you to add one or more elements at the **end** of an array and returns the new length of the array. You can provide as many parameters as you want to add them at the end of the array.

```
const nums =  [1, 2, 3, 4]

nums.push(5)

console.log(nums) //[1, 2, 3, 4, 5]
```


**6. pop()**

This method removes the **last** item from an array and returns it.

```
const nums = [3, 4, 5]

const lastItem = nums.pop() //5 Returns the last item

console.log(nums) //[3, 4]
```


**7. shift()**

This method removes the **first** element from an array and returns it. You can think of it as the opposite of the pop() method.

```
const nums = [3, 4, 5]

const firstItem = nums.shift() //3 Returns the first item

console.log(nums) //[4, 5]
```


**8. unshift()**

This method adds one or more elements at the **beginning** of an array and returns the new length of the array. You can think of it as the opposite of the push() method. If you provide more than one parameters, it will add them starting with the last one.

```
const nums = [2, 3, 4, 5]

nums.unshift(1) //Adds 0 at the start of the array [1, 2, 3, 4, 5]
```


**9. join()**

This method creates a **string** from an array by concatenating all the elements in that array. By default it uses a comma as a separator but you can specify your own custom separator: a space, a hyphen, e.t.c.

```
const cities = ['Nairobi', 'Mombasa', 'Kisumu']
cities.join(' ') //Nairobi Mombasa Kisumu
```


**10. reverse()**

This method reverses the elements in an array. The last element becomes the first and the first the last. The middle elements will also reverse. This method modifies the original array.

```
const nums = [1, 2, 3, 4, 5]

nums.reverse() // [5, 4, 3, 2, 1]
```


You can also use this method to reverse characters in a string:

```
const str = "Here we go!"

const res = str.split('').reverse().join('')

console.log(res) //"!og ew ereH"
```


**11. slice()**

This method returns a **portion** of an array. It does not modify the original array. You can provide the start and end index as parameters in the method. By default, the starting index is 0 and the end is array.length. Without parameters, you just get a shallow copy of the array. A negative number as parameter slices the array from the end.

```
const nums = [1, 2, 3, 4, 5]

nums.slice() //[1, 2, 3, 4, 5]

nums.slice(2, 4) //[3 ,4]

nums.slice(-3) //[3, 4, 5] ~the last 3 items
```


**12. splice()**

This method removes or replaces existing elements in the array. It gets the starting index, count(number of items to remove or replace) and optionally what to replace with. It returns the new array (removed items). This method modifies the original array.

In case you want to add more elements to the array without removing any, you can provide the count parameter with a value of 0. **Not the best way to add items to an array.**

```
const nums = [1, 2, 3, 4, 5]

nums.splice(2, 3) //[1, 2] ~removes 3 items starting at index 2 

nums.splice(2, 3, 6, 7) //[1, 2, 6, 7] ~replaces the items specified

nums.splice(2, 0, 6, 7) //[1, 2, 6, 7, 3, 4, 5]
```


**13. sort()**

This methods sorts the elements of an array in ascending order by default. It converts the elements from the **array** to **strings** then compare their sequences of **utf-16** code values.

```
const clubs = ['Leicester', 'Chelsea', 'Arsenal', 'Liverpool']

clubs.sort() //['Arsenal', 'Chelsea', 'Leicester', 'Liverpool']
```


To sort an array of numbers, this method will not work as expected because it converts the elements to strings first. To achieve what you expect, you can provide a compare function as a callback to the sort method. There are 3 possible outcomes in the callback function:

*&lt; 0 : a comes first*

*0 : no change*

*&gt; 0 : b comes first*

If you want to sort in descending order, you can **return b - a** in the callback function.

```
const nums = [79, 3, 6, 9, 23, 45, 22, 19, 104]

nums.sort(compare)

function compare(a, b){
    return a - b
}
```


**14. filter()**

This method creates a new array by removing all the elements in the array for which the callback function returns a **falsy** value. It does not modify the original array. The callback function gets the item, index and the array as parameters.

```
// return even numbers from nums array
const nums = [1, 2, 3, 4, 5, 6, 7, 8]

nums.filter(isEven) // [2, 4, 6, 8]

function isEven(item){
    return item % 2 === 0
}

// return adults from the array of objects
const pals = [
{
  name: "Steve",
  age: 17,
},
{
  name: "Tom",
  age: 25,
},
{
  name: "Abram",
  age: 23,
},
{
  name: "Vinny",
  age: 15,
},
];

pals.filter((pal) => pal.age > 18); /* [{name: "Tom", age: 25}, 
                                       {name: "Abram", age: 23}]
                                     */
```


You can use this method to remove duplicates from an array:

```
const nums = [1, 3, 4, 3, 5, 3, 1, 6, 7, 1]

nums.filter((item, index, arr) => arr.indexOf(item) === index) //[1, 3, 4, 5, 6, 7]
```


**15. every()**

This method executes a function on every item of an array and returns true only if the callback function returns a **truthy** value for all the elements in the array. I f a **falsy** value is encountered, it will return false immediately. The callback function gets the item, index and the array as parameters.

```
const nums = [1, 2, 3, 4, 5]

nums.every(isPositive) //true

function isPositive(item){
   return item > 0
}
```


**16. forEach()**

This method executes a given function on every item in an array. The callback function receives the item, index and the array as parameters.

```
const nums = [1, 2, 3, 4, 5]

let sum = 0

//sum of numbers in nums
nums.forEach(item => sum += item) //15


//letter frequency
const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a']

let count = {}

letters.forEach(item => {
     if(count[item]){
         count[item]++
          }
     else{
         count[item] = 1
    }
})
```


**17. map()**

This method executes a function on every element of an array and returns a new array. The callback function receives the item, index and the array as parameters. This method does not modify the original array.

```
const nums = [1, 2, 3, 4, 5]

nums.map(double)

//double each item in the array
function double(item){
   return item * 2
}
```


Photo: *Courtesy of [https://twitter.com/bim240](https://twitter.com/bim240)*

Happy learning -:)