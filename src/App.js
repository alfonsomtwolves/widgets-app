import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

//hola
const items = [
    {
        title: 'Que es React?',
        content: 'React es un framework javascript de front-end'
    },
    {
        title: 'Por que usar React?',
        content: 'React es la libreria de javascript preferida de los ingenieros' 
    },
    {
        title: 'Por que tu usas React?',
        content: 'Para crear componentes'
    }
];

const options = [{
    label: 'The Color Red',
    value: 'red'
},
{
    label: 'The Color Orange',
    value: 'orange'
},
{
    label: 'The Color Purple',
    value: 'purple'
}
];

const showAccordion = () =>{
    if(window.location.pathname === '/'){
        return <Accordion items= {items}/>;
    }
};

const showList = () =>{
    if(window.location.pathname === '/list'){
        return <Search />;
    }
}

const showDropdown = () =>{
    if(window.location.pathname === '/dropdown'){
        return (
            <Dropdown
            />
        ); 
    }
};

const showTranslate = () =>{
    if(window.location.pathname === '/translate'){
        return <Translate />;
    }
};

const showComponent = (route, component) =>{
    return window.location.pathname === route ? component : null;
};


export default ({language, text}) => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};