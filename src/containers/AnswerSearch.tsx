import React from 'react';
import HeaderInformation from '../components/DataResult/HeaderInformation';
import TableInformation from '../components/DataResult/TableInformation';
import '../scss/containers/_answer_search.scss'

interface DataJsonProps {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

type DataArray = DataJsonProps[];

const AnswerSearch: React.FC<{ data: DataArray }> = ({ data } ) => {
    return (
        <section className="main-container">
            <div className="container-grid">
                <HeaderInformation />
                <TableInformation data={data} />
            </div>
        </section>
    );
}
export default AnswerSearch;