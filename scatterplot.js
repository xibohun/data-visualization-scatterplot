// const tooltip = document.getElementById('tooltip');

// fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json")
// .then(res=> res.json())
// .then(res =>{
//     const {data} = res
// })

// createStuff(res.map(d => {[d[0], d[1]]}))


// function createStuff(data){

//     const width = 800
//     const height = 400
//     const padding = 40

//     const barwidth = width/ data.length

//     const yScale = d3.scaleLinear()
//         .domain(0, d3.max(data, d=>d[1]))
//         .range([height - padding, padding]);

//     const xScale = d3.scaleTime()
//         .domain([d3.min(data, d=> new Date(d[0])), d3.max(data, d=>d[0])])
//         .range(padding, width-padding)

// }

// const svg = d3.select("#container").append('svg')
//             .attr('width', width)
//             .attr('height', height)


// svg.selectAll('rect')
//     .data(data)
//     .enter()
//     .append('rect')
//     .attr('class', 'bar')
//     .attr('data-date', (d[0]))
//     .attr('data-gdp', d[1])
//     .attr('x', new Date(xScale(d[0])))
//     .attr('y', yScale(d[1]))
//     .attr('width', barwidth)
//     .attr('height', d => height - yScale(d[1]) -padding)
//     .on('mouseover',(d, i)=>{
//         tooltip.classList.add('show')
//         tooltip.style.left = i * barwidth + padding * 2 + 'px'
//         tooltip.style.top = height - padding * 4 + 'px'
//         tooltip.setAttribute('data-date', d[0])

//         tooltip.innerHTML = `
//         <small> ${d[0]}</small>
//         $${d[1]} billions`;



//     }).on(
//         'mouseout', () =>{
//             tooltip.classList.remove('show')
        
//     });


fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
    .then(res =>res.json())
    .then(res =>{
        const {data} = res
    

    createStuff(res.map(r => [convertMinAndSec(r.Time),
        createMinAndSec(r.time),
        r.year,
        r.Dopping,
        r.Name,
    ]));
})

function convertMinAndSec(str){
    return new Date(`2010:01:00 ${str}`)
}

function createinnerHTMLforTooltip(){
    return `

        ${d[3]} on ${d[1].getFullYear()} -
        time: ${d[0].getMinutes()}: ${d[1].getSeconds()}
    
        ${d[2] ? d[2] :''}
    `
};




function createStuff(data){
    const width = 400
    const height = 400
    const padding = 40

    
    const circleRadius = 5

    const yScale = d3.scaleTime()
        .domain([0, d3.max(data, d =>d[0])])
        .range([padding, height - padding])

    
    const ticks = yScale.ticks(S)
        tickFormat = yScale.tickFormat("%M, %s")



    const xScale = d3.scaleTime()
        .domain([d3.min(data, d=>d[1]), d3.max(data, d => d[1])])
        .range(padding, range - padding)

    const timeFormatForMinAndSec = d3.timeFormat('%M: %S')
    const timeFormatForYear = d3.format('d')

    const xAxis = d3.axixBottom(xScale)
                    .tickFormat(timeFormatForYear)
    const yAxis = d3.axisLeft(yScale)
                    .timeFormat(timeFormatForMinAndSec)
    


    
    const svg = d3.select('#container')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
    svg.append('g')
        .attr('id', 'x-Axis')
        .attr('transform', 'translate(0, ${height-padding})')
        .call(xAxis)


    svg.append('g')
        .attr('id', 'y-Axis')
        .attr('transform', 'translate(${padding}, 0)')
        .call(yAxis)

    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('data xvalue', d => d[1])
        .attr('data yvalue', d => d[0])
        .attr('cx', d => xScale(new Date(d[1])))
        .attr('cy', d => yScale(d[0]))
        .attr('r', circleRadius)
        .attr('fill', d=> d[2] === ''? 'organge' : 'skyblue')
        .attr('strokeWeight', 1)
        


}



