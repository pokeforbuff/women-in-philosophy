import Layout from "../../components/layout";
import React, { useState, setState } from "react";
import {Doughnut, Line, Bar, HorizontalBar} from "react-chartjs-2";
import {Row, Col, ButtonGroup, ToggleButton, Button} from 'react-bootstrap'

const c_top = "#8331bd"
const c_not = "#c09ee1"
const c_unr = "#e8def7"


const data = {

    schools:{
        labels: ['Arizona State University', 'Baylor University', 'Binghamton University', 'Boston College', 'Boston University', 'Bowling Green State University', 'Brown University', 'Carnegie-Mellon University', 'Catholic University of America', 'City University of New York Graduate Center', 'Columbia University (incl. Barnard)', 'Cornell University', 'DePaul University', 'Duke University', 'Duquesne University', 'Emory University', 'Florida State University', 'Fordham University', 'Georgetown University', 'Harvard University', 'Indiana University, Bloomington', 'Johns Hopkins University', 'Loyola University-Chicago', 'Marquette University*', 'Massachusetts Institute of Technology', 'Michigan State University', 'New School University', 'New York University', 'Northwestern University', 'Ohio State University', 'Pennsylvania State University', 'Princeton University', 'Purdue University', 'Rice University', 'Rutgers University', 'SUNY Albany', 'SUNY Buffalo', 'SUNY Stony Brook', 'Saint Louis University', 'Southern Illinois University at Carbondale', 'Stanford University', 'Syracuse University', 'Temple University', 'Texas A&M University', 'Tulane University', 'UC Santa Cruz', 'University of Arizona', 'University of Arkansas', 'University of California, Berkeley', 'University of California, Davis', 'University of California, Irvine', 'University of California, Los Angeles', 'University of California, Riverside', 'University of California, San Diego', 'University of California, Santa Barbara', 'University of Chicago', 'University of Cincinnati', 'University of Colorado, Boulder', 'University of Connecticut', 'University of Dallas', 'University of Florida', 'University of Georgia', 'University of Hawaii-Manoa', 'University of Illinois, Champaign-Urbana', 'University of Illinois, Chicago', 'University of Iowa', 'University of Kansas', 'University of Kentucky', 'University of Maryland, College Park', 'University of Massachusetts, Amherst', 'University of Memphis', 'University of Miami', 'University of Michigan', 'University of Minnesota, Twin Cities', 'University of Missouri, Columbia', 'University of Nebraska', 'University of New Mexico', 'University of North Carolina, Chapel Hill', 'University of Notre Dame', 'University of Oklahoma', 'University of Oregon', 'University of Pennsylvania', 'University of Pittsburgh', 'University of Rochester', 'University of South Carolina', 'University of South Florida', 'University of Southern California', 'University of Tennessee-Knoxville', 'University of Texas, Austin', 'University of Utah', 'University of Virginia', 'University of Washington', 'University of Wisconsin, Madison', 'Vanderbilt University', 'Villanova University', 'Washington University, St. Louis', 'Wayne State University', 'Yale University'],

        colors:{
            2004: [c_not,c_unr,c_unr,c_unr,c_not,c_unr,c_top,c_not,c_unr,c_not,c_top,c_top,c_unr,c_not,c_unr,c_unr,c_not,c_unr,c_not,c_top,c_not,c_not,c_unr,c_unr,c_top,c_unr,c_unr,c_top,c_not,c_not,c_unr,c_top,c_unr,c_not,c_top,c_unr,c_unr,c_unr,c_unr,c_unr,c_top,c_not,c_unr,c_unr,c_unr,c_unr,c_top,c_unr,c_top,c_not,c_top,c_top,c_not,c_top,c_not,c_top,c_unr,c_not,c_not,c_unr,c_unr,c_unr,c_unr,c_not,c_not,c_unr,c_unr,c_unr,c_not,c_not,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_unr,c_top,c_top,c_unr,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_not,c_unr,c_top,c_not,c_not,c_not,c_not,c_unr,c_unr,c_unr,c_unr,c_top] ,
            2006: [c_not,c_unr,c_unr,c_unr,c_not,c_unr,c_not,c_not,c_unr,c_top,c_top,c_top,c_unr,c_not,c_unr,c_unr,c_not,c_unr,c_not,c_top,c_not,c_not,c_unr,c_unr,c_top,c_unr,c_unr,c_top,c_not,c_not,c_unr,c_top,c_unr,c_not,c_top,c_unr,c_unr,c_unr,c_unr,c_unr,c_top,c_not,c_unr,c_unr,c_unr,c_unr,c_top,c_unr,c_top,c_not,c_top,c_top,c_not,c_top,c_not,c_top,c_unr,c_not,c_not,c_unr,c_not,c_unr,c_unr,c_unr,c_not,c_unr,c_unr,c_unr,c_not,c_not,c_unr,c_unr,c_top,c_not,c_not,c_unr,c_unr,c_top,c_top,c_unr,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_not,c_unr,c_top,c_unr,c_not,c_not,c_not,c_unr,c_unr,c_not,c_unr,c_not] ,
            2008: [c_not,c_unr,c_unr,c_unr,c_unr,c_unr,c_top,c_not,c_unr,c_not,c_top,c_top,c_unr,c_not,c_unr,c_unr,c_not,c_unr,c_not,c_top,c_not,c_not,c_unr,c_unr,c_top,c_unr,c_unr,c_top,c_unr,c_not,c_unr,c_top,c_unr,c_unr,c_top,c_unr,c_unr,c_unr,c_unr,c_unr,c_top,c_not,c_unr,c_unr,c_unr,c_unr,c_top,c_unr,c_top,c_not,c_top,c_top,c_not,c_top,c_not,c_top,c_unr,c_not,c_not,c_unr,c_not,c_unr,c_unr,c_unr,c_not,c_unr,c_unr,c_unr,c_not,c_not,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_unr,c_top,c_top,c_unr,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_top,c_unr,c_top,c_unr,c_not,c_not,c_not,c_unr,c_unr,c_not,c_unr,c_top] ,
            2010: [c_unr,c_unr,c_unr,c_unr,c_not,c_unr,c_top,c_not,c_unr,c_top,c_top,c_top,c_unr,c_not,c_unr,c_unr,c_unr,c_unr,c_not,c_top,c_not,c_not,c_unr,c_unr,c_top,c_unr,c_unr,c_top,c_not,c_not,c_unr,c_top,c_unr,c_not,c_top,c_unr,c_unr,c_unr,c_unr,c_unr,c_top,c_not,c_unr,c_unr,c_unr,c_unr,c_top,c_unr,c_top,c_not,c_not,c_top,c_not,c_not,c_not,c_not,c_unr,c_not,c_not,c_unr,c_unr,c_unr,c_unr,c_not,c_not,c_unr,c_unr,c_unr,c_not,c_not,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_unr,c_top,c_top,c_unr,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_top,c_unr,c_top,c_unr,c_not,c_not,c_not,c_unr,c_unr,c_not,c_unr,c_top] ,
            2011: [c_unr,c_unr,c_unr,c_unr,c_not,c_unr,c_top,c_not,c_unr,c_top,c_top,c_top,c_unr,c_not,c_unr,c_unr,c_unr,c_unr,c_not,c_top,c_not,c_not,c_unr,c_unr,c_top,c_unr,c_unr,c_top,c_not,c_not,c_unr,c_top,c_unr,c_not,c_top,c_unr,c_unr,c_unr,c_unr,c_unr,c_top,c_not,c_unr,c_unr,c_unr,c_unr,c_top,c_unr,c_top,c_not,c_not,c_top,c_not,c_not,c_not,c_top,c_unr,c_not,c_unr,c_unr,c_unr,c_unr,c_unr,c_unr,c_not,c_unr,c_unr,c_unr,c_not,c_not,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_unr,c_top,c_top,c_unr,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_top,c_unr,c_top,c_unr,c_not,c_not,c_not,c_unr,c_unr,c_not,c_unr,c_top] ,
            2015: [c_unr,c_unr,c_unr,c_unr,c_unr,c_unr,c_top,c_not,c_unr,c_top,c_top,c_top,c_unr,c_not,c_unr,c_unr,c_not,c_unr,c_not,c_top,c_not,c_not,c_unr,c_unr,c_top,c_unr,c_unr,c_top,c_not,c_not,c_unr,c_top,c_unr,c_not,c_top,c_unr,c_unr,c_unr,c_not,c_unr,c_top,c_not,c_unr,c_unr,c_unr,c_unr,c_top,c_unr,c_top,c_not,c_not,c_top,c_not,c_not,c_not,c_not,c_unr,c_not,c_not,c_unr,c_unr,c_unr,c_unr,c_unr,c_not,c_unr,c_unr,c_unr,c_not,c_not,c_unr,c_not,c_top,c_not,c_not,c_unr,c_unr,c_top,c_top,c_unr,c_unr,c_not,c_top,c_not,c_unr,c_unr,c_top,c_unr,c_top,c_unr,c_not,c_unr,c_not,c_unr,c_unr,c_not,c_unr,c_top] ,

        },

        ranking:{
            2004: [46,999,999,999,42,999,16,36,999,25,7,16,999,28,999,999,44,999,42,8,25,36,999,999,8,999,999,1,46,22,999,1,999,39,1,999,999,999,999,999,6,32,999,999,999,999,8,999,13,24,20,8,32,20,40,16,999,28,40,999,999,999,999,42,36,999,999,999,30,30,999,46,4,32,53,999,999,12,14,999,999,25,5,46,999,999,46,999,14,48,42,32,24,999,999,999,999,16] ,
            2006: [47,999,999,999,47,999,21,34,999,18,6,11,999,29,999,999,43,999,41,6,29,41,999,999,6,999,999,1,41,21,999,3,999,41,2,999,999,999,999,999,6,32,999,999,999,999,16,999,15,27,17,6,29,18,41,18,999,38,47,999,41,999,999,999,34,999,999,999,25,27,999,999,4,34,48,999,999,11,11,999,999,32,4,47,999,999,23,999,11,999,38,34,23,999,999,38,999,25] ,
            2008: [44,999,999,999,50,999,16,39,999,23,10,16,999,27,999,999,44,999,39,7,27,35,999,999,7,999,999,1,53,26,999,3,999,50,2,999,999,999,999,999,6,32,999,999,999,999,13,999,12,35,20,7,31,20,39,20,999,32,48,999,48,999,999,50,35,999,999,999,27,24,999,32,3,44,50,999,999,10,13,999,999,27,5,44,999,999,16,999,13,999,39,35,24,999,999,39,999,16] ,
            2010: [999,999,999,999,48,999,17,36,999,15,13,17,999,26,999,999,999,999,36,6,23,43,999,999,6,999,999,1,41,26,999,3,999,48,2,999,999,999,999,999,9,34,999,999,999,999,13,999,9,36,23,9,30,21,41,21,999,26,43,999,999,999,999,48,36,999,999,999,30,26,999,34,5,47,999,999,999,9,15,999,999,30,4,48,999,999,17,999,20,999,36,43,23,999,999,30,999,8] ,
            2011: [999,999,999,999,44,999,19,40,999,14,11,14,999,24,999,999,999,999,36,5,24,37,999,999,7,999,999,1,31,24,999,3,999,44,2,999,999,999,999,999,9,37,999,999,999,999,14,999,14,44,29,11,31,22,40,20,999,24,50,999,999,999,999,999,40,999,999,999,31,24,999,31,4,44,999,999,999,9,18,999,999,29,5,44,999,999,11,999,20,999,37,43,22,999,999,31,999,7] ,
            2015: [999,999,999,999,999,999,20,40,999,16,10,17,999,24,999,999,45,999,37,6,24,40,999,999,13,999,999,1,31,28,999,2,999,47,2,999,999,999,47,999,8,37,999,999,999,999,13,999,10,42,24,10,28,23,42,21,999,31,37,999,999,999,999,999,42,999,999,999,31,28,999,31,4,47,47,999,999,13,17,999,999,31,6,45,999,999,8,999,17,999,31,999,21,999,999,24,999,5] ,

        },
        proportions:{
    2004: [12.5,null,26.7,13.0,7.1,20.0,27.3,11.1,15.8,22.0,34.8,17.6,36.4,7.1,36.4,20.0,15.4,16.7,18.8,33.3,26.7,30.0,23.3,null,25.0,30.4,36.4,17.6,18.8,23.5,41.2,5.6,null,16.7,13.8,22.2,7.1,22.2,18.2,15.4,25.0,15.0,20.0,15.0,9.1,25.0,26.3,12.5,13.3,16.7,14.3,18.8,11.1,21.1,8.3,10.5,15.4,16.7,23.5,null,12.5,25.0,23.1,7.1,33.3,18.2,23.1,12.5,15.8,25.0,null,25.0,15.0,28.0,13.3,27.3,18.2,10.5,13.0,23.1,30.0,23.1,16.7,8.3,15.4,23.1,20.0,25.0,6.2,41.2,13.3,35.3,13.0,20.0,null,8.3,10.0,29.4] ,
        2006: [17.6,16.7,30.8,13.0,7.7,16.7,21.4,6.7,16.7,25.0,30.4,16.7,40.9,20.0,23.1,25.0,20.0,22.2,18.8,27.8,23.5,30.0,25.9,null,25.0,36.0,33.3,17.6,18.2,20.0,46.7,15.0,19.0,0.0,14.3,33.3,11.1,17.4,15.0,7.7,26.9,13.6,31.2,15.0,18.2,22.2,26.3,12.5,17.6,8.3,11.1,17.6,16.7,21.1,9.1,15.0,8.3,20.0,26.3,0.0,11.8,46.2,23.1,11.8,31.6,25.0,20.0,13.3,14.3,28.6,28.6,18.2,9.1,26.3,13.3,27.3,25.0,10.5,14.3,28.6,33.3,40.0,16.7,16.7,18.8,20.0,16.7,27.3,5.9,41.2,18.8,35.0,15.8,26.3,31.6,20.0,9.1,35.0] ,
        2008: [23.5,7.1,38.5,20.8,12.0,11.1,25.0,13.3,17.6,22.9,26.9,26.3,36.4,22.2,23.1,25.0,16.7,20.0,23.3,26.3,33.3,20.0,30.8,null,28.6,30.4,12.5,17.6,31.2,19.0,43.8,18.2,13.6,18.2,14.7,30.0,10.0,26.1,20.0,7.1,22.7,10.5,20.0,17.4,20.0,11.1,27.3,22.2,18.8,9.1,15.0,17.6,25.0,20.0,9.1,17.4,25.0,19.2,14.3,0.0,6.2,46.7,18.2,16.7,31.2,25.0,18.2,21.4,25.0,25.0,35.7,12.5,20.0,27.8,16.7,25.0,27.3,16.7,15.8,21.4,36.4,40.0,6.7,18.2,25.0,26.7,22.7,12.5,10.7,41.2,22.2,42.1,12.5,31.6,38.1,23.8,18.2,28.0] ,
        2010: [23.5,7.1,38.5,20.8,11.5,11.1,25.0,13.3,19.0,22.9,26.9,26.3,36.4,22.2,null,25.0,16.7,20.0,23.3,23.8,33.3,20.0,30.8,null,28.6,30.4,12.5,17.6,31.2,19.0,43.8,18.2,13.6,18.2,14.7,33.3,10.0,26.1,20.0,7.1,22.7,10.0,20.0,17.4,20.0,11.1,27.3,22.2,30.0,23.1,8.0,17.6,20.0,15.8,9.1,17.4,25.0,19.2,14.3,0.0,8.3,46.7,18.2,16.7,31.2,22.2,18.2,22.2,25.0,25.0,35.7,12.5,20.0,27.8,18.8,25.0,27.3,16.7,15.8,21.4,36.4,40.0,6.7,18.2,25.0,26.7,22.7,12.5,10.7,41.2,22.2,42.1,12.5,31.6,38.1,25.0,18.2,28.0] ,
        2011: [20.0,0.0,33.3,21.7,11.1,10.0,26.7,20.0,23.8,21.6,29.2,25.0,35.0,29.4,33.3,31.2,15.4,22.6,28.6,21.1,40.0,20.0,29.6,null,28.6,21.7,30.0,18.2,31.2,23.8,41.2,18.2,14.3,21.4,16.7,33.3,10.5,25.0,20.0,7.7,25.0,21.1,20.0,20.0,20.0,0.0,22.2,22.2,25.0,27.3,15.8,16.7,17.6,15.8,16.7,20.0,28.6,20.0,15.4,0.0,10.0,50.0,25.0,28.6,33.3,30.0,18.2,26.7,23.8,30.8,28.6,12.5,21.4,26.3,20.0,23.1,27.3,20.0,15.0,26.7,40.0,42.9,18.5,18.2,26.7,18.8,23.1,0.0,7.4,41.2,22.2,42.1,17.6,31.2,36.4,22.2,22.2,24.0] ,
        2015: [38.5,16.7,42.9,20.0,16.7,25.0,26.7,7.1,25.0,18.4,37.5,38.9,35.3,23.5,25.0,41.2,13.3,32.1,35.7,25.0,37.5,25.0,33.3,29.2,9.1,25.0,36.4,22.2,29.4,25.0,42.9,18.2,20.0,25.0,21.4,30.0,15.0,33.3,19.0,8.3,27.3,18.8,27.3,20.0,15.4,30.0,28.6,11.1,16.7,40.0,20.0,22.2,25.0,23.8,18.2,19.0,33.3,20.0,22.2,9.1,10.0,42.9,25.0,33.3,31.2,46.2,30.0,25.0,25.0,28.6,25.0,25.0,19.4,40.0,25.0,16.7,38.5,17.4,17.1,31.2,38.5,28.6,22.2,25.0,33.3,17.6,22.7,18.2,16.7,50.0,31.2,43.8,22.7,31.2,42.1,31.6,22.2,19.2] ,

        }
    },

    tenure: {

    },
}




function selectFacultyData(decade, sorting) {

    var jointArray = []
    var i = 0
    data.schools.labels.forEach( s =>{
        jointArray.push({'label': s, 'color':data.schools.colors[decade][i], 'rank': data.schools.ranking[decade][i], 'value': data.schools.proportions[decade][i],});
        i++;
    })


    const sortedData = {
        labels: [],
        datasets: [{data: [],backgroundColor:[]}]
    }


    jointArray.sort((a, b) => (a[sorting] - b[sorting]) ).forEach( s =>{
        sortedData.labels.push(s.label)
        sortedData.datasets[0].data.push(s.value)
        sortedData.datasets[0].backgroundColor.push(s.color)
    })


    return  sortedData
}

export const Summary = {
    title: "Faculty Data (2004 - 2015)",
    page: "faculty",
    summary: <>
        This study focuses on the number of women and men at 98 philosophy departments in the US. We present new data on the number of women and men at 50 programs ranked by the Philosophical Gourmet Report (PGR) as well as 48 programs not ranked by the PGR. We selected these programs based on the availability of the only existing historical data compiled by Julie Van Camp between 2004 and 2015 and Sally Haslanger in 2009.
        </>,
    graph: <></>

}


export default function(props) {

    const [year, setYear] = useState(2015);
    const [sort, setSort] = useState('label');
    const [facultyYear, setFacultyYear] = useState(selectFacultyData(2015, 'label'));

    function updateSelection(e){
        var d = year
        var s = sort

        if ( e.target.name === "year") {
            d = [2004, 2006, 2008, 2010, 2011, 2015][e.target.value]
            setYear(d)
        }
        else if ( e.target.name === "sort") {
            s = e.target.value
            setSort(e.target.value)
        }

        setFacultyYear(selectFacultyData(d, s))
    }

    return <Layout>
        <h1>{Summary.title}</h1>
        <p>This study focuses on the number of women and men at 98 philosophy departments in the US. We present new data on the number of women and men at 50 programs ranked by the Philosophical Gourmet Report (PGR) as well as 48 programs not ranked by the PGR. We selected these programs based on the availability of the only existing historical data compiled by Julie Van Camp between 2004 and 2015 and Sally Haslanger in 2009. </p>


        <Row>
            <Col md={6} sm={12}>
                <h3>Percent of Women Faculty in {year} by School</h3>

                <div className="rightControls">
                    <ButtonGroup toggle>
                        <ToggleButton key={1}  type="radio" variant="primary" name="sort" value="label" checked={sort === "label" } onChange={updateSelection}>Alphabetical</ToggleButton>
                        <ToggleButton key={2}  type="radio" variant="primary" name="sort" value="rank" checked={sort === "rank" } onChange={updateSelection}>PGR Rank</ToggleButton>
                        <ToggleButton key={3}  type="radio" variant="primary" name="sort" value="value" checked={sort === "value" } onChange={updateSelection}>Proportion</ToggleButton>
                    </ButtonGroup>
                </div>

                <HorizontalBar
                    data={facultyYear}
                    width={50}
                    height={100}
                    options={{
                        maintainAspectRatio: true,
                        legend: {display: false,},
                        scales: {xAxes: [{ticks: {min: 0, max: 60}}]}
                    }}
                />
            </Col>
        </Row>


        <strong>Selected Year:</strong> {year}
        <input className="slider" type="range" id="decade" name="year" min="0" max="5" defaultValue={5} onChange={updateSelection}/>


        <h2>Methods</h2>
        <p>Each of the schools (for Hassoun, 2015 data) was triple checked and checked at least one time by a graduate student. If there are discrepancies, we believe they may reflect faculty additions and subtractions since the time of our survey. Regretfully, not every change can be kept up with since the time of the survey. Regardless, the numbers here provided an accurate picture of the gender divisions within the field of philosophy. Please note some of the particulars of our data collection below.</p>

        <p>Some outlier faculty positions were research faculty and teaching faculty. The department was contacted directly to confirm how to categorize things. Sometimes research faculty were assistant, associate, or full professor, sometimes not. Some non tenure-track research professors were in a special case put under lecturer to reflect their non-tenure track status. Some teaching faculty were placed under lecturer, some under assistant, associate, or full professor. Another issue came down to titles like part-time lecturer. These were confirmed to be either a regular lecturer position that is more stable than an adjunct position, or simply an adjunct position that is more contingent.</p>

        <p>We did not count affiliated professors as philosophy professors, although we did count joint professors as professors, e.g. Professor of Philosophy and Psychology would count, but a Professor of Psychology affiliated with the Philosophy department would not count. The important consideration was whether or not they are listed along with everyone else as a faculty member in Philosophy and are not simply affiliated with the department. This is in agreement with Julie C. Van Camp based on the premise that joint faculty members usually have full decision making power within the department and serve as most other faculty do despite their teaching in other departments. The same logic applied to a philosophy professor also listed as a high level administrator like a Dean; they were counted along with the faculty. Likewise, the reason for separating out lecturers and adjuncts from tenure track professors was their exclusion from department governance.</p>

        <p>Post-docs and graduate assistants were not counted. Nor were visiting scholars. If there was a faculty member who was listed as being a head of some research organization, or if the title was not clearly one of our categories, we individually confirmed their title. Retired faculty were not counted as emeritus faculty unless explicitly listed as such.</p>

        <p>Finally, while we acknowledge the presence of transgender, queer, and non-traditional gendered philosophers within the field of philosophy, we have classified individuals by gender based on the name being either traditionally male or female. In the case of gender ambiguous names, we made our decision based on the self-reporting gender of the philosopher or by the gender of the pronouns used to describe the person. We welcome responses from faculty who think their gender may have been misrepresented in our data.</p>

        <p>Our methodology is largely in agreement with the methodology of the other rankings from past years by Sally Haslinger and Julie C. Van Camp. Sally Haslinger counted as “full time professor” those who are on tenure track (assistant, associate, full) and may have counted those who are adjuncts or lecturers as well as some affiliated professors as full time. We all refer to assistant, associate and full professors as “tenure track”. Finally, we follow Julie C. Van Camp in using pronouns and other common indicators of gender to determine gender, and also in following up individually to clarify ambiguous names.</p>
    </Layout>
}
