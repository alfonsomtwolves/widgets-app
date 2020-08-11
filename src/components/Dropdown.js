import React,{useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selected, onSelectedChange, label}) =>{

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (event) =>{

            if(ref.current){
                if(ref.current.contains(event.target)){
                    return;
                }
            }
            

            setOpen(false);

        })
    }, []);

    const renderedOptions = options.map((options) =>{

        if(options.value === selected.value){
            return null;
        }

        return (
            <div 
                key={options.value} 
                className="item"
                onClick={() => onSelectedChange(options)}
            >

                {options.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label"> {label} </label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ?'visible active': ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text"> {selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            <div>
                <p style={{color:`${selected.value}`}} >The color is {selected.value} </p>
            </div>
        </div>
    );

};

export default Dropdown;