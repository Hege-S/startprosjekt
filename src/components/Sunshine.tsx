import { useState } from 'react'

export const Sunshine = () =>  {
   const [Sunshine, setSunshine] = useState('Want sunshine?')
    return (
        <div>
            <h4>
                {Sunshine}
            </h4>
            <button onClick={() => setSunshine('Sunshiiiine!')}>Sunshine</button>
        </div>
    )
}