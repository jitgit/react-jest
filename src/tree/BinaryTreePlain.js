import BinaryTree from './BinaryTree';

export default class BinaryTreePlain extends BinaryTree {

	constructor() {
		super();
	}

	preorder(cb) {
		const d = { depthSerial: {} };
		let current = this.root;
		const stack = [];
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
					const display = stack.pop();

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

	inorder(cb) {
		const d = { depthSerial: {} };
		let current = this.root;
		const stack = [];
		while (current != null || stack.length > 0) {
			if (current) {
				current.depth++;
				stack.push(current);

				const display = current;

				d.depthSerial[display.depth] = (d.depthSerial[display.depth] || 0) + 1;
				cb({
					depth: display.depth,
					depthSerial: d.depthSerial[display.depth],
					value: display.value,
					relation: display.depth == 1 ? 'root' : d.relation
				});
			}

			if (current && current.left) {
				d.relation = 'left';
				if (current.left) current.left.depth = current.depth;
				current = current.left;

			} else {
				if (stack.length > 0) {
					const display = stack.pop();
					d.relation = 'right';
					current = display.right;
					if (current) current.depth = display.depth;
				}
			}
		}
	}
}