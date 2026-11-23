def reverse(str):
    # Base Case 
    if len(str) <= 1:
        return str

    # Recrusion
    return reverse(str[1:]) + str[0]

# 'abc' -> 'cba'

print(reverse('abc'))