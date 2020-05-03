
class RamaIterator {
	constructor(a) {
		this.a = a;
		this.idx = 0;
		this.repeat = 0;
		this.nextIsLast = false;
	}

	hasNext(sep) {
		const b = this.idx < this.a.length - 1 && !this.nextIsLast;
		// console.log(`${sep || ''}hasNext : ${b}, idx:${this.idx}, a.length:${this.a.length}`);
		return b;
	}


	next() {
		const r = (a, idx, rpt) => {
			const e = a[idx];
			const f = a[idx + 1];
			if (rpt < f) {
				this.repeat++;
				this.nextIsLast = f == rpt + 1 && this.idx == a.length - 2;
				return e;
			} else {
				if (this.hasNext('==>')) {
					this.repeat = 0;
					this.idx += 2;
					return r(a, this.idx, this.repeat);
				}
			}
		};
		const result = r(this.a, this.idx, this.repeat);
		if (result) {
			return result;
		}
	}


}

describe('Iterator Test', () => {

	it('Iterator with frequency', () => {
		let a = [1, 2, 2, 3, 3, 5, 4, 0, 5, 6, 6, 1];
		let it = new RamaIterator(a);
		let s = '';
		while (it.hasNext()) {
			s = `${s} ${it.next()}`;
		}
		console.log(s);
	});
});