import vehicle from "../Data/Data"

export function Component3(){
    return(
        <>
            <h2>Component3</h2>
            {
                vehicle.map(obj => {
                                    return obj.name+" "+obj.model+" "+obj.year+"  ";
                                }
                        )
            }
        </>
    );
}

export const  MyName  = ({name}) => {
                                    return(
                                        <>
                                            {name}
                                        </>
                                    );
                                }
