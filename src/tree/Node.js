class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.depth = -1;
	}

	toString() {
		return '' + this.value;
	}

}

export default Node;