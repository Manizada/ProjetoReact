import Card from "../CardHome/CardHome";
import "./GridCardInfo.css";

const GridCards = () => {

  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
            <Card
              title={"Biribinha Ponto Com"}
              value={ "37 Séculos de trabalho árduo" }
              info={"Pai, mãe, ohm, ohma, zelos. Até o pequeno Will nenhum deles teve sequer uma chance."}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
