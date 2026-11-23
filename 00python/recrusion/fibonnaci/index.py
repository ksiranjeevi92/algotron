def fib_rec(n):
    if n == 0 or n==1: 
        return n
    else:
        return fib_rec(n-1) + fib_rec(n-2)
    

print(fib_rec(10))


def fib_dyn(n, cache=None):
    if cache is None:
        cache = {}

    if n==0 or n==1:
        return n
    
    if n in cache:
        return cache[n]
    
    cache[n] = fib_dyn(n-1, cache) + fib_dyn(n-2, cache)
    return cache[n]



print(fib_dyn(10))