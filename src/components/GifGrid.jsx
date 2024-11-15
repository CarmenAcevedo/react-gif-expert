import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log({ isLoading });

    // const [counter, setCounter] = useState(10);

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            
            <div className ="card-grid">
                {/* images.map */}
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                            // title={ image.title }
                            // url={ image.url }
                        />
                        // <li key={ id }>{ title }</li>
                    ))
                }
                
                
            </div>
            {/* <h5>{ counter}</h5>
            <button onClick={ () => setCounter( counter +1 ) }>+1</button> */}
        </>
    )
}

