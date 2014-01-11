class Queue:
    def __init__(self):
        self.queue_list = []

    def enqueue(self, data):
        self.queue_list.insert(0, data)

    def dequeue(self):
        return self.queue_list.pop()

    def isEmpty(self):
        return self.queue_list == []

    def size(self):
        return len(self.queue_list)