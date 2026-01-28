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
              <a href="#" title="Todaylist">
                รายการวันนี้
              </a>
            </li>
            <li>
              <a href="#" title="Appointment">
                นัดหมายผู้ป่วย
              </a>
            </li>
            <li>
              <a href="#" title="Recent-Appointment">
                รายการนัดล่าสุด
              </a>
            </li>
            <li>
              <a href="#" title="statistic">
                สถิติ
              </a>
            </li>
          </ul>
        </div>
        <button className="setting">Setting</button>
      </aside>
    );
}

export default Sidebar