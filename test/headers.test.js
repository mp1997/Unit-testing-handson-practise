import { localize } from '@lion/localize';
import '../../locale/inline-data.js';
import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';



describe('loan-header', () => {
  // Write test cases inside this block

  it('passes accessibility test For EN', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const val1=await el.shadowRoot.querySelector('button');
    await expect(val1).to.be.accessible();
 });
 
  it('passes accessibility test for NL', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const val2= await el.shadowRoot.querySelectorAll('button');
   await expect(val2).to.be.accessible();
  });

  
  it('checks for event handling on button en', async()=>{
    const el=await fixture(html`<loan-header></loan-header> `);
    await el.shadowRoot.querySelectorAll('button').click();
  });

  
  it('checks for event handling on button NL', async()=>{
    const el=await fixture(html`<loan-header></loan-header> `);
    await el.shadowRoot.querySelectorAll('button').click();
  
  });

  
 it('should pass convert language',async ()=>{
  const el = await fixture(html` <loan-header></loan-header> `);
  const text= await el.shadowRoot.querySelector('p').innerText;
  expect(text).to.equal('Apply Loan');
 });
});
 
