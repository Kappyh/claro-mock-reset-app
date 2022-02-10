import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fireEvent } from '@testing-library/dom'

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

let dom;
let container;

describe('index', function () {
    beforeEach(()=>{
        dom = new JSDOM(html, { runScripts: 'dangerously' })
        container = dom.window.document.body
    });

    it('contains the qa mocks button',()=>{
        const button = container.querySelector('#QA-reset').innerHTML;
        expect(button).toContain('Reset QA Mock');
    });

    it('contains the other mocks button',()=>{
        const button = container.querySelector('#Others-reset').innerHTML;
        expect(button).toContain('Reset Others Mock');
    });

    it('spinner should appear after trigger qa mocks button', function () {
        const button = container.querySelector('#QA-reset');
        fireEvent.click(button);

        expect(container.querySelector('#spinner-feedback').innerHTML).toContain('Aguarde, os números estão sendo resetados');
    });

    it('spinner should appear after trigger other mocks button', function () {
        const button = container.querySelector('#Others-reset');
        fireEvent.click(button);

        expect(container.querySelector('#spinner-feedback').innerHTML).toContain('Aguarde, os números estão sendo resetados');
    });
});