import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_Age, IAge} from './RTTI_Age';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_Count, ICount} from './RTTI_Count';
import {RTTI_Distance, IDistance} from './RTTI_Distance';
import {RTTI_Duration, IDuration} from './RTTI_Duration';
import {RTTI_HumanName, IHumanName} from './RTTI_HumanName';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_SampledData, ISampledData} from './RTTI_SampledData';
import {RTTI_Signature, ISignature} from './RTTI_Signature';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_Contributor, IContributor} from './RTTI_Contributor';
import {RTTI_DataRequirement, IDataRequirement} from './RTTI_DataRequirement';
import {RTTI_Expression, IExpression} from './RTTI_Expression';
import {
  RTTI_ParameterDefinition,
  IParameterDefinition,
} from './RTTI_ParameterDefinition';
import {RTTI_RelatedArtifact, IRelatedArtifact} from './RTTI_RelatedArtifact';
import {
  RTTI_TriggerDefinition,
  ITriggerDefinition,
} from './RTTI_TriggerDefinition';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_Dosage, IDosage} from './RTTI_Dosage';
export enum StructureMap_SourceListModeKind {
  _first = 'first',
  _notFirst = 'not_first',
  _last = 'last',
  _notLast = 'not_last',
  _onlyOne = 'only_one',
}
import {createEnumType} from '../../EnumType';

export interface IStructureMap_Source {
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
   * Type or variable this rule applies to.
   */
  context?: string;

  /**
   * Extensions for context
   */
  _context?: IElement;

  /**
   * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
   */
  min?: number;

  /**
   * Extensions for min
   */
  _min?: IElement;

  /**
   * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
   */
  max?: string;

  /**
   * Extensions for max
   */
  _max?: IElement;

  /**
   * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
   */
  type?: string;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueBase64Binary?: string;

  /**
   * Extensions for defaultValueBase64Binary
   */
  _defaultValueBase64Binary?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueBoolean?: boolean;

  /**
   * Extensions for defaultValueBoolean
   */
  _defaultValueBoolean?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCanonical?: string;

  /**
   * Extensions for defaultValueCanonical
   */
  _defaultValueCanonical?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCode?: string;

  /**
   * Extensions for defaultValueCode
   */
  _defaultValueCode?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDate?: string;

  /**
   * Extensions for defaultValueDate
   */
  _defaultValueDate?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDateTime?: string;

  /**
   * Extensions for defaultValueDateTime
   */
  _defaultValueDateTime?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDecimal?: number;

  /**
   * Extensions for defaultValueDecimal
   */
  _defaultValueDecimal?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueId?: string;

  /**
   * Extensions for defaultValueId
   */
  _defaultValueId?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueInstant?: string;

  /**
   * Extensions for defaultValueInstant
   */
  _defaultValueInstant?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueInteger?: number;

  /**
   * Extensions for defaultValueInteger
   */
  _defaultValueInteger?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueMarkdown?: string;

  /**
   * Extensions for defaultValueMarkdown
   */
  _defaultValueMarkdown?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueOid?: string;

  /**
   * Extensions for defaultValueOid
   */
  _defaultValueOid?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValuePositiveInt?: number;

  /**
   * Extensions for defaultValuePositiveInt
   */
  _defaultValuePositiveInt?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueString?: string;

  /**
   * Extensions for defaultValueString
   */
  _defaultValueString?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueTime?: string;

  /**
   * Extensions for defaultValueTime
   */
  _defaultValueTime?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUnsignedInt?: number;

  /**
   * Extensions for defaultValueUnsignedInt
   */
  _defaultValueUnsignedInt?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUri?: string;

  /**
   * Extensions for defaultValueUri
   */
  _defaultValueUri?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUrl?: string;

  /**
   * Extensions for defaultValueUrl
   */
  _defaultValueUrl?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUuid?: string;

  /**
   * Extensions for defaultValueUuid
   */
  _defaultValueUuid?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAddress?: IAddress;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAge?: IAge;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAnnotation?: IAnnotation;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAttachment?: IAttachment;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCodeableConcept?: ICodeableConcept;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCoding?: ICoding;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueContactPoint?: IContactPoint;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCount?: ICount;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDistance?: IDistance;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDuration?: IDuration;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueHumanName?: IHumanName;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueIdentifier?: IIdentifier;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueMoney?: IMoney;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValuePeriod?: IPeriod;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueQuantity?: IQuantity;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueRange?: IRange;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueRatio?: IRatio;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueReference?: IReference;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueSampledData?: ISampledData;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueSignature?: ISignature;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueTiming?: ITiming;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueContactDetail?: IContactDetail;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueContributor?: IContributor;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDataRequirement?: IDataRequirement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueExpression?: IExpression;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueParameterDefinition?: IParameterDefinition;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueRelatedArtifact?: IRelatedArtifact;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueTriggerDefinition?: ITriggerDefinition;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUsageContext?: IUsageContext;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDosage?: IDosage;

  /**
   * Optional field for this source.
   */
  element?: string;

  /**
   * Extensions for element
   */
  _element?: IElement;

  /**
   * How to handle the list mode for this element.
   */
  listMode?: StructureMap_SourceListModeKind;

  /**
   * Extensions for listMode
   */
  _listMode?: IElement;

  /**
   * Named context for field, if a field is specified.
   */
  variable?: string;

  /**
   * Extensions for variable
   */
  _variable?: IElement;

  /**
   * FHIRPath expression  - must be true or the rule does not apply.
   */
  condition?: string;

  /**
   * Extensions for condition
   */
  _condition?: IElement;

  /**
   * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
   */
  check?: string;

  /**
   * Extensions for check
   */
  _check?: IElement;

  /**
   * A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found.
   */
  logMessage?: string;

  /**
   * Extensions for logMessage
   */
  _logMessage?: IElement;
}

export const RTTI_StructureMap_Source: t.Type<IStructureMap_Source> =
  t.recursion('IStructureMap_Source', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      context: RTTI_id,
      _context: RTTI_Element,
      min: RTTI_integer,
      _min: RTTI_Element,
      max: t.string,
      _max: RTTI_Element,
      type: t.string,
      _type: RTTI_Element,
      defaultValueBase64Binary: t.string,
      _defaultValueBase64Binary: RTTI_Element,
      defaultValueBoolean: t.boolean,
      _defaultValueBoolean: RTTI_Element,
      defaultValueCanonical: t.string,
      _defaultValueCanonical: RTTI_Element,
      defaultValueCode: t.string,
      _defaultValueCode: RTTI_Element,
      defaultValueDate: t.string,
      _defaultValueDate: RTTI_Element,
      defaultValueDateTime: t.string,
      _defaultValueDateTime: RTTI_Element,
      defaultValueDecimal: t.number,
      _defaultValueDecimal: RTTI_Element,
      defaultValueId: t.string,
      _defaultValueId: RTTI_Element,
      defaultValueInstant: t.string,
      _defaultValueInstant: RTTI_Element,
      defaultValueInteger: t.number,
      _defaultValueInteger: RTTI_Element,
      defaultValueMarkdown: t.string,
      _defaultValueMarkdown: RTTI_Element,
      defaultValueOid: t.string,
      _defaultValueOid: RTTI_Element,
      defaultValuePositiveInt: t.number,
      _defaultValuePositiveInt: RTTI_Element,
      defaultValueString: t.string,
      _defaultValueString: RTTI_Element,
      defaultValueTime: t.string,
      _defaultValueTime: RTTI_Element,
      defaultValueUnsignedInt: t.number,
      _defaultValueUnsignedInt: RTTI_Element,
      defaultValueUri: t.string,
      _defaultValueUri: RTTI_Element,
      defaultValueUrl: t.string,
      _defaultValueUrl: RTTI_Element,
      defaultValueUuid: t.string,
      _defaultValueUuid: RTTI_Element,
      defaultValueAddress: RTTI_Address,
      defaultValueAge: RTTI_Age,
      defaultValueAnnotation: RTTI_Annotation,
      defaultValueAttachment: RTTI_Attachment,
      defaultValueCodeableConcept: RTTI_CodeableConcept,
      defaultValueCoding: RTTI_Coding,
      defaultValueContactPoint: RTTI_ContactPoint,
      defaultValueCount: RTTI_Count,
      defaultValueDistance: RTTI_Distance,
      defaultValueDuration: RTTI_Duration,
      defaultValueHumanName: RTTI_HumanName,
      defaultValueIdentifier: RTTI_Identifier,
      defaultValueMoney: RTTI_Money,
      defaultValuePeriod: RTTI_Period,
      defaultValueQuantity: RTTI_Quantity,
      defaultValueRange: RTTI_Range,
      defaultValueRatio: RTTI_Ratio,
      defaultValueReference: RTTI_Reference,
      defaultValueSampledData: RTTI_SampledData,
      defaultValueSignature: RTTI_Signature,
      defaultValueTiming: RTTI_Timing,
      defaultValueContactDetail: RTTI_ContactDetail,
      defaultValueContributor: RTTI_Contributor,
      defaultValueDataRequirement: RTTI_DataRequirement,
      defaultValueExpression: RTTI_Expression,
      defaultValueParameterDefinition: RTTI_ParameterDefinition,
      defaultValueRelatedArtifact: RTTI_RelatedArtifact,
      defaultValueTriggerDefinition: RTTI_TriggerDefinition,
      defaultValueUsageContext: RTTI_UsageContext,
      defaultValueDosage: RTTI_Dosage,
      element: t.string,
      _element: RTTI_Element,
      listMode: createEnumType<StructureMap_SourceListModeKind>(
        StructureMap_SourceListModeKind,
        'StructureMap_SourceListModeKind',
      ),
      _listMode: RTTI_Element,
      variable: RTTI_id,
      _variable: RTTI_Element,
      condition: t.string,
      _condition: RTTI_Element,
      check: t.string,
      _check: RTTI_Element,
      logMessage: t.string,
      _logMessage: RTTI_Element,
    }),
  );
