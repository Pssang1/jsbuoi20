var getEL = document.getElementById("tbodySinhVien");
var DSSV;
var storageKey = "dssv";
var dataString = localStorage.getItem(storageKey);
if (dataString) {
  var dataArr = JSON.parse(dataString);
  DSSV = dataArr.map(function (item) {
    var sv = new SinhVien(
      item.maSV,
      item.tenSV,
      item.emailSV,
      item.pass,
      item.diemToan,
      item.diemLy,
      item.diemHoa
    );
    return sv;
  });
} else {
  DSSV = [];
}
//show ra table
getEL.innerHTML = render(DSSV);

// set localstorage
function setLocalStorage() {
  return localStorage.setItem(storageKey, JSON.stringify(DSSV));
}
// clear html
function clearHTML() {
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemLy").value = "";
  document.getElementById("txtDiemHoa").value = "";
}
// thêm SV
function themSV() {
  var sv = layThongTinTuForm();
  //push sv vao DSSV
  DSSV.push(sv);
  setLocalStorage();
  //render danh sach sv
  var contentHTML = render(DSSV);
  //show ra table
  getEL.innerHTML = contentHTML;
  clearHTML();
}

function xoaSV(maSV) {
  var vitri = timKiemViTri(maSV, DSSV);
  if (vitri != -1) {
    DSSV.splice(vitri, 1);
    setLocalStorage();
    getEL.innerHTML = render(DSSV);
  }
}

function suaSV(maSV) {
  var viTri = timKiemViTri(maSV, DSSV);
  if (viTri != -1) {
    document.getElementById("txtMaSV").value = DSSV[viTri].maSV;
    document.getElementById("txtMaSV").disabled = true;
    document.getElementById("txtTenSV").value = DSSV[viTri].tenSV;
    document.getElementById("txtEmail").value = DSSV[viTri].emailSV;
    document.getElementById("txtPass").value = DSSV[viTri].pass;
    document.getElementById("txtDiemToan").value = DSSV[viTri].diemToan;
    document.getElementById("txtDiemLy").value = DSSV[viTri].diemLy;
    document.getElementById("txtDiemHoa").value = DSSV[viTri].diemHoa;
  }
}

function capNhat() {
  var sv = layThongTinTuForm();
  var maSV = document.getElementById("txtMaSV").value;
  var viTri = timKiemViTri(maSV, DSSV);
  if (viTri != -1) {
    DSSV.splice(viTri, 1, sv);
    setLocalStorage();
    getEL.innerHTML = render(DSSV);
    location.reload();
  }
}

function search() {
  var searchValue = document.getElementById("txtSearch").value;
  var userSearch = DSSV.filter((value) => {
    return value.tenSV.toUpperCase().includes(searchValue.toUpperCase());
  });
  if (userSearch.length != 0) {
    getEL.innerHTML = render(userSearch);
  } else {
    alert("Không tìm thấy kết quả");
  }
}
