import Style from "../Style/Style.css"
export default function Sideber() {
  return <>
    {/* <script src="./Styling/Style"></script> */}
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="index.html">
            <div className="icon" aria-hidden="true"><svg height="21" viewBox="0 0 19 21" width="19" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 6 9.0932667 5.25v10.5l-9.0932667 5.25-9.09326674-5.25v-10.5z" fill="currentColor" fill-rule="evenodd" transform="translate(-7 -6)"></path></svg></div>
            <span>Linodes</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">s<path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" /></svg></div>
            {/* <div className="icon" aria-hidden="true"><svg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="currentColor" fill-rule="evenodd"><path d="m13.8408 5.480919c-.8277143 0-1.4991429-.63423-1.4991429-1.41669s.6714286-1.41669 1.4991429-1.41669 1.4988571.63423 1.4988571 1.41669-.6711428 1.41669-1.4988571 1.41669m3.174-5.38083h-16.046c-.53514286 0-.96857143.40986-.96857143.9153v6.09768c0 .50544.43342857.91557.96857143.91557h16.046c.5348571 0 .9688571-.41013.9688571-.91557v-6.09768c0-.50544-.434-.9153-.9688571-.9153"></path><path d="m13.9275714 5.552388c-.8277143 0-1.4991428-.63423-1.4991428-1.41669s.6714285-1.41642 1.4991428-1.41642 1.4991429.63396 1.4991429 1.41642-.6714286 1.41669-1.4991429 1.41669m3.0874286-5.38083h-16.046c-.53542857 0-.96885714.40986-.96885714.9153v6.09768c0 .50544.43342857.91557.96885714.91557h16.046c.5348571 0 .9685714-.41013.9685714-.91557v-6.09768c0-.50544-.4337143-.9153-.9685714-.9153" transform="translate(0 9.9)"></path></g></svg></div> */}
            <span>Volumes</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 448 512"><path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z" /></svg>
            </div>
            <span>NodeBalancers</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <div className="icon" aria-hidden="true"><svg viewBox="0 0 215 215" xmlns="http://www.w3.org/2000/svg"><path d="m214.84 136.33a31.58 31.58 0 0 0-28.76-28.18 51.33 51.33 0 0 0-86.29-48.65v26.29h33.27v28.18h33.26v35.43h-140.32v-28.18h-15.25a39 39 0 0 0 35.88 49.54h139.87a31.37 31.37 0 0 0 28.34-34.43zm-148.34-43.29h59.3v20.92h-59.3zm-33.24-28.18h59.24v20.92h-59.24zm-33.26 28.18h59.27v20.92h-59.27zm33.26 28.18h59.24v20.92h-59.24zm66.53 0h59.27v20.92h-59.27z" fill="currentColor"></path></svg></div>
      Firewalls
    </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" /></svg>
            </div>
            <span>StackScripts</span>
          </a>
        </li>


        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <div className="icon" aria-hidden="true"><svg height="17" viewBox="0 0 22 17" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m20.2699009 8-3.6449009 2.2192523 3.3351983 2.0307477v8.5l-3.3351983 2.0307232 3.6449009 2.2192768 6.9800991-4.25v-8.5zm-7.289817 0-6.9800839 4.25v8.5l6.9800839 4.25 3.6449161-2.2192768-1.1171665-.6802234-2.5277496 1.5390778-5.86291736-3.569801v-7.1395532l5.86291736-3.56980102 2.5277496 1.53905332 1.1171665-.6802234zm.4574161 4.4685722v8.0628788l2.121893 1.281049 3.190607-1.9262912v-6.7723943l-3.190607-1.9263145z" fill="currentColor" fill-rule="evenodd" transform="translate(-6 -8)"></path></svg></div>
            <span>Images</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <div className="icon" aria-hidden="true"><svg viewBox="0 0 25.397 23.5" xmlns="http://www.w3.org/2000/svg"><path d="m12.699 1.3743e-5a12.68 12.68 0 0 0-6.63 23.5v-3.44a6.63 6.63 0 1 1 13.26 0v3.44a12.68 12.68 0 0 0-6.63-23.5zm0 12.08a4.34 4.34 0 1 1 4.34-4.34 4.34 4.34 0 0 1-4.34 4.34z" fill="currentColor"></path></svg></div>
            <span>Account</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <div className="icon" aria-hidden="true"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 0a12.5 12.5 0 1 0 12.5 12.5 12.5 12.5 0 0 0-12.5-12.5zm-0.36 21a2.28 2.28 0 0 1 0-4.56 2.28 2.28 0 0 1 0 4.56zm1.61-6h-3.18c-0.5-3.37 3.1-4.78 3.1-6.62a1.48 1.48 0 0 0-1.67-1.51 3.1 3.1 0 0 0-2.22 1.13l-2-1.83a5.84 5.84 0 0 1 4.49-2.24c2.78 0 4.88 1.31 4.88 4.21 0 3.07-3.7 3.98-3.4 6.91z" fill="currentColor"></path></svg></div>
            <span>Help & Support</span>
          </a>
        </li>





      </ul>

    </aside>
  </>

}