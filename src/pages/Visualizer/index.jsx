import Header from '../../components/Header';
import Container from '../../components/Container';
import VisualizerTable from '../../components/VisualizerTable';

export default function Visualizer () {
    return (
        <>
            <Header/>

            <Container>
                {
                    <VisualizerTable/>
                }
            </Container>
        </>
    );
}