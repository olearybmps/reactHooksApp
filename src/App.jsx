import viteLogo from '/vite.svg';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import { ThemeProvider } from './components/ThemeContext';


const App = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <Counter />
                <CounterReducer />
            </div>
        </ThemeProvider>
    );
};

export default App;
