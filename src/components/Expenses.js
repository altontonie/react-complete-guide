import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props){


    return(
        <Card className='expenses'>
            {
                props.expenses.map(prop => (
                    <ExpenseItem 
                        title={prop.title} 
                        amount={prop.amount} 
                        date={prop.date}
                    />
                ))
            }
        </Card>
        
    );
}

export default Expenses;