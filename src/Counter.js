function Counter(props) {
    return (
        <div className="Counter">
            <small>{props.label}</small>
            <h1>{props.value}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.remove}>➖ Remove</button>
        </div>
    );
}

export default Counter;
