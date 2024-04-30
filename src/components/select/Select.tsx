import React, {useState, KeyboardEvent, useEffect, memo, useCallback} from 'react';
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
export const Select = memo((props: SelectProps) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = useCallback(() => {
        setActive(!active);
    }, [active]);

    const onItemClick = useCallback((value: any) => {
        props.onChange(value);
        toggleItems()
    }, [])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretedentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretedentElement) {
                        props.onChange(pretedentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {
                        props.items.map(item => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(item.value)
                            }}
                            key={item.value}
                            onClick={() => onItemClick(item.value)}
                            className={styles.item + " " + (hoveredItem === item
                                ? styles.selected
                                : "")
                            }>{item.title}</div>)
                    }
                </div>
            }
        </div>
    );
})