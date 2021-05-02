var nums = process.argv.slice(2);
var convert = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']

var out = "";

for (const ele of nums) {
	var num = Number.parseInt(ele);
	var segment = "";
	if (!Number.isNaN(num)) {
		if (num < 0) {
			out = out + "-";
			num = -num;
		}		
		while (num > 0) {
			segment = convert[num % 10] + segment;
			num = Math.floor(num / 10);
		}
		out = out + segment + ",";
	}
}

process.stdout.write(out.slice(0, -1))