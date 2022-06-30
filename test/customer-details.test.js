import { html, fixture, expect } from '@open-wc/testing';
import { localize } from '@lion/localize';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import Sinon from 'sinon';

describe('customer details', () => {
  // Write test cases inside this block

  it('check for events', async () => {
    const el = await fixture(html`<customer-details></customer-details>`);
    await el.shadowRoot.querySelector('#nextbtn').click();
  });

  it('contain valid characters in FirstName', async () => {
    const el = await fixture(
      html`<lion-input
        label="${localize.msg('change-language:firstname')}"
      ></lion-input>`
    );
    await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  });

  it('should contain valid characters in LastName', async () => {
    const el = await fixture(
      html`<lion-input
        label="${localize.msg('change-language:lastname')}"
      ></lion-input>`
    );
    await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  });

  it('should contain valid characters in Email', async () => {
    const el = await fixture(
      html`<lion-input-email
        label="${localize.msg('change-language:email')}"
      ></lion-input-email>`
    );
    await expect(el.label).to.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/); // + @[a-zA-Z0-9-] + (?:\.[a-zA-Z0-9-]+)*$/);
  });

  it('should contain valid characters in mobile', async () => {
    const el = await fixture(
      html`<lion-input
        label="${localize.msg('change-language:mobilenumber')}"
      ></lion-input>`
    );
    await expect(el.label).to.match(/6|7|8|9|/); // + @[a-zA-Z0-9-] + (?:\.[a-zA-Z0-9-]+)*$/);
  });

  it('checks for emi details', async () => {
    const el = await fixture(html`<customer-details></customer-details>`);
    await el.shadowRoot.querySelector('.backbg-btn-color').click();
  });
});
