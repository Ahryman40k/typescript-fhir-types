import * as account_questionnaire from './samples/account-questionnaire.json';
import * as activityDefinition_questionnaire from './samples/activitydefinition-questionnaire.json';

import { RTTI_Questionnaire } from "../R4/Resource/RTTI_Questionnaire";


describe('Questionnaire', () => {

  test('should decode account-questionnaire.json', () => {
    const result = RTTI_Questionnaire.decode(account_questionnaire);
    expect(result._tag).toBe('Right');
  })

  test('should decode activitydefinition-questionnaire.json', () => {
    const result = RTTI_Questionnaire.decode(activityDefinition_questionnaire);
    expect(result._tag).toBe('Right');
  })

})
