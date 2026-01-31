import "./maincontent.css"
import PatientList from "./patientlist";
//สร้าง useState
import { useState } from "react";

function Maincontent(){
   
    // ข้อมูลจำลอง (Mock Data) Data เช้า
    const morningData = [
      {
        name: "นายเกรียงไกร โปรแกรมมิ่ง",
        hn: "00001",
        scan_part: "CT WHOLE ABDOMEN WITH CM",
        date_appointment: "12/01/2569",
      },
      {
        name: "นายฟูสแตก ฉันทำได้",
        hn: "00002",
        scan_part: "CT WHOLE ABDOMEN WITH CM",
        date_appointment: "12/01/2569",
      },
      {
        name: "นางเราเก่งแน่ ฝึกต่อไป",
        hn: "00003",
        scan_part: "CT WHOLE ABDOMEN WITH CM",
        date_appointment: "12/01/2569",
      },
      {
        name: "นายฟูสแตก ฉันทำได้",
        hn: "00004",
        scan_part: "CT WHOLE ABDOMEN WITH CM",
        date_appointment: "12/01/2569",
      },
      {
        name: "นางสู้ดิ ฝึกต่อไป",
        hn: "00005",
        scan_part: "CT CHEST WITH CM",
        date_appointment: "12/01/2569",
      },
      {
        name: "นางสู้ดิ ฝึกต่อไป",
        hn: "00005",
        scan_part: "CT CHEST WITH CM",
        date_appointment: "12/01/2569",
      }
    ];

    const afternoonData = [
      {
        name: "นายสู้ๆ กำลังเก่ง",
        hn: "00001",
        scan_part: "CT BRAIN WITH CM",
        date_appointment: "12/01/2569",
      },
      {
        name: "นายกำลังทำ ฉันทำได้ ",
        hn: "00002",
        scan_part: "CTA THORACIC AORTA",
        date_appointment: "12/01/2569",
      },
      {
        name: "นางเราเก่งแน่ ฝึกต่อไป",
        hn: "00003",
        scan_part: "CT WHOLE ABDOMEN WITH CM",
        date_appointment: "12/01/2569",
      }
    ]
     //สร้าง useState 
    const [currentList,setList] = useState(morningData)
    // สร้าง state ดู btn กำหนดค่าเริ่มต้นเป็น morning
    const [activeBtn,setActiveBtn] = useState('morning')
    return (
      <div className="content-container">
        <div className="content-container-header">
          <h2>รายชื่อผู้ป่วยนัด วันที่ 12/01/69 </h2>
          <div className="cardlist-period">
            <div>
              {/* เปลี่ยน class เพื่อแสดงปุ่ม และตั้งค่า onclick*/}
              <button className={activeBtn==='morning'?'active-btn':''} onClick={()=>{
                setList(morningData); 
                setActiveBtn('morning')
              }}>เช้า</button>
              <button className={activeBtn==='afternoon'?'active-btn':''} onClick={()=>{
                setList(afternoonData); 
                setActiveBtn('afternoon')
              }}>บ่าย</button>
            </div>
            <div>
              <label htmlFor="">ค้นหา</label>
            </div>
            <div><input type="number" placeholder="กรอก HN" /></div>
          </div>
        </div>
        {/* 5. ส่งตัวแปร State (currentList) เข้าไปแทนข้อมูลนิ่งๆ */}
        {/* React จะคอยดูตัวนี้ ถ้า currentList เปลี่ยน Component นี้จะถูกวาดใหม่ทันที */}
        <PatientList patients={currentList} />
      </div>
    );
}

export default Maincontent