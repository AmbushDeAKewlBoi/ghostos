import { useState } from "react";
import { FILES } from "./content/files";

function App() {
  const [selectedId, setSelectedID] = useState(FILES[0].id);

  const selectedFile = FILES.find((file) => file.id === selectedId);

  return (
    <main style={{ padding: "24px" }}>
      <h1>GhostOS - Preview</h1>
      <p>CASE_014 / Recovered files</p>

      <div style={{ display: "flex", gap: "24px" }}>
        <div>
          {FILES.map((file) => (
            <button
              key={file.id}
              onClick={() => setSelectedID(file.id)}
              style={{ display: "block", marginBottom: "8px" }}
            >
              {file.name}
            </button>
          ))}
        </div>

        <pre style={{ whiteSpace: "pre-wrap" }}>{selectedFile?.contents}</pre>
      </div>
    </main>
  );
}

export default App;
