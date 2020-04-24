import { assert, expect } from 'chai';
import BinaryTree from './BinaryTree';
import Node from './Node';

describe('BinaryTree Test', () => {

  it('BinaryTree creation', () => {
    var tree = new BinaryTree();
    assert.isNotNull(tree);
    // assert.isNull(tree.root);
    // expect(tree.root).to.be.instanceOf(Node);
  });

  it('BinaryTree addition', () => {
    var tree = new BinaryTree();

    '20 10 30 5 15'.split(' ').map(e => tree.add(parseInt(e.trim())))

    const cb = (v) => {
      console.log('-->', v);
    };
    tree.inorder(cb);
  });

  it('BinaryTree preorder', () => {
    var tree = new BinaryTree();

    '20 10 30 5 15'.split(' ').map(e => tree.add(parseInt(e.trim())))

    const cb = (v) => {
      console.log('-->', v);
    };
    tree.preorder(cb);
  });
});
