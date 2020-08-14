function getFirstTwoItemsWithoutPair(list) {
    for(let item of list){
        const copy = item;
        const final = [];
        list.shift();
        if(list.indexOf(copy) == -1) {
            final.push(copy);
        }
        return final;
    }
}

console.log(getFirstTwoItemsWithoutPair([2,2,4,5,7,5,7,8]));



