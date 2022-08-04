/** function to choose a random items form the array of items */
function choice(items){
   let randIdx = Math.floor(Math.random() * items.length); 
    return items[randIdx];
}

/** A function to remove the first matching item from items, if item exists, and returns it. Otherwise returns undefined */

function remove(items, item){
    for (let i = 0; i < items.length; i++){
        if(items[i] === item){
            return [...items.slice(0, i), ...items.slice(i+1)]
        } 
    }
}

export {choice, remove};