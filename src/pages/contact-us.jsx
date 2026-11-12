import { useState } from "react";
import Nav from "../components/nav";

function ContactUs() {
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem("messages");
        return savedMessages ? JSON.parse(savedMessages) : [];
    });

    function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const newMessage = {
            id: Date.now(),
            name: data.get("name"),
            email: data.get("email"),
            message: data.get("message")
        };

        const updatedMessages = [...messages, newMessage];

        setMessages(updatedMessages);
        localStorage.setItem("messages", JSON.stringify(updatedMessages));

        e.target.reset();
    }

    return (
        <div>
            <Nav/>
            <div className="min-h-screen bg-gray-100 p-5">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            <input className="border p-2 rounded-md" type="text" name="name" id="name" placeholder="Enter your name" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input className="border p-2 rounded-md" type="email" name="email" id="email" placeholder="Enter your email" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message">Message</label>
                            <textarea className="border p-2 rounded-md resize-none" name="message" id="message" rows="5" placeholder="Write a message..." required></textarea>
                        </div>
                        <button className="bg-black text-white p-3 rounded-md cursor-pointer" type="submit">Send Message</button>
                    </form>
                </div>
                <div className="max-w-2xl mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-6">Message Lists ({messages.length})</h2>
                    <div className="flex flex-col gap-4">
                        {messages.length > 0 ? (
                            messages.map((item) => (
                                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-gray-500 text-sm">{item.email}</p>
                                    <p className="mt-3 whitespace-pre-wrap">{item.message}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Belum ada pesan.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;