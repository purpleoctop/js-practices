var arr=[3, 4, 7, 1, 8, 6, 9, 2, 5, 10]
var temp;

        for (i = 0; i < 10; ++i) 
        {
 
            for (j = i + 1; j <10; ++j)
            {
 
                if (arr[i] > arr[j]) 
                {
                    temp =  arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }    
        }   

        for (i = 0; i < 10; ++i){
            console.log(arr[i]);
        }