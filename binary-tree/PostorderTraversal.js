// Order L -> R -> N

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
root = new BinaryTreeNode(1)
root.left = new BinaryTreeNode(2)
root.left.left = new BinaryTreeNode(3)
root.left.left.right = new BinaryTreeNode(4)

root.left.right = new BinaryTreeNode(5)
root.left.right.right = new BinaryTreeNode(7)
root.left.right.left = new BinaryTreeNode(6)

root.right = new BinaryTreeNode(8)
root.right.right = new BinaryTreeNode(10)
root.right.left = new BinaryTreeNode(9)

function preOrder(node) {
   let output = []
    if (node){
      console.log(node.data)
      output.push(node.data);
      if (!!node.left) output = output.concat(preOrder(node.left));
      if (!!node.right) output = output.concat(preOrder(node.right)); 
      }
    return output
}

preOrder(root)