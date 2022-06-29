import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { format } from 'prettier';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

  it('check for spy func',()=>{
    const el=fixture(html`<basic-details></basic-details>`);
    const spy=Sinon.spy(el,'_toDashboard');
    form.click();
    form.click();
    expect(spy.calledTwice).to.be.true;
  });
});
//mybranch
