
import Nav from "../components/nav";

function Home() {
    const books = [
        {
            title: "The Republic",
            author: "Plato",
            summary: "Membahas keadilan, bentuk negara ideal, kepemimpinan, serta bagaimana manusia dapat mencapai kehidupan yang baik. Plato juga memperkenalkan konsep Philosopher King, yaitu pemimpin yang memiliki kebijaksanaan filosofis."
        },
        {
            title: "Nicomachean Ethics",
            author: "Aristotle",
            summary: "Membahas bagaimana manusia dapat mencapai kehidupan yang baik melalui kebajikan, kebiasaan, dan keseimbangan. Aristotle memperkenalkan konsep Golden Mean, yaitu jalan tengah di antara dua sifat yang berlebihan."
        },
        {
            title: "Meditations",
            author: "Marcus Aurelius",
            summary: "Kumpulan refleksi pribadi tentang Stoisisme, pengendalian diri, penerimaan terhadap hal-hal yang tidak dapat dikendalikan, dan pentingnya menjalani hidup dengan kebijaksanaan."
        },
        {
            title: "Discourse on the Method",
            author: "René Descartes",
            summary: "Membahas metode berpikir rasional untuk memperoleh pengetahuan yang dapat dipercaya. Buku ini terkenal dengan gagasan Cogito, ergo sum, yang berarti 'Aku berpikir, maka aku ada'."
        },
        {
            title: "Thus Spoke Zarathustra",
            author: "Friedrich Nietzsche",
            summary: "Mengeksplorasi gagasan Übermensch, kehendak untuk berkuasa, dan eternal recurrence. Nietzsche mengajak manusia untuk menciptakan nilai dan menentukan makna kehidupannya sendiri."
        },
        {
            title: "The Myth of Sisyphus",
            author: "Albert Camus",
            summary: "Membahas absurditas kehidupan, yaitu pertentangan antara keinginan manusia mencari makna dan dunia yang tidak memberikan jawaban pasti. Camus mengajak manusia untuk tetap hidup dan menghadapi absurditas dengan kesadaran."
        }
    ];

    return (
        <div>
            <Nav/>
            <div className="min-h-screen bg-gray-100 p-5">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                        <h1 className="text-3xl font-bold mb-3 text-center">Philosophy Books</h1>
                        <p className="text-gray-600 text-center">Explore philosophical books and discover ideas about life, knowledge, ethics, and existence.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {books.map((book, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                                <p className="text-sm text-gray-500 mb-4">By {book.author}</p>
                                <p className="text-gray-700 leading-relaxed">{book.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;