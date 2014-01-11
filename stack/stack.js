//Stack constructor
function Stack() {
    this.stack_list = [];
}

Stack.prototype.push = function(data) {
    this.stack_list.push(data);
};

//Will throw an error if stack_list is empty!
Stack.prototype.pop = function() {
    return this.stack_list.pop();
}

//Will throw an error if stack_list is empty!
Stack.prototype.peek = function() {
    return this.stack_list[this.stack_list.length - 1]
}

Stack.prototype.isEmpty = function() {
    return this.stack_list.length === 0;
}

Stack.prototype.size = function() {
    return this.stack_list.length;
}

//TESTING FUNCTIONS

function print(data) {
    console.log(data);
}

print("Initializing Stack");
st = new Stack();
print("Pushing 'World'");
st.push("World");
print( "Peek: " + st.peek() );
print( "isEmpty: " + st.isEmpty() );
print("Pushing 'Hello'");
st.push("Hello");
print( "Size: " + st.size() );
print( "Pop: " + st.pop() );
print( "Pop: " + st.pop() );
print( "isEmpty: " + st.isEmpty() );