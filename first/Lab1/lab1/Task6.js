function Merge(a,low,mid,high)   
{
    var b = new Array(high+1-low), j = mid+1, k, h = low, i = 0;
    while (h <= mid && j <= high )
    { 
       if (a[h] <= a[j]){ b[ i ]=a[h]; h++; }
       else             { b[ i ]=a[j]; j++; }
       i++;
    }
    if (h > mid){ for (k = j; k <= high; k++){ b[ i ]=a[k]; i++; } }
    else        { for (k = h; k <= mid; k++){  b[ i ]=a[k]; i++; } }    
    for (k=0; k<=high-low; k++) a[k+low]=b[k];
    return a;
}

function MergeSort(A)     
{
    function merge_sort(a,low,high)
     { if (low < high)
        { var mid = Math.floor((low+high)/2);
          merge_sort(a, low, mid);
          merge_sort(a, mid+1, high);
          Merge(a, low, mid, high);
        }
     }
    var n = A.length;
    merge_sort(A, 0, n-1);
    return A;
}

let arr = MergeSort([1,2,4,8,10,7,102,55]);
console.log(arr);