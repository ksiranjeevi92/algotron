from typing import Dict, Optional

def find_max(list):
    if len(list) == 0:
        return None
    res: Optional[int] = None
    numMap: Dict[int, int] = {}
    max: int = 0

    for num in list:
        numMap[num] = numMap.get(num, 0) + 1
        if numMap[num] > max:
            max = numMap[num]
            res = num
    return res

print(find_max([1, 3, 1, 3, 2, 1, 3, 3]))
