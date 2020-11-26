def shellSort(arr): 
  
    n = len(arr) 
    gap = n//2
  
   
    while gap > 0: 
  
        for i in range(gap,n): 
  
            temp = arr[i] 
  
            j = i 
            while  j >= gap and arr[j-gap] >temp: 
                arr[j] = arr[j-gap] 
                j -= gap 
            arr[j] = temp 
        gap = gap//2

arr = [ 12, 34, 54, 2, 3,11,10,9,8,6,98,78,984,94,949,4,944,9494] 
  
n = len(arr) 
print ("Array before sorting:") 
for i in range(n): 
    print(arr[i]), 
  
shellSort(arr) 
  
print ("\nArray after sorting:") 
for i in range(n): 
    print(arr[i]), 
  

