export default function Card() {
	return (
		<div className="shadow-xl w-80 card bg-base-100">
			<figure>
				<img src="https://placehold.co/400x200" alt="img" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Lorem!</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
					eum doloribus, neque voluptate qui placeat!
				</p>
				<div className="justify-end card-actions">
					<button className="btn btn-primary">Buy</button>
				</div>
			</div>
		</div>
	);
}
