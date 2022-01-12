let reverseLinkedList = (head) => {
  let curr = head
  let prev = null
  let next = null
  while(curr != null){
      next = curr.next
      curr.next = prev 
      prev = curr
      curr = next
  }
  return prev
}

const linkedList1 = {
  val: 87, 
  next: {
    val: 999,
    next: {
      val: 36.5, 
      next: null,
    }
  }
}

const linkedList2 = {
  val: 178, 
  next: {
    val: 19,
    next: {
      val: 34, 
      next: null,
    }
  }
}

const linkedList3 = {
  val: 8, 
  next: {
    val: 360,
    next: {
      val: 290, 
      next: null,
    }
  }
}

console.log(reverseLinkedList(linkedList1))
console.log(reverseLinkedList(linkedList2))
console.log(reverseLinkedList(linkedList3))