"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Mic, Paperclip } from "lucide-react";

// Announcement type
type Announcement = {
  id: number;
  title: string;
  message: string;
  date: string;
  image?: File | null;
  voice?: File | null;
  file?: File | null;
};

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 1,
      title: "Welcome to AKSH!",
      message: "We are excited to launch our new platform for instructors and students.",
      date: "2025-09-20",
    },
    // ...more announcements
  ]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [voice, setVoice] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);

  function handlePost() {
    if (title.trim() && message.trim()) {
      setAnnouncements([
        {
          id: announcements.length + 1,
          title,
          message,
          date: new Date().toISOString().slice(0, 10),
          image,
          voice,
          file,
        },
        ...announcements,
      ]);
      setTitle("");
      setMessage("");
      setImage(null);
      setVoice(null);
      setFile(null);
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Announcements</h1>
      <div className="mb-8 bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Post a New Announcement</h2>
        <input
          className="border rounded p-2 w-full mb-2"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          className="border rounded p-2 w-full mb-2"
          rows={3}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Message"
        />
        <div className="flex gap-4 mb-2">
          <label className="flex flex-col items-center cursor-pointer">
            <ImageIcon className="h-6 w-6 text-muted-foreground hover:text-primary" />
            <input type="file" accept="image/*" className="hidden" onChange={e => setImage(e.target.files?.[0] || null)} />
            <span className="text-xs mt-1">Image</span>
            {image && <span className="text-xs text-primary mt-1">{image.name}</span>}
          </label>
          <label className="flex flex-col items-center cursor-pointer">
            <Mic className="h-6 w-6 text-muted-foreground hover:text-primary" />
            <input type="file" accept="audio/*" className="hidden" onChange={e => setVoice(e.target.files?.[0] || null)} />
            <span className="text-xs mt-1">Voice</span>
            {voice && <span className="text-xs text-primary mt-1">{voice.name}</span>}
          </label>
          <label className="flex flex-col items-center cursor-pointer">
            <Paperclip className="h-6 w-6 text-muted-foreground hover:text-primary" />
            <input type="file" className="hidden" onChange={e => setFile(e.target.files?.[0] || null)} />
            <span className="text-xs mt-1">File</span>
            {file && <span className="text-xs text-primary mt-1">{file.name}</span>}
          </label>
        </div>
        <Button onClick={handlePost}>Post Announcement</Button>
      </div>
      <div className="space-y-4">
        {announcements.map(a => (
          <div key={a.id} className="bg-card rounded shadow p-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-lg">{a.title}</h3>
              <span className="text-xs text-muted-foreground">{a.date}</span>
            </div>
            <p className="text-muted-foreground mb-2">{a.message}</p>
            {a.image && (
              <div className="mb-2">
                <img
                  src={URL.createObjectURL(a.image)}
                  alt="Announcement Image"
                  className="max-w-xs rounded"
                />
              </div>
            )}
            {a.voice && (
              <div className="mb-2">
                <audio controls src={URL.createObjectURL(a.voice)} />
              </div>
            )}
            {a.file && (
              <div className="mb-2">
                <a
                  href={URL.createObjectURL(a.file)}
                  download={a.file.name}
                  className="text-blue-600 underline text-xs"
                >
                  Download: {a.file.name}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
