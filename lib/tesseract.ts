import { createWorker, PSM } from "tesseract.js";

const converter = async (img: string) => {
	const worker = await createWorker("eng", 1, {
		logger: (m) => console.log(m),
	});

	const res = await worker.recognize(img);
	// const res = await worker.recognize("https://tesseract.projectnaptha.com/img/eng_bw.png");
	const text = res.data.text;

	await worker.terminate();
	return text;
};

export default converter;
