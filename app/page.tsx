import { Input } from "@/components/ui/input";
import { Upload } from "@/components/upload";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-4 border">
			<div className="flex flex-col items-center">
				<h1 className="text-2xl font-semibold">Images to Text Converter</h1>
				<p className="text-sm">This tools are intentionally for receipt reader.</p>
			</div>
			<div className="">
				<Upload />
			</div>
		</main>
	);
}
