import { FaSearch, FaRegFolder } from "react-icons/fa";

const Search = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen kk">
      <h1 className="text-xl font-medium text-primary">Week 8 Task</h1>
      <section className="bg-white shadow-lg mt-8 lg:w-1/4 md:w-2/4 w-4/5 p-5 rounded-md border border-gray-300">
        <div className="flex items-center gap-3 border-b border-b-gray-300 pb-2">
          <FaSearch className="cursor-pointer" />
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Search by name, ID, or tag"
              className="w-full outline-none placeholder:text-gray-500 text-sm"
            />
          </form>
        </div>
        <div>
          <h2 className="pt-4 font-medium text-sm">Recent searches</h2>
          <ul className="pt-3 cursor-pointer space-y-2 border-b border-b-gray-300 pb-2">
            <li
              className="hover:bg-primary hover:text-white px-3 py-1 rounded-md text-sm flex gap-2
            items-center text-gray-500"
            >
              <FaRegFolder />
              Final Presentation Prep
            </li>
            <li
              className="hover:bg-primary hover:text-white px-3 py-1 rounded-md text-sm flex gap-2
            items-center text-gray-500"
            >
              <FaRegFolder />
              Design Review
            </li>
            <li
              className="hover:bg-primary hover:text-white px-3 py-1 rounded-md text-sm flex gap-2
            items-center text-gray-500"
            >
              <FaRegFolder />
              Marketing Tasks
            </li>
            <li
              className="hover:bg-primary hover:text-white px-3 py-1 rounded-md text-sm flex gap-2
            items-center text-gray-500"
            >
              <FaRegFolder />
              Backlog Items
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Search;
