import "./TabChoice.css"

export default function TabChoice({btnClicked, handleTabClick}){



    return(
        <div className="tabs">
            <ul>
                <li className={btnClicked === 'type'? "active":undefined} data-name="type" onClick={handleTabClick}>Light Type</li>
                <li className={btnClicked === 'detail'? "active":undefined} data-name="detail" onClick={handleTabClick}>Light Detail</li>
                <li className={btnClicked === 'composition'? "active":undefined} data-name="composition" onClick={handleTabClick}>Light Composition</li>
            </ul>
        </div>
    )
}