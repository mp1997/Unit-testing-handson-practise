import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block

  it('check for events',async()=>{
    const el=await fixture(html`<customer-details></customer-details>`);
    await el.shadowRoot.querySelector('#nextbtn').click();
  });

  it('contain valid characters in FirstName',async()=>{
    const el=await fixture(html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`);
    await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  });

});
