
// CalendarPage.jsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // สำหรับดูแบบรายเดือน
import interactionPlugin from "@fullcalendar/interaction"; // สำหรับคลิกวันที่

function CalendarPage() {

  const handleDateClick = (arg) => {
    alert('คุณเลือกวันที่: ' + arg.dateStr);
    // ตรงนี้เดี๋ยวเราค่อยใส่ Logic เปิด Modal นัดหมายทีหลัง
  };

  return (
    <div style={{ padding: '20px', height: '100vh', overflowY: 'auto' }}>
      <h2>ตารางนัดหมายแพทย์</h2>
      
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={handleDateClick} // ดักจับ event คลิกวันที่
        events={[
          { title: 'นัดคุณสมชาย', date: '2026-02-14' }, // ตัวอย่างข้อมูล
          { title: 'นัดคุณสมหญิง', date: '2026-02-15' }
        ]}
        height="auto"
      />
    </div>
  );
}

export default CalendarPage;