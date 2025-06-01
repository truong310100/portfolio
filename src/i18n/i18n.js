// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import viTranslation from './vi.json';

// Cấu hình các ngôn ngữ và tài nguyên
i18n
  .use(initReactI18next) // Sử dụng react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      vi: {
        translation: viTranslation,
      },
    },
    lng: localStorage.getItem('language') || 'en', // Ngôn ngữ mặc định từ localStorage
    fallbackLng: 'en', // Nếu không tìm thấy ngôn ngữ
    interpolation: {
      escapeValue: false, // React đã xử lý việc escape
    },
  });

export default i18n;
