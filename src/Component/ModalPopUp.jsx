import { useContext, useEffect } from "react";
import { HabitContext } from "../hook/HabitContext";
import "./ModalPopUp.css";

export const ModalPopUp = ({ setOpenPopUp }) => {
  const {
    habitData,
    inEditMood,
    setIsEditMood,
    setDispatchHabitState
  } = useContext(HabitContext);

  // const { Name, Repeat, Goal, TimeOfDay, StartDate } = habitData;

  const HabitListed = (event) => {
    event.preventDefault();
  };
  const discardPopUp = () => {
    if (inEditMood) {
      setDispatchHabitState({
        type: "STORE_HABIT_INTO_LIST",
        payload: habitData
      });
      setOpenPopUp(false);
      setIsEditMood(false);
    }
    setOpenPopUp(false);
  };
  const HabitDataAdded = () => {
    if (
      habitData?.Name &&
      habitData?.Repeat
      //  && Goal && TimeOfDay && StartDate
    ) {
      setOpenPopUp(false);
      setDispatchHabitState({
        type: "STORE_HABIT_INTO_LIST",
        payload: habitData
      });
    }
  };

  return (
    <div className="post-modal">
      {/* <!-- Modal content --> */}
      <div className="modal-content">
        <h3>New Habit</h3>
        <form onSubmit={HabitListed}>
          <label htmlFor="name">Name*</label>
          <input
            required
            autoComplete="off"
            type="text"
            id="name"
            name="Name"
            value={habitData?.Name}
            onChange={(event) =>
              setDispatchHabitState({
                type: "SET_DATA",
                payload: { name: event.target.name, value: event.target.value }
              })
            }
          />
          <br />
          <label htmlFor="repeat">Repeat</label>
          <select
            required
            name="Repeat"
            value={habitData?.Repeat}
            onChange={(event) =>
              setDispatchHabitState({
                type: "SET_DATA",
                payload: { name: event.target.name, value: event.target.value }
              })
            }
          >
            <option>not selected</option>
            <option>daily</option>
            <option>weekly</option>
            <option>monthly</option>
          </select>
          &nbsp; &nbsp; &nbsp;
          {/* <label htmlFor="goal">Goal</label>
          <select
            required
            name="Goal"
            id="goal"
            value={Goal}
            onChange={(event) =>
              setDispatchHabitState({
                type: "SET_DATA",
                payload: { name: event.target.name, value: event.target.value }
              })
            }
          >
            <option value="">not selected</option>

            <option>one time daily</option>
            <option>one time weekly</option>
            <option>one time monthly</option>
          </select>
          <br />
          <label htmlFor="timeOfDay">Time Of Day</label>
          <select
            required
            value={TimeOfDay}
            name="TimeOfDay"
            id="timeOfDay"
            onChange={(event) =>
              setDispatchHabitState({
                type: "SET_DATA",
                payload: { name: event.target.name, value: event.target.value }
              })
            }
          >
            <option value="">not selected</option>

            <option>any time</option>
            <option>at night</option>
            <option>at evening</option>
          </select>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <label htmlFor="startData">Start Date</label>
          <select
            required
            name="StartDate"
            value={StartDate}
            id="startData"
            onChange={(event) =>
              setDispatchHabitState({
                type: "SET_DATA",
                payload: { name: event.target.name, value: event.target.value }
              })
            }
          >
            <option value="">not selected</option>

            <option>Today</option>
            <option>Tomorrow</option>
            <option>Yesterday</option>
          </select> */}
          <hr />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={HabitDataAdded}
          >
            Save
          </button>
          &nbsp;
          <button className="btn btn-dark" onClick={discardPopUp}>
            Discard
          </button>
        </form>
      </div>
    </div>
  );
};
