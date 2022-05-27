import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Grocery',
      amount: 65.20,
      date: new Date(2022, 1, 5)
    },
    {
      id: 'e2',
      title: 'Insuarance',
      amount: 589.30,
      date: new Date(2021, 12, 23)
    },
    {
      id: 'e3',
      title: 'Data',
      amount: 596.20,
      date: new Date(2022, 2, 12)
    },
    {
      id: 'e4',
      title: 'Grocery',
      amount: 555.20,
      date: new Date(2022, 1, 1)
    },
  ]

  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
