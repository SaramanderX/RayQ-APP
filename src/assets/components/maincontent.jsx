import "./maincontent.css"
import PatientList from "./patientlist";
function Maincontent(){
    // ข้อมูลจำลอง (Mock Data) Data เช้า
    const data = [
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
    ];

    const data2 = [
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
      }
    ]

    return (
      <div className="content-container">
        <div className="content-container-header">
          <h2>รายชื่อผู้ป่วยนัด วันที่ 12/01/69 </h2>
          <div className="cardlist-period">
            <button>เช้า</button>
            <button>บ่าย</button>
            <label htmlFor="">ค้นหา</label>
            <input type="text" placeholder="กรอก HN" />
          </div>
        </div>
        <PatientList patients={data} />
      </div>
    );
}

export default Maincontent