import { Link } from "react-router-dom";
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
              <Link to="/" title="AppointmentList">
                รายการนัด
              </Link>
            </li>
            <li>
              <Link to="/calender" title="Appointment">
                นัดหมายผู้ป่วย
              </Link>
            </li>
            <li>
              <Link to="#" title="Recent-Appointment">
                รายการนัดล่าสุด
              </Link>
            </li>
            <li>
              <Link to="#" title="statistic">
                สถิติ
              </Link>
            </li>
          </ul>
        </div>
        <button className="setting">Setting</button>
      </aside>
    );
}

export default Sidebar