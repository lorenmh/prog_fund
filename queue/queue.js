function Queue() {
    this.queue_list = [];
}

Queue.prototype.enqueue = function(data) {
    this.queue_list.splice(0, 0, data);
}

Queue.prototype.dequeue = function() {
    return this.queue_list.pop();
}

Queue.prototype.isEmpty = function() {
    return this.queue_list.length === 0;
}

Queue.prototype.size = function() {
    return this.queue_list.length;
}

//TESTING FUNCTIONS

function print(data) {
    console.log(data);
}

print("Initializing Queue");
qu = new Queue();
print("Enqueueing 'Hello'");
qu.enqueue("Hello");
print( "isEmpty: " + qu.isEmpty() );
print("Enqueueing 'World'");
qu.enqueue("World");
print( "Size: " + qu.size() );
print( "Dequeue: " + qu.dequeue() );
print( "Dequeue: " + qu.dequeue() );
print( "isEmpty: " + qu.isEmpty() );