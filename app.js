import { useState } from "react";
import "./App.css";

function App() {
  const [link, setLink] = useState("");

  function handleClick() {
    alert("আপনি লিংক দিয়েছেন: " + link);
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>🎬 ভিডিও লিঙ্ক দিন</h2>
      <input
        type="text"
        placeholder="ইউটিউব/ফেসবুক/টিকটক লিঙ্ক এখানে দিন"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <button onClick={handleClick} style={{ padding: 10, width: "100%" }}>
        লিঙ্ক দেখান
      </button>
    </div>
  );
}

export default App;
