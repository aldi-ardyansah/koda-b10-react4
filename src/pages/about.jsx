
import Nav from "../components/nav";

function About() {
    return (
        <div>
            <Nav/>
            <div className="min-h-screen bg-gray-100 p-5">
                <div className="max-w-5xl mx-auto flex flex-col gap-6">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
                        <p className="text-gray-700 leading-relaxed text-center">
                            Welcome to Philosophy Books, a platform dedicated to exploring philosophical ideas, thinkers, and literature. Our goal is to make philosophy more accessible and easier to understand through simple book summaries.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Philosophy encourages us to question the world, examine our beliefs, and understand the meaning of life. This website helps readers discover important philosophical works without having to read every book from beginning to end.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">What You Can Explore</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-3">
                            <li><span className="font-semibold">Ethics:</span> Understanding morality, values, and how we should live.</li>
                            <li><span className="font-semibold">Existentialism:</span> Exploring human existence, freedom, and the meaning of life.</li>
                            <li><span className="font-semibold">Stoicism:</span> Learning about self-control, wisdom, and accepting what we cannot control.</li>
                            <li><span className="font-semibold">Metaphysics:</span> Questioning the nature of reality and existence.</li>
                            <li><span className="font-semibold">Epistemology:</span> Understanding knowledge, truth, and how we know what we know.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to inspire curiosity, critical thinking, and a deeper understanding of life through philosophy. We believe that philosophical ideas are not only for academics but also for anyone who wants to think more deeply about the world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;