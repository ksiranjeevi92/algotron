def permute(str):
    out = []
    # Base
    if len(str) == 1:
        out = [str]

    # Recrusion
    # for every letter in string
    for i, let in enumerate(str):
        for perm in permute(str[:i] + str[i+1:]):
            out += [let+perm]

    return out

print(permute("abc"))

