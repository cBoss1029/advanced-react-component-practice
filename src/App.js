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
          <TopNav messages = {props.messages}/>
          {/*   </TopNav>   */}


            {/*   <SideNav>   */}
            <SideNav/>
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
                   <Comments comments = {props.newComments}/>
                    {/*   </Comments>   */}

                    {/*   <Tasks>   */}
                    <Tasks tasks = {props.newTasks}/>
                    {/*   </Tasks>   */}

                    {/*   <Orders>   */}
                    <Orders orders = {props.newOrders}/>
                    {/*   </Orders>   */}


                    {/*   <Tickets>   */}
                    <Tickets tickets = {props.tickets}/>
                    {/*   </Tickets>   */}




                </div>
                
                {/*   <AreaChart>   */}
                <AreaChart/>
                {/*   </AreaChart>   */}

                <div className="row">


                    {/*   <DonutChart>   */}
                    <DonutChart/>
                    {/*   </DonutChart>   */}


                    <div className="col-lg-4">
                        {/*   <TasksPanel>   */}
                        <TasksPanel tasks = {props.tasks}/>
                        {/*   </TasksPanel>   */}


                    </div>
                    <div className="col-lg-4">


                        {/*   </TransactionsPanel>   */}
                        <TransactionsPanel orders = {props.orders}/>
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
    taskItem: PropTypes.object.isRequired,
    dateTime: PropTypes.string.isRequired,
    newComments: PropTypes.number.isRequired,
    newOrders: PropTypes.number.isRequired,
    newTasks: PropTypes.number.isRequired,
    tickets: PropTypes.number.isRequired,
    orders: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired

};

export default App;
