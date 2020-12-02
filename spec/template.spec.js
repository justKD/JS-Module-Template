import { template } from '../src/dist/template.js';

describe(`template.js`, () => {
  it(`should export an object with key:value property "name":"template"`, () => {
    expect(template).toHaveProperty('name', 'template');
  });
});
