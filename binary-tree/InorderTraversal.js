// Order L -> N -> R

class BinaryTreeNode
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = null
root = new BinaryTreeNode(7)
root.left = new BinaryTreeNode(3)
root.right = new BinaryTreeNode(9)
root.left.left = new BinaryTreeNode(1)
root.left.left.right = new BinaryTreeNode(2)
root.left.right = new BinaryTreeNode(5)
root.left.right.right = new BinaryTreeNode(6)
root.left.right.left = new BinaryTreeNode(4)
root.right.right = new BinaryTreeNode(10)
root.right.left = new BinaryTreeNode(8)

function inOrder(node) {
   let output = []
    if (node){
      if (!!node.left) output = output.concat(inOrder(node.left));
      console.log(node.data)
      output.push(node.data);
      if (!!node.right) output = output.concat(inOrder(node.right)); 
      }
    return output
}

inOrder(root)




// function inOrder(node) { 
//    node.left && inOrder(node.left) 
//    console.log(node.val) 
//    node.right && inOrder(node.right) 
// }