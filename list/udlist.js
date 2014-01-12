function UdNode(init_data) {
    this.data = init_data;
    this.next = null;
}

UdNode.prototype.setData = function(n_data) {
    this.data = n_data;
}

UdNode.prototype.setNext = function(n_next) {
    this.next = n_next;
}

UdNode.prototype.getData = function() {
    return this.data;
}

UdNode.prototype.getNext = function() {
    return this.next;
}

function UdList(init_data) {
    this.first = null;
}

UdList.prototype.add = function(data) {
    var new_node = new UdNode(data);
    new_node.setNext(this.first);
    this.first = new_node;
}

UdList.prototype.search = function(data) {
    var current_node = this.first;
    while (current_node !== null) {
        if (current_node.getData() === data) {
            return true;
        } else {
            current_node = current_node.getNext();
        }
    }

    return false;
}

UdList.prototype.remove = function(data) {
    if (this.first.getData() === data) {
        this.first = this.first.getNext();
        return true;
    } else {
        var previous_node = this.first;
        var current_node = this.first.getNext();
        while (current_node !== null) {
            if (current_node.getData() === data) {
                previous_node.setNext(current_node.getNext());
                return true;
            } else {
                previous_node = current_node;
                current_node = current_node.getNext();
            }
        }
    }
}

UdList.prototype.isEmpty = function() {
    return self.first === null;
}

UdList.prototype.size = function() {
    var current_node = this.first;
    var size = 0;
    while (current_node !== null) {
        current_node = current_node.getNext();
        size++;
    }
    return size;
}

//TEST FUNCTIONS

function print(data) {
    console.log(data);
}

print("Initializing");
ud = new UdList();
print("Adding 1 - 5");
ud.add(1);
ud.add(2);
ud.add(3);
ud.add(4);
ud.add(5);
print( "Assert false: " + ud.search('4') );
print( "Assert true: " + ud.search(4) );
print( "Assert size 5: " + ud.size() );
print( "Removed 5: " + ud.remove(5) );
print( "Assert size 4: " + ud.size() );
print( "Assert false: " + ud.search(5) );