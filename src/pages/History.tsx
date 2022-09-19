import React from 'react';
import GridHistory from '../componets/GridHistory'

export interface IHistoryPageProps { }
const HistoryPage: React.FunctionComponent<IHistoryPageProps> = (props) => {
    return (
        <div>
            <GridHistory/>
        </div>
    )
}
export default HistoryPage;
