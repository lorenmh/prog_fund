function Deque() {
    this.deque_list = [];
}

Deque.prototype.addFront = function(data) {
    this.deque_list.push(data);
}

Deque.prototype.addRear = function(data) {
    this.deque_list.splice(0,0,data);
}

Deque.prototype.removeFront = function() {
    return this.deque_list.pop();
}

Deque.prototype.removeRear = function() {
    return this.deque_list.splice(0,1)[0];
}

Deque.prototype.isEmpty = function() {
    return this.deque_list.length === 0;
}

Deque.prototype.size = function() {
    return this.deque_list.length;
}

//TESTING FUNCTIONS

function print(data) {
    console.log(data);
}

print("Initializing Deque");
dq = new Deque();
print("AddFront: 'bar'");
dq.addFront("bar");
print("AddRear: 'foo'");
dq.addRear("foo");
print("AddFront: 'Hello'");
dq.addFront("Hello");
print("AddRear: 'World'");
dq.addRear("World");
print( "Size: " + dq.size() );
print("Removing Front +  Rear");
print( dq.removeFront() + ' ' + dq.removeRear() );
print("Removing Rear + Front");
print( dq.removeRear() + ' ' + dq.removeFront() );
print( "isEmpty: " + dq.isEmpty() );