import { createContext, useReducer, useState } from "react";
import { habitReducer } from "./HabitReducer";

export const HabitContext = createContext();

export const HabitContextProvider = ({ children }) => {
  const [HabitState, setDispatchHabitState] = useReducer(habitReducer, {
    storedHabit: [],
    archivedData: [],
    habitData: { Name: "", Repeat: "", Goal: "", TimeOfDay: "", StartDate: "" }
  });
  const { storedHabit, archivedData, habitData } = HabitState;
  const [inEditMood, setIsEditMood] = useState(false);

  return (
    <HabitContext.Provider
      value={{
        habitData,
        setIsEditMood,
        inEditMood,
        setDispatchHabitState,
        storedHabit,
        archivedData
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};
