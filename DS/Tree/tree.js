class Node{
  constructor(value){
      this.value=value
      this.left=null
      this.right=null
  }
}

function checkBST(root,min=Number.MIN_SAFE_INTEGER,max=Number.MAX_SAFE_INTEGER){
  if(root==null){
      return true;
  }

  if(root.value<min || root.value>max){
      return false
  }

  return checkBST(root.left,min,root.value)&&checkBST(root.right,root.value,max);

}

let tree1=new Node(10)
tree1.left=new Node(4)
tree1.right=new Node(17)
tree1.left.left=new Node(3)
tree1.left.right=new Node(9)
tree1.right.left=new Node(12)
console.log(checkBST(tree1));