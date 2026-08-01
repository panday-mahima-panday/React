import NetflixSeries from "./components/NetflixSeries";
import seriesData from "./api/seriesData.json";
// import "./components/Netflix.css";
import style from  "./components/Netflix.module.css";
import { EventPropagation } from "./components/EventPropagation";
import {EventProps} from "./components/EventProps";
export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading"> List of best Netflix Sereis</h1>
      {/* <NetflixSeries /> */}
      {/* <EventProps/> */}
      <EventPropagation/>
    </section>
  );
};

