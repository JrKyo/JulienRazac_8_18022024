import React from "react";
import "./House.scss";
import Carroussel from "../../componants/Carroussel/Carroussel";
import Collapse from "../../componants/Collapse/Collapse";
import data from "../../Data/data.json";
import Tags from "../../componants/Tags/Tags";
import { useParams } from "react-router-dom";
import NoPage from "../NoPage/NoPage";


export default function House() {
  const { id } = useParams("id");
  const housing = data.find((e) => e.id === id);
  if (housing === undefined) {
    return <NoPage />;
  }

  return (
    <div className="all">
      <Carroussel pictures={housing.pictures} />

      <div className="description">
        <div className="title">
          <h3>{housing.title}</h3>
          <p className="location">{housing.location}</p>
          <Tags tags={housing.tags}/>
          </div>
          
        <div className="host">
          <h4>{housing.host.name}</h4>
          <img src={housing.host.picture} alt="host-pic" />
        </div> 
      </div>

      <div className="collapse">
        <Collapse title="Description" description={housing.description} />
        <Collapse title="Equipement" description={housing.equipments} />
      </div>
    </div>
  );
}
