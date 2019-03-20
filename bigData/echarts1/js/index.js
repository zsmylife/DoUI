$(function(){
	biao1();
	
})
var myChart1 = echarts.init(document.getElementById("keliu"));
var myChart2 = echarts.init(document.getElementById("yewu"));
var myChart3 = echarts.init(document.getElementById("bumen1"));
var myChart4 = echarts.init(document.getElementById("bumen2"));
var myChart5 = echarts.init(document.getElementById("bumen3"));
var myChart6 = echarts.init(document.getElementById("bumen4"));
var myChart7 = echarts.init(document.getElementById("map"));
var myChart8 = echarts.init(document.getElementById("g1"));
var myChart9 = echarts.init(document.getElementById("g2"));
var myChart10 = echarts.init(document.getElementById("g3"));
myChart1.setOption(biao1());  
myChart2.setOption(biao2());  
myChart3.setOption(biao3());  
myChart4.setOption(biao4());  
myChart5.setOption(biao5());  
myChart6.setOption(biao6());   
myChart7.setOption(biao7());   
myChart8.setOption(biao8());   
myChart9.setOption(biao9());   
myChart10.setOption(biao10()); 
setTimeout(function(){
    window.onresize = function(){
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
        myChart7.resize();
        myChart8.resize();
        myChart9.resize();
        myChart10.resize();
    }
})  
function biao1(){
    var fontColor = 'red';
    option ={
        backgroundColor:'transparent',
		grid: {
	        left: '5%',
            right: '10%',
            top:'20%',
	        bottom: '15%',
	        containLabel: true
		},
		tooltip : {
			show: true,
			trigger: 'item'
		},
		legend: {
			show:true,
			x:'right',
			y:'0',
			itemWidth:10,
			itemHeight:10,
			textStyle:{
				color:'#1bb4f6',
				fontSize:10,
			},
			data:['类型一','类型二','类型三']
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            axisLabel:{
	            	color: "#fff"
	            },
	            axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'#397cbc'
		            }
				},
				axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:false,
		            lineStyle:{
		            }
		        },
	            data : ['8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点']
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				name : '单位：人',
				min:0,
				max:8,
				axisLabel : {
					formatter: '{value}k',
					textStyle:{
						color:"#fff"
					}
				},
				axisLine:{
					lineStyle:{
						color:'#27b4c2'
					}
				},
				axisTick:{
	            	show:false,
	            },
				splitLine:{
					show:false,
				},
				nameTextStyle: {
                    fontSize: 10,
                    color:'white'
                }
			}
		],
		series : [
			{
				name:'类型一',
				type:'line',
				symbol:'circle',
				symbolSize: 4,
	            itemStyle: {
			        normal: {
						color:'#0092f6',
			            lineStyle: {
							color: "#0092f6",
							width:1
			            },
			            areaStyle: { 
							color: '#94C9EC',
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,146,246,0.9)'
							}]),
			            }
			        }
				},
				markPoint:{
					itemStyle:{
						normal:{
							color:'red'
						}
					}
				},
				data:[1.7,1.9,3.2,1.9,1.6,2,2.9,3.4,2.3,1.8,1]
			},
			{
				name:'类型二',
				type:'line',
				symbol:'circle',
				symbolSize: 4,
				
	            itemStyle: {
			        normal: {
			            color:'#aecb56',
			            lineStyle: {
							color: "#aecb56",
							width:1
			            },
			            areaStyle: { 
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(114,144,89,0.9)'
							}]),
			            }
			        }
				},
				data:[2,2.2,5.1,3.6,2,2.3,3.8,5.7,3.7,3,1.8]
			},
			{
				name:'类型三',
				type:'line',
				symbol:'circle',
				symbolSize: 4,
	            itemStyle: {
			        normal: {
			            color: '#07d387',
			            lineStyle: {
							color: "#07d387",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,212,199,0.9)'
							}]),
			            }
			        }
				},
				data:[3.9,4.1,5.9,5.3,4,5.9,7,8,7.9,4.1,2.8]
			}
		]
	};
	return option;
}
function biao2(){
	var fontColor = '#30eee9';
	option ={
        backgroundColor:'#11183c',
		grid: {
	        left: '5%',
            right: '10%',
            top:'20%',
	        bottom: '15%',
	        containLabel: true
		},
		tooltip : {
			show: true,
			trigger: 'item',	
		},
		legend: {
			show:true,
			x:'right',
			y:'0',
			itemWidth:10,
			itemHeight:10,
			textStyle:{
				color:'#1bb4f6'
			},
			data:['一类','二类','三类','四类','五类']
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            axisLabel:{
	            	color: "#fff"
	            },
	            axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'#397cbc'
		            }
				},
				axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:false,
		            lineStyle:{
		            }
		        },
	            data : ['分类一','分类二','分类三','分类四','分类五','分类六','分类七']
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				name : '单位：万',
				min:0,
				max:1200,
				axisLabel : {
					formatter: '{value}',
					textStyle:{
						color:"#fff"
					}
				},
				axisLine:{
					lineStyle:{
						color:'#27b4c2'
					}
				},
				axisTick:{
	            	show:false,
	            },
				splitLine:{
					show:true,
					lineStyle:{
						color:'#2868a2',
						type :"dashed"
					}
				},
				nameTextStyle: {
                    fontSize: 10,
                    color:'white'
                }
			}
		],
		series : [
			{
				name:'一类',
				type:'line',
				symbol:'circle',
				symbolSize: 6,
				smooth:true,
	            itemStyle: {
			        normal: {
						color:'#fff000',
			            lineStyle: {
							color: "#fff000",
							width:1
			            },
			        }
				},
				markPoint:{
					itemStyle:{
						normal:{
							color:'red'
						}
					}
				},
				data:[400,200,280,150,440,190,590]
			},
			{
				name:'二类',
				type:'line',
				symbol:'circle',
				symbolSize: 6,
				smooth:true,
	            itemStyle: {
			        normal: {
			            color:'#00ccff',
			            lineStyle: {
							color: "#00ccff",
							width:1
			            },
			        }
				},
				data:[700,790,690,395,690,490,400]
			},
			{
				name:'三类',
				type:'line',
				symbol:'circle',
				symbolSize: 6,
				smooth:true,
	            itemStyle: {
			        normal: {
			            color: '#ed87e9',
			            lineStyle: {
							color: "#ed87e9",
							width:1
			            },
			        }
				},
				data:[810, 900,990,800,860,780,890]
			},
			{
				name:'四类',
				type:'line',
				symbol:'circle',
				symbolSize: 6,
				smooth:true,
	            itemStyle: {
			        normal: {
			            color:'#00ffcc',
			            lineStyle: {
							color: "#00ffcc",
							width:1
			            },
			        }
				},
				data:[1010,1000,1100,960,1040,820,880]
			},
			{
				name:'五类',
				type:'line',
				symbol:'circle',
				smooth:true,
				symbolSize: 6,
	            itemStyle: {
			        normal: {
			            color: '#ff6800',
			            lineStyle: {
							color: "#ff6800",
							width:1
			            },
			        }
				},
				data:[1195,1200,1195,1190,1200,1030,960]
			}
		]
	};
	return option;
}
function biao3(){
	option = {
		color: ['#8392aa'], 
		graphic:[{
			type:'text',
			left:'34%',
			top:'36%',
			style:{
				text:'60%',
				fill:'#fff',
				fontSize:13
			}
		},
		{
			type:'text',
			left:'41%',
			top:'50%',
			style:{
				text:'达成率',
				fill:'#000',
				font: 'normal 1.8em "Microsoft YaHei", sans-serif',
				fill:'#fff',
				fontSize:6,
				
			}
		}],
		series: [{
			name: 'Line 1',
			type: 'pie',
			clockWise: true,
			radius: ['53%', '63%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 60,
				itemStyle: {
					normal: {
						color: { // 完成的圆环的颜色
							colorStops: [{
								offset: 0,
								color: '#ffd000' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#ffaa00' // 100% 处的颜色
							}]
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}, {
				value: 20
			}]
		},
		{
			name: 'Line 1',
			type: 'pie',
			clockWise: true,
			radius: ['40%', '42%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 60,
				itemStyle: {
					normal: {
						color: "white",
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}]
		},
		{
			type: 'pie',
			clockWise: true,
			radius: ['48%', '68%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 1,
				name: '01',
				itemStyle: {
					normal: {
						color: { // 完成的圆环的颜色
							colorStops: [{
								offset: 0,
								color: '#fff' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#fff' // 100% 处的颜色
							}]
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}, {
				name: '02',
				value: 98,
				itemStyle: {
					normal: {
						color: 'transparent',
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				}
				
			}],
			hoverAnimation: false, 
			labelLine: {
				normal: {
					show: false,
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
		}
		]
	}
	return option;
}
function biao4(){
	
	option = {
		color: ['#8392aa'], 
		graphic:[{
			type:'text',
			left:'34%',
			top:'36%',
			style:{
				text:'60%',
				fill:'#fff',
				fontSize:13
			}
		},
		{
			type:'text',
			left:'41%',
			top:'50%',
			style:{
				text:'达成率',
				fill:'#000',
				font: 'normal 1.8em "Microsoft YaHei", sans-serif',
				fill:'#fff',
				fontSize:6,
				
			}
		}],
		series: [{
			name: 'Line 1',
			type: 'pie',
			clockWise: true,
			radius: ['53%', '63%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 60,
				itemStyle: {
					normal: {
						color: { // 完成的圆环的颜色
							colorStops: [{
								offset: 0,
								color: '#01e0fe' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#03cdfc' // 100% 处的颜色
							}]
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}, {
				value: 20
			}]
		},
		{
			name: 'Line 1',
			type: 'pie',
			clockWise: true,
			radius: ['40%', '42%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 60,
				itemStyle: {
					normal: {
						color: "white",
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}]
		},
		{
			type: 'pie',
			clockWise: true,
			radius: ['48%', '68%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 1,
				name: '01',
				itemStyle: {
					normal: {
						color: { // 完成的圆环的颜色
							colorStops: [{
								offset: 0,
								color: '#fff' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#fff' // 100% 处的颜色
							}]
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}, {
				name: '02',
				value: 98,
				itemStyle: {
					normal: {
						color: 'transparent',
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				}
				
			}],
			hoverAnimation: false, 
			labelLine: {
				normal: {
					show: false,
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
		}
		]
	}
	return option;
}
function biao5(){
	option = {
		color: ['#8392aa'], 
		graphic:[{
			type:'text',
			left:'34%',
			top:'36%',
			style:{
				text:'60%',
				fill:'#fff',
				fontSize:13
			}
		},
		{
			type:'text',
			left:'41%',
			top:'50%',
			style:{
				text:'达成率',
				fill:'#000',
				font: 'normal 1.8em "Microsoft YaHei", sans-serif',
				fill:'#fff',
				fontSize:6,
				
			}
		}],
		series: [{
			name: 'Line 1',
			type: 'pie',
			clockWise: true,
			radius: ['53%', '63%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 60,
				itemStyle: {
					normal: {
						color: { // 完成的圆环的颜色
							colorStops: [{
								offset: 0,
								color: '#fa6c2e' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#fb2c1b' // 100% 处的颜色
							}]
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}, {
				value: 20
			}]
		},
		{
			name: 'Line 1',
			type: 'pie',
			clockWise: true,
			radius: ['40%', '42%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 60,
				itemStyle: {
					normal: {
						color: "white",
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}]
		},
		{
			type: 'pie',
			clockWise: true,
			radius: ['48%', '68%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 1,
				name: '01',
				itemStyle: {
					normal: {
						color: { // 完成的圆环的颜色
							colorStops: [{
								offset: 0,
								color: '#fff' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#fff' // 100% 处的颜色
							}]
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}, {
				name: '02',
				value: 98,
				itemStyle: {
					normal: {
						color: 'transparent',
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				}
				
			}],
			hoverAnimation: false, 
			labelLine: {
				normal: {
					show: false,
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
		}
		]
	}
	return option;
}
function biao6(){
	option = {
		color: ['#8392aa'], 
		graphic:[{
			type:'text',
			left:'34%',
			top:'36%',
			style:{
				text:'60%',
				fill:'#fff',
				fontSize:13
			}
		},
		{
			type:'text',
			left:'41%',
			top:'50%',
			style:{
				text:'达成率',
				fill:'#000',
				font: 'normal 1.8em "Microsoft YaHei", sans-serif',
				fill:'#fff',
				fontSize:6,
				
			}
		}],
		series: [{
			name: 'Line 1',
			type: 'pie',
			clockWise: true,
			radius: ['53%', '63%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 60,
				itemStyle: {
					normal: {
						color: { // 完成的圆环的颜色
							colorStops: [{
								offset: 0,
								color: '#16efb1' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#14da8e' // 100% 处的颜色
							}]
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}, {
				value: 20
			}]
		},
		{
			name: 'Line 1',
			type: 'pie',
			clockWise: true,
			radius: ['40%', '42%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 60,
				itemStyle: {
					normal: {
						color: "white",
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}]
		},
		{
			type: 'pie',
			clockWise: true,
			radius: ['48%', '68%',],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false, 
			data: [{
				value: 1,
				name: '01',
				itemStyle: {
					normal: {
						color: { // 完成的圆环的颜色
							colorStops: [{
								offset: 0,
								color: '#fff' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#fff' // 100% 处的颜色
							}]
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					} 
				}
			}, {
				name: '02',
				value: 98,
				itemStyle: {
					normal: {
						color: 'transparent',
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				}
				
			}],
			hoverAnimation: false, 
			labelLine: {
				normal: {
					show: false,
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
		}
		]
	}
	return option;
}
function biao7(){
	const originName = '洛阳';
    const flyGeo = {
    	'洛阳': [112.460299, 34.62677],
        '西安': [108.946466, 34.347269],
        '兰州': [103.84044, 36.067321],
        '乌鲁木齐': [87.62444, 43.830763],
        '包头': [109.846544, 40.662929],
        '西宁': [101.78443, 36.623393],
        '银川': [106.258602, 38.487834],
        '成都': [104.081534, 30.655822],
        '重庆': [106.558434, 29.568996],
        '拉萨': [91.120789, 29.65005],
        '昆明': [102.852448, 24.873998],
        '贵阳': [106.636577, 26.653325],
        '太原': [112.534919, 37.873219],
        '武汉': [114.311582, 30.598467],
        '长沙': [112.945473, 28.234889],
        '南昌': [115.864589, 28.689455],
        '合肥': [117.233443, 31.826578],
        '杭州': [120.215503, 30.253087],
        '广州': [113.271431, 23.135336],
        '北京': [116.413384, 39.910925],
        '天津': [117.209523, 39.093668]
    };
    //飞线数据
    var flyVal = [
        [{name: '洛阳'}, {name: '洛阳', value: 100}],
        [{name: '洛阳'}, {name: '西安', value: 35}],
        [{name: '洛阳'}, {name: '兰州', value: 25}],
        [{name: '洛阳'}, {name: '乌鲁木齐', value: 55}],
        [{name: '洛阳'}, {name: '包头', value: 60}],
        [{name: '洛阳'}, {name: '西宁', value: 45}],
        [{name: '洛阳'}, {name: '银川', value: 35}],
        [{name: '洛阳'}, {name: '成都', value: 35}],
        [{name: '洛阳'}, {name: '重庆', value: 40}],
        [{name: '洛阳'}, {name: '拉萨', value: 45}],
        [{name: '洛阳'}, {name: '昆明', value: 50}],
        [{name: '洛阳'}, {name: '贵阳', value: 55}],
        [{name: '洛阳'}, {name: '太原', value: 60}],
        [{name: '洛阳'}, {name: '武汉', value: 65}],
        [{name: '洛阳'}, {name: '长沙', value: 70}],
        [{name: '洛阳'}, {name: '南昌', value: 75}],
        [{name: '洛阳'}, {name: '合肥', value: 80}],
        [{name: '洛阳'}, {name: '杭州', value: 85}],
        [{name: '洛阳'}, {name: '广州', value: 90}],
        [{name: '洛阳'}, {name: '北京', value: 95}],
        [{name: '洛阳'}, {name: '天津', value: 60}],
    ];
    //数据转换，转换后格式：[{fromName:'cityName', toName:'cityName', coords:[[lng, lat], [lng, lat]]}, {...}]
    const convertFlyData = function(data) {
        let res = [];
        for(let i=0;i<data.length;i++) {
            let dataItem = data[i];
            let toCoord = flyGeo[dataItem[0].name];
            let fromCoord = flyGeo[dataItem[1].name];
            if(fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[1].name, 
                    toName: dataItem[0].name, 
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };
    //报表配置
    const flySeries = [];
    [[originName, flyVal]].forEach(function(item, i) {
		flySeries.push({   
	        name: item[0],
	        type: 'lines',
	        zlevel: 1,
	        symbol: ['none', 'none'],
	        symbolSize: 0,
	        effect: { //特效线配置
	            show: true,
	            period: 5, //特效动画时间，单位s
	            trailLength: 0.1, //特效尾迹的长度，从0到1
	            symbol: 'arrow',
	            symbolSize: 5
	        },
	        lineStyle: {
	            normal: {
	                color: '#f19000',
	                width: 1,
	                opacity: 0.6,
	                curveness: 0.2 //线的平滑度
	            }
	        },
	        data: convertFlyData(item[1])
	    }, {
	        name: item[0],
	        type: 'effectScatter',
	        coordinateSystem: 'geo',
	        zlevel: 2,
	        rippleEffect: { //涟漪特效
	            period: 5, //特效动画时长 
	            scale: 4, //波纹的最大缩放比例
	            brushType: 'stroke' //波纹的绘制方式：stroke | fill
	        },
	        label: {
	            normal: {
	                show: false,
	                position: 'right',
	                formatter: '{b}'
	            }
	        },
	        symbol: 'circle',
	        symbolSize: function (val) {
	        	//根据某项数据值设置符号大小
	            return val[2] / 10; 
	        },
	        itemStyle: {
	            normal: {
	            	color: '#f19000'
	            }
	        },
	        data: item[1].map(function(dataItem) {
	            return {
	                name: dataItem[1].name,
	                value: flyGeo[dataItem[1].name].concat([dataItem[1].value])
	            };
	        })
	    }, { //与上层的点叠加
	    	name: item[0],
	        type: 'scatter',
	        coordinateSystem: 'geo',
	        zlevel: 3,
	        symbol: 'circle',
	        symbolSize: function (val) {
	        	//根据某项数据值设置符号大小
	            return val[2] / 15; 
	        },
	        itemStyle: {
	            normal: {
	            	color: '#f00'
	            }
	        },
	        data: item[1].map(function(dataItem) {
	            return {
	                name: dataItem[1].name,
	                value: flyGeo[dataItem[1].name].concat([dataItem[1].value])
	            };
	        })
	    });
    });

	//报表配置项
	const flyMapOpt = {
		title: {
			show: false,
			text: '地图飞线',
			x: 'center',
			textStyle: {
				color: '#fff'
			}
		},
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if(params.value) {
                    return params.name + ' : ' + params.value[2];
                }else {
                    return params.name;
                }
            }
        },
	    geo: {
	        map: 'china',
	        roam: false, //开启鼠标缩放和漫游
	        zoom: 1, //地图缩放级别
			selectedMode: false, //选中模式：single | multiple
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			layoutCenter: ['50%', '50%'], //设置后left/right/top/bottom等属性无效
			layoutSize: '130%', //保持地图宽高比
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        itemStyle: {
	            normal: {
	                areaColor: 'transparent',
	                borderWidth: 1.1,
	                borderColor: '#8af7ff'
	            },
	            emphasis: {
	                areaColor: '#069'
	            }
	        }
	    },
	    series: flySeries
	};
	return flyMapOpt;
}
function biao8(){
	option = {
		backgroundColor: 'transparent',
		series: [
			{
				type: 'gauge',
				name: '业务指标',
				radius:'90%',
				startAngle:'195',
				endAngle:'-15',
				splitNumber:'50',
				pointer:{
					show:false
				},
				detail: {
					offsetCenter:[0,-10],
					formatter:'{value}%',
					fontSize:"16"
				},
				textStyle:{
					color:"#fff"
				},
				data: [{value: 20.8,name:'同比3.4%'}],
				title: {
					show: true,
					offsetCenter: [0, '10'],
					textStyle: {
						color: '#fff',
						fontSize: 10
					}
				},
				axisLine:{
					show: true,
					lineStyle: {
						color:[[0, '#00ffff'], [0.65, '#00ffff'], [1, '#1b5588']],
						width: 10,
						opacity: 1
					}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					length:10,
					lineStyle: {
						color: '#00377a',
						width: 2,
						type: 'solid',
						opacity: 0.5
					},
				},
				axisLabel: {
					show: false
				}
			}
		]
	};
	return option;
}
function biao9(){
	option = {
		backgroundColor: 'transparent',
		series: [
			{
				type: 'gauge',
				name: '业务指标',
				radius:'90%',
				startAngle:'195',
				endAngle:'-15',
				splitNumber:'50',
				pointer:{
					show:false
				},
				detail: {
					offsetCenter:[0,-10],
					formatter:'{value}%',
					fontSize:"16"
				},
				textStyle:{
					color:"#fff"
				},
				data: [{value: 20.8,name:'同比3.4%'}],
				title: {
					show: true,
					offsetCenter: [0, '10'],
					textStyle: {
						color: '#fff',
						fontSize: 10
					}
				},
				axisLine:{
					show: true,
					lineStyle: {
						color:[[0, '#fff71c'], [0.65, '#fff71c'], [1, '#1b5588']],
						width: 10,
						opacity: 1
					}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					length:10,
					lineStyle: {
						color: '#00377a',
						width: 2,
						type: 'solid',
						opacity: 0.5
					},
				},
				axisLabel: {
					show: false
				}
			}
		]
	};
	return option;
}
function biao10(){
	option = {
		backgroundColor: 'transparent',
		series: [
			{
				type: 'gauge',
				name: '业务指标',
				radius:'90%',
				startAngle:'195',
				endAngle:'-15',
				splitNumber:'50',
				pointer:{
					show:false
				},
				detail: {
					offsetCenter:[0,-10],
					formatter:'{value}%',
					fontSize:"16"
				},
				textStyle:{
					color:"#fff"
				},
				data: [{value: 20.8,name:'同比3.4%'}],
				title: {
					show: true,
					offsetCenter: [0, '10'],
					textStyle: {
						color: '#fff',
						fontSize: 10
					}
				},
				axisLine:{
					show: true,
					lineStyle: {
						color:[[0, '#ff6800'], [0.65, '#ff6800'], [1, '#1b5588']],
						width: 10,
						opacity: 1
					}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					length:10,
					lineStyle: {
						color: '#00377a',
						width: 2,
						type: 'solid',
						opacity: 0.5
					},
				},
				axisLabel: {
					show: false
				}
			}
		]
	};
	return option;
}



