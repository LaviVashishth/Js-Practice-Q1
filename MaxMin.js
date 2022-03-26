function MinNum(elements){
    var length = elements.length;
    minimum = elements[length-1];
    while (length--){
        if(elements[length] < minimum){
            minimum = elements[length]
        }
    }
    return minimum;
};
var elements = [1, 5, 6, 2, 3];
var m = MinNum(elements);
console.log(m)

function MaxNum(elements){
    var length = elements.length;
    maximum = elements[length-1];
    while (length--){
        if(elements[length] > maximum){
            maximum = elements[length]
        }
    }
            return maximum;
};
var elements = [1, 5, 6, 2, 3];
var m = MaxNum(elements);
console.log(m)