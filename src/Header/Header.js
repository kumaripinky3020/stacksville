import Style from "../Style/Style.css"
export default function Header() {

  const handleSignOutClick = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  return <>
    <div>
      {/* <!-- ======= Header ======= --> */}
      {/* <script src="./Styling/Style"></script> */}
      <header id="header" className="header fixed-top d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">StacksVille</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <div className="dropdown ct_custom_drop">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Create
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">
                <div className="ct_drop_flex">
                  {/* <div className="ct_logo">
            <svg height="21" viewBox="0 0 19 21" width="19" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 6 9.0932667 5.25v10.5l-9.0932667 5.25-9.09326674-5.25v-10.5z" fill="currentColor" fill-rule="evenodd" transform="translate(-7 -6)"></path></svg>
          </div> */}
                  <div className="ct_drop_title">
                    <h5>Linode</h5>
                    <p>High performance SSD Linux servers</p>
                  </div>
                </div>
              </a></li>
            <li><a className="dropdown-item" href="#">
              <div className="ct_drop_flex">
                {/* <div className="ct_logo">
          <svg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="currentColor" fill-rule="evenodd"><path d="m13.8408 5.480919c-.8277143 0-1.4991429-.63423-1.4991429-1.41669s.6714286-1.41669 1.4991429-1.41669 1.4988571.63423 1.4988571 1.41669-.6711428 1.41669-1.4988571 1.41669m3.174-5.38083h-16.046c-.53514286 0-.96857143.40986-.96857143.9153v6.09768c0 .50544.43342857.91557.96857143.91557h16.046c.5348571 0 .9688571-.41013.9688571-.91557v-6.09768c0-.50544-.434-.9153-.9688571-.9153"></path><path d="m13.9275714 5.552388c-.8277143 0-1.4991428-.63423-1.4991428-1.41669s.6714285-1.41642 1.4991428-1.41642 1.4991429.63396 1.4991429 1.41642-.6714286 1.41669-1.4991429 1.41669m3.0874286-5.38083h-16.046c-.53542857 0-.96885714.40986-.96885714.9153v6.09768c0 .50544.43342857.91557.96885714.91557h16.046c.5348571 0 .9685714-.41013.9685714-.91557v-6.09768c0-.50544-.4337143-.9153-.9685714-.9153" transform="translate(0 9.9)"></path></g></svg>
        </div> */}
                <div className="ct_drop_title">
                  <h5>Volume</h5>
                  <p>Attach additional storage to your Linode</p>
                </div>
              </div>
            </a></li>
            <li><a className="dropdown-item" href="#">
              <div className="ct_drop_flex">
                {/* <div className="ct_logo">
          <svg height="24" viewBox="0 0 21 24" width="21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="currentColor" fill-rule="evenodd" transform="translate(-6 -4)"><path d="m9.75000094 5.23758526-4.70588935 2.75741593 4.70588935 2.63752481zm1.49999816 13.54729734 4.7352954-2.787382-4.7352954-2.7574159zm-6.91176434-9.41117345v5.24508345l4.58823883-2.6675176zm11.58822134-1.37870796-4.676457-2.75741593v5.39494074zm-10.94115662 8.00249941 4.76470146 2.787382v-5.574764zm11.64705972-1.378708v-5.24508345l-4.5882388 2.57756585zm4.3382347-.5694628c-.0588384-.4196056-.4864887-.7272807-.8970687-.6593879-.3245976.0536602-.5882527.3296805-.6470648.6593879l.0294061 2.2178924-2.8235073-1.6484296v.2697484c0 .4795378-.2353011.8991434-.6470647 1.1389257l2.7058831 1.5585313-1.8235437 1.0490274c-.3529252.2397555-.4762571.7232333-.2352747 1.0789667.1436899.2122017.3529252.3596734.6176323.3596734.1470566 0 .2647071-.0299661.3823577-.089925l2.9705902-1.7383546c.2352747-.1498573.3676545-.3896396.3676545-.689354zm-11.22059296 4.7355528v3.1170626l-1.85294969-1.1089596c-.02940605-.0299661-.05881211-.0299661-.08821816-.0599322-.41178998-.1198911-.82970841.147981-.94117787.5394968-.09345234.3281795.02940605.6593611.29411315.8392112l2.99999623 1.7683475c.1176505.0599321.2353011.1198911.3823576.1198911.1470566 0 .2647071-.0299929.3823577-.1198911l2.9705638-1.7683475c.0294324-.0299661.0588385-.0299661.0882445-.0599322.3823576-.1798501.5588203-.6593879.3823576-1.0490274-.1764626-.3896395-.6470647-.5694629-1.0294223-.3896395-.0882445.029966-.1470566.089925-.2058687.1498572l-1.8823557 1.1389257v-3.1170626l-.1470566.0898983c-.3823576.2397823-.8823658.2397823-1.2647234 0zm6.88235826-9.41117345 2.8529133-1.58852417-.029406 2.18795309c0 .41960563.3529516.77927903.7647152.77927903.4117637 0 .7794183-.3596734.7794183-.77927903v-3.50670208c0-.26974837-.1323535-.53949675-.3676546-.68935398 0 0-3.1176468-1.79831357-3.1764589-1.82827966-.4117899-.11989114-.826026.14913354-.9412041.56946284-.0901646.32914448.0588384.6593879.3235455.83921121l1.7941112 1.04900062-2.7352891 1.52856519.0588121.02999289c.3823576.23975549.6470647.65936109.6470647 1.10895959v.29971446zm-12.29412444 5.21511735-2.82353361 1.6484296.02943236-2.2179192c-.05883842-.4196056-.46926067-.7127533-.88236576-.629395-.32257233.0650784-.60295564.2997145-.6323617.629395v3.5067289c0 .2697216.13235355.5394699.3676546.6893272l2.97059018 1.7383814c.11765053.0599589.23527475.1198911.38235762.089925.41176368-.0299661.76471524-.3896395.73528289-.8092451 0-.2397823-.14705658-.4795378-.35295157-.629395l-1.79411127-1.0490274 2.67647703-1.5585313c-.41176367-.2397823-.64706472-.6593879-.64706472-1.1389257v-.2697484zm.70587683-6.59382531-2.7646952-1.5285652 1.79411127-1.04902742c.08824447-.05993217.17648894-.11989114.23530105-.2097894.23530104-.35967343.14705657-.83921121-.20589499-1.0789935-.23530105-.17982332-.55882025-.17982332-.7941213-.02996609l-2.79410125 1.61846345c-.08824447.02999289-.17648893.08992506-.2647071.17985012-.17646263.14985723-.25000407.35964664-.25000407.56946284v3.50670208c0 .41960563.36765459.77927903.77941827.77927903.41176367 0 .76471524-.3596734.76471524-.77927903l-.02943236-2.21791918 2.85293966 1.58852417v-.2098162c0-.47953778.23530105-.89914338.64706472-1.13892567zm6.08823691-2.81737491c-.3823576-.23975548-.8823394-.23975548-1.26469704 0l-.08824447.05995898v-3.11706256l-1.82351732 1.10895959c-.29413946.29971446-.7941213.29971446-1.08823445-.02999289-.29413946-.32968055-.28703782-.80147217.02940605-1.10895959.06020614-.05848479.11765052-.11986434.20586869-.14985723.02943236-.02996609.05883841-.02996609.08824447-.05993217l2.94118417-1.76834749c.2352747-.14985723.5294142-.14985723.7646889 0l2.9705902 1.76834749c.3529515.23978229.4762571.72323335.235301 1.0789935-.1437161.2121749-.3529515.35964663-.6176586.35964663-.1470566 0-.2647071-.02996608-.3823314-.11989114l-1.8235436-1.0789667v3.08709647z" fill="currentColor" transform="translate(6 4)"></path></g></svg>
        </div> */}
                <div className="ct_drop_title">
                  <h5>NodeBalancer</h5>
                  <p>Ensure your services are highly available</p>
                </div>
              </div>
            </a></li>

            <li><a className="dropdown-item" href="#">
              <div className="ct_drop_flex">
                {/* <div className="ct_logo">
          <svg width="19px" height="21px" viewBox="0 0 215 215" xmlns="http://www.w3.org/2000/svg"><path d="m214.84 136.33a31.58 31.58 0 0 0-28.76-28.18 51.33 51.33 0 0 0-86.29-48.65v26.29h33.27v28.18h33.26v35.43h-140.32v-28.18h-15.25a39 39 0 0 0 35.88 49.54h139.87a31.37 31.37 0 0 0 28.34-34.43zm-148.34-43.29h59.3v20.92h-59.3zm-33.24-28.18h59.24v20.92h-59.24zm-33.26 28.18h59.27v20.92h-59.27zm33.26 28.18h59.24v20.92h-59.24zm66.53 0h59.27v20.92h-59.27z" fill="currentColor"></path></svg>
        </div> */}
                <div className="ct_drop_title">
                  <h5>Firewall</h5>
                  <p>Control network access to your Linodes</p>
                </div>
              </div>
            </a></li>
          </ul>
        </div>



        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">

            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>

            <li className="nav-item dropdown">

              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number"></span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <div className="icon">
                  <i className="bi bi-people"></i>
                </div>
              </a>
            </li>

            <li className="nav-item dropdown pe-3">
              <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <span>Profile</span>
                <span className="d-none d-md-block dropdown-toggle ps-2">testuser-123  </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <div className="dropdown-item d-flex align-items-center" onClick={handleSignOutClick}>
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </div>
                </li>

              </ul>
            </li>

          </ul>
        </nav>

      </header>
    </div>
  </>
}
