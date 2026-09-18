export const formatBangladeshWhatsAppPhone = (phone: string = '01731537457'): string => {
  let clean = phone.replace(/[^0-9]/g, '');
  if (clean.startsWith('880')) {
    return clean;
  }
  if (clean.startsWith('0')) {
    return `880${clean.substring(1)}`;
  }
  if (clean.startsWith('88') && !clean.startsWith('880')) {
    return `880${clean.substring(2)}`;
  }
  if (clean.length === 10 && clean.startsWith('1')) {
    return `880${clean}`;
  }
  return clean ? `880${clean.replace(/^0+/, '')}` : '8801731537457';
};

export const getWhatsAppUrl = (phone: string = '01731537457', message: string = '') => {
  const intlPhone = formatBangladeshWhatsAppPhone(phone);
  const defaultText = 'আসসালামু আলাইকুম। আমি MSS INNOVATE 26 ইভেন্টে অংশ নিতে যোগাযোগ করছি। বিস্তারিত ও রেজিস্ট্রেশন প্রক্রিয়া জানতে চাই।';
  const encodedMsg = encodeURIComponent(message || defaultText);
  return `https://wa.me/${intlPhone}?text=${encodedMsg}`;
};

