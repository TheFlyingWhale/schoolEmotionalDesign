import rocketScience from "../assets/animations/rocketScience.json"
import theElementsOfUserExperience from "../assets/animations/theElementsOfUserExperience.json"
import joyOfUx from "../assets/animations/joyOfUx.json"
import thinking from "../assets/animations/thinking.json"

interface BookData {
	title: string
	author: string
	quote: string
	description: string
	animation: unknown
	link: string
}

export default [
	{
		title: "The Joy of UX: User Experience and Interactive Design for Developers",
		author: "David Platt",
		quote: "Know thy user, for he is not thee",
		description:
			"Good UX is not that hard, but it requires you to think in new ways. This book shows you how, step by step, with examples along the way",
		animation: joyOfUx,
		link: "https://learning.oreilly.com/library/view/the-joy-of/9780134277790/",
	},
	{
		title: "Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems",
		author: "Steve Krug",
		quote: "You don't see any elephants around here, do you?",
		description:
			"The purpose of this book is not to make you a usability professional or a usability testing expert; it’s just to get you to do some testing",
		animation: rocketScience,
		link: "https://learning.oreilly.com/library/view/rocket-surgery-made/9780321702821/",
	},
	{
		title: "The Elements of User Experience: User-Centered Design for the Web and Beyond",
		author: "Jesse James Garrett",
		quote: "Every time a product is used, it delivers an experience",
		description:
			"User experience is not about the inner workings of a product or service. User experience is about how it works on the outside, where a person comes into contact with it",
		animation: theElementsOfUserExperience,
		link: "https://learning.oreilly.com/library/view/the-elements-of/9780321688651/",
	},
	{
		title: "Don't Make Me Think!: A Common Sense Approach to Web Usability",
		author: "Steve Krug",
		quote: "Dont make me think",
		description:
			"It doesnt matter how many times I have to click, as long as each click is a mindless, unambiguous choice",
		animation: thinking,
		link: "https://learning.oreilly.com/library/view/dont-make-me/0321344758/",
	},
] as BookData[]
