class Hello extends React.Component {

    

    render() {

       
        let bangs= "!".repeat(this.props.bangs);

        console.log(this.props);
        return (
            <div>
                <p>Hello {this.props.from} to {this.props.to} {bangs} </p>
        
            </div>
        );
    }
}