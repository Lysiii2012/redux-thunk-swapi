import {responsApi} from "../../features/responsApi/responsApi"

const Input = ({ value, onChange }) => {
    return (
        <div className="input_block">
            <p>{responsApi}</p>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
}

export default Input;
