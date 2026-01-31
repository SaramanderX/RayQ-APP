import { useState } from "react";
import "./App.css";
import "./assets/components/sidebar.jsx"
import Sidebar from "./assets/components/sidebar.jsx";
import Maincontent from "./assets/components/maincontent.jsx";
import CalendarPage from "./assets/components/calendarpage.jsx";
import { Routes, Route } from 'react-router-dom'; // นำเข้าเครื่องมือ

function App() {
  return (
    <main>
      {/* Sidebar อยู่คงที่ตลอด */}
      <Sidebar/>
      {/* ส่วนที่จะเปลี่ยนเนื้อหาเมื่อมีการเปลี่ยน url */}
      <div className="main-content-area" >
        <Routes>
          {/* ถ้า path เป็น / ให้แสดงหน้ารายชื่อ */}
          <Route path="/" element={<Maincontent />} />

          {/* ถ้า path เป็น /calendar ให้แสดงหน้าปฏิทิน */}
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
