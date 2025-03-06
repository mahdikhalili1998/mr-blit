export function extractNumber(text) {
  let match = text.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

// محاسبه ی قیمت نهایی با توجه به تعداد و قیمت و تخفیف
export const calculateTotalPrice = (count, pricePerItem, discount) => {
  const totalPrice = count * pricePerItem; // قیمت اولیه
  const discountedPrice = totalPrice - totalPrice * (discount / 100); // اعمال تخفیف
  return discountedPrice;
};

// جدا کننده اسم شهر از اسم ایستگاه
export function extractTehran(str) {
  return str.split("/")[0];
}

// تبدیل شماره فارسی به انگیلیسی
export const p2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
