type Props = {
  image: string,
  name: string,
  actor: string,
  gender: string,
  house: string,
  core: string,
  alive: string,
};

export const ShowCards = ({
  image,
  name,
  actor,
  gender,
  house,
  core,
  alive,
}: Props) => {
  return (
    <div>
      <img src={image} alt="photos" />
      <p>{name}</p>
      <p>{actor}</p>
      <p>{gender}</p>
      <p>{house}</p>
      <p>{core}</p>
      <p>{alive}</p>
    </div>
  );
};
