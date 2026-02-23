"use client";

export default function TestAI() {
  async function testAPI() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: "Hello AI",
          },
        ],
      }),
    });

    const text = await res.text();
    console.log(text);
    alert(text);
  }

  return (
    <div className="p-10">
      <button
        onClick={testAPI}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Test AI
      </button>
    </div>
  );
}
