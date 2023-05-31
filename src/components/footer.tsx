import Image from "next/image"
import logo from "../assets/logo.svg"

const Footer = () => {
	return (
		<footer className="w-full border-solid border-t-2 border-slate-100 py-24 flex justify-center">
			<div className="w-9/12 max-w-7xl flex items-start gap-24">
				<Image
					alt=""
					src={logo}
					className="w-56"
				/>
				<div className="flex flex-column gap-12">
					{footerLinks.map((section) => (
						<FooterLinks
							key={section.title}
							{...section}
						/>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer

interface FooterLinksProps {
	title: string
	links: string[]
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
	return (
		<div>
			<h6 className="uppercase font-medium text-slate-600 pb-2">
				{title}
			</h6>
			<ul>
				{links.map((link) => (
					<li
						className="pb-2 text-slate-600"
						key={link}
					>
						<a href="#">{link}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

const footerLinks: FooterLinksProps[] = [
	{
		title: "about o'reilly",
		links: [
			"Teach/write/train",
			"Careers",
			"Press releases",
			"Media coverage",
			"Community parters",
			"Affiliate program",
			"Submit RFP",
			"Diversity",
			"O'Reilly for marketers",
		],
	},
	{
		title: "support",
		links: ["Contact us", "Newsletter", "Privacy policy"],
	},
	{
		title: "international",
		links: [
			"Australia & New Zealand",
			"Honk Kong & Taiwan",
			"Japan",
			"India",
			"Indonesia",
		],
	},
]
