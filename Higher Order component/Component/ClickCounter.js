import withCounter from "./HOC/withcounter";

const ClickCounter = (props) => {
    const { count, incrementcount } = props;

    return (
        <div>
            <button type="button" onClick={incrementcount}>Click {count} Times</button>
        </div>
    );
};

export default withCounter(ClickCounter);