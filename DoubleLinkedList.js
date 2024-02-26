class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null; // указатель на начало списка
        this.tail = null; // указатель на конец списка
        this.length = 0; // длина списка
    }

    // Метод для поиска элемента в списке
    find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current; // возвращаем узел, если данные совпали
            }
            current = current.next;
        }
        return null; // возвращаем null, если элемент не найден
    }

    // Метод для вставки элемента в конец списка
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // Метод для вставки элемента в начало списка
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    // Метод для удаления элемента по значению
    delete(data) {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                this.length--;
                return;
            }

            current = current.next;
        }
    }

    // Метод для изменения значения элемента по старому значению
    update(oldData, newData) {
        const nodeToUpdate = this.find(oldData);
        if (nodeToUpdate) {
            nodeToUpdate.data = newData;
        }
    }

    // Метод для определения длины списка
    getLength() {
        return this.length;
      }    
}

const myList = new DoubleLinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

console.log("Original List:");
console.log(myList);

myList.prepend(0);
console.log("\nList after prepending 0:");
console.log(myList);

myList.delete(2);
console.log("\nList after deleting 2:");
console.log(myList);

myList.update(1, 10);
console.log("\nList after updating 1 to 10:");
console.log(myList);

console.log("\nLength of the list:", myList.getLength());
