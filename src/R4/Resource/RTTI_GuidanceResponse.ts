import * as t from 'io-ts';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_DataRequirement, IDataRequirement} from './RTTI_DataRequirement';
export enum GuidanceResponseStatusKind {
  _success = 'success',
  _dataRequested = 'data-requested',
  _dataRequired = 'data-required',
  _inProgress = 'in-progress',
  _failure = 'failure',
  _enteredInError = 'entered-in-error',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface IGuidanceResponse extends IDomainResource {
  /**
   * This is a GuidanceResponse resource
   */
  resourceType: 'GuidanceResponse';

  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  meta?: IMeta;

  /**
   * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * Extensions for implicitRules
   */
  _implicitRules?: IElement;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: INarrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
   */
  contained?: IResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
   */
  requestIdentifier?: IIdentifier;

  /**
   * Allows a service to provide  unique, business identifiers for the response.
   */
  identifier?: IIdentifier[];

  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleUri?: string;

  /**
   * Extensions for moduleUri
   */
  _moduleUri?: IElement;

  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleCanonical?: string;

  /**
   * Extensions for moduleCanonical
   */
  _moduleCanonical?: IElement;

  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleCodeableConcept?: ICodeableConcept;

  /**
   * The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.
   */
  status?: GuidanceResponseStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * The patient for which the request was processed.
   */
  subject?: IReference;

  /**
   * The encounter during which this response was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * Indicates when the guidance response was processed.
   */
  occurrenceDateTime?: string;

  /**
   * Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * Provides a reference to the device that performed the guidance.
   */
  performer?: IReference;

  /**
   * Describes the reason for the guidance response in coded or textual form.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
   */
  reasonReference?: IReference[];

  /**
   * Provides a mechanism to communicate additional information about the response.
   */
  note?: IAnnotation[];

  /**
   * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
   */
  evaluationMessage?: IReference[];

  /**
   * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
   */
  outputParameters?: IReference;

  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  result?: IReference;

  /**
   * If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
   */
  dataRequirement?: IDataRequirement[];
}

export const RTTI_GuidanceResponse: t.Type<IGuidanceResponse> = t.recursion(
  'IGuidanceResponse',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('GuidanceResponse'),
      }),
      t.partial({
        id: RTTI_id,
        meta: RTTI_Meta,
        implicitRules: RTTI_uri,
        _implicitRules: RTTI_Element,
        language: RTTI_code,
        _language: RTTI_Element,
        text: RTTI_Narrative,
        contained: t.array(RTTI_ResourceList),
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        requestIdentifier: RTTI_Identifier,
        identifier: t.array(RTTI_Identifier),
        moduleUri: t.string,
        _moduleUri: RTTI_Element,
        moduleCanonical: t.string,
        _moduleCanonical: RTTI_Element,
        moduleCodeableConcept: RTTI_CodeableConcept,
        status: createEnumType<GuidanceResponseStatusKind>(
          GuidanceResponseStatusKind,
          'GuidanceResponseStatusKind',
        ),
        _status: RTTI_Element,
        subject: RTTI_Reference,
        encounter: RTTI_Reference,
        occurrenceDateTime: RTTI_dateTime,
        _occurrenceDateTime: RTTI_Element,
        performer: RTTI_Reference,
        reasonCode: t.array(RTTI_CodeableConcept),
        reasonReference: t.array(RTTI_Reference),
        note: t.array(RTTI_Annotation),
        evaluationMessage: t.array(RTTI_Reference),
        outputParameters: RTTI_Reference,
        result: RTTI_Reference,
        dataRequirement: t.array(RTTI_DataRequirement),
      }),
    ]),
);
