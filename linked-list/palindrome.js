let checkPalindrome = (head) => {
    let slow = head, fast = head, prev, temp
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next
        prev = slow, slow = slow.next, prev.next = null
    while (slow)
        temp = slow.next, slow.next = prev, prev = slow, slow = temp
        fast = head, slow = prev
    while (slow)
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    return true
}

const linkedList1 = {
  val: 5, 
  next: {
    val: 10,
    next: {
      val: 3, 
      next: null,
    }
  }
}

const linkedList2 = {
  val: 1, 
  next: {
    val: 10,
    next: {
      val: 1, 
      next: null,
    }
  }
}

const linkedList3 = {
  val: 5, 
  next: {
    val: 1,
    next: {
      val: 5, 
      next: null,
    }
  }
}

console.log(checkPalindrome(linkedList1))
console.log(checkPalindrome(linkedList2))
console.log(checkPalindrome(linkedList3))