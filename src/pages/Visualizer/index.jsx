import Header from '../../components/Header';
import Container from '../../components/Container';
import VisualizerTable from '../../components/VisualizerTable';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Visualizer () {
    
    var [ catsData, setCatsData ] = useState([]);

    var [ requestStatus, setRequestStatus ]  = useState(false);

    // listing cats
    useEffect(() => {
        axios.get('https://cats-api-phsr.onrender.com/cats')
        .then((cats) => {
            setCatsData(cats.data)
            setRequestStatus(true)
        })
        .catch(error => console.log('error ' + error))
    })
    
    // deleting cats
    const deletingCat = (e) => {

        // inserts confirmation messageBox before the axios 
        // .....


        axios.delete(`https://cats-api-phsr.onrender.com/cats/${e}`)
        .then((catDeleted) => {
            console.log(catDeleted.status);
        })
        .catch()
    }

    
    return (
        <>
            <Header/>
            <Container>
                {
                    <VisualizerTable data={catsData} requestStatus={requestStatus} deleteCat={deletingCat} />
                }
            </Container>
        </>
    );
}