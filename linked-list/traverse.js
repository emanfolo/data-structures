const linkedList = {
  val: 5, 
  next: {
    val: 10,
    next: {
      val: 3, 
      next: null,
    }
  }
}

const arr = [];
let head = linkedList;

while(head != null) {
  arr.push(head.val)
  head = head.next
}

console.log(arr)