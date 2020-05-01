import Node from './Node';
import { assert } from 'chai';

describe('Node Test', () => {
	it('Node creation', () => {
		let n = new Node(2);
		assert.isNotNull(n);
		assert.isNotNull(n.value);
		assert.isNull(n.left);
		assert.isNull(n.right);
		console.log(n);
	});
});