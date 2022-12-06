import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'
import *as C from './styled'

type Props = {
    list: Item[]
}

export const TableArea = ({list}:Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeaderColum widths={100}> Data</C.TableHeaderColum>
                    <C.TableHeaderColum widths={130}> Categoria</C.TableHeaderColum>
                    <C.TableHeaderColum> Título</C.TableHeaderColum>
                    <C.TableHeaderColum widths={150}> Valor</C.TableHeaderColum>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                 <TableItem key={index} item={item}/>
                ))}

            </tbody>
        </C.Table>
    )
}