function SinhVien(
  _maSV,
  _tenSV,
  _emailSV,
  _pass,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.emailSV = _emailSV;
  this.pass = _pass;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.tinhDTB = function () {
    return (this.diemToan * 1 + this.diemHoa * 1 + this.diemLy * 1) / 3;
  };
}
