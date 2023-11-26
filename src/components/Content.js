import React from 'react'
import { Outlet, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Layout, Menu, PageHeader } from "antd";
const { Content } = Layout;

function Content() {
    const location = useLocation();
    const [pathname, setPathname] = useState("Dashboard");
  
    useEffect(() => {
      setPathname(capitalize(location.pathname.replace("/", "")));
    }, [location]);
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/sign-in" element={<Login />} />
      <Route
        path="/"
        element={<PrivateRoute><Dashboard /></PrivateRoute>}
      />
      <Route
        path="/campaign"
        element={<PrivateRoute><Campaign /></PrivateRoute>}
      />
      <Route
        path="/campaigns/view/:id"
        element={<PrivateRoute><CallFlow /></PrivateRoute>}
      />
      <Route
        path="/callflow"
        element={<PrivateRoute><CallFlow /></PrivateRoute>}
      />
      <Route
        path="/settings"
        element={<PrivateRoute><Settings /></PrivateRoute>}
      />
      <Route
        path="/queue"
        element={<PrivateRoute><QueueMonitor /></PrivateRoute>}
      />
      <Route
        path="/campaign/add-campaign"
        element={<PrivateRoute><AddCampaign /></PrivateRoute>}
      />
      <Route
        path="/campaign/edit-campaign/:id"
        element={<PrivateRoute><EditCampaign /></PrivateRoute>}
      />
      <Route
        path="/cdr-reports"
        element={<PrivateRoute><CdrReport /></PrivateRoute>}
      />
      <Route
        path="/overall-reports"
        element={<PrivateRoute><OverallReport /></PrivateRoute>}
      />
      <Route
        path="/report-filter"
        element={<PrivateRoute><ReportFilter /></PrivateRoute>}
      />
      <Route
        path="/recordings"
        element={<PrivateRoute><Recordings /></PrivateRoute>}
      />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
    </div>
  )
}
function PrivateRoute({ children, ...rest }) {

    const [path] = useState("/sign-in");
    return (
      <Route
        {...rest}
        render={({ location }) =>
        user.loggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: path,
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
  
export default Content

