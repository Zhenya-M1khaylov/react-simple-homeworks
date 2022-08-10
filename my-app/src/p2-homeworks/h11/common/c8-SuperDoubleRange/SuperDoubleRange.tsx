import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

    }
    const minMax = value || [0, 100]

    return (
        <>
            <input type="range"
                   onChange={onChangeCallback}
                   value={minMax[0]}/>
        </>
    )
}

export default SuperDoubleRange
