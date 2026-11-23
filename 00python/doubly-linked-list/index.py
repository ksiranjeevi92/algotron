class DoublyLinkedListNode(object):
    """Soubly linked list impl"""
    def __int__(self,value):
        self.value = value
        self.next_node = None
        self.prev_node = None

a = DoublyLinkedListNode(1)
b= DoublyLinkedListNode(2)
c =DoublyLinkedListNode(3)

a.next_node = b
b.next_node = c
b.prev_node = a
c.prev_node = b
