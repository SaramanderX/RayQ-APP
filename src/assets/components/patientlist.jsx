import "./patientlist.css"
//icon
import { BsCheckCircleFill } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";

import { useState } from "react";

// สำหรับกล่องข้อมูบล list ผู้ป่วย
//รับ patient มาจาก maincontent
function PatientList({ patients,onToggle}) {
  const [activeBtn,setActiveBtn] =  useState('complete')
  return (
    <div className="cardlist-container">
      <div className="information">
        <p>
          จำนวนผู้ป่วย : <span>{patients.length}</span> คน
        </p>
        <p>
          สำเร็จ: <span>0</span> คน
        </p>
        <p>
          รอตรวจ : <span>2</span>คน
        </p>
        <p>
          ยกเลิก: <span>0</span> คน
        </p>
      </div>
      {patients.map((patient, index) => (
        // --- เริ่มต้นส่วน HTML ที่จะถูกสร้างซ้ำ ---
        // key={index} คือสิ่งที่ React ต้องการ เพื่อระบุตัวตนว่ากล่องนี้คือกล่องลำดับที่เท่าไหร่
        <div key={index} className={`patient-box ${patient.completed ? 'completed' : ''}`}> 
        {/*เช็คเงื่อนไข: ถ้า patient.completed เป็นจริง ให้เติม class "completed" */}
          <div className="detail">
            <p>Name | {patient.name}</p>
            <p>HN | {patient.hn}</p>
            <p>Scan part| {patient.scan_part}</p>
          </div>
          <div className="patient-action">
            {/* // ส่งเลข index กลับไปบอกแม่ */}
            <button className={"icon-btn complete"} onClick={()=> {
              
              onToggle(index)
              //บันทึกลงฐานข้อมูล
              // function ....? 
              }}>
              <BsCheckCircleFill />
            </button>
            <button className="icon-btn edit"><BsFillPenFill /></button>
            <button className="icon-btn ancle"><BsXCircleFill/></button>
          </div>
          
        </div>

        // --- จบส่วน HTML ---
      ))}
    </div>
  );
}
export default PatientList