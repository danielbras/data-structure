import ListaDuplamenteLigada from "../ListaDuplamenteLigada";
import returnCustom from "../ReturnCustom"

export default function copyValues(simpleList) {
    let result = new ListaDuplamenteLigada();
    while (!simpleList.isEmpty()) { 
        result.add(returnCustom(simpleList))
        simpleList.removeEnd();
    }
    return result;
}