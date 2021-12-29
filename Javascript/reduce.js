
import {len} from "./length.js";

function summation(accumulator, current)
{
    return accumulator + current;
}


function reduce(array, callback_function, initial_value)
{
    let accumulator = initial_value;
    for(let i=0;i< len(array) ;i++)
    {
        accumulator = callback_function(accumulator, array[i]);
    }
    return accumulator;
}

const array = [10, 30, 2, -5]
console.log( reduce(array, summation, 0) );
// arr.reduce( function(acc, curr), initial)