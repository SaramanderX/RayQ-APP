
// CalendarPage.jsx
// import React, { useState } from 'react'; // เพิ่ม useState
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // สำหรับดูแบบรายเดือน
import interactionPlugin from "@fullcalendar/interaction"; // สำหรับคลิกวันที่
// นำเข้าไฟล์ภาษาไทย
import thLocale from '@fullcalendar/core/locales/th';
import "./calendarpage.css"

function CalendarPage() {

  return (
    <div className='container'>
      <div className='container-calendar'>
        {/* <h2>📅 ตารางนัดหมาย (Calendar)</h2> */}

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"

          // สำคัญมาก! สั่งให้ปฏิทินสูง 100% ของกล่องแม่
          height="100%"
          //ตั้งค่าภาษาตรงนี้ครับ
          locale="th"  // บอกว่า "ฉันจะใช้ภาษาไทยนะ"
          locales={[thLocale]} // ส่งไฟล์ภาษาไทยเข้าไป

          // (แถม) ใส่ข้อมูลตัวอย่าง เพื่อทดสอบว่าปฏิทินทำงาน
          events={[
            { title: 'เช้า 2/10', date: new Date().toISOString().split('T')[0] },
            { title: 'บ่าย 3/10', date: new Date().toISOString().split('T')[0] }
          ]}
        />
      </div>

    </div>
  );
}

export default CalendarPage;


