const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9,
  discountCode: "SUMMER10"
};

const isVoucherValid = false;

// Lấy giá phòng bằng Bracket Notation
const priceKey = "roomPrice";
const basePrice = bookingReservation[priceKey];

let earlySurcharge = 0;

// Tính phụ thu nhận phòng sớm
if (bookingReservation.checkInHour < 12) {
  earlySurcharge = basePrice * 0.3;
  bookingReservation.earlySurcharge = earlySurcharge;
}

// Tính tổng tiền
const totalAmount = basePrice + earlySurcharge;
bookingReservation.totalAmount = totalAmount;

// Nếu voucher không hợp lệ thì xóa discountCode
if (!isVoucherValid) {
  delete bookingReservation.discountCode;
}

// Hiển thị toàn bộ thông tin
console.log("--- CHI TIẾT PHIẾU ĐẶT PHÒNG ---");

for (const key in bookingReservation) {
  console.log(key + ": " + bookingReservation[key]);
}