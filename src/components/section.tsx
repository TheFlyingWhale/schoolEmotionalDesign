"use client"

import { LottieOptions, useLottie } from "lottie-react"

interface SectionProps {
	animationData: unknown
	reversed?: boolean
	quote: string
	description: string
	bookTitle: string
	author: string
	link: string
}

const Section: React.FC<SectionProps> = ({
	animationData,
	reversed,
	quote,
	description,
	bookTitle,
	author,
	link,
}) => {
	const animationOptions: LottieOptions = {
		animationData: animationData,
		loop: true,
	}
	const animation = useLottie(animationOptions)

	const isReversed = reversed ? "flex-row-reverse" : "flex-row"

	return (
		<div
			className={`flex w-full ${isReversed} gap-4 md:gap-24 items-center`}
		>
			<div className="w-96 min-w-[35%]">{animation.View}</div>
			<div className="flex flex-col grow gap-8">
				<span className="flex flex-col gap-4">
					<h1 className="font-quote text-6xl font-bold text-o-red">
						{quote}
					</h1>
					<p className="text-2xl text-slate-600 leading-normal font-medium">
						{description}
					</p>
				</span>

				<span className="flex text-lg flex-col gap-1">
					<h2>{bookTitle}</h2>
					<p className="text-sm">
						by <span className="text-o-red">{author}</span>
					</p>
				</span>

				<a
					href={link}
					className="bg-o-red hover:bg-red-500 active:bg-o-red text-white w-fit px-4 py-2"
				>
					Start reading
				</a>
			</div>
		</div>
	)
}

export default Section
