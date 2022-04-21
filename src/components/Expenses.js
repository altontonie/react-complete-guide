import './Expenses.css'
import ExpenseItem from './ExpenseItem';

function Expenses(props){


    return(
        <div className='expenses'>
            {
                props.expenses.map(prop => (
                    <ExpenseItem 
                        title={prop.title} 
                        amount={prop.amount} 
                        date={prop.date}
                    />
                ))
            }
        </div>
        
    );
}

export default Expenses;