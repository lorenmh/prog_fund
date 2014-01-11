class Stack:

    ##Stack constructor##
    #Initializes our list for data
    def __init__(self):
        self.stack_list = [];

    ##push method##
    #adds a piece of data to the end of list
    def push(self, data):
        self.stack_list.append(data)

    ##pop method##
    #removes and returns the last element in the stack
    def pop(self):
        return self.stack_list.pop()

    ##peek method##
    #returns the last element in the stack without removal
    def peek(self):
        return self.stack_list[len(self.stack_list) - 1]

    ##isEmpty method##
    #returns true if the stack is empty
    def isEmpty(self):
        return self.stack_list == []

    ##size method##
    #returns the size / length of the stack
    def size(self):
        return len(self.stack_list)