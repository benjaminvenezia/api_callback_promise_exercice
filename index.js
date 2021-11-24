class App extends React.Component 
{
    render() {
        return (
            <div>
                <SlotMachine s1="🍋" s2="🍋" s3="🍋" />
                <SlotMachine s1="🍎" s2="🍏" s3="🍏" />
                <SlotMachine s1="🍎" s2="🍋" s3="🍏" />
                <SlotMachine s1="🍎" s2="🍎" s3="🍎" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));