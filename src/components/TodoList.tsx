import React from "react";

type PropsType = {
    title: string,
    data: Array<DataType>
}

type DataType = {
    id: number,
    name: string,
    age: number,
    isMarried: boolean
}

export function TodoList(props: PropsType) {

    const elements = props.data.map(item => {
        // debugger
        return (
            <li>
                <input type="checkbox" checked={item.isMarried}/>
                <span>
                    {`${item.name}: (${item.age} лет) женат?`}
                </span></li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    elements
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}