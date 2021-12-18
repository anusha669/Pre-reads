// call back function
function perfect_squares(current_value)
{
    return current_value*current_value;
}

// implementation of map
function map(array, callback_function)
{
    let output = [];
    for(let i =0; i <array.length; i++)
    {
        output.push(callback_function(array[i]));
    }
    return output;
}

let array = [10, 20, 2, 5, -3]
console.log(map(array, perfect_squares));