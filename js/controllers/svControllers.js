function layThongTinTuForm() {
  //lấy thông tin từ form
  var _maSV = document.getElementById("txtMaSV").value;
  var _tenSV = document.getElementById("txtTenSV").value;
  var _emailSV = document.getElementById("txtEmail").value;
  var _pass = document.getElementById("txtPass").value;
  var _diemToan = document.getElementById("txtDiemToan").value * 1;
  var _diemLy = document.getElementById("txtDiemLy").value * 1;
  var _diemHoa = document.getElementById("txtDiemHoa").value * 1;

  // tạo object sv
  return new SinhVien(
    _maSV,
    _tenSV,
    _emailSV,
    _pass,
    _diemToan,
    _diemLy,
    _diemHoa
  );
}
function render(arr) {
  var contentHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var sv = arr[i];
    var contentTr = `<tr>
  <td id="maSV">${sv.maSV}</td>
  <td>${sv.tenSV}</td>
  <td>${sv.emailSV}</td>
  <td>${sv.tinhDTB()}</td>
  <td><button onclick="xoaSV('${sv.maSV}')" class="btn btn-danger">Xóa</button>
  <button onclick="suaSV('${sv.maSV}')" class="btn btn-primary">Sửa</button>
  </td>
  </tr>`;
    contentHTML += contentTr;
  }
  return contentHTML;
}

function timKiemViTri(id, arr) {
  var viTri = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].maSV == id) {
      viTri = i;
    }
  }
  return viTri;
}

function timKiemTen(tenSV, arr) {
  var viTri = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].tenSV == tenSV) {
      viTri = i;
    }
  }
  return viTri;
}
