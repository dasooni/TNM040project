import React from 'react';
import Grid from  'react-css-grid';


class PlayScreen extends React.Component {
    grid = () => {
        return (
            <Grid width={300} gap={10}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </Grid>
        );
    };
    

    render() {
        return (
            <div className='container'>
                {this.grid()}
            </div>
            
        );
    }
    

}

export default PlayScreen;