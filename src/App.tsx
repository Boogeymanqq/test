import { useState, useEffect } from "react";
import { ShowCards } from "./cardsHP/ShowCards";
import { Header } from "./cardsHP/Header";

type HarryObj = {
  image: string;
  name: string;
  actor: string;
  gender: string;
  house: string;
  wand: {
    core: string;
  };
  core: string;
  alive: boolean;
};

function App() {
  const [cards, setCards] = useState<HarryObj[]>([]);
  const [loading, setLoading] = useState(true);
  const [schoolList, setSchoolList] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [selectSchool, setSelectSchool] = useState("");

  useEffect(() => {
    async function getCards() {
      const url = "http://hp-api.herokuapp.com/api/characters";
      const response = await fetch(url);
      const dataCards: HarryObj[] = await response.json();
      setLoading(false);
      setCards(dataCards);

      const houseArr = dataCards.map((card) => card.house);
      const uniqHouse = [...(new Set(houseArr) as any)];
      setSchoolList(uniqHouse);
    }
    getCards();
  }, []);

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value.toLocaleLowerCase());
  }

  function handleChangeSchool(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectSchool(event.target.value);
  }

  const filtred = cards
    .filter((card) => {
      if (!selectSchool) return true;
      if (selectSchool === "noschool") return card.house === "";
      return card.house === selectSchool;
    })
    .filter((card) => card.name.toLowerCase().includes(name));

  return (
    <div className="App">
      <Header
        schoolList={schoolList}
        name={name}
        handleChangeName={handleChangeName}
        selectSchool={selectSchool}
        handleChangeSchool={handleChangeSchool}
      />
      {loading ? (
        <p>Loading..</p>
      ) : (
        filtred.map((card, index) => (
          <ShowCards
            key={index}
            image={card.image}
            name={card.name}
            actor={card.actor}
            gender={card.gender}
            house={card.house}
            core={card.wand.core}
            alive={true ? "true" : "false"}
          />
        ))
      )}
      {loading && <p>No cards</p>}
    </div>
  );
}

export default App;
