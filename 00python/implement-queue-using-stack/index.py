class Queue2Stack(object):
    def __int__(self):
        self.instack = []
        self.outstack = []

    def enqueue(self,element):
        self.instack.append(element)

    def deqeue(self):
        if not self.outstack:
            while self.instack:
                self.outstack.append(self.instack.pop())
        return self.outstack.pop()