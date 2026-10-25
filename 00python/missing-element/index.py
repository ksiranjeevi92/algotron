def find_missingelm1(arr1,arr2):
    arr1.sort()
    arr2.sort()

    for num1 , num2 in zip(arr1, arr2):
        print(num1)
        if num1 != num2:
            return num1
    return arr1[-1]

arr1= [1,2,3,4,5,6,7]
arr2= [3,7,2,1,4,6]
#print (find_missingelm1(arr1,arr2))

def find_missingelm2(arr1,arr2):
    map = {}

    for num in arr2:
        if num in map:
            map[num] +=1
        else:
            map[num] = 1
   # print(map)
    for num in arr1:
        if num not in map:
            return num
        else: map[num] -= 1

print(find_missingelm2(arr1, arr2))