import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Forms from './components/Forms'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import Hero from './components/Hero';
import ErrorBoundray from './components/ErrorBoundray';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';



function App() {
  return (
    <div className="App">
      {/* <PostForm></PostForm> */}
      {/* <PostList></PostList> */}
      {/* <UserProvider value="omkar">
      <ComponentC />
      </UserProvider> */}
      {/* <CounterTwo render={(count, incrementChange) => <ClickCounterTwo count={count} incrementChange={incrementChange}></ClickCounterTwo>}></CounterTwo>
      <CounterTwo render={(count, incrementChange)=> <HoverCounterTwo count={count} incrementChange={incrementChange}></HoverCounterTwo> }></CounterTwo> */}
      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User render = { (isLoggedIn) => isLoggedIn? "omkar" : " "}> </User> */}
      {/* <ClickCounter name ="omkar"></ClickCounter>
      <HoverCounter></HoverCounter> */}
      {/* <ErrorBoundray>
      <Hero heroName="batman"></Hero>
      </ErrorBoundray>
      <ErrorBoundray>
      <Hero heroName="perman"></Hero>
      </ErrorBoundray>
      <ErrorBoundray>
      <Hero heroName='joker'></Hero>
      </ErrorBoundray> */}
      {/* <FocusInput></FocusInput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <ParentComp></ParentComp> */}
      {/* <Table></Table> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <Forms></Forms> */}
      {/* <Inline></Inline> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Stylesheet primary ={true}></Stylesheet> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <Greet name="xyz" heroName="fnhsgj">Learnning react</Greet>
      <Greet name="omi" heroName="fngj"/>
      <Welcome name="fhnf"></Welcome> */}
      {/* <Hello></Hello>
      <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
    </div>
  );
}

export default App;
