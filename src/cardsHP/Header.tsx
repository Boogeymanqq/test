type Props = {
  schoolList: any[];
  name: string;
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectSchool: string;
  handleChangeSchool: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Header = ({
  schoolList,
  handleChangeName,
  name,
  selectSchool,
  handleChangeSchool,
}: Props) => {
  return (
    <header>
      <div>
        <h1>Harry Potter</h1>
        <p>View all characters from the Harry Potter universe.</p>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder="Введите имя"
        ></input>
        <label>
          <select value={selectSchool} onChange={handleChangeSchool}>
            <option value="">All</option>
            {schoolList.sort().map((name, index) => (
              <option value={name || "noschool"} key={index}>
                {name || "No school"}
              </option>
            ))}
          </select>
        </label>
      </div>
    </header>
  );
};
