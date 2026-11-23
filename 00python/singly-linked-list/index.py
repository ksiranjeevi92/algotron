

class Node(object):
    """Singly Linked list impl"""

    def __init__(self,value):
        self.value = value
        self.nextnode = None

a = Node(1)
b = Node(2)
c = Node(3)
d = Node(4)
e = Node(5)

a.nextnode = b
b.nextnode = c
c.nextnode = d
d.nextnode = e


def nth_to_last_node(n, head):
    # 1. Validate inputs before traversing
    if not head or n <= 0:
        raise ValueError("Head cannot be None and n must be a positive integer.")

    left_pointer = head
    right_pointer = head

    # 2. Advance right_pointer (n - 1) steps ahead (using range for Python 3)
    for _ in range(n - 1):
        if not right_pointer.nextnode:
            raise LookupError("Error: n is larger than the linked list.")
        right_pointer = right_pointer.nextnode

    # 3. Move both pointers together until right_pointer reaches the tail
    while right_pointer.nextnode:
        left_pointer = left_pointer.nextnode
        right_pointer = right_pointer.nextnode

    return left_pointer

print(nth_to_last_node(3,b).value)