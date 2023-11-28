import AsyncStorage from "@react-native-async-storage/async-storage";
import { isToday } from "date-fns";
//types
import { Meal } from "../types";

const MY_FOOD_KEY = "@MyFood:Key";
const MY_TODAY_FOOD_KEY = "@MyTodayFood:Key";

const useFoodStorage = () => {
  const saveInfoToStorage = async (storageKey: string, meal: Meal) => {
    try {
      const currentSavedFood = await AsyncStorage.getItem(storageKey);

      if (currentSavedFood !== null) {
        const currentSavedFoodParsed = JSON.parse(currentSavedFood);
        currentSavedFoodParsed.push(meal);

        await AsyncStorage.setItem(
          storageKey,
          JSON.stringify(currentSavedFoodParsed)
        );

        return Promise.resolve();
      }

      await AsyncStorage.setItem(storageKey, JSON.stringify([meal]));

      return Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

  const getInfoToStorage = async (storageKey: string) => {
    try {
      const foods = await AsyncStorage.getItem(storageKey);

      if (foods !== null) {
        const parsedFoods = JSON.parse(foods) as Meal[];
        return Promise.resolve(parsedFoods);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleSaveFood = async ({ calories, name, portion }: Meal) => {
    try {
      const result = await saveInfoToStorage(MY_FOOD_KEY, {
        calories,
        name,
        portion,
      });

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleGetFood = async () => {
    try {
      const result = await getInfoToStorage(MY_FOOD_KEY);

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleSaveTodayFood = async ({ calories, name, portion }: Meal) => {
    try {
      const result = await saveInfoToStorage(MY_TODAY_FOOD_KEY, {
        calories,
        name,
        portion,
        date: new Date().toISOString(),
      });

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleGetTodayFood = async () => {
    try {
      const result = await getInfoToStorage(MY_TODAY_FOOD_KEY);

      const response = result
        ? result.filter((meal) => meal.date && isToday(new Date(meal.date)))
        : [];

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    onSaveFood: handleSaveFood,
    onSaveTodayFood: handleSaveTodayFood,
    onGetFood: handleGetFood,
    onGetTodayFood: handleGetTodayFood,
  };
};

export default useFoodStorage;
