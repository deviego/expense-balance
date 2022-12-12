import { useEffect, useState } from "react"
import * as C from "./App.style"
import {Item} from './types/Item'
import {Category} from './types/Category'
import {items} from './data/items'
import {categories} from './data/categories'

import { FilterListByMonth, GetCurrentMonth } from "./helpers/dateFilters"
import { TableArea } from "./components/TableArea"
import { InfoArea } from "./components/InfoArea"
import { InputArea } from "./components/IntputArea"



export const App = () => {
  const [list, setList] = useState(items)
  const [filterList, setFilterList] = useState<Item[]>([])

  const [currentMonth, setCurrentMonth] = useState(GetCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)


  useEffect(() =>{
    setFilterList(FilterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let countIncome = 0
    let countExpense = 0 
    
    for(let i in filterList) { 
      if(categories[filterList[i].category].expense){
         countExpense +=filterList[i].value
      }else{
        countIncome +=filterList[i].value
      }
    }
    setIncome(countIncome)
    setExpense(countExpense)
  },[filterList])

  const handleChangeMonth = (newMonth : string)=> {
    setCurrentMonth(newMonth)
  }

  const handleAddItem =  (item:Item) => {
    let newList = [...list]
    newList.push(item);
    setList(newList)
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
        onMonthChange={handleChangeMonth}
        currentMonth={currentMonth}/>
        <TableArea list={filterList}/> 
        <InputArea
        onAdd={handleAddItem}
        />
       </C.Body>
    </C.Container>
  )
}