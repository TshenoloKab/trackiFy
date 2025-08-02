const STORAGE_KEY = "daily_habits";

export const loadHabits = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to load habits", e);
    return [];
  }
};

export const saveHabits = (habits) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  } catch (e) {
    console.error("Failed to save habits", e);
  }
};
