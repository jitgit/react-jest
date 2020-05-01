import Node from './Node';
import BinaryTree from './BinaryTree';

export default class BinaryTreeRecursive extends BinaryTree {

	constructor() {
		super();
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

	inorder(cb) {
		let d = { depth: -1, depthSerial: {} };
		this.inorderRec(this.root, d, cb);
	}

	inorderRec(n, d, cb) {
		if (n) {
			d.depth++;
			d.relation = 'left';
			this.inorderRec(n.left, d, cb);

			if (cb) {
				d.depthSerial[d.depth] = (d.depthSerial[d.depth] || 0) + 1;
				cb({
					depth: d.depth,
					depthSerial: d.depthSerial[d.depth],
					value: n.value,
					relation: d.depth > 0 ? d.relation : 'root'
				});
			}

			d.relation = 'right';
			this.inorderRec(n.right, d, cb);

			d.depth--;
		}
	}

	preorder(cb) {
		let d = { depth: 0, depthSerial: {} };
		this.preorderRec(this.root, d, cb);
	}

	preorderRec(n, d, cb) {
		if (n) {
			if (cb) {
				d.depthSerial[d.depth] = (d.depthSerial[d.depth] || 0) + 1;
				cb({
					depth: d.depth,
					depthSerial: d.depthSerial[d.depth],
					value: n.value,
					relation: d.depth > 0 ? d.relation : 'root'
				});
			}

			d.depth++;
			d.relation = 'left';
			this.preorderRec(n.left, d, cb);

			d.relation = 'right';
			this.preorderRec(n.right, d, cb);

			d.depth--;
		}
	}



}