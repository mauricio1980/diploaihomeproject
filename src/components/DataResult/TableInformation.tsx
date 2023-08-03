import React, { useState } from 'react';
import { Button, Container, Table } from 'reactstrap';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import '../../scss/dataresult/_table_information.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

interface DataJsonProps {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

type DataArray = DataJsonProps[];

const TableInformation: React.FC<{ data: DataArray }> = ({ data } ) => {
    const router = useRouter();
    return (
        <>
            <Container>

                <Button className="btn btn-secondary btn-sm" onClick={e => router.push('/', '/')}>Back</Button>
                <br />
                <br />
                <table className="table_information_bg">
                    <thead>
                        <tr>
                            <th className="table_td" scope="col">Id</th>
                            <th className="table_td" scope="col">UserId</th>
                            <th className="table_td" scope="col">Title</th>
                            <th className="table_td" scope="col">{''}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item, key) =>(
                            <tr key={key} >
                                <td className="table_td">{item.id}</td>
                                <td className="table_td">{item.userId}</td>
                                <td className="table_td_des">{item.title}</td>
                                <td className="table_td"><input className="table_checkbox" type="checkbox" defaultChecked={item.completed} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <div className="box_action">
                    <div className="box_action_button"><p className="action">Action 1</p></div>
                    <div className="box_action_button"><p className="action">Action 2</p></div>
                </div>
            </Container>
        </>
    );
}
export default TableInformation;