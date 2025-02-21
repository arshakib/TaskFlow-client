/* eslint-disable react/prop-types */

const TaskSection2 = ({ title, color, tasks }) => {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-md p-4 mx-2">
      <div className="flex items-center mb-4">
        <div className={`w-4 h-4 ${color} rounded-full mr-2`}></div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="ml-2 bg-gray-200 px-2 py-1 rounded-full text-xs">
          {tasks.length}
        </span>
      </div>
      <div className="space-y-3">
        {tasks.map((work, index) => (
          <div
            key={index}
            className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm font-medium text-gray-700">{work.title}</h3>
            <p className="text-xs text-gray-500">{work.description}</p>
            <div className="text-xs text-gray-400">{work.timestamp}</div>
            <div className="mt-2 flex space-x-2">
              <button
                className="text-blue-500 text-xs border px-2 py-1 rounded"
                disabled
              >
                Edit
              </button>
              <button
                className="text-red-500 text-xs border px-2 py-1 rounded"
                disabled
              >
                Delete
              </button>
              <button
                className="text-gray-500 text-xs border px-2 py-1 rounded"
                disabled
              >
                Up
              </button>
              <button
                className="text-gray-500 text-xs border px-2 py-1 rounded"
                disabled
              >
                Down
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskSection2;
