#Unidirectional node = The node only knows its next, not its previous, etc.
class UdNode:
    def __init__(self, init_data):
        self.data = init_data
        self.next = None

    def setData(self, n_data):
        self.data = n_data

    def setNext(self, n_next):
        self.next = n_next

    def getData(self):
        return self.data

    def getNext(self):
        return self.next

#Unidirectional List
class UdList:
    def __init__(self):
        self.first = None

    def add(self, data):
        new_node = UdNode(data)
        new_node.setNext(self.first)
        self.first = new_node

    #Returns true if the data is found in a node in the list
    def search(self, data):
        current_node = self.first
        while current_node is not None:
            if current_node.getData() is data:
                return True
            current_node = current_node.getNext()
        return False

    #removes the most recently added node with that data
    #returns True if the value is found and removed
    #otherwise returns False
    def remove(self, data):
        if self.first.getData() is data:
            self.first = self.first.getNext()
            return True
        else:
            previous_node = self.first
            current_node = self.first.getNext()
            while current_node is not None:
                if current_node.getData() is data:
                    previous_node.setNext(current_node.getNext())
                    return True
                previous_node = current_node
                current_node = current_node.getNext()
            return False


    def isEmpty(self):
        return self.first is None

    def size(self):
        current_node = self.first
        size = 0
        while current_node is not None:
            current_node = current_node.getNext()
            size += 1
        return size