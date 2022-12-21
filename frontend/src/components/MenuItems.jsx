import ShowRecipes from './ShowRecipes';
import { useLocalStorage } from './useLocalStorage';

function MenuItems() {
  const [menu, setMenu] = useLocalStorage('menu',[])

return (
    <div>
        <div className='wrapper_menu'>
            <h3>Recipes Menu</h3>
            <ShowRecipes data={menu} />
        </div>
    </div>
)
}

export default MenuItems;

        
