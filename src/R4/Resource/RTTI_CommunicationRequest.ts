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
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_CommunicationRequest_Payload,
  ICommunicationRequest_Payload,
} from './RTTI_CommunicationRequest_Payload';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {IDomainResource} from './IDomainResource';

export interface ICommunicationRequest extends IDomainResource {
  /**
   * This is a CommunicationRequest resource
   */
  resourceType: 'CommunicationRequest';

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
   * Business identifiers assigned to this communication request by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * A plan or proposal that is fulfilled in whole or in part by this request.
   */
  basedOn?: IReference[];

  /**
   * Completed or terminated request(s) whose function is taken by this new request.
   */
  replaces?: IReference[];

  /**
   * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.
   */
  groupIdentifier?: IIdentifier;

  /**
   * The status of the proposal or order.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Captures the reason for the current state of the CommunicationRequest.
   */
  statusReason?: ICodeableConcept;

  /**
   * The type of message to be sent such as alert, notification, reminder, instruction, etc.
   */
  category?: ICodeableConcept[];

  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   */
  priority?: string;

  /**
   * Extensions for priority
   */
  _priority?: IElement;

  /**
   * If true indicates that the CommunicationRequest is asking for the specified action to *not* occur.
   */
  doNotPerform?: boolean;

  /**
   * Extensions for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: ICodeableConcept[];

  /**
   * The patient or group that is the focus of this communication request.
   */
  subject?: IReference;

  /**
   * Other resources that pertain to this communication request and to which this communication request should be associated.
   */
  about?: IReference[];

  /**
   * The Encounter during which this CommunicationRequest was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  payload?: ICommunicationRequest_Payload[];

  /**
   * The time when this communication is to occur.
   */
  occurrenceDateTime?: string;

  /**
   * Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * The time when this communication is to occur.
   */
  occurrencePeriod?: IPeriod;

  /**
   * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
   */
  authoredOn?: string;

  /**
   * Extensions for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * The device, individual, or organization who initiated the request and has responsibility for its activation.
   */
  requester?: IReference;

  /**
   * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
   */
  recipient?: IReference[];

  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   */
  sender?: IReference;

  /**
   * Describes why the request is being made in coded or textual form.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this request.
   */
  reasonReference?: IReference[];

  /**
   * Comments made about the request by the requester, sender, recipient, subject or other participants.
   */
  note?: IAnnotation[];
}

export const RTTI_CommunicationRequest: t.Type<ICommunicationRequest> =
  t.recursion('ICommunicationRequest', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('CommunicationRequest'),
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
        identifier: t.array(RTTI_Identifier),
        basedOn: t.array(RTTI_Reference),
        replaces: t.array(RTTI_Reference),
        groupIdentifier: RTTI_Identifier,
        status: RTTI_code,
        _status: RTTI_Element,
        statusReason: RTTI_CodeableConcept,
        category: t.array(RTTI_CodeableConcept),
        priority: RTTI_code,
        _priority: RTTI_Element,
        doNotPerform: t.boolean,
        _doNotPerform: RTTI_Element,
        medium: t.array(RTTI_CodeableConcept),
        subject: RTTI_Reference,
        about: t.array(RTTI_Reference),
        encounter: RTTI_Reference,
        payload: t.array(RTTI_CommunicationRequest_Payload),
        occurrenceDateTime: t.string,
        _occurrenceDateTime: RTTI_Element,
        occurrencePeriod: RTTI_Period,
        authoredOn: RTTI_dateTime,
        _authoredOn: RTTI_Element,
        requester: RTTI_Reference,
        recipient: t.array(RTTI_Reference),
        sender: RTTI_Reference,
        reasonCode: t.array(RTTI_CodeableConcept),
        reasonReference: t.array(RTTI_Reference),
        note: t.array(RTTI_Annotation),
      }),
    ]),
  );
