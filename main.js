var system = {
	fake: new Decimal(0),
	accuracy: new Decimal(0),
	real: new Decimal(3),
	cont: false,
	calculate: function () {
		system.accuracy = system.accuracy.add(2);
		system.fake = system.fake.add(new Decimal(4).div(system.accuracy.mul(system.accuracy.add(1)).mul(system.accuracy.add(2))));
		system.accuracy = system.accuracy.add(2);
		system.fake = system.fake.sub(new Decimal(4).div(system.accuracy.mul(system.accuracy.add(1)).mul(system.accuracy.add(2))));
	}
}
Decimal.set({ precision: 1500 })
var x;
function calculatepi() {
	if (!system.cont) {
		x = setInterval(function () {
			for (var i = 0; i < 2000; i++){
				system.calculate();
			}
			system.real = system.fake.add(3);
			document.getElementById("pi").innerHTML = system.real.toString();
		}, 10)
		document.getElementById("clickMe").innerHTML = "Click me to stop calculating pi";
		system.cont = true;
	} else {
		clearInterval(x);
		document.getElementById("clickMe").innerHTML = "Click me to start calculating pi";
		system.cont = false;
	}
}