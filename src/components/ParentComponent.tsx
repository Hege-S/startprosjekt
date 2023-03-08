import {ChildComponent} from './ChildComponent'

export const ParentComponent = () => {
    const greetParent = (adj:string, subst:string) => {
        alert(`let it ${adj}, stop the ${subst}`)
        /* kan jeg importere app.tsx og bruke f.eks antallDyr fra funksjonen app og endre antall? */
        
    }

    return <ChildComponent greetHandler={greetParent}/>
}