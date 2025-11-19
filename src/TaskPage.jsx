// import { useParams, Link } from "react-router-dom";
// import React, { useRef, useState, useEffect } from "react";
// import * as XLSX from "xlsx/dist/xlsx.full.min.js";

// export default function TaskPage() {
//   const { id } = useParams();

//   // Excel state
//   const fileInputRef = useRef(null);
//   const searchInputRef = useRef(null);

//   const [sheetData, setSheetData] = useState(null);
//   const [fileName, setFileName] = useState("");

//   // Search states
//   const [query, setQuery] = useState("");
//   const [matches, setMatches] = useState([]);
//   const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

//   const handleUploadClick = () => fileInputRef.current?.click();

//   const handleFile = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     setFileName(file.name);
//     try {
//       const data = await file.arrayBuffer();
//       const workbook = XLSX.read(data, { type: "array" });
//       const sheet = workbook.SheetNames[0];
//       const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], { header: 1 });
//       setSheetData(rows);

//       setQuery("");
//       setMatches([]);
//       setCurrentMatchIndex(0);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Generate match list on search
//   useEffect(() => {
//     if (!sheetData || !query) {
//       setMatches([]);
//       setCurrentMatchIndex(0);
//       return;
//     }

//     const q = query.toLowerCase();
//     const newMatches = [];

//     sheetData.forEach((row, r) => {
//       row.forEach((cell, c) => {
//         if (String(cell ?? "").toLowerCase().includes(q)) {
//           newMatches.push({ r, c, text: String(cell) });
//         }
//       });
//     });

//     setMatches(newMatches);
//     setCurrentMatchIndex(newMatches.length ? 0 : 0);

//   }, [sheetData, query]);

//   // Scroll to the current match
//   useEffect(() => {
//     if (!matches.length) return;
//     const cur = matches[currentMatchIndex];
//     if (!cur) return;
//     const el = document.getElementById(`cell-${cur.r}-${cur.c}`);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   }, [currentMatchIndex, matches]);

//   const nextMatch = () => {
//     if (!matches.length) return;
//     setCurrentMatchIndex((i) => (i + 1) % matches.length);
//   };

//   const prevMatch = () => {
//     if (!matches.length) return;
//     setCurrentMatchIndex((i) => (i - 1 + matches.length) % matches.length);
//   };

//   const cellId = (r, c) => `cell-${r}-${c}`;

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h2 style={styles.logo}> 🏫 KMIT </h2>
//       </header>

//       <main style={styles.main}>
//         <h1 style={styles.title}>Task {id}</h1>

//         {id === "1" && (
//           <>
//             {/* Upload Button */}
//             <button onClick={handleUploadClick} style={styles.uploadButton}>
//               Upload Excel
//             </button>

//             <input
//               ref={fileInputRef}
//               type="file"
//               accept=".xlsx,.xls,.csv"
//               onChange={handleFile}
//               style={{ display: "none" }}
//             />

//             {/* File name */}
//             {fileName && <p style={styles.fileName}>Uploaded: {fileName}</p>}

//             {/* Search Bar */}
//             {sheetData && (
//               <div style={styles.searchBar}>
//                 <input
//                   ref={searchInputRef}
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search…"
//                   style={styles.searchInput}
//                 />

//                 <button onClick={prevMatch} style={styles.navBtn}>◀</button>
//                 <button onClick={nextMatch} style={styles.navBtn}>▶</button>

//                 <span style={{ color: "#fff" }}>
//                   {matches.length ? `${currentMatchIndex + 1} of ${matches.length}` : "0 matches"}
//                 </span>

//                 <button
//                   onClick={() => {
//                     setQuery("");
//                     setMatches([]);
//                     setCurrentMatchIndex(0);
//                   }}
//                   style={styles.clearBtn}
//                 >
//                   Clear
//                 </button>
//               </div>
//             )}

//             {/* Excel Table */}
//             {sheetData && (
//               <div style={styles.tableWrapper}>
//                 <table style={styles.table}>
//                   <tbody>
//                     {sheetData.map((row, r) => (
//                       <tr key={r}>
//                         {row.map((cell, c) => {
//                           const isMatch = matches.some(m => m.r === r && m.c === c);
//                           const matchIndex = matches.findIndex(m => m.r === r && m.c === c);
//                           const isCurrent = matchIndex === currentMatchIndex;

//                           return (
//                             <td
//                               id={cellId(r, c)}
//                               key={c}
//                               style={{
//                                 ...styles.cell,
//                                 background: isCurrent
//                                   ? "rgba(242,215,91,0.9)"
//                                   : isMatch
//                                   ? "rgba(252,211,77,0.2)"
//                                   : "rgba(255,255,255,0.05)",
//                                 color: isCurrent ? "#000" : "#fff",
//                               }}
//                             >
//                               {String(cell ?? "")}
//                             </td>
//                           );
//                         })}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </>
//         )}

//         {/* Back Button */}
//         <div style={{ marginTop: "40px" }}>
//           <Link to="/" style={styles.backButton}>
//             ← Back to Home
//           </Link>
//         </div>
//       </main>

//       <footer style={styles.footer}>
//         © KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY
//       </footer>
//     </div>
//   );
// }

// // Styles
// const styles = {
//   container: {
//     minHeight: "100vh",
//     width: "100vw",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "center",
//     background: "linear-gradient(180deg,#12385b 0%, #12263a 100%)",
//     color: "#fff",
//     fontFamily: "Poppins, sans-serif",
//   },
//   header: {
//     width: "100%",
//     padding: "16px 40px",
//     background: "#0d2238",
//     borderBottom: "2px solid #b38b59",
//   },
//   logo: { fontSize: "1.4rem", color: "#c9a646", fontWeight: 700 },
//   main: { textAlign: "center", marginTop: "40px", width: "100%" },
//   title: { fontSize: "2.3rem", color: "#c9a646", marginBottom: "20px" },

//   uploadButton: {
//     padding: "10px 20px",
//     background: "#2b6cb0",
//     border: "none",
//     color: "#fff",
//     borderRadius: 8,
//     fontSize: "1rem",
//     fontWeight: 600,
//     cursor: "pointer",
//   },

//   fileName: { marginTop: 10, fontSize: "1rem", color: "#f5f5f5" },

//   searchBar: {
//     marginTop: 20,
//     display: "flex",
//     justifyContent: "center",
//     gap: 10,
//     alignItems: "center",
//   },
//   searchInput: {
//     padding: "8px 12px",
//     width: "240px",
//     borderRadius: 8,
//     background: "rgba(255,255,255,0.1)",
//     color: "#fff",
//     border: "1px solid rgba(255,255,255,0.2)",
//     outline: "none",
//   },
//   navBtn: {
//     padding: "6px 10px",
//     borderRadius: 6,
//     background: "rgba(255,255,255,0.15)",
//     border: "none",
//     color: "#fff",
//     cursor: "pointer",
//   },
//   clearBtn: {
//     padding: "6px 12px",
//     borderRadius: 6,
//     background: "transparent",
//     border: "1px solid rgba(255,255,255,0.3)",
//     color: "#fff",
//     cursor: "pointer",
//   },

//   tableWrapper: {
//     marginTop: 20,
//     display: "flex",
//     justifyContent: "center",
//     overflowX: "auto",
//   },

//   table: {
//     borderCollapse: "collapse",
//   },

//   cell: {
//     padding: "10px 14px",
//     border: "1px solid rgba(255,255,255,0.2)",
//     minWidth: "100px",
//   },

//   backButton: {
//     padding: "12px 30px",
//     background: "#b38b59",
//     borderRadius: 8,
//     color: "#fff",
//     fontSize: "1rem",
//     textDecoration: "none",
//     fontWeight: 600,
//   },

//   footer: {
//     width: "100%",
//     textAlign: "center",
//     padding: "15px 0",
//     color: "#aaa",
//     background: "#0d2238",
//     borderTop: "1px solid #b38b59",
//   },
// };
import { useParams, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import * as XLSX from "xlsx/dist/xlsx.full.min.js";

export default function TaskPage() {
  const { id } = useParams();

  const fileInputRef = useRef(null);
  const [sheetData, setSheetData] = useState(null);
  const [fileName, setFileName] = useState("");

  const [query, setQuery] = useState("");

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { type: "array" });
    const sheet = workbook.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], { header: 1 });

    setSheetData(rows);
    setQuery("");
  };

  // Filter rows based on search
  const filteredData = React.useMemo(() => {
    if (!sheetData || !query) return sheetData;

    const lower = query.toLowerCase();

    return sheetData.filter((row) =>
      row.some((cell) => String(cell ?? "").toLowerCase().includes(lower))
    );
  }, [sheetData, query]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.logo}>🏫 KMIT</h2>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Task {id}</h1>

        {id === "1" && (
          <>
            {/* Upload Excel */}
            <button onClick={handleUploadClick} style={styles.uploadButton}>
              Upload Excel
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={handleFile}
              style={{ display: "none" }}
            />

            {fileName && <p style={styles.fileName}>Uploaded: {fileName}</p>}

            {/* SEARCH BAR */}
            {sheetData && (
              <div style={styles.searchBar}>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  style={styles.searchInput}
                />

                <button
                  onClick={() => setQuery("")}
                  style={styles.clearButton}
                >
                  Clear
                </button>
              </div>
            )}

            {/* TABLE */}
            {filteredData && (
              <div style={styles.tableWrapper}>
                <table style={styles.table}>
                  <tbody>
                    {filteredData.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} style={styles.cell}>
                            {String(cell ?? "")}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* Back button */}
        <Link to="/" style={styles.backButton}>
          ← Back to Home
        </Link>
      </main>

      <footer style={styles.footer}>
        © KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(180deg, #12385b, #12263a)",
    color: "#fff",
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    padding: "18px 40px",
    background: "#0d2238",
    borderBottom: "2px solid #b38b59",
  },
  logo: { fontSize: "1.5rem", color: "#c9a646", fontWeight: 700 },
  main: { textAlign: "center", marginTop: "40px" },
  title: { fontSize: "2.4rem", color: "#c9a646", marginBottom: "20px" },

  uploadButton: {
    padding: "10px 20px",
    background: "#2b6cb0",
    border: "none",
    color: "#fff",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },

  fileName: { marginTop: 10, fontSize: "1rem" },

  searchBar: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },

  searchInput: {
    padding: "8px 12px",
    width: "260px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
  },

  clearButton: {
    padding: "8px 12px",
    background: "transparent",
    border: "1px solid #fff",
    borderRadius: 8,
    color: "#fff",
    cursor: "pointer",
  },

  tableWrapper: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    overflowX: "auto",
  },

  table: {
    borderCollapse: "collapse",
    background: "rgba(255,255,255,0.05)",
  },

  cell: {
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "10px 14px",
    minWidth: "120px",
  },

  backButton: {
    marginTop: "40px",
    display: "inline-block",
    padding: "12px 30px",
    background: "#b38b59",
    color: "#fff",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
  },

  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#0d2238",
    borderTop: "1px solid #b38b59",
  },
};
