function Farey(n){
	var a=0, b=1, c=1, d=n;
	var res = [[a,b]];
	var p, q;
	while(c<=n){
		res.push([c,d]);
		k = Math.floor((n+b)/d);
		p = k*c - a;
		q = k*d - b;
		a = c; b = d;
		c = p; d = q;
	}
	return res;
}

function ratapprox(value, den){
	let n = [0, 1], p = [1, 1];
	while(true){
		let [a, b] = p;
		let [c, d] = n;
		let m = a+c, q = b+d;
		if(q >= den){
			break;
		}		
		let cur = [m, q], app = m/q;
		if(value === app){
			return [cur];
		}
		else if(value > app){
			n = cur;
		}
		else{
			p = cur;
		}

	}
	
	return [n, p];
}


module.exports = {Farey};