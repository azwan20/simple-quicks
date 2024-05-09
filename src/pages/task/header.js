export default function HeaderTask({handleNewTask, handleUrgent}) {
  return (
    <>
      <div className="headTask d-flex justify-content-between pe-3 ps-5 my-2 ms-5">
        <div class="dropdown">
          <button
            class="btn dropdown-toggle border border-black"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My Tasks
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#" onClick={handleUrgent}>
                Personal Errands
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" onClick={handleUrgent}>
                Urgent To-Do
              </a>
            </li>
          </ul>
        </div>
        <button className="bg-primary px-2 py-1 rounded text-light border-0" onClick={handleNewTask}>New Task</button>
      </div>
    </>
  );
}
