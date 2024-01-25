export default function Card({ width, text, rating }) {
	return (
		<div
			className="grid grid-flow-row gap-2 pb-4 bg-white rounded-bl-lg rounded-br-lg shadow-xl"
			id="card-container"
		>
			<img
				className="object-contain aspect-auto"
				src="https://placehold.co/400"
				alt=""
			/>
			<div
				className="flex flex-col px-2 font-normal text-gray-500 font-roboto"
				id="text-container"
			>
				<p className="text-sm">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
					dignissimos.
				</p>
				<p className="self-end text-xs text-gray-500">Rating: 5</p>
			</div>
		</div>
	);
}
