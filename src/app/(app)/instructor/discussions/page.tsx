"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// Example user list
const users = [
	{ id: 1, name: "Jane Doe", role: "student" },
	{ id: 2, name: "John Smith", role: "instructor" },
	// ...more users
];

export default function DirectChatPage() {
	const [selectedUser, setSelectedUser] = useState(users[0]);
	const [messages, setMessages] = useState([
		{ from: "You", to: "Jane Doe", text: "Hi Jane!" },
		{ from: "Jane Doe", to: "You", text: "Hello!" },
	]);
	const [newMessage, setNewMessage] = useState("");

	function handleSend() {
		if (newMessage.trim()) {
			setMessages([
				...messages,
				{ from: "You", to: selectedUser.name, text: newMessage },
			]);
			setNewMessage("");
		}
	}

	return (
		<div className="p-6">
			<h1 className="text-xl font-bold mb-4">Direct Chat</h1>
			<div className="mb-4">
				<label className="font-semibold mr-2">Chat with:</label>
				<select
					value={selectedUser.id}
					onChange={(e) =>
						setSelectedUser(
							users.find((u) => u.id === Number(e.target.value))!
						)
					}
					className="border rounded p-1"
				>
					{users.map((user) => (
						<option key={user.id} value={user.id}>
							{user.name} ({user.role})
						</option>
					))}
				</select>
			</div>
			<div className="border rounded p-4 mb-4 h-48 overflow-y-auto bg-gray-50">
				{messages
					.filter(
						(msg) =>
							(msg.from === "You" && msg.to === selectedUser.name) ||
							(msg.from === selectedUser.name && msg.to === "You")
					)
					.map((msg, idx) => (
						<div key={idx} className="mb-2">
							<span className="font-semibold">{msg.from}:</span> {msg.text}
						</div>
					))}
			</div>
			<div className="flex gap-2">
				<input
					className="border rounded p-2 flex-1"
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					placeholder={`Type a message... Use @${selectedUser.name} to mention`}
				/>
				<Button onClick={handleSend}>Send</Button>
			</div>
		</div>
	);
}