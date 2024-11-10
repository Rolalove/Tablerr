import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    newTicket: 0,
    closedTicket: 0,
    newReplies: 0,
    followers: 0,
    dailyEarnings: 0,
    products: 0,
    activityData: [],
    donutData: [],
    donutDataTwo: [],
  },
  reducers: {
    setDashboardData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { setDashboardData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
