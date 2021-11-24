class Piechart extends React.Component {

    render() {
        const props = this.props;
        let message = '';

        props.s1 === props.s2 && props.s2 === props.s3 ? message = 'You win!' : message = 'You loose.';

        return (
            <div>
                <p> {props.s1} - {props.s2} - {props.s3} </p>
                <p>{ message }</p>
            </div>
        );
    }
}