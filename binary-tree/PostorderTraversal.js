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
root = new BinaryTreeNode(11)
root.left = new BinaryTreeNode(7)
root.left.left = new BinaryTreeNode(2)
root.left.left.right = new BinaryTreeNode(1)

root.left.right = new BinaryTreeNode(6)
root.left.right.right = new BinaryTreeNode(5)
root.left.right.left = new BinaryTreeNode(4)

root.right = new BinaryTreeNode(10)
root.right.right = new BinaryTreeNode(9)
root.right.left = new BinaryTreeNode(8)

function postOrder(node) {
   let output = []
    if (node){
      if (!!node.left) output = output.concat(postOrder(node.left));
      if (!!node.right) output = output.concat(postOrder(node.right)); 
      console.log(node.data)
      output.push(node.data);
      }
    return output
}

postOrder(root)