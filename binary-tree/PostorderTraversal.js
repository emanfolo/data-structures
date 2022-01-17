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
root.right = new BinaryTreeNode(5)
root.left.left = new BinaryTreeNode(4)
root.left.right = new BinaryTreeNode(17)
root.right.right = new BinaryTreeNode(11)
root.right.left = new BinaryTreeNode(99)