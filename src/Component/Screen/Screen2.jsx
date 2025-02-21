// import { useState } from "react";
import TaskSection2 from "../Task/TaskSection2";

const Screen2 = () => {
  const todoTasks = [
    { title: "Design Homepage", description: "Create wireframes and mockups" },
    { title: "Write Blog Post", description: "Draft article on productivity" },
  ];

  const inProgressTasks = [
    { title: "Develop Login Page", description: "Implement OAuth integration" },
  ];

  const doneTasks = [
    { title: "Setup Project", description: "Initialize React and Tailwind" },
  ];

  //   const [data, setData] = useState([
  //     {
  //       id: 1,
  //       category: "todoTasks",
  //       title: "Design Homepage",
  //       description: "Create wireframes and mockups",
  //     },
  //     {
  //       id: 2,
  //       category: "todoTasks",
  //       title: "Write Blog Post",
  //       description: "Draft article on productivity",
  //     },
  //     {
  //       id: 3,
  //       category: "inProgressTasks",
  //       title: "Develop Login Page",
  //       description: "Implement OAuth integration",
  //     },
  //     {
  //       id: 4,
  //       category: "doneTasks",
  //       title: "Setup Project",
  //       description: "Initialize React and Tailwind",
  //     },
  //   ]);

  return (
    <div>
      <div className=" mockup-window bg-base-200 border ml-7">
        <div className="min-h-screen bg-gray-100 p-6 ">
          <div className="flex justify-between w-11/12 mx-auto">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Task Management
              </h1>
            </div>
            <div>
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
                Add Task
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <TaskSection2 title="To-Do" color="bg-blue-500" tasks={todoTasks} />
            <TaskSection2
              title="In Progress"
              color="bg-yellow-500"
              tasks={inProgressTasks}
            />
            <TaskSection2 title="Done" color="bg-green-500" tasks={doneTasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
