const argvs = process.argv
const operation = argvs[5];
const op1 = argvs[4];
const op2 = argvs[6];


if (operation === 'plus') {
	const op = (+op1) + (+op2);
    console.log(op1 + " " +  operation + " " + op2 + " " + "is" + " " + op)
}
if (operation === 'minus') {
	const  op= Math.abs((+op1) - (+op2));
    console.log(op1 + " " +  operation + " " + op2 + " " + "is" + " " + op)
}
if (operation === 'multiplied') {
	const  op= (+op1) * (+op2);
    console.log(op1 + " " +  operation + " " + op2 + " " + "is" + " " + op.toFixed(2))
}
if (operation === 'divided') {
	const  op= (+op1) / (+op2);
    console.log(op1 + " " +  operation + " " + op2 + " " + "is" + " " + op.toFixed(2))
}


