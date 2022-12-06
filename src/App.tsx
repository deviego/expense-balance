import { useEffect, useState } from "react"
import * as C from "./App.style"
import {Item} from './types/Item'
import {Category} from './types/Category'
import {items} from './data/items'
import {categories} from './data/categories'

import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilters"



export const App = () => {
  const [list, setList] = useState(items)
  const [filterList, setFilterList] = useState<Item[]>([])

  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() =>{
    setFilterList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])


  return(
    
    <C.Container>
       <C.Header>
        <C.HeaderText> Sistema Financeiro</C.HeaderText>
       </C.Header>
       <C.Body>
        ...
       </C.Body>
    </C.Container>
  )
}