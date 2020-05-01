function wait(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}

console.log(
	'Hey there!  I am an example of how this shit backfires with %cvar',
	'background:#0091ea;color: white;border:2px solid black;padding:2px 5px;'
);
wait(3000)
	.then(() => {
		console.log("\nOk let's get this program running ...");
		return wait(3000);
	})
	.then(() => {
		console.log('\nFor loop beginning to run:');
		return wait(1000);
	})
	.then(() => {
		for (i = 0; i < 10; i++) {
			var h3 = $(`<h3 class="text-center">Accusation ${i}</h3>`);
			$('body').append(h3);
			h3.click(function () {
				wait(500)
					.then(() => {
						console.log('You clicked on a header and it logs: ' + i);
						return wait(1000);
					})
					.then(() => {
						console.log(
							'Well that is not right.  We need to figure out a closure to *remember* the correct value of i and not the hoisted finished value.'
						);
					});
			});
		}
		return wait(1000);
	})
	.then(() => {
		console.log('For loop done running!');
		console.log(
			'\nAlso here is the value of i after the loop is finished: %c' + i,
			'background:#0091ea;color: white;border:2px solid black;padding:2px 5px;'
		);
		return wait(3000);
	})
	.then(() => {
		console.log('Remember this means anything that references i now will be 10 ...');
		return wait(3000);
	})
	.then(() => {
		console.log(
			'\nSo now that i is 10 and the for loop is done, you can click an h3!  Go ahead. Try it.'
		);
	});
