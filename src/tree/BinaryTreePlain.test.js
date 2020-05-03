import { assert } from 'chai';
import BinaryTreePlain from './BinaryTreePlain';

describe('BinaryTree Test', () => {

	it('BinaryTree creation', () => {
		let tree = new BinaryTreePlain();
		assert.isNotNull(tree);
	});

	it('BinaryTree inorder', () => {
		let tree = new BinaryTreePlain();

		'20 10 30 5 15'.split(' ').map(e => tree.add(parseInt(e.trim())));

		let s = '';
		const cb = (v) => {
			s = `${s} ${v.value}`;
		};
		tree.inorder(cb);
		console.log(s);
	});

	it('BinaryTree preorder', () => {
		let tree = new BinaryTreePlain();

		'20 10 30 5 15'.split(' ').map(e => tree.add(parseInt(e.trim())));

		let s = '';
		const cb = (v) => {
			s = `${s} ${v.value}`;
		};
		tree.preorder(cb);
		console.log(s);
	});

	it('assert correct depth', () => {
		let tree = new BinaryTreePlain();
		'20 10 30 5 15'.split(' ').map(e => tree.add(parseInt(e.trim())));
		assert.equal(tree.depth(), 2);
	});
});
