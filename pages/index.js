import React from 'react';

export default () => (
  <div>
    <h1><mark style={{backgroundColor: 'var(--a)'}}>--a</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--a-muted-one)'}}>--a-muted-one</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--a-muted-two)'}}>--a-muted-two</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--b)'}}>--b</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--b-muted-one)'}}>--b-muted-one</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--b-muted-two)'}}>--b-muted-two</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--c)'}}>--c</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--c-muted-one)'}}>--c-muted-one</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--c-muted-two)'}}>--c-muted-two</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--d)'}}>--d</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--d-muted-one)'}}>--d-muted-one</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--d-muted-two)'}}>--d-muted-two</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--e)'}}>--e</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--e-muted-one)'}}>--e-muted-one</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--e-muted-two)'}}>--e-muted-two</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--black)', color: 'var(--white)'}}>--black</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--white)'}}>--white</mark></h1>
    <h1><mark style={{backgroundColor: 'var(--gray)'}}>--gray</mark></h1>
  </div>
);