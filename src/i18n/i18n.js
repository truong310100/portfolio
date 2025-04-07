// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Cấu hình các ngôn ngữ và tài nguyên
i18n
  .use(initReactI18next) // Sử dụng react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to my portfolio",
          description: "This is a short description of my work",
        },
      },
      vi: {
        translation: {
          welcome: "Chào mừng đến với portfolio của tôi",
          description: "Đây là mô tả ngắn về công việc của tôi",
        },
      },
    },
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Nếu không tìm thấy ngôn ngữ
    interpolation: {
      escapeValue: false, // React đã xử lý việc escape
    },
  });

export default i18n;
