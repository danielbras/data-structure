import List from "../Lista";
import returnCustom from "../ReturnCustom";

export default function inverterOrder(list) {
    let result = new List(); 
    
    while(!list.isEmpty()){
        result.append(returnCustom(list));
        list.removeEnd();
    }
    return result;
}  