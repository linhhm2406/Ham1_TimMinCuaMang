function find_min(array) {
    let result;
    if (array == "") {
        result='Tap rong';
    } else {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        } result=min
    }
    return result;
}

let arr1= [3, 5, 1, 8, -3, 7, 8];
let arr2= [7, 12, 6, 9, 20, 56, 89];
let arr3= [];
let arr4= [0, 0, 0, 0, 0, 0];

let result_arr1 = find_min(arr1);
document.write('Min cua mang Arr1 la : '+result_arr1+'<br>');
let result_arr2 = find_min(arr2);
document.write('Min cua mang Arr2 la : '+result_arr2+'<br>');
let result_arr3 = find_min(arr3);
document.write('Min cua mang Arr3 la : '+result_arr3+'<br>');
let result_arr4 = find_min(arr4);
document.write('Min cua mang Arr4 la : '+result_arr4+'<br>');