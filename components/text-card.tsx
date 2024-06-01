import React from "react";

export const TextCard = ({ t, i }: { t: string; i: number }) => {
	// console.log(t.split("\n"));
	return (
		<div className="container py-6 border">
			<div>
				<pre>
					({i + 1}) {new Date().toLocaleString()}
				</pre>
			</div>
			<div className="w-full py-6">
				<pre>{t}</pre>
			</div>
		</div>
	);
};
