function Dashboard(){
  return(
<div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 d-flex align-items-stretch">
          <div class="card w-100">
            <div class="card-body">
              <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div class="mb-3 mb-sm-0">
                  <h5 class="card-title fw-semibold">Tổng Quan Doanh Thu</h5>
                </div>
                <div>
                  <select class="form-select">
                    <option value="1">Tháng 3, 2023</option>
                    <option value="2">Tháng 4, 2023</option>
                    <option value="3">Tháng 5, 2023</option>
                    <option value="4">Tháng 6, 2023</option>
                  </select>
                </div>
              </div>
              <div id="chart"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="card overflow-hidden">
                <div class="card-body p-4">
                  <h5 class="card-title mb-9 fw-semibold">Tổng Kết Năm</h5>
                  <div class="row align-items-center">
                    <div class="col-8">
                      <h4 class="fw-semibold mb-3">36,358 vé</h4>
                      <div class="d-flex align-items-center mb-3">
                        <span
                          class="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                          <i class="ti ti-arrow-up-left text-success"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">+9%</p>
                        <p class="fs-3 mb-0">so với năm trước</p>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="me-4">
                          <span class="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                          <span class="fs-2">2023</span>
                        </div>
                        <div>
                          <span class="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                          <span class="fs-2">2024</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="d-flex justify-content-center">
                        <div id="breakup"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="row align-items-start">
                    <div class="col-8">
                      <h5 class="card-title mb-9 fw-semibold">Doanh Thu Tháng</h5>
                      <h4 class="fw-semibold mb-3">$6,820</h4>
                      <div class="d-flex align-items-center pb-1">
                        <span
                          class="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                          <i class="ti ti-arrow-down-right text-danger"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">-5%</p>
                        <p class="fs-3 mb-0">so với năm trước</p>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="d-flex justify-content-end">
                        <div
                          class="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                          <i class="ti ti-currency-dollar fs-6"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="earning"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-4 d-flex align-items-stretch">
          <div class="card w-100">
          <div class="card-body p-4">
                <div class="mb-4">
                  <h5 class="card-title fw-semibold">Giao dịch gần đây</h5>
                </div>
                <ul class="timeline-widget mb-0 position-relative mb-n5">
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time  flex-shrink-0 text-end text-green-700">Hoàn thành</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-primary flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3  mt-n1">Nguyễn thị A thanh toán 385,000 vnd</div>
                  </li>
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time  flex-shrink-0 text-end text-red-600">Đã hủy</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-info flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1 fw-semibold">Đặt nhầm chuyến <a
                        href="javascript:void(0)" class="text-primary d-block fw-normal">#-3467</a>
                    </div>
                  </li>
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end text-green-800">Hoàn thành</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1">Nguyễn Van A thanh toán 185,000 vnd</div>
                  </li>
               
              
                </ul>
              </div>
          </div>
        </div>
        <div class="col-lg-8 d-flex align-items-stretch">
          <div class="card w-100">
            <div class="card-body p-4">
              <h5 class="card-title fw-semibold mb-4">Giao Dịch Gần Đây</h5>
              <div class="table-responsive">
                <table class="table text-nowrap mb-0 align-middle">
                  <thead class="text-dark fs-4">
                    <tr>
                      <th><h6 class="fw-semibold mb-0">Mã</h6></th>
                      <th><h6 class="fw-semibold mb-0">Nhân Viên</h6></th>
                      <th><h6 class="fw-semibold mb-0">Khách Hàng</h6></th>
                      <th><h6 class="fw-semibold mb-0">Trạng Thái</h6></th>
                      <th><h6 class="fw-semibold mb-0">Giá Vé</h6></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><h6 class="fw-semibold mb-0">1</h6></td>
                      <td><h6 class="fw-semibold mb-1">Lê Minh</h6><span class="fw-normal">Nhân viên bán vé</span></td>
                      <td><p class="mb-0 fw-normal">Nguyễn Văn B</p></td>
                      <td><span class="badge bg-primary rounded-3 fw-semibold">Đã xác nhận</span></td>
                      <td><h6 class="fw-semibold mb-0 fs-4">$15</h6></td>
                    </tr>
                    <tr>
                      <td><h6 class="fw-semibold mb-0">2</h6></td>
                      <td><h6 class="fw-semibold mb-1">Trần Văn C</h6><span class="fw-normal">Nhân viên bán vé</span></td>
                      <td><p class="mb-0 fw-normal">Trần Thị D</p></td>
                      <td><span class="badge bg-secondary rounded-3 fw-semibold">Chờ xác nhận</span></td>
                      <td><h6 class="fw-semibold mb-0 fs-4">$20</h6></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard;
