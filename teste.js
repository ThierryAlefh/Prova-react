function triangle(row) {
	for (let i = 0; i <= row; i++) {
		for (let j = 0; j <= row; j++) {
			if (j < i) process.stdout.write('* ');
			else process.stdout.write('  ');
		}
		console.log();
	}
}

triangle(4);
