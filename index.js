class App extends React.Component 
{
    render() {
        return (
            <div>
                <Hello 
                    from="Ben" 
                    to={"Noemi"} 
                    bangs={2}
                    data={[22, 33, 44, 55]}
                    
                />
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));