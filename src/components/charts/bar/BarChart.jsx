import Chart from "react-apexcharts";

export default function BarChart ()  {

    const options={
        colors:['#465fff'],
        chart: {
            fontFamily: "Outfit, sans-serif",
            type: "bar",
            height : 180,
            toolbar:{
                show: false,
            },
        },
       plotOptions:{
        bar:{
            horizontal: false,
            columnWidth: "39%",
            borderRadius: 5,
            borderRadiusApplication: "end",
        },
       },
       dataLabels:{
        enabled: false,
       },
       stroke:{
        show: true,
        width: 4,
        colors: ["transparent"],
       },
       xaxis:{
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisBorder:{
            show: false,
        },
        axisTicks:{
            show:false,
        },
       },
       legend:{
        show: false,
        position: "top",
        horizontalAlign : "left",
        fontFamily: "Outfit",
       },
       yaxis:{
        title:{
            text: undefined,
        },
       },
       grid:{
        yaxis:{
            lines:{
                show: true,
            },
        },
       },
       fill:{
        opacity: 1,
       },
       tooltip:{
        x:{
            show: false,
        },
        y:{
            formatter:(val)=> `${val}`,
        }
       }
    };

    const series=[
        {
            name:"Income",
            data:[1500,3850,2010,2980,1870,1950,2910,1100,2150,3900,280,112],
        },
    ];


  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div id="chartOne" className="min-w-[100px]">
            <Chart options={options} series={series} type="bar" height={180}/>
        </div>
    </div>
  )
}

