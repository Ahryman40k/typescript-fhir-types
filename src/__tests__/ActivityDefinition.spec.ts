import * as zika_virus from './samples/activitydefinition-administer-zika-virus-exposure-assessment.json';
import * as example from './samples/activitydefinition-example.json';
import * as medicationorder from './samples/activitydefinition-medicationorder-example.json';
import * as order_serum_dengue from './samples/activitydefinition-order-serum-dengue-virus-igm.json';
import * as order_serum_zika from './samples/activitydefinition-order-serum-zika-dengue-virus-igm.json';
import * as predecessor from './samples/activitydefinition-predecessor-example.json';
import * as mosquito_prevention from './samples/activitydefinition-provide-mosquito-prevention-advice.json';
import * as servicerequest from './samples/activitydefinition-servicerequest-example.json';
import * as supplyrequest from './samples/activitydefinition-supplyrequest-example.json';



import { RTTI_ActivityDefinition } from '../R4/Resource/RTTI_ActivityDefinition';

describe('ActivityDefinition', () => {

// All wrong @see: https://github.com/Ahryman40k/typescript-fhir-types/issues/5
  /*
  test('should decode activitydefinition-administer-zika-virus-exposure-assessment.json', () => {
    const result = RTTI_ActivityDefinition.decode(zika_virus);
    expect(result._tag).toBe('Right');
  })

  test('should decode activitydefinition-example.json', () => {
    const result = RTTI_ActivityDefinition.decode(example);
    expect(result._tag).toBe('Right');
  })

  test('should decode activitydefinition-medicationorder-example.json', () => {
    const result = RTTI_ActivityDefinition.decode(medicationorder);
    expect(result._tag).toBe('Right');
  })

  test('should decode activitydefinition-order-serum-dengue-virus-igm.json', () => {
    const result = RTTI_ActivityDefinition.decode(order_serum_dengue);
    expect(result._tag).toBe('Right');
  })

  test('should decode activitydefinition-order-serum-zika-dengue-virus-igm.json', () => {
    const result = RTTI_ActivityDefinition.decode(order_serum_zika);
    expect(result._tag).toBe('Right');
  })

  test('should decode activitydefinition-predecessor-example.json', () => {
    const result = RTTI_ActivityDefinition.decode(predecessor);
    expect(result._tag).toBe('Right');
  })

  test('should decode activitydefinition-provide-mosquito-prevention-advice.json', () => {
    const result = RTTI_ActivityDefinition.decode(mosquito_prevention);
    expect(result._tag).toBe('Right');
  })

  test('should decode activitydefinition-sservicerequest-example.json', () => {
    const result = RTTI_ActivityDefinition.decode(servicerequest);
    expect(result._tag).toBe('Right');
  })
*/
  test('should decode activitydefinition-supplyrequest-example.json', () => {
    const result = RTTI_ActivityDefinition.decode(supplyrequest);
    expect(result._tag).toBe('Right');
  })

})
