import { Link, NavLink } from "react-router-dom";
import "./sidebar.css"

function Sidebar(){
    return (
      <aside id="sidebar" className="container-sidebar">
        <div className="sidebar">
          <div className="title-sidebar">
            <span className="img-span">
              <img src="/public/ray-q-logo.png" alt="" width={60} />
            </span>
            <span>RayQ</span>
          </div>
          <ul className="list-sidebar">
            <li>
              {/* ความพิเศษของ NavLink คือ "มันรู้ตัวว่าตัวเองถูกเลือกอยู่หรือไม่" */}
              <NavLink to="/main" end title="AppointmentList" className={"menu-item"}>
                รายการนัด
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar" end title="Appointment" className={"menu-item"}>
                นัดหมายผู้ป่วย
              </NavLink>
            </li>
            <li>
              <NavLink to="/recent" end title="Recent-Appointment" className={"menu-item"}>
                รายการนัดล่าสุด
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistic" end title="statistic" className={"menu-item"}>
                สถิติ
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="setting">Setting</button>
      </aside>
    );
}

export default Sidebar