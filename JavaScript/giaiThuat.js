function segregateEvenOdd(arr) {
    var left = 0, right = arr.length - 1;
    while (left < right) {
        while (arr[left] % 2 == 0 && left < right)
            left++;

        while (arr[right] % 2 == 1 && left < right)
            right--;

        if (left < right) {
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}


var arr = [12, 34, 45, 9, 8, 90, 3];

segregateEvenOdd(arr);
document.write("Array after segregation ");
for (i = 0; i < arr.length; i++)
    document.write(arr[i] + " ");