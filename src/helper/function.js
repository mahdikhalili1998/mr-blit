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


// برای گرفتن حروف اول و دوم اسم برای پروفایل
export function formatName(name) {
    if (!name || name.length < 2) {
        return "ورودی باید حداقل دو حرف داشته باشد.";
    }

    let firstChar = name.charAt(0).toUpperCase();
    let secondChar = name.charAt(1).toLowerCase();

    return firstChar + secondChar;
}