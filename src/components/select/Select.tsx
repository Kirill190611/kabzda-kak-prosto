import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemPropsType = {
    title: string
    value: any
}

type SelectProps = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemPropsType>
}
export const Select = (props: SelectProps) => {

    const [active, setActive] = useState(false)

    const selectedItem = props.items.find(i => i.value === props.value)

    const toggleItems = () => {
        setActive(!active);
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    return (
        <div className={styles.select}>
            <span onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {
                        props.items.map(item => <div key={item.value}
                                                     onClick={() => onItemClick(item.value)}>{item.title}</div>)
                    }
                </div>
            }
        </div>
    );
};

//todo: start with 40:01