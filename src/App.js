import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import PageNavigation from "./components/PageNavigation";

function App() {
  const [user, setUser] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [userPerPage, setUserPerPage] = useState(3);
  const [totalPages, setTotalPages] = useState();
  const [detailId, setDetailId] = useState(0);
  const userPerPage = 3;
  const fetchData = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setTotalPages(Math.ceil(user.length / userPerPage));
        console.log(`total pages ${totalPages}`);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  let indexOfLastUser = currentPage * userPerPage;
  let indexOfFirstUser = indexOfLastUser - userPerPage;
  let currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

  function toggleButton(id) {
    if (detailId === id) {
      setDetailId(0);
      document.querySelector(`.card${id}`).classList.remove("display");
    } else if (detailId !== 0) {
      document.querySelector(`.card${detailId}`).classList.remove("display");
      setDetailId(id);
      document.querySelector(`.card${id}`).classList.add("display");
    } else if (detailId === 0) {
      setDetailId(id);
      document.querySelector(`.card${id}`).classList.add("display");
    }
  }
  return (
    <div className="App">
      {currentUsers &&
        currentUsers.length > 0 &&
        currentUsers.map((userObj, index) => {
          return (
            <Card
              key={userObj.id}
              userObj={userObj}
              toggleButton={toggleButton}
              detailId={detailId}
            />
          );
        })}
      <PageNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
