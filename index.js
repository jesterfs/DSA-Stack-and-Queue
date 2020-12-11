// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
  console.log(stack.top)
}

function isEmpty(stack) {
  if(stack.top === null) {
    console.log('Stack is empty')
  } else {
    console.log('Stack is not empty')
  }
}

function display(stack) {
  const values = [];
  let a = stack.top;

  while (a) {
    values.push(a.data);
    a = a.next;
  }


  console.log(`Stack: (top) ${values.join(', ')}`);
}

function main() {
  let starTrek = new Stack()
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  this.display(starTrek)
}

main()

//Kirk, Spock, McCoy, and Scotty