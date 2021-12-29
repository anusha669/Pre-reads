// Map                                         vs                  forEach 
// 1. returns new array                                returns undefined => applies function & prints but doesnot return
// 2. you can avoid mutating input array               callback fn mutates
// 3. create new o/p arr & assign value                assign result to i/p arr 
//    => lower perf compared to forEach

import {len} from "./length.js";

function callback(current)
{
    console.log(current*current);
}

function forEach(array, callback_function)
{   
    for(let i=0; i< len(array); i++)
    {
        callback_function(array[i]);
    }
    return undefined;
}

console.log( forEach( [5, 3, 6.1, -1], callback) ) ;
