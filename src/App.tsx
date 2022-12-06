import { useEffect, useState } from "react"
import * as C from "./App.style"
import {Item} from './types/Item'
import {Category} from './types/Category'
import {items} from './data/items'
import {categories} from './data/categories'

import { FilterListByMonth, GetCurrentMonth } from "./helpers/dateFilters"
import { TableArea } from "./components/TableArea"



export const App = () => {
  const [list, setList] = useState(items)
  const [filterList, setFilterList] = useState<Item[]>([])

  const [currentMonth, setCurrentMonth] = useState(GetCurrentMonth())

  useEffect(() =>{
    setFilterList(FilterListByMonth(list, currentMonth))
  }, [list, currentMonth])


  return(
    
    <C.Container>
       <C.Header>
        <C.HeaderText> Sistema Financeiro</C.HeaderText>
       </C.Header>
       <C.Body>
        <TableArea list={filterList}/>
       </C.Body>
    </C.Container>
  )
}