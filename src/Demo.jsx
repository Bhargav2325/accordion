import React, { useState, useEffect } from "react";

const Demo = () => {
	const [num, setnum] = useState(0);

	useEffect(() => {
		// alert("hii");
		document.title = `You clicked me ${num} Times`;
	});
	return (
		<button
			onClick={() => {
				setnum(num + 1);
			}}
		>
			Click Me {num}
	
		</button>
	);
};

export default Demo;
