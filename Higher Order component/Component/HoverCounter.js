import withCounter from "./HOC/withcounter";

const HoverCounter = (props) => {
    const { count, incrementcount } = props;

    return (
        <div>
            <h1 onMouseOver={incrementcount}>Hover {count} Times</h1>
        </div>
    );
};

export default withCounter(HoverCounter);