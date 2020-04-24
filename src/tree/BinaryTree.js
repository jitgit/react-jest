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
			var newNode = new Node(newElement);
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
		var d = { depth: -1, depthSerial: {} };
		this.inorderRec(this.root, d, cb);
	}

	depth() {
		var d = { depth: -1, depthSerial: {} };
		var depth = -1;
		const cb = (v) => {
			depth = Math.max(depth, v.depth);
		};
		this.inorderRec(this.root, d, cb);
		return depth;
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
		var d = { depth: 0, depthSerial: {} };
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