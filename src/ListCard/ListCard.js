import './ListCard.css';
import ListItem from '../ListItem/ListItem';

const ListCard = props => {
    return (
        <div className='ListCardDiv'>
            {props.listArr.map(el => <ListItem task={el.task} id={el.id} key={el.id} fun={props.taskHandler}/>)}
        </div>
    );
}

export default ListCard;