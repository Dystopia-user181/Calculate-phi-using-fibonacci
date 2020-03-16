var system = {
	fib1: new Decimal(1),
	fib2: new Decimal(0),
	it: 0,
	phi: new Decimal(1),
	cont: false,
	calculate: function () {
		system.it += 1;
		system.fib1 = system.fib1.add(system.fib2);
		system.fib2 = system.fib2.add(system.fib1);
	}
}
var x;
function calculatephi() {
	if (!system.cont) {
		x = setInterval(function () {
			for (var i = 0; i < 2000; i++){
				system.calculate();
			}
			Decimal.set({ precision: system.it*10 })
			if (system.fib1.gte(system.fib2)) {
				system.phi = system.fib1.div(system.fib2);
			} else {
				system.phi = system.fib2.div(system.fib1);
			}
			document.getElementById("phi").innerHTML = system.phi.toString();
		}, 10)
		document.getElementById("clickMe").innerHTML = "Click me or press \"C\" to stop calculating phi";
		system.cont = true;
	} else {
		clearInterval(x);
		document.getElementById("clickMe").innerHTML = "Click me or press \"C\" to start calculating phi";
		system.cont = false;
	}
}
document.addEventListener("keydown", function (e) {
	if (e.which == 67) {
		calculatephi();
	}
});