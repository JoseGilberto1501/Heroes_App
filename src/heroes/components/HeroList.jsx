import { getHeroesByPublisher } from "../helpers"
import { HeroItem } from "./HeroItem";


export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

  return (
    <>
        <ul className="list-group list-group-numbered">
            {
                heroes.map( hero => (
                    <HeroItem key={hero.id} heroes={hero}/>
                ))
            }                    
        </ul>
    </>
  )
}
