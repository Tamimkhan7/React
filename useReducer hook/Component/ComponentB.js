
export default function componentA() {
    return (
        <div>
            <p>component A</p>
            <button type="button" onClick={() => dispatch('increment')}>Increment</button>
            <button type="button" onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    );
}