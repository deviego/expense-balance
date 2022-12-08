import { useEffect, useState } from "react"
import * as C from "./App.style"
import {Item} from './types/Item'
import {Category} from './types/Category'
import {items} from './data/items'
import {categories} from './data/categories'

import { FilterListByMonth, GetCurrentMonth } from "./helpers/dateFilters"
import { TableArea } from "./components/TableArea"
import { InfoArea } from "./components/infoArea"



export const App = () => {
  const [list, setList] = useState(items)
  const [filterList, setFilterList] = useState<Item[]>([])

  const [currentMonth, setCurrentMonth] = useState(GetCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)


  useEffect(() =>{
    setFilterList(FilterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handleChangeMonth = (newMonth : string)=> {
    setCurrentMonth(newMonth)
  }
  const total = (): number => {
    let some = expense - income
    return some
  }

  return(
    
    <C.Container>
       <C.Header>
        <C.HeaderText> $istema Financeiro</C.HeaderText>
        
       </C.Header>
       
       <C.Body>
        <InfoArea 
        income={income}
        expense={expense}
        total={total}
        onMonthChange={handleChangeMonth}
        currentMonth={currentMonth}/>
        <TableArea list={filterList}/>
       </C.Body>
    </C.Container>
  )
}