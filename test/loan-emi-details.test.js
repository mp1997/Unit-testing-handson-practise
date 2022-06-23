import { html, fixture, expect } from '@open-wc/testing';
import {stub} from
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block

  it('check for spy func',async ()=>{
    const el=await fixture(html`<loanemi-details></loanemi-details>`);
    const spy=Sinon.spy(el,'_toCustomer');
    form.click();
    form.click();
    expect(spy.calledTwice).to.be.true;
  });
});
