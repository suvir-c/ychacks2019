const Promise = require('bluebird');
const expect = require('chai').expect;
const supertest = require('supertest-promised');
const find = require('lodash/find');
const app = require('../app');
const SurveyResponse = require('../models/SurveyResponse');
const agent = supertest(app);
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;

describe('POST /message', () => {
  beforeEach(() =>
    SurveyResponse.remove({}).then(() => console.log('### delete all')));

  it('returns a greeting and a question on first survey attempt', () =>
    agent
      .post('/message')
    .type('form')
    .send({
      From: '+15555555555',
      Body: 'Message body',
    })
    .expect('Content-Type', /text\/xml/)
    .expect(200)
    .expect((res) => {
        var doc = new dom().parseFromString(res.text);
        var MessageTxt = xpath.select("/Response/Message/text()", doc)[0].data;

        expect(MessageTxt).to
          .contain("Thank you for taking our survey! Please tell us your age.");
      }));

  it('returns a goodbye after the final step in the survey.', () => {
    function step1() {
      return agent
        .post('/message')
        .type('form')
        .send({
          From: '+15555555555',
          Body: 'Message body',
        })
        .expect('Content-Type', /text\/xml/)
        .expect(200)
        .end();
    }

    function step2() {
      return agent
        .post('/message')
        .type('form')
        .send({
          From: '+15555555555',
          Body: '33',
        })
        .expect('Content-Type', /text\/xml/)
        .expect(200)
        .expect(res => {
          let doc = new dom().parseFromString(res.text);
          let MessageTxt = xpath.select('/Response/Message/text()', doc)[0]
            .data;

          expect(MessageTxt).to.contain(
            .contain("Have you ever jump-kicked a lemur? Type \"yes\" or \"no\".");

          return;
        })
        .end();
    }

    function step3() {
      return agent
        .post('/message')
        .type('form')
        .send({
          From: '+15555555555',
          Body: 'yes',
        })
        .expect('Content-Type', /text\/xml/)
        .expect(200)
        .expect(res => {
          let doc = new dom().parseFromString(res.text);
          let MessageTxt = xpath.select('/Response/Message/text()', doc)[0]
            .data;

          expect(MessageTxt).to.contain(
            .contain("Who is your favorite Teenage Mutant Ninja Turtle and why?");
          return;
        })
        .end();
    }

    function step4() {
      return agent
        .post('/message')
        .type('form')
        .send({
          From: '+15555555555',
          Body: 'rafael',
        })
        .expect('Content-Type', /text\/xml/)
        .expect(200)
        .expect(res => {
          let doc = new dom().parseFromString(res.text);
          let MessageTxt = xpath.select('/Response/Message/text()', doc)[0]
            .data;

          expect(MessageTxt).to.contain(
            .contain("Thank you for taking this survey. Goodbye!");
          return;
        })
        .end();
    }

    const steps = [step1, step2, step3, step4];

    return Promise.each(steps, step => step());
  });
});
