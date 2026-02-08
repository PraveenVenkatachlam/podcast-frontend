"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function MeetingPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = username.trim() === "" ? "Guest" : username.trim();
    const meetingId = process.env.NEXT_PUBLIC_CALL_ID;

    if (!meetingId) {
      alert("NEXT_PUBLIC_CALL_ID is missing in your .env file");
      return;
    }

    router.push(`/meeting/${meetingId}?name=${encodeURIComponent(user)}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <form
        onSubmit={handleJoin}
        className="w-[420px] max-w-[92vw] rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
      >
        <h1 className="text-center text-2xl font-semibold">Enter your name</h1>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. Kavin (optional)"
          className="mt-6 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40"
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700 transition"
        >
          Join Meeting
        </button>
      </form>
    </div>
  );
}
// "use client";

// import React, { useState } from "react";
// // import { Router } from "next/router";
// import { useRouter } from "next/navigation";


// export default function MeetingPage() {
//   const [username, setUsername] = useState("");

//   const handleJoin = () => {
//     // e.preventDefault();
//     const user=username.trim() === "" ?"Guest" :username.trim();
//     const meetingId=process.env.NEXT_PUBLIC_CALL_ID;

//     Router.push(`/meeting/${meetingId}?name=${encodedURIComponent(name)}`);
//     console.log("Join meeting as:", username);
//     // router.push(...) if you want to navigate further
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
//       <form
//         onSubmit={handleJoin}
//         className="w-[420px] max-w-[92vw] rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
//       >
//         <h1 className="text-center text-2xl font-semibold">Enter your name</h1>

//         <input
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="e.g. Kavin (optional)"
//           className="mt-6 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40"
//         />

//         <button
//         onClick={handleJoin}
//           type="submit"
//           className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700 transition"
//         >
//           Join Meeting
//         </button>
//       </form>
//     </div>
//   );
// }