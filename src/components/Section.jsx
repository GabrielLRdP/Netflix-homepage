import FilmImg from "./Film-img";
import filmsData from "../assets/datas.json";

const Section = (props) => {
  const categoryIndex = props.categoryIndex;
  let imgTab = [];
  const imgTabData = filmsData[0].images;

  imgTab = imgTabData.map((element, index) => {
    return (
      <FilmImg src={filmsData[categoryIndex].images[index]} alt="poster" />
    );
  });

  return (
    <section>
      <h2>{props.title}</h2>
      <div className="carrousel">{imgTab}</div>
    </section>
  );
};

export default Section;
