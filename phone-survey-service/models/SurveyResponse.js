const mongoose = require('mongoose');
// Define survey response model schema
const SurveyResponseSchema = new mongoose.Schema(
  {
    // phone number of participant
    phone: String,

    // status of the participant's current survey response
    complete: {
      type: Boolean,
      default: false,
    },

    // record of answers
    responses: [mongoose.Schema.Types.Mixed],
  },
  {
    usePushEach: true,
  },
);

// For the given phone number and survey, advance the survey to the next
// question
SurveyResponseSchema.statics.advanceSurvey = function(args, cb) {
  const surveyData = args.survey;
  const phone = args.phone;
  const input = args.input;
  let surveyResponse;

  // Find current incomplete survey
  SurveyResponse.findOne(
    {
      phone,
      complete: false,
    },
    (err, doc) => {
      surveyResponse =
        doc ||
        new SurveyResponse({
          phone,
        });
      processInput();
    },
  );

  // fill in any answer to the current question, and determine next question
  // to ask
  function processInput() {
    // If we have input, use it to answer the current question
    const responseLength = surveyResponse.responses.length;
    const currentQuestion = surveyData[responseLength];

    // if there's a problem with the input, we can re-ask the same question
    function reask() {
      cb.call(surveyResponse, null, surveyResponse, responseLength);
    }

    // If we have no input, ask the current question again
    if (!input) return reask();

    // Otherwise use the input to answer the current question
    const questionResponse = {};
    if (currentQuestion.type === 'boolean') {
      // Anything other than '1' or 'yes' is a false
      const isTrue = input === '1' || input.toLowerCase() === 'yes';
      questionResponse.answer = isTrue;
    } else if (currentQuestion.type === 'number') {
      // Try and cast to a Number
      const num = Number(input);
      if (isNaN(num)) {
        // don't update the survey response, return the same question
        return reask();
      }
      questionResponse.answer = num;
    } else if (input.indexOf('http') === 0) {
      // input is a recording URL
      questionResponse.recordingUrl = input;
    } else {
      // otherwise store raw value
      questionResponse.answer = input;
    }

    // Save type from question
    questionResponse.type = currentQuestion.type;
    surveyResponse.responses.push(questionResponse);

    // If new responses length is the length of survey, mark as done
    if (surveyResponse.responses.length === surveyData.length) {
      surveyResponse.complete = true;
    }

    // Save response
    surveyResponse.save(err => {
      if (err) {
        console.log('some err: ', err);
        reask();
      } else {
        cb.call(surveyResponse, err, surveyResponse, responseLength + 1);
      }
    });
  }
};

// Export model
delete mongoose.models.SurveyResponse;
delete mongoose.modelSchemas.SurveyResponse;
var SurveyResponse = mongoose.model('SurveyResponse', SurveyResponseSchema);
module.exports = SurveyResponse;
