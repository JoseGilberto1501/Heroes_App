

export const HeroItem = ({heroes}) => {

    
  return (
    <>
         <li className="list-group-item d-flex">
            <span >
                { heroes.superhero }
              </span>
            
        </li>
    </>
  )
}
