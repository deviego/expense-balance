import { categories } from '../../data/categories'
import { FormatDate } from '../../helpers/dateFilters'
import { Item } from '../../types/Item'
import * as C from './styled'

type Props = {
    item: Item
}

export const TableItem = ({item}: Props) => {
    return(
        <C.TableLine>
            <C.TableColum>{FormatDate(item.date)}</C.TableColum>
            <C.TableColum><C.Category color={categories[item.category].color}>{ categories[item.category].title}</C.Category></C.TableColum>
            <C.TableColum>{item.title}</C.TableColum>
            <C.TableColum>R${item.value}</C.TableColum>

        </C.TableLine>
    )
}