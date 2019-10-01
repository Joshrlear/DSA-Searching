# DSA-Searching

## Searching in a BST
### first
    preorder  : root[35]   left[25 15 14 19 27]   right[89 79 91 90]
    inorder   : left[14 15 19 25 27]   root[35]   right[79 89 90 91]
    postorder : left[14 19 15 27 25]   right[79 90 91 89]   root[35]

### second
    preorder  : root[8]   left[6 5 7]   right[10 9 11]
    inorder   : left[5 6 7]   root[8]   right[9 10 11]
    postorder : left[5 7 6]   right[9 11 10]   root[8]

**interesting note. it seems that the inorder automatically sorts in ascending order**

*the two findings below are only true with complete trees*
*if one of the hills or troughs is off you know that you are dealing with an imperfect tree*

**interesting note. it seems that the preorder follows V or trough formation, meaning: after first(root) keys descend till it hits the subtree root at which point it begins to ascend. there should be two V's or troughs**

**interesting note. opposite for postorder. it is in A or hill formation. it ascends till subtree root then decsends. there should be two A's or hills then finally the root is found**

## Egg drop
zero! are you crazy?! I don't know where you get your eggs from but where I come from, dropping an egg from 4 inches up breaks them. hell, look at it wrong and it might break on you.