export class AppConstant {
    public static chartData: Array<any> = [
        {
            chartName: 'bubble',
            data: [
                {
                    label: 'United States',
                    data: [
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 30) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                    ],
                    backgroundColor: 'rgb(244, 194, 194)'
                },
                {
                    label: 'Australia',
                    data: [
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 35) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                    ],
                    backgroundColor: '#ffa5007d'
                },
                {
                    label: 'Canada',
                    data: [
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 25) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                    ],
                    backgroundColor: 'skyblue'
                },
                {
                    label: 'United Kingdom',
                    data: [
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 37) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                        { x: Math.floor(Math.random() * 50), y: Math.floor(Math.random() * 50), r: Math.floor(Math.random() * 20) },
                    ],
                    backgroundColor: 'orange'
                },
            ]
        },
        {
            chartName: 'bar',
            data: [
                {
                    label: "",
                    data: [Math.floor(Math.random() * 50), Math.floor(Math.random() * (-50)), Math.floor(Math.random() * 50), Math.floor(Math.random() * (-50)), Math.floor(Math.random() * 50), Math.floor(Math.random() * 50)],
                    backgroundColor: '#ffa5007d'
                },
                {
                    label: "",
                    data: [Math.floor(Math.random() * 50), Math.floor(Math.random() * (-50)), Math.floor(Math.random() * 50), Math.floor(Math.random() * 50), Math.floor(Math.random() * (-50)), Math.floor(Math.random() * (-50))],
                    backgroundColor: 'orange'
                }
            ]
        },
        {
            chartName: 'doughnut',
            data: [
                {
                    label: 'My First Dataset',
                    data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 200), Math.floor(Math.random() * 150)],
                    backgroundColor: [
                        'rgb(144, 238, 144)',
                        'rgb(255, 255, 0)',
                        'rgb(128, 0, 128)'
                    ],
                    borderAlign: 'center',
                    borderWidth: 6,
                    borderJoinStyle: 'round',
                    hoverOffset: 4
                }
            ]
        }
    ]
}