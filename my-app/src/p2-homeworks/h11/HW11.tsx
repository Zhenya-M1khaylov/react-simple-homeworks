import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(100)


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{minValue}</span>
                <SuperRange
                    onChangeRange={setMinValue}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{minValue}</span>
                <SuperDoubleRange

                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{maxValue}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
