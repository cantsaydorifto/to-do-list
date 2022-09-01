import './ListItem.css'
const ListItem = props => {
    const clickHandler = event => {
        props.fun(props.id);
    }
    return (
        <div className='ListItemDiv'>
            <div className='itemDiv'>{props.task}</div>
            <button onClick={clickHandler} className='DoneButton'>Done</button>
        </div>
    );
}

export default ListItem;