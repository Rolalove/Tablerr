import React from "react";
import { useSelector } from "react-redux";

export default function MinicardDisplay() {
  const {
    newTicket,
    closedTicket,
    newReplies,
    followers,
    dailyEarnings,
    products,
  } = useSelector((state) => state.dashboard);

  return (
    <section className="flex flex-col  gap-y-6 w-full lg:flex-row lg:justify-between lg:gap-x-6">
      {/* New Ticket */}
      <div className="stat-item lg:w-48 bg-[#f0f9ff] p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-[#485057]">{newTicket}</h3>
        <p className="text-lg font-medium text-[#92969a]">New Tickets</p>
      </div>
      {/* Closed Today */}
      <div className="stat-item lg:w-48 bg-[#f0f9ff] p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-[#485057]">
          {closedTicket}
        </h3>
        <p className="text-lg font-medium text-[#92969a]">Closed Today</p>
      </div>
      {/* New Replies */}
      <div className="stat-item lg:w-48 bg-[#f0f9ff] p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-[#485057]">{newReplies}</h3>
        <p className="text-lg font-medium text-[#92969a]">New Replies</p>
      </div>
      {/* Followers */}
      <div className="stat-item lg:w-48 bg-[#f0f9ff] p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-[#485057]">{followers}k</h3>
        <p className="text-lg font-medium text-[#92969a]">Followers</p>
      </div>
      {/* Daily Earnings */}
      <div className="stat-item lg:w-48 bg-[#f0f9ff] p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-[#485057]">
          ${dailyEarnings}
        </h3>
        <p className="text-lg font-medium text-[#92969a]">Daily Earnings</p>
      </div>
      {/* Products */}
      <div className="stat-item lg:w-48 bg-[#f0f9ff] p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-[#485057]">{products}</h3>
        <p className="text-lg font-medium text-[#92969a]">Products</p>
      </div>
    </section>
  );
}
