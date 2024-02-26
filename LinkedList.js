class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    // Метод для поиска узла по значению
    find(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return current;  // возвращаем узел, если данные совпали
        }
        current = current.next;
      }
      return null;  // возвращаем null, если элемент не найден
    }
  
    // Метод для вставки элемента в конец списка
    append(data) {
      const newNode = new ListNode(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
  
      this.length++;
    }
  
    // Метод для вставки элемента в начало списка
    prepend(data) {
      const newNode = new ListNode(data);
      newNode.next = this.head;
      this.head = newNode;
  
      this.length++;
    }
  
    // Метод для удаления элемента по значению
    delete(data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        this.length--;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          this.length--;
          return;
        }
        current = current.next;
      }
    }
  
    // Метод для изменения значения элемента по старому значению
    update(oldData, newData) {
      let current = this.head;
      while (current) {
        if (current.data === oldData) {
          current.data = newData;
          return;
        }
        current = current.next;
      }
    }
  
    // Метод для определения длины списка
    getLength() {
      return this.length;
    }
  }
  
  // Пример использования класса
  const myList = new LinkedList();
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
  