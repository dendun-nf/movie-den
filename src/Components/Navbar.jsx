export default function Navbar() {
	return (
		<nav
			className="grid grid-flow-col rounded-b-xl shadow-md shadow-slate-400 h-[8vh] place-items-center"
			id="navbar-container"
		>
			<div className="flex justify-center font-roboto" id="logo-container">
				<h1 className="text-2xl font-bold">Logo</h1>
			</div>

			<div
				className="flex w-full col-span-2 gap-1 px-2 border rounded-full border-slate-400 bg-slate-200"
				id="search-container"
			>
				<input
					type="text"
					className="w-full border-none outline-none bg-inherit"
					placeholder="Search"
				/>
			</div>
			<ul className="flex gap-4 font-roboto" id="nav-container">
				<li>Home</li>
				<li>About</li>
				<li>Movies</li>
			</ul>
		</nav>
	);
}
