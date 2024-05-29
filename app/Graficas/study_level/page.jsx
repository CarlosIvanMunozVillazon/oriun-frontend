"use client"
import React from "react";
import { Chart } from 'react-google-charts';

function renderChart(call_field, dataList, dataListCallField, h_axis, title){
    /*
    Args:
    - call_field (string): Nombre Del campo del filtro de la convocatoria que se mostrará en la tabla
    - dataList (List of dict): Datos para llenar la tabla. Cada diccionario debe tener info. para los campos a visualizar
    - dataListCallField (string): Nombre Del campo del filtro de la convocatoria que se encuentra en los dataList a enviar
    - h_axis (string): Titulo del eje x
    - title (string): Titulo de la gráfica
     */
    const data =  [
        [call_field, 'Pregrado', 'Maestría', 'Doctorado']
    ];

    for (let i = 0; i < dataList.length; i++) {
        const row = [
            dataList[i][dataListCallField],
            dataList[i]['PRE'],
            dataList[i]['POS'],
            dataList[i]['DOC']
        ];
        data.push(row);
    }

    const options = {
        title: title,
        allowHtml: true,
        alternatingRowStyle: true,
        width: '100%',
        height: '100%',
        sort: 'enable',
        backgroundColor: '#f7f7f7',
        hAxis: {
            title: h_axis,
            scrollbar: 'true'
        },
        vAxis: {
            title: 'Número Estudiantes',
        },
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
    };

    return [data, options]
}

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------

const dataList_univ_stu_post = [
    {'university': 'UNAL', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'university': 'UNIANDES', 'PRE': 70, 'POS': 70, 'DOC': 100},
];
const results_univ_stu_post = renderChart("Universidad", dataList_univ_stu_post, 'university', 'Universidades', 'Estadística: Universidades por nivel de estudios estudiantes postulados');

const dataList_univ_stu_win = [
    {'university': 'UNAL', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'university': 'UNIANDES', 'PRE': 30, 'POS': 20, 'DOC': 40},
];
const results_univ_stu_win = renderChart("Universidad", dataList_univ_stu_win, 'university', 'Universidades', 'Estadística: Universidades por nivel de estudios estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_cou_stu_post = [
    {'country': 'Mexico', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'country': 'Canadá', 'PRE': 70, 'POS': 70, 'DOC': 100},
    {'country': 'Francia', 'PRE': 100, 'POS': 80, "DOC": 70},
];
const results_cou_stu_post = renderChart("País", dataList_cou_stu_post, 'country', 'Países', 'Estadística: Países por nivel de estudios estudiantes postulados');

const dataList_cou_stu_win = [
    {'country': 'Mexico', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'country': 'Canadá', 'PRE': 30, 'POS': 20, 'DOC': 40},
    {'country': 'Francia', 'PRE': 50, 'POS': 40, "DOC": 35},
];
const results_cou_stu_win = renderChart("País", dataList_cou_stu_win, 'country', 'Países', 'Estadística: Países por nivel de estudios estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_reg_stu_post = [
    {'region': 'Uniandes', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'region': 'Asia', 'PRE': 70, 'POS': 70, 'DOC': 100},
    {'region': 'Norteamérica', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'region': 'Europa', 'PRE': 70, 'POS': 70, 'DOC': 100},
    {'region': 'Nacional-Sigueme', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'region': 'Oceanía', 'PRE': 70, 'POS': 70, 'DOC': 100},
];
const results_reg_stu_post = renderChart("Región", dataList_reg_stu_post, 'region', 'Regiones', 'Estadística: Regiones por nivel de estudios estudiantes postulados');

const dataList_reg_stu_win = [
    {'region': 'Uniandes', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'region': 'Asia', 'PRE': 30, 'POS': 20, 'DOC': 40},
    {'region': 'Norteamérica', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'region': 'Europa', 'PRE': 30, 'POS': 20, 'DOC': 40},
    {'region': 'Nacional-Sigueme', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'region': 'Oceanía', 'PRE': 30, 'POS': 20, 'DOC': 40},
];
const results_reg_stu_win = renderChart("Región", dataList_reg_stu_win, 'region', 'Regiones', 'Estadística: regiones por nivel de estudios estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_yea_stu_post = [
    {'year': '2023', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'year': '2024', 'PRE': 70, 'POS': 70, 'DOC': 100},
];
const results_yea_stu_post = renderChart("Año", dataList_yea_stu_post, 'year', 'Años', 'Estadística: Años por nivel de estudios estudiantes postulados');

const dataList_yea_stu_win = [
    {'year': '2023', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'year': '2024', 'PRE': 30, 'POS': 20, 'DOC': 40},
];
const results_yea_stu_win = renderChart("Año", dataList_yea_stu_win, 'year', 'Años', 'Estadística: Años por nivel de estudios estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_sem_stu_post = [
    {'semester': '1', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'semester': '2', 'PRE': 70, 'POS': 70, 'DOC': 100},
];
const results_sem_stu_post = renderChart("Semestre", dataList_sem_stu_post, 'semester', 'Semestres', 'Estadística: Semestres por nivel de estudios estudiantes postulados');

const dataList_sem_stu_win = [
    {'semester': '1', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'semester': '2', 'PRE': 30, 'POS': 20, 'DOC': 40},
];
const results_sem_stu_win = renderChart("Semestre", dataList_sem_stu_win, 'semester', 'Semestres', 'Estadística: Semestres por nivel de estudios estudiantes ganadores');

//---------------------------------------------------------
//---------------------------------------------------------

function App() {
    const mystyle0 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        margin: "0 auto",
    };
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        margin: "0 auto",
        width: "80%",
    };
    const columnChartStyle = {
        width: "80%",
        height: "400px",
        margin: "0 auto"
    }
    return (
        <div className="py-10">
            <h2 style={mystyle0}><b>Estadísticas por nivel de estudios</b></h2>
            <br/>
            <h2 style={mystyle}><b>Universidades</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_stu_post[0]}
                                                 options={results_univ_stu_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_stu_win[0]}
                                                 options={results_univ_stu_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Países</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_stu_post[0]}
                                                 options={results_cou_stu_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_stu_win[0]}
                                                 options={results_cou_stu_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Regiones</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_stu_post[0]}
                                                 options={results_reg_stu_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_stu_win[0]}
                                                 options={results_reg_stu_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Años</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_stu_post[0]}
                                                 options={results_yea_stu_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_stu_win[0]}
                                                 options={results_yea_stu_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Semestres</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_stu_post[0]}
                                                 options={results_sem_stu_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_stu_win[0]}
                                                 options={results_sem_stu_win[1]}/></div>
            <br/>
        </div>
    )
}

export default App;