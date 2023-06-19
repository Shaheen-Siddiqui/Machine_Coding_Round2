import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HabitContext } from "../hook/HabitContext";

export const Archive = () => {
  const { archivedData } = useContext(HabitContext);
  const navigate = useNavigate();
  return (
    <>
      <button className="btn btn-warning" onClick={() => navigate("/")}>
        Go Back{" "}
      </button>
      {!archivedData.length ? (
        <h1> No Archive Appears</h1>
      ) : (
        <>
          {archivedData?.map((item) => {
            const { Name, Repeat, Goal, TimeOfDay, StartDate } = item;
            return (
              <>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{Name}</h5>
                    <p className="card-text">
                      Repeat: <strong>{Repeat}</strong>
                      <br />
                      Goal: <strong>{Goal}</strong>
                      <br />
                      TimeOfDay: <strong>{TimeOfDay}</strong>
                      <br />
                      StartDate: <strong>{StartDate}</strong>
                    </p>

                    <button className="btn-sm btn btn-danger">Delete</button>
                    <button className="btn-sm btn btn-success">Edit</button>
                  </div>
                </div>
              </>
            );
          })}
        </>
      )}
    </>
  );
};
