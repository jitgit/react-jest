import { assert, expect } from 'chai';
import BinaryTreeRecursive from './BinaryTreeRecursive';
import Node from './Node';

describe('BinaryTree Test', () => {

	it('BinaryTree creation', () => {
		let tree = new BinaryTreeRecursive();
		assert.isNotNull(tree);
		// assert.isNull(tree.root);
		// expect(tree.root).to.be.instanceOf(Node);
	});

	it('BinaryTree addition', () => {
		let tree = new BinaryTreeRecursive();

		'20 10 30 5 15'.split(' ').map(e => tree.add(parseInt(e.trim())));

		const cb = (v) => {
			console.log('-->', v);
		};
		tree.inorder(cb);
	});

	it('BinaryTree preorder', () => {
		let tree = new BinaryTreeRecursive();

		'20 10 30 5 15'.split(' ').map(e => tree.add(parseInt(e.trim())));

		const cb = (v) => {
			console.log('-->', v);
		};
		tree.preorder(cb);
	});

	it('assert correct depth', () => {
		let tree = new BinaryTreeRecursive();
		'20 10 30 5 15'.split(' ').map(e => tree.add(parseInt(e.trim())));
		assert.equal(tree.depth(), 2);
	});
});
