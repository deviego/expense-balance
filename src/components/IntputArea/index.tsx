import { Item } from '../../types/Item'
import *as C from './styled'
type Prop = {
  onAdd: (item:Item) => void
}
export const InputArea = ({onAdd}: Prop ) => { 
    return(
        <C.container>
            <button onClick={}>Adicionar</button>
        
        </>
    )
}