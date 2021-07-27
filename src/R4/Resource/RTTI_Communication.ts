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
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {
  RTTI_Communication_Payload,
  ICommunication_Payload,
} from './RTTI_Communication_Payload';
export enum CommunicationStatusKind {
  _preparation = 'preparation',
  _inProgress = 'in-progress',
  _notDone = 'not-done',
  _onHold = 'on-hold',
  _stopped = 'stopped',
  _completed = 'completed',
  _enteredInError = 'entered-in-error',
  _unknown = 'unknown',
}
import {createEnumType} from '../../EnumType';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {IDomainResource} from './IDomainResource';

export interface ICommunication extends IDomainResource {
  /**
   * This is a Communication resource
   */
  resourceType: 'Communication';

  /**
   * The status of the transmission.
   */
  status: CommunicationStatusKind;

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
   * Business identifiers assigned to this communication by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
   */
  instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
   */
  instantiatesUri?: string[];

  /**
   * Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * An order, proposal or plan fulfilled in whole or in part by this Communication.
   */
  basedOn?: IReference[];

  /**
   * Part of this action.
   */
  partOf?: IReference[];

  /**
   * Prior communication that this communication is in response to.
   */
  inResponseTo?: IReference[];

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Captures the reason for the current state of the Communication.
   */
  statusReason?: ICodeableConcept;

  /**
   * The type of message conveyed such as alert, notification, reminder, instruction, etc.
   */
  category?: ICodeableConcept[];

  /**
   * Characterizes how quickly the planned or in progress communication must be addressed. Includes concepts such as stat, urgent, routine.
   */
  priority?: string;

  /**
   * Extensions for priority
   */
  _priority?: IElement;

  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: ICodeableConcept[];

  /**
   * The patient or group that was the focus of this communication.
   */
  subject?: IReference;

  /**
   * Description of the purpose/content, similar to a subject line in an email.
   */
  topic?: ICodeableConcept;

  /**
   * Other resources that pertain to this communication and to which this communication should be associated.
   */
  about?: IReference[];

  /**
   * The Encounter during which this Communication was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * The time when this communication was sent.
   */
  sent?: string;

  /**
   * Extensions for sent
   */
  _sent?: IElement;

  /**
   * The time when this communication arrived at the destination.
   */
  received?: string;

  /**
   * Extensions for received
   */
  _received?: IElement;

  /**
   * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).
   */
  recipient?: IReference[];

  /**
   * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
   */
  sender?: IReference;

  /**
   * The reason or justification for the communication.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this communication.
   */
  reasonReference?: IReference[];

  /**
   * Text, attachment(s), or resource(s) that was communicated to the recipient.
   */
  payload?: ICommunication_Payload[];

  /**
   * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
   */
  note?: IAnnotation[];
}

export const RTTI_Communication: t.Type<ICommunication> = t.recursion(
  'ICommunication',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('Communication'),
        status: createEnumType<CommunicationStatusKind>(
          CommunicationStatusKind,
          'CommunicationStatusKind',
        ),
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
        instantiatesCanonical: t.array(RTTI_canonical),
        instantiatesUri: t.array(RTTI_uri),
        _instantiatesUri: t.array(RTTI_Element),
        basedOn: t.array(RTTI_Reference),
        partOf: t.array(RTTI_Reference),
        inResponseTo: t.array(RTTI_Reference),
        _status: RTTI_Element,
        statusReason: RTTI_CodeableConcept,
        category: t.array(RTTI_CodeableConcept),
        priority: RTTI_code,
        _priority: RTTI_Element,
        medium: t.array(RTTI_CodeableConcept),
        subject: RTTI_Reference,
        topic: RTTI_CodeableConcept,
        about: t.array(RTTI_Reference),
        encounter: RTTI_Reference,
        sent: RTTI_dateTime,
        _sent: RTTI_Element,
        received: RTTI_dateTime,
        _received: RTTI_Element,
        recipient: t.array(RTTI_Reference),
        sender: RTTI_Reference,
        reasonCode: t.array(RTTI_CodeableConcept),
        reasonReference: t.array(RTTI_Reference),
        payload: t.array(RTTI_Communication_Payload),
        note: t.array(RTTI_Annotation),
      }),
    ]),
);
