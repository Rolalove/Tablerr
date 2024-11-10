
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';


export default function Layout() {
  const location = useLocation();
  const isSignIn = location.pathname === '/login';

  return (
      <div className="container flex md:h-[80vh] md:w-[80%] items-center mx-auto justify-center shadow-md mt-10">
          {/* Left Section - Branding */}
          <div className="hidden lg:flex  lg:justify-center lg:w-1/2 bg-blue-500 text-white flex-col h-[80vh] px-12">
              <div>
                  <div className="">
                      <h1 className="text-4xl font-bold mb-6">
                          {isSignIn ? 'Welcome back!' : 'Join our community'}
                      </h1>
                      <p className="text-lg text-white/80 max-w-md mb-10">
                          {isSignIn
                              ? 'Transform your business with our powerful dashboard solutions. Monitor, analyze, and grow.'
                              : 'Create an account to access powerful tools, real-time analytics, and comprehensive insights.'}
                      </p>
                  </div>
              </div>

              <div className="space-y-6">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2v20M2 12h20" />
                          </svg>
                      </div>
                      <div>
                          <h3 className="font-semibold">Real-time Analytics</h3>
                          <p className="text-white/70">Monitor your metrics instantly</p>
                      </div>
                  </div>

                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 6v6l4 2" />
                          </svg>
                      </div>
                      <div>
                          <h3 className="font-semibold">24/7 Support</h3>
                          <p className="text-white/70">Always here to help you</p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Right Section - Form */}
          <div className=" px-8 flex-1 flex items-center justify-center py-8">
              <div className="w-full max-w-md  ">
                  <Outlet />
              </div>
          </div>
      </div>
  )
}