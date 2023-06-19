import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalPopUp } from "../Component/ModalPopUp";
import { HabitContext } from "../hook/HabitContext";

export const HabitListing = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  const {
    storedHabit,
    setDispatchHabitState,
    archivedData,
    setIsEditMood
  } = useContext(HabitContext);

  const [showDetail, setShowDetail] = useState({});

  const ShowedHabit = (item) => {
    setShowDetail((prevShowDetail) => ({
      ...prevShowDetail,
      [item]: !prevShowDetail[item]
    }));
  };
  return (
    <>
      <button
        className="btn  btn-info"
        onClick={() => {
          setOpenPopUp(true);
          setDispatchHabitState({ type: "CLEAR_HABIT_STATE" });
        }}
      >
        Create My Own
      </button>
      &nbsp;
      <Link to="/archive">
        <button className="btn btn-sm btn-secondary">
          Archived Habits ({archivedData.length})
        </button>
      </Link>
      {openPopUp && <ModalPopUp setOpenPopUp={setOpenPopUp} />}
      {!storedHabit.length ? (
        <h2>"Habit list is empaty"</h2>
      ) : (
        <>
          {storedHabit?.map((item, index) => {
            const { Name, Repeat, Goal, TimeOfDay, StartDate } = item;
            return (
              <div className="card" style={{ width: "18rem" }} key={index}>
                <div className="card-body">
                  <h5 className="card-title">
                    Habit is: {Name} <br />
                    <u onClick={() => ShowedHabit(index)}>show detail</u>
                  </h5>
                  {showDetail[index] && (
                    <>
                      <p className="card-text">
                        Repeat: <strong>{Repeat}</strong>
                        <br />
                        Goal: <strong>{Goal}</strong>
                        <br />
                        TimeOfDay: <strong>{TimeOfDay}</strong>
                        <br />
                        StartDate: <strong>{StartDate}</strong>
                      </p>
                      <button
                        className="btn-sm btn btn-primary"
                        onClick={() =>
                          setDispatchHabitState({
                            type: "ARCHIVE_HABITS",
                            payload: item
                          })
                        }
                      >
                        Archive
                      </button>

                      <button
                        className="btn-sm btn btn-danger"
                        onClick={() =>
                          setDispatchHabitState({
                            type: "DELETE_HABIT",
                            payload: index
                          })
                        }
                      >
                        Delete
                      </button>
                      <button
                        className="btn-sm btn btn-success"
                        onClick={() => {
                          setDispatchHabitState({
                            type: "EDIT_HABIT",
                            payload: index
                          });
                          setOpenPopUp(true);
                          setIsEditMood(true);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
