class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	toLocaleString() {
		return '' + this.value;
	}

}

export default Node;