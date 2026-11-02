def manual_reversed(lst):
    left = 0
    right = len(lst) - 1
    while left < right:
        lst[left], lst[right] = lst[right],lst[left]
        left +=1
        right -=1

def rev_word(s):
    words = []
    length = len(s)
    spaces = [' ']

    i = 0

    while i < length:
        if s[i] not in spaces:
            words_starts = i
            while i < length and s[i] not in spaces:
                i+=1
            words.append(s[words_starts:i])
        i+=1
    manual_reversed(words)
    return " ".join(words)

res = rev_word('   Hello John   how are you   ')
print(res)

