const Msg = (props) => {
    const {message} = props;
    console.log(props);
    return (
        <div>
        <h4>{message}</h4>
        </div>
    );
}

export default Msg;