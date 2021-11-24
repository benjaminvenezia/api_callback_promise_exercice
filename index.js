class App extends React.Component 
{
    render() {
        return (
            <div>
                <Piechart s1="🍋" s2="🍋" s3="🍋" />
                <Piechart s1="🍎" s2="🍏" s3="🍏" />
                <Piechart s1="🍎" s2="🍋" s3="🍏" />
                <Piechart s1="🍎" s2="🍎" s3="🍎" />
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));