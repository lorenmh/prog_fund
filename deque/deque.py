class Deque:
    def __init__(self):
        self.deque_list = []

    def addFront(self, data):
        self.deque_list.append(data)

    def addRear(self, data):
        self.deque_list.insert(0, data)

    def removeFront(self):
        return self.deque_list.pop()

    def removeRear(self):
        return self.deque_list.pop(0)

    def isEmpty(self):
        return self.deque_list == []

    def size(self):
        return len(self.deque_list)