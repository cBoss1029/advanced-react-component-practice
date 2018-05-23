import React from "react";
import TopNav from "./components/TopNav";
import AreaChart from './components/AreaChart';
import Comments from './components/Comments';
import DateTime from './components/DateTime';
import DonutChart from './components/DonutChart';
import MessagePreview from './components/MessagePreview';
import Orders from './components/Orders';
import SideNav from './components/SideNav';
import TaskItem from './components/TaskItem';
import Tasks from './components/Tasks';
import TasksPanel from './components/TasksPanel';
import Tickets from './components/Tickets';
import TransactionRow from './components/TransactionRow';
import TransactionsPanel from './components/TransactionsPanel';
import PropTypes from "prop-types";

function App(props) {
 
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          {/*   <TopNav>   */}
          <TopNav />
          {/*   </TopNav>   */}


            {/*   <SideNav>   */}
            {/*   </SideNav>   */}
        </nav>

        <div id="page-wrapper">

            <div className="container-fluid">

                
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Dashboard <small>Statistics Overview</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row">

                   {/*   </Comments>   */}
                    {/*   </Comments>   */}

                    {/*   <Tasks>   */}
                    {/*   </Tasks>   */}

                    {/*   <Orders>   */}
                    {/*   </Orders>   */}


                    {/*   <Tickets>   */}
                    {/*   </Tickets>   */}




                </div>
                
                {/*   <AreaChart>   */}
                {/*   </AreaChart>   */}

                <div className="row">


                    {/*   <DonutChart>   */}
                    {/*   </DonutChart>   */}


                    <div className="col-lg-4">
                        {/*   <TasksPanel>   */}
                        {/*   </TasksPanel>   */}


                    </div>
                    <div className="col-lg-4">


                        {/*   </TransactionsPanel>   */}
                        {/*   </TransactionsPanel>   */}

                    </div>
                </div>
                

            </div>
            

        </div>
        

    </div>
    </div>

  );
}

App.propTypes = {

};

export default App;
