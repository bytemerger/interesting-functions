//search array of objects and subobjects for subItem
type obj = {
    [key: string]: obj[]
}
let arrayObject: Array<obj> = []
function search(){
    return (function flatten(arr) {
        return [].concat(...arr.map(v => [v, ...flatten(v.subitems)]));
    })(arrayObject).filter(()=>{
        //filter this is where the search would happen
    })
}
