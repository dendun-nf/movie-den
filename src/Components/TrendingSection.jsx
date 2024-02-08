export default function TrendingSection() {
	return (
		<section
			className="flex justify-center h-screen py-2"
			id="trending-section"
		>
			<div className="container grid" id="content-container">
				<div
					className="grid grid-flow-col gap-2"
					id="trending-content-container"
				>
					<div
						className="grid col-span-3 grid-rows-2 border"
						id="main-content-container"
					></div>
					<div
						className="grid grid-cols-1 gap-2 grid-flow-4"
						id="secondary-content-container"
					>
						<div className="border"></div>
						<div className="border"></div>
						<div className="border"></div>
						<div className="border"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
