"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TextCard } from "@/components/text-card";
import Image from "next/image";
import converter from "@/lib/tesseract";
import { Loader2 } from "lucide-react";

export const Upload = () => {
	const [image, setImage] = useState<string>("");
	const [text, setText] = useState<Array<string>>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		const type = file?.type.split("/")[0];

		if (!file || type !== "image") {
			event.target.value = "";

			setImage("");
			return false;
		}

		return setImage(URL.createObjectURL(file));
	};

	const handleSubmit = () => {
		convert(image);
	};

	const convert = async (url: string) => {
		if (url.length) {
			setIsLoading(true);

			await converter(url).then((txt: string) => {
				let copyText: Array<string> = text;
				copyText.push(txt);

				setText(copyText);
			});

			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center gap-2">
			{image && <Image src={image} alt="" width="200" height="200" className="border" />}
			<div className="flex gap-2">
				<Input id="picture" type="file" accept="image/*" onChange={handleFileChange} />
				<Button type="button" size={"sm"} onClick={handleSubmit} disabled={isLoading && true}>
					{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
					Submit
				</Button>
			</div>
			<div className="flex flex-col gap-4">
				{text.map((t, i) => {
					return <TextCard key={i} t={t} i={i} />;
				})}
			</div>
		</div>
	);
};
