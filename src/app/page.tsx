import books from "../assets/books"
import Section from "@/components/section"

const HomePage = () => {
	return (
		<main className="w-9/12 max-w-7xl flex flex-col items-center justify-between gap-48">
			{books.map((book, index) => (
				<Section
					key={book.title}
					author={book.author}
					description={book.description}
					bookTitle={book.title}
					quote={book.quote}
					animationData={book.animation}
					reversed={index % 2 !== 0}
					link={book.link}
				/>
			))}
		</main>
	)
}

export default HomePage
