class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.depth = -2;
	}

	toString() {
		return '' + this.value;
	}

}

export default Node;