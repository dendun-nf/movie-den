export default function SeriesSection() {
	return (
		<section className="flex justify-center py-4 h-96" id="movie-section">
			{/* Container for movie content */}
			<div
				className="container grid grid-flow-col gap-2"
				id="content-container"
			>
				{/* Main content container */}
				<div
					className="flex flex-col w-full h-full col-span-3 border"
					id="main-content-container"
				>
					{/* Title for the latest content */}
					<div
						className="flex items-center w-full align-middle border h-fit"
						id="main-content-frame-text-container"
					>
						<h2 className="text-2xl font-bold font-roboto">Latest Content</h2>
					</div>
					{/* Grid layout for main content */}
					<div
						className="grid w-full h-full grid-cols-3 border"
						id="main-content-frame-container"
					>
						<div className="border"></div>
						<div className="border"></div>
						<div className="border"></div>
					</div>
				</div>
				{/* Secondary content container */}
				<div
					className="flex flex-col col-span-1 border"
					id="secondary-content-container"
				>
					{/* Title for exploring more content */}
					<div
						className="flex items-center align-middle border"
						id="secondary-content-frame-text-container"
					>
						<h2 className="text-2xl font-bold font-roboto">Check out more!</h2>
					</div>
					{/* Grid layout for secondary content */}
					<div
						className="grid w-full h-full grid-rows-3 border"
						id="secondary-content-frame-container"
					>
						<div className="border"></div>
						<div className="border"></div>
						<div className="border"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
