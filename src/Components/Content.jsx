import Card from "./Card";

export default function Content() {
	return (
		<div
			className="grid grid-flow-row grid-cols-3 gap-2 p-4 place-items-center"
			id="content"
		>
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}
