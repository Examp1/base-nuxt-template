import appSettings from "~/store/app-settings";

export default defineNuxtRouteMiddleware(async () => {
  const appSettingsStore = appSettings();
  const { locale } = useI18n(); // Получаем текущий язык

  try {
    // Если меню нет, загружаем его
    if (!appSettingsStore.menuCount) {
      await appSettingsStore.fetchAllMenu(locale.value);
    }

    // Если настроек нет, загружаем их
    if (!appSettingsStore.settings) {
      await appSettingsStore.fetchSettings(locale.value);
    }
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
});