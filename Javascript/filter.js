import {len} from "./length.js";

// call back fn -> boolean
function is_odd_number(current_element)
{
    return current_element & 1;
}

// implementation of filter
function filter(array, callback_function)
{
    let output = [];
    for(let i=0;i<len(array); i++)
    {
        if( callback_function(array[i]) )
            output.push(array[i]);
    }
    return output;
}

const array = [0, 5, 10, -3]
console.log(filter(array, is_odd_number));
