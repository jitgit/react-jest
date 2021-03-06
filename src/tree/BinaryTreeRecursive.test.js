import { assert } from 'chai';
import BinaryTreeRecursive from './BinaryTreeRecursive';

describe('BinaryTree Test', () => {

	it('BinaryTree creation', () => {
		let tree = new BinaryTreeRecursive();
		assert.isNotNull(tree);
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
