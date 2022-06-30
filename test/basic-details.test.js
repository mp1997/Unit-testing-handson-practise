import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

  it('check for spy func', () => {
    const el = fixture(html`<basic-details></basic-details>`);
    const spy = Sinon.spy(el, '_toDashboard');
    form.click();
    expect(spy.calledOnce).to.be.true;
  });
});
//mybranch
