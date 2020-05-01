import Node from './Node';
import BinaryTree from './BinaryTree';

export default class BinaryTreePlain extends BinaryTree {

	constructor() {
		super();
	}

	preorder(cb) {
		let d = { depthSerial: {} };
		let current = this.root;
		let stack = [];
		let count = 0;
		while (current != null || stack.length > 0) {
			if (current) {
				current.depth++;
				stack.push(current);
			}

			if (current && current.left) {
				d.relation = 'left';
				if (current.left) current.left.depth = current.depth;
				current = current.left;

			} else {
				if (stack.length > 0) {
					let display = stack.pop();

					d.depthSerial[display.depth] = (d.depthSerial[display.depth] || 0) + 1;
					cb({
						depth: display.depth,
						depthSerial: d.depthSerial[display.depth],
						value: display.value,
						relation: display.depth == 1 ? 'root' : d.relation
					});
					d.relation = 'right';
					current = display.right;
					if (current) current.depth = display.depth;
				}
			}
		}
	}
}