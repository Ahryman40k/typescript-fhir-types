import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Expression, IExpression} from './RTTI_Expression';
import {RTTI_DataRequirement, IDataRequirement} from './RTTI_DataRequirement';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Duration, IDuration} from './RTTI_Duration';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
export enum ResearchElementDefinition_CharacteristicStudyEffectiveGroupMeasureKind {
  _mean = 'mean',
  _median = 'median',
  _meanOfMean = 'mean-of-mean',
  _meanOfMedian = 'mean-of-median',
  _medianOfMean = 'median-of-mean',
  _medianOfMedian = 'median-of-median',
}
export enum ResearchElementDefinition_CharacteristicParticipantEffectiveGroupMeasureKind {
  _mean = 'mean',
  _median = 'median',
  _meanOfMean = 'mean-of-mean',
  _meanOfMedian = 'mean-of-median',
  _medianOfMean = 'median-of-mean',
  _medianOfMedian = 'median-of-median',
}
import {createEnumType} from '../../EnumType';

export interface IResearchElementDefinition_Characteristic {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCodeableConcept?: ICodeableConcept;

  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCanonical?: string;

  /**
   * Extensions for definitionCanonical
   */
  _definitionCanonical?: IElement;

  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionExpression?: IExpression;

  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionDataRequirement?: IDataRequirement;

  /**
   * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   */
  usageContext?: IUsageContext[];

  /**
   * When true, members with this characteristic are excluded from the element.
   */
  exclude?: boolean;

  /**
   * Extensions for exclude
   */
  _exclude?: IElement;

  /**
   * Specifies the UCUM unit for the outcome.
   */
  unitOfMeasure?: ICodeableConcept;

  /**
   * A narrative description of the time period the study covers.
   */
  studyEffectiveDescription?: string;

  /**
   * Extensions for studyEffectiveDescription
   */
  _studyEffectiveDescription?: IElement;

  /**
   * Indicates what effective period the study covers.
   */
  studyEffectiveDateTime?: string;

  /**
   * Extensions for studyEffectiveDateTime
   */
  _studyEffectiveDateTime?: IElement;

  /**
   * Indicates what effective period the study covers.
   */
  studyEffectivePeriod?: IPeriod;

  /**
   * Indicates what effective period the study covers.
   */
  studyEffectiveDuration?: IDuration;

  /**
   * Indicates what effective period the study covers.
   */
  studyEffectiveTiming?: ITiming;

  /**
   * Indicates duration from the study initiation.
   */
  studyEffectiveTimeFromStart?: IDuration;

  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  studyEffectiveGroupMeasure?: ResearchElementDefinition_CharacteristicStudyEffectiveGroupMeasureKind;

  /**
   * Extensions for studyEffectiveGroupMeasure
   */
  _studyEffectiveGroupMeasure?: IElement;

  /**
   * A narrative description of the time period the study covers.
   */
  participantEffectiveDescription?: string;

  /**
   * Extensions for participantEffectiveDescription
   */
  _participantEffectiveDescription?: IElement;

  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDateTime?: string;

  /**
   * Extensions for participantEffectiveDateTime
   */
  _participantEffectiveDateTime?: IElement;

  /**
   * Indicates what effective period the study covers.
   */
  participantEffectivePeriod?: IPeriod;

  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDuration?: IDuration;

  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveTiming?: ITiming;

  /**
   * Indicates duration from the participant's study entry.
   */
  participantEffectiveTimeFromStart?: IDuration;

  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  participantEffectiveGroupMeasure?: ResearchElementDefinition_CharacteristicParticipantEffectiveGroupMeasureKind;

  /**
   * Extensions for participantEffectiveGroupMeasure
   */
  _participantEffectiveGroupMeasure?: IElement;
}

export const RTTI_ResearchElementDefinition_Characteristic: t.Type<IResearchElementDefinition_Characteristic> =
  t.recursion('IResearchElementDefinition_Characteristic', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      definitionCodeableConcept: RTTI_CodeableConcept,
      definitionCanonical: t.string,
      _definitionCanonical: RTTI_Element,
      definitionExpression: RTTI_Expression,
      definitionDataRequirement: RTTI_DataRequirement,
      usageContext: t.array(RTTI_UsageContext),
      exclude: t.boolean,
      _exclude: RTTI_Element,
      unitOfMeasure: RTTI_CodeableConcept,
      studyEffectiveDescription: t.string,
      _studyEffectiveDescription: RTTI_Element,
      studyEffectiveDateTime: t.string,
      _studyEffectiveDateTime: RTTI_Element,
      studyEffectivePeriod: RTTI_Period,
      studyEffectiveDuration: RTTI_Duration,
      studyEffectiveTiming: RTTI_Timing,
      studyEffectiveTimeFromStart: RTTI_Duration,
      studyEffectiveGroupMeasure:
        createEnumType<ResearchElementDefinition_CharacteristicStudyEffectiveGroupMeasureKind>(
          ResearchElementDefinition_CharacteristicStudyEffectiveGroupMeasureKind,
          'ResearchElementDefinition_CharacteristicStudyEffectiveGroupMeasureKind',
        ),
      _studyEffectiveGroupMeasure: RTTI_Element,
      participantEffectiveDescription: t.string,
      _participantEffectiveDescription: RTTI_Element,
      participantEffectiveDateTime: t.string,
      _participantEffectiveDateTime: RTTI_Element,
      participantEffectivePeriod: RTTI_Period,
      participantEffectiveDuration: RTTI_Duration,
      participantEffectiveTiming: RTTI_Timing,
      participantEffectiveTimeFromStart: RTTI_Duration,
      participantEffectiveGroupMeasure:
        createEnumType<ResearchElementDefinition_CharacteristicParticipantEffectiveGroupMeasureKind>(
          ResearchElementDefinition_CharacteristicParticipantEffectiveGroupMeasureKind,
          'ResearchElementDefinition_CharacteristicParticipantEffectiveGroupMeasureKind',
        ),
      _participantEffectiveGroupMeasure: RTTI_Element,
    }),
  );
