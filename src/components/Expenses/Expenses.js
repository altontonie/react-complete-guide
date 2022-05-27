import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import useState from 'react'

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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