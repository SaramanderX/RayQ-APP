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
        completed: false
      },
      {
        name: "นายฟูสแตก ฉันทำได้",
        hn: "00002",
        scan_part: "CT WHOLE ABDOMEN WITH CM",
        date_appointment: "12/01/2569",
        completed: false
      },
      {
        name: "นางเราเก่งแน่ ฝึกต่อไป",
        hn: "00003",
        scan_part: "CT WHOLE ABDOMEN WITH CM",
        date_appointment: "12/01/2569",
        completed: false
      },
      {
        name: "นายฟูสแตก ฉันทำได้",
        hn: "00004",
        scan_part: "CT WHOLE ABDOMEN WITH CM",
        date_appointment: "12/01/2569",
        completed: false
      },
      {
        name: "นางสู้ดิ ฝึกต่อไป",
        hn: "00005",
        scan_part: "CT CHEST WITH CM",
        date_appointment: "12/01/2569",
        completed: false
      },
      {
        name: "นางสู้ดิ ฝึกต่อไป",
        hn: "00005",
        scan_part: "CT CHEST WITH CM",
        date_appointment: "12/01/2569",
        completed: false
      }
    ];

    const afternoonData = [
      {
        name: "นายสู้ๆ กำลังเก่ง",
        hn: "00001",
        scan_part: "CT BRAIN WITH CM",
        date_appointment: "12/01/2569",
        completed: false
      },
      {
        name: "นายกำลังทำ ฉันทำได้ ",
        hn: "00002",
        scan_part: "CTA THORACIC AORTA",
        date_appointment: "12/01/2569",
        completed: false
      },
      {
        name: "นางเราเก่งแน่ ฝึกต่อไป",
        hn: "00003",
        scan_part: "CT WHOLE ABDOMEN WITH CM",
        date_appointment: "12/01/2569",
        completed: false
      }
    ]
     //สร้าง useState 
    const [currentList,setList] = useState(morningData)
    // สร้าง state ดู btn กำหนดค่าเริ่มต้นเป็น morning
    const [activeBtn,setActiveBtn] = useState('morning')

    //สร้าง state สำหรับการกำหนด การติ้ก complete ใน patientlist
    const handleToggleComplete = (index) => {
        // 1. ก๊อปปี้ข้อมูลเดิมมาก่อน (กฎเหล็ก React: ห้ามแก้ state โดยตรง)
        const newList = [...currentList];
        
        // 2. เข้าไปแก้ตัวที่ถูกกด: สลับค่า completed (ถ้าไม่มีให้เป็น true, ถ้ามี true ให้เป็น false)
        newList[index].completed = !newList[index].completed;
        
        // 3. บันทึกข้อมูลใหม่
        setList(newList);
    };
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

        <PatientList 
        patients={currentList} 
         //*ส่งฟังก์ชันนี้ไปให้ลูก (PatientList) ใช้งาน */
        onToggle={handleToggleComplete} // ส่งไปในชื่อ prop "onToggle"
        />
      </div>
    );
}

export default Maincontent