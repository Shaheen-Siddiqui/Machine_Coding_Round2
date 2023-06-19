export const habitReducer = (HabitState, { type, payload }) => {
  switch (type) {
    case "SET_DATA":
      const { name, value } = payload;
      return {
        ...HabitState,
        habitData: {
          ...HabitState.habitData,
          [name]: value
        }
      };
    case "STORE_HABIT_INTO_LIST":
      return {
        ...HabitState,
        storedHabit: [...HabitState.storedHabit, payload]
      };
    case "ARCHIVE_HABITS":
      return {
        ...HabitState,
        storedHabit: HabitState.storedHabit.filter((item) => item !== payload),
        archivedData: [...HabitState.archivedData, payload]
      };
    case "DELETE_HABIT":
      return {
        ...HabitState,
        storedHabit: HabitState.storedHabit.filter(
          (item, index) => index !== payload
        )
      };
    case "EDIT_HABIT":
      return {
        ...HabitState,
        habitData: HabitState.storedHabit.find(
          (item, index) => index === payload
        ),
        storedHabit: HabitState.storedHabit.filter(
          (item, index) => index !== payload
        )
      };
    case "CLEAR_HABIT_STATE":
      return {
        ...HabitState,
        habitData: {}
      };
    default:
      throw new Error(`invelis typr ${type} check habitReducer`);
  }
};
