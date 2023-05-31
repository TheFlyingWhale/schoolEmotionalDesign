import Image from "next/image"
import logo from "../assets/logo.svg"

const Header = () => {
	return (
		<header className="w-full p-4 justify-center flex">
			<div className="w-9/12 max-w-7xl flex justify-between items-center uppercase text-sm">
				<div className="flex gap-8 items-center">
					<a href="#">
						<Image
							alt=""
							src={logo}
						/>
					</a>

					<div className="flex gap-4 h-fit text-slate-500 align-middle">
						<a href="#">teams</a>
						<a href="#">individuals</a>
						<a href="#">features</a>
						<a href="#">blog</a>
						<a href="#">content sponsorship</a>
					</div>
				</div>

				<div className="flex gap-8 items-center font-medium">
					<a
						href="#"
						className="text-o-red grow-0 h-fit"
					>
						sign in
					</a>
					<a
						href="#"
						className="text-white bg-o-red px-4 py-2"
					>
						try now
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header
