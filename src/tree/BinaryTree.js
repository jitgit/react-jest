import Node from './Node';

export default class BinaryTree {

	constructor() {
		this.root = undefined;
	}


	add(newElement) {
		this.root = this.addRec(this.root, newElement);
	}

	addRec(node, newElement) {
		if (!node) {
			let newNode = new Node(newElement);
			return newNode;
		}
		if (newElement < node.value) {
			node.left = this.addRec(node.left, newElement);
		} else {
			node.right = this.addRec(node.right, newElement);
		}
		return node;
	}


	depth() {
		let maxDepth = -1;
		const cb = (v) => {
			maxDepth = Math.max(maxDepth, v.depth);
		};
		this.preorder(cb);
		return maxDepth;
	}
}