import "./patientlist.css"
// สำหรับกล่องข้อมูบล list ผู้ป่วย
//รับ patient มาจาก maincontent
function PatientList({ patients }) {
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
        <div key={index} className="patient-box">
          {/* <p>{index+1}</p> */}
          <div className="detail">
            <p>Name | {patient.name}</p>
            <p>HN | {patient.hn}</p>
            <p>Scan part| {patient.scan_part}</p>
          </div>
          <div>
            <button>complete</button>
            <button>cancle</button>
          </div>
          
        </div>

        // --- จบส่วน HTML ---
      ))}
    </div>
  );
}
export default PatientList