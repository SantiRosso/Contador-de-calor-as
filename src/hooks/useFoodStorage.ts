import AsyncStorage from "@react-native-async-storage/async-storage";
//types
import { Meal } from "../types";

const MY_FOOD_KEY = "@MyFood:Key";

const useFoodStorage = () => {
  const handleSaveFood = async ({ calories, name, portion }: Meal) => {
    try {
      const currentSavedFood = await AsyncStorage.getItem(MY_FOOD_KEY);

      if (currentSavedFood !== null) {
        const currentSavedFoodParsed = JSON.parse(currentSavedFood);
        currentSavedFoodParsed.push({
          calories,
          name,
          portion,
        });

        await AsyncStorage.setItem(
          MY_FOOD_KEY,
          JSON.stringify(currentSavedFoodParsed)
        );

        return Promise.resolve();
      }

      await AsyncStorage.setItem(
        MY_FOOD_KEY,
        JSON.stringify([
          {
            calories,
            name,
            portion,
          },
        ])
      );

      return Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

  const handleGetFood = async () => {
    try {
      const foods = await AsyncStorage.getItem(MY_FOOD_KEY);

      if (foods !== null) {
        const parsedFoods = JSON.parse(foods);
        return Promise.resolve(parsedFoods);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    onSaveFood: handleSaveFood,
    onGetFood: handleGetFood,
  };
};

export default useFoodStorage;
