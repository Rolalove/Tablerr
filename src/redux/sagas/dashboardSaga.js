import { put, delay } from 'redux-saga/effects';
import { setDashboardData } from '../reducers/dashboardReducer';

function generateMockData (){
    return{
        newTicket: Math.floor(Math.random() * 100),
        closedTicket: Math.floor(Math.random() * 50),
        newReplies: Math.floor(Math.random() * 20),
        followers: Math.floor(Math.random() * 300000),
        dailyEarnings: Math.floor(Math.random() * 1000),
        products: Math.floor(Math.random() * 1000),
        activityData: Array.from({ length: 10 }, () => Math.floor(Math.random() * 50)),
        donutData: [Math.floor(Math.random() * 40), Math.floor(Math.random() * 40)],
        donutDataTwo: [Math.floor(Math.random() * 40), Math.floor(Math.random() * 40), Math.floor(Math.random() * 40),Math.floor(Math.random() * 40)],
    }
}
function* simulateRealTimeData() {
    while (true) {
      const newData = generateMockData();
      yield put(setDashboardData(newData));
      yield delay(3000); // Update every 5 seconds
    }
  }
  
  export default simulateRealTimeData;