// import { useParams, Link } from "react-router-dom";
// import React, { useRef, useState } from "react";
// import * as XLSX from "xlsx/dist/xlsx.full.min.js";

// export default function TaskPage() {
//   const { id } = useParams();

//   const fileInputRef = useRef(null);
//   const [workbook, setWorkbook] = useState(null);
//   const [sheetData, setSheetData] = useState(null);
//   const [fileName, setFileName] = useState("");

//   const [sheets, setSheets] = useState([]);
//   const [selectedSheet, setSelectedSheet] = useState("");

//   const [query, setQuery] = useState("");

//   const [rowCount, setRowCount] = useState(0);

<<<<<<< HEAD
//   // NEW: duplicate highlighting
//   const [duplicateMap, setDuplicateMap] = useState({});

//   const handleUploadClick = () => fileInputRef.current?.click();

//   const processDuplicates = (rows) => {
//     const freq = {};
//     rows.forEach((row, r) => {
//       row.forEach((cell, c) => {
//         const key = String(cell ?? "");
//         if (!freq[key]) freq[key] = [];
//         freq[key].push({ r, c });
//       });
//     });

//     const dup = {};
//     Object.keys(freq).forEach((key) => {
//       if (freq[key].length > 1 && key !== "") {
//         freq[key].forEach(({ r, c }) => {
//           dup[`${r}-${c}`] = true;
//         });
//       }
//     });

//     setDuplicateMap(dup);
//   };

=======
//   const handleUploadClick = () => fileInputRef.current?.click();

>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//   const handleFile = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     setFileName(file.name);

//     const data = await file.arrayBuffer();
//     const wb = XLSX.read(data, { type: "array" });

//     setWorkbook(wb);
//     setSheets(wb.SheetNames);
//     setSelectedSheet(wb.SheetNames[0]);

//     const firstSheet = wb.SheetNames[0];

//     const rows = XLSX.utils.sheet_to_json(wb.Sheets[firstSheet], {
//       header: 1,
//       raw: false,
//       cellDates: true,
//     });

//     setSheetData(rows);

<<<<<<< HEAD
=======
    
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//     const count = rows.filter((r) =>
//       r.some((cell) => cell !== null && cell !== "")
//     ).length;
//     setRowCount(count);

<<<<<<< HEAD
//     processDuplicates(rows);
=======
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//     setQuery("");
//   };

//   const handleSheetChange = (e) => {
//     const sheetName = e.target.value;
//     setSelectedSheet(sheetName);

//     const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
//       header: 1,
//       raw: false,
//       cellDates: true,
//     });

//     setSheetData(rows);

<<<<<<< HEAD
=======
   
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//     const count = rows.filter((r) =>
//       r.some((cell) => cell !== null && cell !== "")
//     ).length;
//     setRowCount(count);
<<<<<<< HEAD

//     processDuplicates(rows);
//   };

=======
//   };

  
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//   const filteredData = React.useMemo(() => {
//     if (!sheetData || !query) return sheetData;

//     const lower = query.toLowerCase();

//     return sheetData.filter((row) =>
//       row.some((cell) => String(cell ?? "").toLowerCase().includes(lower))
//     );
//   }, [sheetData, query]);

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h2 style={styles.logo}>🏫 KMIT</h2>
//       </header>

//       <main style={styles.main}>
//         <h1 style={styles.title}>Task {id}</h1>

//         {id === "1" && (
//           <>
<<<<<<< HEAD
=======
//             {/* UPLOAD BUTTON */}
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
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

//             {fileName && <p style={styles.fileName}>Uploaded: {fileName}</p>}

<<<<<<< HEAD
=======
//             {/* SHEET DROPDOWN */}
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//             {sheets.length > 1 && (
//               <div style={{ marginTop: 20 }}>
//                 <select
//                   value={selectedSheet}
//                   onChange={handleSheetChange}
//                   style={styles.dropdown}
//                 >
//                   {sheets.map((sheet, index) => (
//                     <option key={index} value={sheet}>
//                       {sheet}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

<<<<<<< HEAD
=======
//             {/* SEARCH BAR */}
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//             {sheetData && (
//               <div style={styles.searchBar}>
//                 <input
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search..."
//                   style={styles.searchInput}
//                 />

//                 <button onClick={() => setQuery("")} style={styles.clearButton}>
//                   Clear
//                 </button>
//               </div>
//             )}

<<<<<<< HEAD
=======
//             {/* NEW: ROW COUNT (top-right) */}
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//             {sheetData && (
//               <div style={styles.rowCount}>
//                 Count: {rowCount}
//               </div>
//             )}

<<<<<<< HEAD
=======
//             {/* TABLE */}
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//             {filteredData && (
//               <div style={styles.tableWrapper}>
//                 <table style={styles.table}>
//                   <tbody>
//                     {filteredData.map((row, r) => (
//                       <tr key={r}>
//                         {row.map((cell, c) => (
<<<<<<< HEAD
//                           <td
//                             key={c}
//                             style={{
//                               ...styles.cell,
//                               background: duplicateMap[`${r}-${c}`]
//                                 ? "#ffcc00"
//                                 : "transparent",
//                               color: duplicateMap[`${r}-${c}`] ? "#000" : "#fff",
//                               fontWeight: duplicateMap[`${r}-${c}`]
//                                 ? "700"
//                                 : "400",
//                             }}
//                           >
=======
//                           <td key={c} style={styles.cell}>
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//                             {String(cell ?? "")}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </>
//         )}

<<<<<<< HEAD
=======
//         {/* BACK BUTTON */}
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
//         <Link to="/" style={styles.backButton}>
//           ← Back to Home
//         </Link>
//       </main>

//       <footer style={styles.footer}>
//         © KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY
//       </footer>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     width: "100vw",
//     background: "linear-gradient(180deg, #12385b, #12263a)",
//     color: "#fff",
//     fontFamily: "Poppins",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
//   header: {
//     padding: "18px 40px",
//     background: "#0d2238",
//     borderBottom: "2px solid #b38b59",
//   },
//   logo: { fontSize: "1.5rem", color: "#c9a646", fontWeight: 700 },
//   main: { textAlign: "center", marginTop: "40px" },
//   title: { fontSize: "2.4rem", color: "#c9a646", marginBottom: "20px" },

//   uploadButton: {
//     padding: "10px 20px",
//     background: "#2b6cb0",
//     border: "none",
//     color: "#fff",
//     borderRadius: 8,
//     fontWeight: 600,
//     cursor: "pointer",
//   },

//   fileName: { marginTop: 10, fontSize: "1rem" },

//   dropdown: {
//     padding: "8px 12px",
//     borderRadius: 8,
//     border: "1px solid #fff",
//     background: "#0d2238",
//     color: "#fff",
//     cursor: "pointer",
//   },

//   searchBar: {
//     marginTop: 20,
//     display: "flex",
//     justifyContent: "center",
//     gap: 10,
//     alignItems: "center",
//   },

//   searchInput: {
//     padding: "8px 12px",
//     width: "260px",
//     borderRadius: 8,
//     border: "1px solid rgba(255,255,255,0.3)",
//     background: "rgba(255,255,255,0.1)",
//     color: "#fff",
//   },

//   clearButton: {
//     padding: "8px 12px",
//     background: "transparent",
//     border: "1px solid #fff",
//     borderRadius: 8,
//     color: "#fff",
//     cursor: "pointer",
//   },

//   rowCount: {
//     marginTop: 10,
//     marginRight: 30,
//     display: "flex",
//     justifyContent: "flex-end",
//     fontSize: "1rem",
//     color: "#c9a646",
//     fontWeight: "600",
//   },

//   tableWrapper: {
//     marginTop: 20,
//     width: "100%",
//     overflowX: "auto",
//     paddingBottom: 10,
//     scrollbarWidth: "thin",
//   },

//   table: {
//     borderCollapse: "collapse",
//     background: "rgba(255,255,255,0.05)",
//     minWidth: "100%",
//     whiteSpace: "nowrap",
//   },

//   cell: {
//     border: "1px solid rgba(255,255,255,0.3)",
//     padding: "10px 14px",
//     minWidth: "120px",
//   },

//   backButton: {
//     marginTop: "40px",
//     display: "inline-block",
//     padding: "12px 30px",
//     background: "#b38b59",
//     color: "#fff",
//     borderRadius: 8,
//     textDecoration: "none",
//     fontWeight: 600,
//   },

//   footer: {
//     textAlign: "center",
//     padding: "15px",
//     background: "#0d2238",
//     borderTop: "1px solid #b38b59",
//   },
// };

<<<<<<< HEAD

=======
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
import { useParams, Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import * as XLSX from "xlsx/dist/xlsx.full.min.js";

export default function TaskPage() {
  const { id } = useParams();

  const fileInputRef = useRef(null);
  const [workbook, setWorkbook] = useState(null);
  const [sheetData, setSheetData] = useState(null);
  const [fileName, setFileName] = useState("");

  const [sheets, setSheets] = useState([]);
  const [selectedSheet, setSelectedSheet] = useState("");

  const [query, setQuery] = useState("");

  const [rowCount, setRowCount] = useState(0);

  // NEW: duplicate highlighting
  const [duplicateMap, setDuplicateMap] = useState({});

  const handleUploadClick = () => fileInputRef.current?.click();

  const processDuplicates = (rows) => {
    const freq = {};
    rows.forEach((row, r) => {
      row.forEach((cell, c) => {
        const key = String(cell ?? "");
        if (!freq[key]) freq[key] = [];
        freq[key].push({ r, c });
      });
    });

    const dup = {};
    Object.keys(freq).forEach((key) => {
      if (freq[key].length > 1 && key !== "") {
        freq[key].forEach(({ r, c }) => {
          dup[`${r}-${c}`] = true;
        });
      }
    });

    setDuplicateMap(dup);
  };

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const data = await file.arrayBuffer();
    const wb = XLSX.read(data, { type: "array" });

    setWorkbook(wb);
    setSheets(wb.SheetNames);
    setSelectedSheet(wb.SheetNames[0]);

    const firstSheet = wb.SheetNames[0];

    const rows = XLSX.utils.sheet_to_json(wb.Sheets[firstSheet], {
      header: 1,
      raw: false,
      cellDates: true,
    });

    setSheetData(rows);

    const count = rows.filter((r) =>
      r.some((cell) => cell !== null && cell !== "")
    ).length;
    setRowCount(count);

    processDuplicates(rows);
    setQuery("");
  };

  const handleSheetChange = (e) => {
    const sheetName = e.target.value;
    setSelectedSheet(sheetName);

    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
      header: 1,
      raw: false,
      cellDates: true,
    });

    setSheetData(rows);

    const count = rows.filter((r) =>
      r.some((cell) => cell !== null && cell !== "")
    ).length;
    setRowCount(count);

    processDuplicates(rows);
  };

  const filteredData = React.useMemo(() => {
    if (!sheetData || !query) return sheetData;

    const lower = query.toLowerCase();

    return sheetData.filter((row) =>
      row.some((cell) => String(cell ?? "").toLowerCase().includes(lower))
    );
  }, [sheetData, query]);

<<<<<<< HEAD
  // ⭐ NEW: Count filtered rows instead of full rows
  const displayedCount = filteredData ? filteredData.length : 0;

=======
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.logo}>🏫 KMIT</h2>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Task {id}</h1>

        {id === "1" && (
          <>
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

            {sheets.length > 1 && (
              <div style={{ marginTop: 20 }}>
                <select
                  value={selectedSheet}
                  onChange={handleSheetChange}
                  style={styles.dropdown}
                >
                  {sheets.map((sheet, index) => (
                    <option key={index} value={sheet}>
                      {sheet}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {sheetData && (
              <div style={styles.searchBar}>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  style={styles.searchInput}
                />

                <button onClick={() => setQuery("")} style={styles.clearButton}>
                  Clear
                </button>
              </div>
            )}

<<<<<<< HEAD
            {/* ⭐ Updated: Count shows filtered rows */}
            {sheetData && (
              <div style={styles.rowCount}>
                Count: {displayedCount}
=======
            {sheetData && (
              <div style={styles.rowCount}>
                Count: {rowCount}
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
              </div>
            )}

            {filteredData && (
              <div style={styles.tableWrapper}>
                <table style={styles.table}>
                  <tbody>
                    {filteredData.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            style={{
                              ...styles.cell,
                              background: duplicateMap[`${r}-${c}`]
                                ? "#ffcc00"
                                : "transparent",
                              color: duplicateMap[`${r}-${c}`] ? "#000" : "#fff",
                              fontWeight: duplicateMap[`${r}-${c}`]
                                ? "700"
                                : "400",
                            }}
                          >
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

  dropdown: {
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid #fff",
    background: "#0d2238",
    color: "#fff",
    cursor: "pointer",
  },

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

  rowCount: {
    marginTop: 10,
    marginRight: 30,
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "1rem",
    color: "#c9a646",
    fontWeight: "600",
  },

  tableWrapper: {
    marginTop: 20,
    width: "100%",
    overflowX: "auto",
    paddingBottom: 10,
    scrollbarWidth: "thin",
  },

  table: {
    borderCollapse: "collapse",
    background: "rgba(255,255,255,0.05)",
    minWidth: "100%",
    whiteSpace: "nowrap",
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
<<<<<<< HEAD
};
=======
};
>>>>>>> 3344716eb75d2e77162962553d95a5b9e81c0385
